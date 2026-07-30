# Carbon Design System

A faithful recreation of **IBM's Carbon Design System** (v11, White + Gray 100
themes) packaged for use by design agents. Carbon is IBM's open-source design
system (Apache-2.0). Partners in Health builds on Carbon, so this project
captures Carbon's foundations, components, and a representative product UI kit
so new interfaces and assets stay on-system.

> **This is "pure Carbon."** No proprietary PIH brand layer is applied yet — the
> palette, type, motion, and components are stock Carbon. When PIH assets arrive
> (logo, any custom brand color, fonts), layer them on top of these foundations
> rather than replacing them.

## Sources
- **Carbon Design System** — https://carbondesignsystem.com/ (guidelines, tokens, components)
- **Carbon color/type/spacing tokens** — https://carbondesignsystem.com/elements/color/tokens/
- **IBM Plex** type family — https://github.com/IBM/plex (also on Google Fonts)
- **Carbon icons** — https://carbondesignsystem.com/elements/icons/library/ (served here via the Iconify `carbon` set)

No codebase or Figma file was attached; this recreation is built from Carbon's
public specifications and the author's working knowledge of v11. If you have a
Carbon React/Figma source of truth, reconcile against it.

---

## Content fundamentals — how Carbon writes
Carbon's voice is **plain, direct, and human** — IBM describes it as "natural,
real, and warm." Apply it to every label, message, and heading.

- **Sentence case everywhere.** Buttons, headings, labels, menu items: "Add
  patient", not "Add Patient" or "ADD PATIENT". Title Case and ALL CAPS are
  avoided (the only caps are tiny utility overlines set in code).
- **Address the user as "you"; the product is neutral.** "You haven't synced in
  24h", not "The user has not synced."
- **Verbs first on actions.** Buttons are imperative: "Create", "Save changes",
  "Delete", "Export". Avoid "OK"/"Submit" — name the action.
- **Be concise and specific.** Prefer "2 sites haven't synced in 24h" over
  "There may be a synchronization issue." Lead with the most useful fact.
- **Errors are calm and actionable.** State what happened and what to do:
  "Save failed — check the highlighted fields." No blame, no exclamation marks.
- **Numbers are precise and formatted.** Thousands separators ("1,284"),
  explicit units and targets ("96.2%", "Target 95%").
- **No emoji**, no decorative punctuation, no marketing hype in product UI.
- **Tone vibe:** professional, quietly confident, engineering-grade. Trustworthy
  over playful. Generous whitespace echoes the calm tone.

Examples in use across this system: "Program overview", "New patient",
"Recent activity", "2 sites haven't synced in 24h", "Patient created · PT-1048
added to Patients."

---

## Visual foundations — the Carbon look
**Overall vibe:** rational, gridded, high-contrast, square. Carbon feels like
precision engineering — flat surfaces, sharp corners, restrained color, and a
strong typographic grid. Nothing is rounded or soft unless it must be.

### Color
- Built on the **IBM Color palette**: each hue (gray, blue, cyan, teal, green,
  red, magenta, purple, yellow, orange) has 10 steps (10–100). See `tokens/colors.css`.
- **Blue 60 `#0f62fe`** is the single primary interactive color — buttons, links,
  focus rings, selected states. Use it sparingly and consistently.
- **Neutral-dominant.** Most of the UI is gray + white; color is reserved for
  interaction and status. The dark header (`#161616`) anchors the UI Shell.
- Status colors are fixed: error Red 60, success Green 50, warning Yellow 30,
  info Blue 70. Consume the **semantic tokens** (`--support-error`, `--text-primary`,
  `--layer-01`, `--field-01`…), never raw swatches — that's what lets the White
  and Gray 100 themes swap cleanly.
- Imagery, when used, is documentary and neutral — not warm/cinematic. Carbon
  leans on type and grid, not photography.

### Type
- **IBM Plex** throughout: Sans (UI), Mono (code, IDs, data), Serif (editorial,
  rare in product). Weights 300/400/500/600.
- Productive type set drives the UI: 12px labels, 14px body/compact, 16/20/28/32px
  headings, 42px+ for display. Headings ≥32px use **light (300)**; compact
  headings use **semibold (600)**. See `tokens/typography.css`.
- Tight, functional line-heights; small positive letter-spacing on the 12–14px
  sizes only.

### Spacing & layout
- **2x grid.** Spacing tokens `--spacing-01` (2px) → `--spacing-13` (160px); the
  workhorses are 8/16/24/32. Control heights are 32 / 40 / 48.
- Layouts are columnar and aligned to the grid; content tops out around
  1056–1120px in the shell. Generous negative space.

