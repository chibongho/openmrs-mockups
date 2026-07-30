/* Narrator — a reusable guided-tour engine for design-tool mockups.
 *
 * An intro.js-style tour: a spotlight cut out of a dimming overlay, a tooltip
 * with Back / Next, and steps that can drive the mockup themselves (clicking
 * buttons, switching modes, opening modals) so each piece of narration lands on
 * the state it describes. Self-contained — no external CSS or JS.
 *
 * Pair it with a per-mockup script that supplies the steps:
 *
 *   <script src="./narrator.js" defer></script>
 *   <script src="./narration.js" defer></script>   <!-- calls Narrator.init -->
 *
 * Elements are addressed by "hook": a short name resolved to
 * `<root> [data-nar="<hook>"]` unless `selectors` overrides it. Add
 * data-nar attributes to the mockup template, and the tour can point at things
 * without depending on inline styles or DOM shape.
 *
 * Narrator.init(config) — every field but `steps` is optional:
 *
 *   steps      Array of steps (see below). Required.
 *   root       Scope for all hook lookups. Default '#dc-root', the element the
 *              dc-runtime renders into. Scoping matters: before the mockup
 *              mounts, its un-rendered template is still in the document and
 *              would match hooks with dead elements.
 *   trigger    Hook of the button that starts the tour. Default 'start'. Bound
 *              by delegation, so it survives React re-rendering the button.
 *   ready      Hook whose appearance means the mockup has rendered. Defaults to
 *              `trigger`.
 *   selectors  { hook: 'css selector' } for elements without a data-nar hook,
 *              e.g. { 'rail-orders': 'button[aria-label="Order basket"]' }.
 *   dismiss    [{ when: hook, click: hook }] — overlays to close before a reset
 *              step, so replay starts from a clean state. Applied in order.
 *   autoStart  URL token that auto-starts the tour. Default 'tour', matching
 *              `?tour` or `#tour`. Pass null to disable.
 *   timing     Overrides for the values in TIMING below.
 *
 * A step:
 *
 *   say    The narration. Blank lines split paragraphs, "- " lines become a
 *          bullet list, *stars* italicise. Required.
 *   at     Hook to spotlight. Omit for a centred, element-less step.
 *   do     [{ click: hook } | { wait: ms }] — run on entering the step, before
 *          the tooltip appears. Each click shows a ping where it lands.
 *   reset  Hook of a control that returns the mockup to a known state (e.g. a
 *          role radio). Marks a section boundary: because `do` clicks mutate
 *          state and cannot be undone, Back and jumps replay forward from the
 *          nearest reset step instead. If the control is an already-checked
 *          radio, clicking it would fire no change event, so the engine bounces
 *          off a sibling in the same radio group first.
 *
 * Returns an API — also exposed as window.narration for console use:
 *   start() stop() go(i) .index .busy .steps
 */
