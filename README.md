# OpenMRS Design Mockups

Interactive HTML mockups for OpenMRS patient chart design work, published as a
static site: **https://chibongho.github.io/openmrs-mockups/**

All patient information in these mockups is synthetic demo data.

## Mockups

| Mockup | Path |
| --- | --- |
| Patient Chart — RDE & POC roles | [`rde/Patient Chart.dc.html`](rde/Patient%20Chart.dc.html) |

## Guided narration

The patient chart ships with a guided walkthrough. Start it with the **Play the
guided narration** button in the chart header, or append `?tour` to the URL to
auto-start it.

The tour engine is [`src/narrator.js`](src/narrator.js) — a reusable, dependency-free
tour engine. Per-mockup steps live alongside the mockup, e.g.
[`rde/narration.js`](rde/narration.js).

## Running locally

The mockups use relative paths and one relative parent reference
(`rde/Patient Chart.dc.html` loads `../src/narrator.js`), so **serve from the
repository root**:

```sh
python3 -m http.server 8000
# then open http://localhost:8000/
```

Opening the `.html` file directly over `file://` also works in most browsers.

## Layout

```
index.html          landing page / mockup index
src/narrator.js     shared guided-tour engine
rde/                retrospective data entry mockups
  Patient Chart.dc.html
  narration.js      tour steps for the patient chart
  support.js        design-tool runtime
  _ds/              design system tokens and bundle
  uploads/          images referenced by the mockup
.nojekyll           required — keeps GitHub Pages from dropping _ds/
```

`.nojekyll` is not optional: without it GitHub Pages runs Jekyll, which excludes
directories beginning with an underscore, and `rde/_ds/` would 404.
