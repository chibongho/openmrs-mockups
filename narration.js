/* Narration script for the OpenMRS RDE patient-chart mockup.
 *
 * Prose is transcribed from narration.txt; steps mirror that script 1:1.
 * The tour engine lives in narrator.js — see the header there for the step
 * format and config options. Elements are addressed through data-nar="..."
 * hooks in Patient Chart.dc.html.
 */
Narrator.init({
  /* Elements without a data-nar hook of their own. */
  selectors: {
    'rail-orders': 'button[aria-label="Order basket"]',
  },

  /* Overlays to close before a role switch, so replay starts clean.
   * applyRoles() clears most chart state, but not noVisitModal. */
  dismiss: [
    { when: 'modal-end', click: 'end-cancel' },
    { when: 'modal-no-visit', click: 'novisit-cancel' },
    { when: 'modal-visit', click: 'visit-cancel' },
    { when: 'workspace', click: 'ws-cancel' },
  ],

  steps: [
    // ---------------------------------------------------------- POC role
    {
      reset: 'role-poc',
      at: 'role-switch',
      say: `This mockup shows how the patient chart looks when the user has "point of care" (POC) role, retrospective data entry (RDE) role, or both.

For this patient, assume that he currently has an active visit.`,
    },
    {
      at: 'ctx-header',
      say: `The visit context header is prominently shown in the patient banner, so that the user knows which visit they are working with.

For POC user, opening the patient chart automatically loads the active visit into context (if it exists), just like the current behavior.

The background color has a green tinge to further indicate that the user is in an active visit context.`,
    },
    {
      at: 'visit-attrs',
      say: `The "Paid" tag, and queue status are shown to the right of the visit context header. This is to indicate that these items are visit context sensitive.

Note that the "Active visit" tag is no longer shown. Instead, the visit context header serves to indicate that the patient has an active visit.`,
    },
    {
      at: 'btn-end',
      say: `If the visit in context is an active visit, the "End" button is shown to end the visit.`,
    },
    {
      do: [{ click: 'btn-end' }, { click: 'btn-end-confirm' }],
      at: 'banner',
      say: `Ending a visit exits the visit context. Note that the "Paid" tag and queue status are no longer shown in the patient banner.`,
    },
    {
      at: 'btn-add-visit',
      say: `When the user ends an active visit, it exits the visit context. The "Add visit" button is shown.

Note that a POC user cannot directly load an active visit into context. They may only do so by
- loading a patient chart with a patient that already has an active visit (which is our case)
- start an active visit, which automatically puts the new visit into context
- End the active visit, which exits out of the active visit context

With no RDE permission, a POC user cannot enter into a past visit context.`,
    },
    {
      do: [{ click: 'btn-add-visit' }],
      at: 'sv-modes',
      say: `For a POC user, they may start a visit that is either new or ongoing (but not in the past).

Now, let's click on the Order Basket`,
    },
    {
      do: [{ click: 'ws-cancel' }, { click: 'rail-orders' }],
      at: 'modal-no-visit',
      say: `When opening a visit-required workspace (like the Order Basket) when no visit is in context, the POC user is shown a "No active visit" modal.`,
    },
    {
      do: [{ click: 'novisit-cancel' }],
      at: 'role-switch',
      say: `That's it for POC user. Let's look at the UI for an RDE user.`,
    },

    // ---------------------------------------------------------- RDE role
    {
      reset: 'role-rde',
      at: 'btn-select-past',
      say: `Same patient loaded by user with RDE mode.

Note that even though the patient has an active visit, it is *not* automatically loaded into context. The "active visit" tag is also not shown, since a RDE user doesn't really need it. (In fact, the tag is completely removed from the patient chart's patient banner)

RDE user also sees a "Select past visit" button that's not shown to POC users.`,
    },
    {
      do: [{ click: 'btn-select-past' }],
      at: 'modal-visit',
      say: `Clicking on "Select past visit" shows the visit picker modal (already implemented). Let's select one and continue.`,
    },
    {
      do: [{ click: 'visit-v-h1' }, { click: 'btn-continue' }],
      at: 'ctx-header',
      say: `Selecting a past visit puts the visit into the visit header. The background color changes to peach tinge to further indicate user is in RDE visit context.

For an RDE user, the visit context header has two additional buttons.`,
    },
    {
      at: 'btn-change',
      say: `The "Change" button allows for selecting a different visit. Let's change it to another past visit.`,
    },
    {
      do: [{ click: 'btn-change' }, { click: 'visit-v-h2' }, { click: 'btn-continue' }],
      at: 'btn-exit',
      say: `The "X" button exits the visit context.`,
    },
    {
      do: [{ click: 'btn-exit' }, { click: 'btn-add-visit' }],
      at: 'sv-modes',
      say: `A RDE user may add a new visit, but only in the past (with both start date and end date).

Now let's click on the Order Basket.`,
    },
    {
      do: [{ click: 'ws-cancel' }, { click: 'rail-orders' }],
      at: 'modal-visit',
      say: `When opening a visit-required workspace when no visit is in context, the RDE user is shown a "Select a visit" modal.`,
    },
    {
      do: [{ click: 'visit-cancel' }],
      at: 'btn-actions',
      say: `All visit actions (start visit, end visit, changing visit context, exiting visit context) can be done through the visit context header. These actions no longer need to be in the "Actions" overflow menu.

Now let's look at the UI for a user with both roles.`,
    },

    // --------------------------------------------------------- Both roles
    {
      reset: 'role-both',
      at: 'ctx-header',
      say: `For a user with both roles, they can do everything, with sensible defaults:
- The active visit is automatically in context when opening the patient chart (same for POC only users)
- The "Change" and "X" buttons are shown in the visit context (same for RDE only users)`,
    },
    {
      do: [{ click: 'btn-exit' }],
      at: 'novisit-actions',
      say: `After exiting visit context, user with both roles can see both the "Add visit" and "Select past visit" buttons (same for RDE only users).`,
    },
    {
      do: [{ click: 'rail-orders' }],
      at: 'modal-visit',
      say: `When opening a visit-required workspace when no visit is in context, the user with both roles is shown a "Select a visit" modal.`,
    },
    {
      do: [{ click: 'visit-cancel' }, { click: 'btn-add-visit' }],
      at: 'sv-modes',
      say: `For user with both roles, they may start a visit that is either new, ongoing, or in the past.`,
    },
    {
      // Back through the order basket to reopen the picker, so the tour ends in
      // a visit context the way the script does.
      do: [{ click: 'ws-cancel' }, { click: 'rail-orders' }, { click: 'visit-v-h1' }, { click: 'btn-continue' }],
      say: `That's the end! Close out this narration and play around with the demo yourself.`,
    },
  ],
});