(() => {
  'use strict';

  const TIMING = {
    pingMs: 260,      // how long a click ping stays on screen
    pingLead: 130,    // ping shows this long before the click lands
    pingDwell: 1000,  // pause after a click, so runs of clicks read one by one
    settle: 60,       // beat after a re-render, on top of two animation frames
    resetWait: 320,   // extra wait after a reset click (loading states)
    waitFor: 2500,    // how long to wait for a hook to appear
    ready: 15000,     // how long to wait for the mockup to render at all
  };

  const CSS = `
  .nar-layer, .nar-tip, .nar-mask { position: fixed; z-index: 1000; }
  .nar-mask { inset: 0; z-index: 1000; background: transparent; cursor: default; }
  /* Element-less steps dim through the mask, since a hidden helper layer casts
     no shadow of its own. */
  .nar-mask.nar-dim { background: rgba(22,22,22,0.55); }
  .nar-layer {
    z-index: 1001; pointer-events: none;
    box-shadow: 0 0 0 9999px rgba(22,22,22,0.55), 0 0 14px rgba(0,0,0,0.4);
    border: 2px solid #fff; border-radius: 2px;
    transition: all 220ms cubic-bezier(.4,.14,.3,1);
  }
  .nar-layer.nar-none { opacity: 0; }
  .nar-tip {
    z-index: 1002; width: 360px; max-width: calc(100vw - 32px);
    background: #fff; color: #161616; box-shadow: 0 4px 24px rgba(0,0,0,0.35);
    font: 400 14px/1.45 var(--font-sans, 'IBM Plex Sans', system-ui, sans-serif);
    display: flex; flex-direction: column;
    transition: top 220ms cubic-bezier(.4,.14,.3,1), left 220ms cubic-bezier(.4,.14,.3,1);
  }
  .nar-tip-bar { height: 3px; background: #007d79; flex-shrink: 0; }
  .nar-tip::after {
    content: ''; position: absolute; width: 0; height: 0; border: 8px solid transparent;
  }
  .nar-tip[data-side="bottom"]::after {
    top: -16px; left: var(--nar-arrow); border-bottom-color: #007d79;
  }
  .nar-tip[data-side="top"]::after {
    bottom: -16px; left: var(--nar-arrow); border-top-color: #fff;
  }
  .nar-tip[data-side="right"]::after {
    left: -16px; top: var(--nar-arrow); border-right-color: #fff;
  }
  .nar-tip[data-side="left"]::after {
    right: -16px; top: var(--nar-arrow); border-left-color: #fff;
  }
  .nar-tip[data-side="none"]::after { display: none; }
  .nar-tip-body { padding: 16px 16px 4px; max-height: 46vh; overflow-y: auto; }
  .nar-tip-body p { margin: 0 0 10px; }
  .nar-tip-body ul { margin: 0 0 10px; padding-left: 20px; }
  .nar-tip-body li { margin-bottom: 4px; }
  .nar-tip-foot {
    display: flex; align-items: center; gap: 8px;
    padding: 8px 12px 12px; border-top: 1px solid #e0e0e0; margin-top: 8px;
  }
  .nar-count { font: 400 12px/1 var(--font-mono, monospace); color: #6f6f6f; margin-right: auto; }
  .nar-btn {
    border: none; padding: 8px 14px; cursor: pointer;
    font: 400 14px/1.2 var(--font-sans, system-ui, sans-serif);
  }
  .nar-btn:disabled { opacity: 0.4; cursor: not-allowed; }
  .nar-btn-ghost { background: transparent; color: #0f62fe; }
  .nar-btn-ghost:hover:not(:disabled) { text-decoration: underline; }
  .nar-btn-primary { background: #007d79; color: #fff; }
  .nar-btn-primary:hover { filter: brightness(0.92); }
  /* Click ping: shows where the tour just clicked, above the dimming layer. */
  .nar-ping {
    position: fixed; z-index: 1003; pointer-events: none; border-radius: 50%;
    background: rgba(255,255,255,0.6); box-shadow: 0 0 0 2px rgba(0,125,121,0.85);
    animation: nar-ping var(--nar-ping-ms, 260ms) cubic-bezier(.4,.14,.3,1) forwards;
  }
  @keyframes nar-ping {
    from { transform: scale(0.35); opacity: 0.95; }
    to   { transform: scale(1.4);  opacity: 0; }
  }
  `;

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const frame = () => new Promise((r) => requestAnimationFrame(() => r()));

  let cssInjected = false;
  function injectCss() {
    if (cssInjected) {
      return;
    }
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);
    cssInjected = true;
  }

  function markup(text) {
    const esc = (s) => s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
    const inline = (s) => esc(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');
    return text
      .split(/\n\s*\n/)
      .map((block) => {
        const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
        const out = [];
        let list = null;
        for (const line of lines) {
          if (line.startsWith('- ')) {
            list = list || [];
            list.push(`<li>${inline(line.slice(2))}</li>`);
          } else {
            if (list) {
              out.push(`<ul>${list.join('')}</ul>`);
              list = null;
            }
            out.push(`<p>${inline(line)}</p>`);
          }
        }
        if (list) {
          out.push(`<ul>${list.join('')}</ul>`);
        }
        return out.join('');
      })
      .join('');
  }

  function init(config) {
    const STEPS = config.steps || [];
    const ROOT = config.root === undefined ? '#dc-root' : config.root;
    const TRIGGER = config.trigger || 'start';
    const READY = config.ready || TRIGGER;
    const DISMISS = config.dismiss || [];
    const OVERRIDES = config.selectors || {};
    const AUTO = config.autoStart === undefined ? 'tour' : config.autoStart;
    const T = { ...TIMING, ...(config.timing || {}) };

    if (!STEPS.length) {
      console.warn('[narrator] init() called with no steps');
      return null;
    }

    const sel = (hook) => `${ROOT ? `${ROOT} ` : ''}${OVERRIDES[hook] || `[data-nar="${hook}"]`}`;
    const find = (hook) => document.querySelector(sel(hook));

    async function waitFor(hook, timeout = T.waitFor) {
      const deadline = Date.now() + timeout;
      for (;;) {
        const el = find(hook);
        if (el) {
          return el;
        }
        if (Date.now() > deadline) {
          console.warn(`[narrator] timed out waiting for "${hook}" (${sel(hook)})`);
          return null;
        }
        await sleep(40);
      }
    }

    /* Re-render settle: two frames covers React's commit, plus a beat for CSS. */
    async function settle() {
      await frame();
      await frame();
      await sleep(T.settle);
    }

    /* A translucent circle over an element the tour is about to click, so the
     * driven clicks read as deliberate rather than as the UI changing by
     * itself. Lives on <body> with fixed coords, so it survives the element
     * unmounting. */
    function ping(el) {
      const r = el.getBoundingClientRect();
      const d = Math.max(26, Math.min(64, Math.max(r.width, r.height) * 0.8));
      const dot = document.createElement('div');
      dot.className = 'nar-ping';
      dot.style.left = `${Math.round(r.left + r.width / 2 - d / 2)}px`;
      dot.style.top = `${Math.round(r.top + r.height / 2 - d / 2)}px`;
      dot.style.width = `${Math.round(d)}px`;
      dot.style.height = `${Math.round(d)}px`;
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), T.pingMs + 80);
    }

    const tour = { index: -1, running: false, busy: false, els: null };

    function build() {
      injectCss();
      document.documentElement.style.setProperty('--nar-ping-ms', `${T.pingMs}ms`);

      const mask = document.createElement('div');
      mask.className = 'nar-mask';

      const layer = document.createElement('div');
      layer.className = 'nar-layer';

      const tip = document.createElement('div');
      tip.className = 'nar-tip';
      tip.innerHTML = `
        <div class="nar-tip-bar"></div>
        <div class="nar-tip-body"></div>
        <div class="nar-tip-foot">
          <span class="nar-count"></span>
          <button class="nar-btn nar-btn-ghost" data-act="exit">Exit</button>
          <button class="nar-btn nar-btn-ghost" data-act="back">Back</button>
          <button class="nar-btn nar-btn-primary" data-act="next">Next</button>
        </div>`;

      tip.addEventListener('click', (e) => {
        const act = e.target.closest('[data-act]')?.dataset.act;
        if (act === 'next') {
          go(tour.index + 1);
        } else if (act === 'back') {
          go(tour.index - 1);
        } else if (act === 'exit') {
          stop();
        }
      });

      tour.els = {
        mask, layer, tip,
        body: tip.querySelector('.nar-tip-body'),
        count: tip.querySelector('.nar-count'),
        back: tip.querySelector('[data-act="back"]'),
        next: tip.querySelector('[data-act="next"]'),
      };
    }

    function place(target) {
      const { layer, tip, mask } = tour.els;
      const pad = 6;
      const gap = 14;
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      if (!target) {
        layer.classList.add('nar-none');
        mask.classList.add('nar-dim');
        layer.style.width = '0';
        layer.style.height = '0';
        tip.dataset.side = 'none';
        tip.style.left = `${Math.round((vw - tip.offsetWidth) / 2)}px`;
        tip.style.top = `${Math.round((vh - tip.offsetHeight) / 2)}px`;
        return;
      }

      layer.classList.remove('nar-none');
      mask.classList.remove('nar-dim');
      const r = target.getBoundingClientRect();
      layer.style.left = `${r.left - pad}px`;
      layer.style.top = `${r.top - pad}px`;
      layer.style.width = `${r.width + pad * 2}px`;
      layer.style.height = `${r.height + pad * 2}px`;

      const tw = tip.offsetWidth;
      const th = tip.offsetHeight;
      // Prefer below, then above, then beside — whichever fits the viewport.
      let side = 'bottom';
      let top = r.bottom + gap;
      let left = r.left + r.width / 2 - tw / 2;
      if (top + th > vh - 8) {
        if (r.top - gap - th > 8) {
          side = 'top';
          top = r.top - gap - th;
        } else if (r.right + gap + tw < vw - 8) {
          side = 'right';
          top = Math.max(8, Math.min(r.top, vh - th - 8));
          left = r.right + gap;
        } else if (r.left - gap - tw > 8) {
          side = 'left';
          top = Math.max(8, Math.min(r.top, vh - th - 8));
          left = r.left - gap - tw;
        } else {
          side = 'none'; // nothing fits beside a viewport-filling target
          top = vh - th - 8;
        }
      }
      left = Math.round(Math.max(8, Math.min(left, vw - tw - 8)));
      top = Math.round(Math.max(8, top));
      tip.style.left = `${left}px`;
      tip.style.top = `${top}px`;
      tip.dataset.side = side;
      // Point the arrow at the target's centre, kept clear of the tooltip corners.
      const along = side === 'bottom' || side === 'top'
        ? r.left + r.width / 2 - left
        : r.top + r.height / 2 - top;
      const limit = (side === 'bottom' || side === 'top' ? tw : th) - 24;
      tip.style.setProperty('--nar-arrow', `${Math.round(Math.max(16, Math.min(along - 8, limit)))}px`);
    }

    /* Close any overlay the mockup is showing, so a reset starts clean. */
    async function cleanup() {
      for (const { when, click } of DISMISS) {
        if (find(when)) {
          find(click)?.click();
          await settle();
        }
      }
    }

    /* Click an element, showing the ping first unless we're replaying silently. */
    async function tap(el, quiet) {
      if (!el) {
        return;
      }
      if (!quiet) {
        ping(el);
        await sleep(T.pingLead);
      }
      el.click();
    }

    async function applyReset(hook, quiet) {
      await cleanup();
      const el = await waitFor(hook);
      if (!el) {
        return;
      }
      // An already-checked radio fires no change event, so the mockup would
      // never reset. Bounce off a sibling first — bookkeeping, so never pinged.
      if (el.checked && el.name) {
        const peers = [...document.querySelectorAll(`${ROOT ? `${ROOT} ` : ''}input[name="${el.name}"]`)];
        peers.find((p) => p !== el)?.click();
        await settle();
      }
      await tap(find(hook), quiet);
      await sleep(T.resetWait);
      await settle();
    }

    async function runActions(step, quiet) {
      if (step.reset) {
        await applyReset(step.reset, quiet);
      }
      for (const action of step.do || []) {
        if (action.wait) {
          await sleep(action.wait);
          continue;
        }
        await tap(await waitFor(action.click), quiet);
        await settle();
        if (!quiet) {
          await sleep(T.pingDwell); // let each click land before the next one
        }
      }
    }

    async function go(to) {
      if (tour.busy || to < 0) {
        return;
      }
      if (to >= STEPS.length) {
        stop();
        return;
      }
      tour.busy = true;
      tour.els.next.disabled = true;
      try {
        if (to === tour.index + 1) {
          await runActions(STEPS[to], false);
        } else {
          // Any non-forward move replays from the section's reset step, since
          // the actions along the way mutate state and cannot be undone. Replay
          // runs quiet: pings would narrate clicks the user didn't ask to see.
          let from = to;
          while (from > 0 && !STEPS[from].reset) {
            from -= 1;
          }
          for (let i = from; i <= to; i += 1) {
            await runActions(STEPS[i], true);
          }
        }
        tour.index = to;
        await render();
      } finally {
        tour.busy = false;
        tour.els.next.disabled = false;
      }
    }

    async function render() {
      const step = STEPS[tour.index];
      const { body, count, back, next } = tour.els;
      body.innerHTML = markup(step.say);
      count.textContent = `${tour.index + 1} / ${STEPS.length}`;
      back.disabled = tour.index === 0;
      next.textContent = tour.index === STEPS.length - 1 ? 'Done' : 'Next';

      const target = step.at ? await waitFor(step.at) : null;
      if (target) {
        // 'auto', not 'smooth': the rect below has to be final when we measure it.
        target.scrollIntoView({ block: 'center', behavior: 'auto' });
        await frame();
      }
      place(step.at ? find(step.at) : null); // re-query: React may have replaced it
    }

    function onKey(e) {
      if (!tour.running) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        go(tour.index + 1);
      } else if (e.key === 'ArrowLeft') {
        go(tour.index - 1);
      } else if (e.key === 'Escape') {
        stop();
      }
    }

    function onReflow() {
      if (tour.running && tour.index >= 0) {
        const step = STEPS[tour.index];
        place(step.at ? find(step.at) : null); // idempotent; safe to run mid-step
      }
    }

    async function start() {
      if (tour.running) {
        return;
      }
      if (!tour.els) {
        build();
      }
      tour.running = true;
      tour.index = -1;
      document.body.append(tour.els.mask, tour.els.layer, tour.els.tip);
      window.addEventListener('keydown', onKey);
      window.addEventListener('resize', onReflow);
      window.addEventListener('scroll', onReflow, true);
      await go(0);
    }

    function stop() {
      tour.running = false;
      tour.els.mask.remove();
      tour.els.layer.remove();
      tour.els.tip.remove();
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onReflow);
      window.removeEventListener('scroll', onReflow, true);
    }

    async function boot() {
      if (!(await waitFor(READY, T.ready))) {
        return; // mockup never rendered; nothing to narrate
      }
      if (!tour.els) {
        build();
      }
      // Delegated, so the trigger survives React re-rendering that button.
      document.addEventListener('click', (e) => {
        if (e.target.closest(sel(TRIGGER))) {
          start();
        }
      });

      if (AUTO && new RegExp(`(^|[?&#])${AUTO}\\b`).test(location.search + location.hash)) {
        start();
      }
    }

    const api = {
      start, stop, go, steps: STEPS,
      get index() { return tour.index; },
      get busy() { return tour.busy; },
    };
    window.narration = api;

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', boot);
    } else {
      boot();
    }
    return api;
  }

  window.Narrator = { init, TIMING };
})();