### Corners, borders, elevation
- **Square by default — radius 0.** This is core to Carbon's identity. A small
  opt-in radius scale exists (`--radius-sm/md/lg`) but is rare.
- Borders are 1px hairlines in subtle grays; fields use a **single bottom rule**
  that thickens to 2px in Blue 60 on focus (no boxed inputs).
- **Cards = "tiles":** flat fills (`--layer-01`), no shadow, no border, sharp
  corners. Separation comes from a 1px gap on a subtle-gray background, not drop
  shadows.
- **Elevation is functional only** — shadows appear on overlays (menus,
  popovers, modals), never on resting cards. `--shadow-sm/md/lg`.

### Motion
- Two modes: **productive** (fast, efficient — `cubic-bezier(.2,0,.38,.9)`) for
  most UI, and **expressive** (`cubic-bezier(.4,.14,.3,1)`) for emphasis.
- Durations are short: 70–240ms for the vast majority of transitions; 400–700ms
  reserved for large/expressive moves. See `tokens/layout.css`.
- Interactions: **hover** darkens (buttons) or adds a faint gray wash (ghost/rows);
  **focus** is a 2px Blue 60 ring (often inset); **active/press** goes a step
  darker — no scale/bounce. Toggles slide; chevrons rotate; panels fade+expand.
- Respect `prefers-reduced-motion`.

### Transparency & blur
- Used sparingly: overlay scrims (`--overlay`), and translucent hover/selected
  washes built from gray at low alpha. No glassmorphism, no heavy blur.

---

## Iconography
- **Carbon Icons** — ~2,000 glyphs on a 16/20/24/32 grid, **2px stroke**, square
  and literal metaphors (no rounded, no duotone, no emoji). They carry Carbon's
  square personality into the small scale.
- Delivered via **Iconify's `carbon` set** over CDN (the genuine Carbon icons;
  see the substitution note in `assets/README.md`). Usage:
  ```html
  <script src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"></script>
  <iconify-icon icon="carbon:add" width="16" height="16"></iconify-icon>
  ```
- Names are `carbon:<name>` and inherit `color` from `--icon-primary` /
  `--icon-secondary`. Common ones in the "Iconography" card; browse the full set
  at https://icones.js.org/collection/carbon.
- **Emoji and unicode glyphs are not used** as icons anywhere in Carbon.

---

## What's in here (index / manifest)

### Global CSS
- `styles.css` — the single entry point (consumers link this). `@import`-only.
- `tokens/colors.css` — IBM palette + White & Gray 100 semantic tokens.
- `tokens/typography.css` — IBM Plex (`@import` from Google Fonts) + type set.
- `tokens/spacing.css` — 2x spacing scale, container/field heights, icon sizes.
- `tokens/layout.css` — radius, borders, elevation, motion (durations + easing).
- `tokens/base.css` — minimal reset + element defaults + focus ring.

### Foundation cards (Design System tab) — `guidelines/`
Colors (gray, blue, support, hues, themes, tags), Type (families, headings,
body/code), Spacing (scale, control heights, radius, elevation), Motion (easing),
Brand (iconography).

### Components — `components/` (namespace `window.CarbonDesignSystem_53f452`)
- **forms/** — Button, IconButton, TextInput, TextArea, Select, Checkbox,
  RadioButton, Toggle, Search, Dropdown, NumberInput, Slider, FileUploader
- **data/** — Tag, Tile, Tabs, DataTable, Pagination, Accordion, ContentSwitcher,
  CodeSnippet
- **feedback/** — InlineNotification, ToastNotification, Modal, Loading,
  ProgressBar, Tooltip, Skeleton
- **navigation/** — Link, Breadcrumb, OverflowMenu, ProgressIndicator

Each component is `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, with
`@dsCard` showcase HTML per group (each group has a base + an "advanced" card).
Consume in card/preview HTML via
`const { Button } = window.CarbonDesignSystem_53f452` after loading
`_ds_bundle.js` (compiler-generated — do not edit).

### UI kit — `ui_kits/carbon-app/`
A generic Carbon product (UI Shell + Dashboard + Patients data table + New-patient
form) demonstrating the primitives composed into real, interactive screens.
See its `README.md`.

### Assets — `assets/`
Icon + font delivery notes and a slot for the PIH logo. See `assets/README.md`.

### Skill — `SKILL.md`
Agent-Skills-compatible entry point for using this system in Claude Code.

---

## Themes
The default is the **White** theme (tokens on `:root`). For dark UI, scope a
container with `data-carbon-theme="g100"` — the same semantic token names remap
automatically. (Gray 10 and Gray 90 are not yet defined; ask if you need them.)
