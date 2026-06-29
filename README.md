# Config 2026 · Takeaways

A single-page, interactive site presenting takeaways from **Figma Config 2026** — 12 cross-cutting
themes plus a searchable archive of all 96 talks. Uber-inspired: bold, monochrome, high-contrast,
Inter typography, physics-based motion.

Built with **Vite + React + TypeScript + Tailwind CSS + Framer Motion**. Static, no backend — the
app imports a single `src/data/content.json`.

---

## Run the site locally

```bash
npm install        # once
npm run dev        # dev server → http://localhost:5173
npm run build      # type-check + production build → dist/
npm run preview    # serve the production build locally
```

## Tweak the content

**Edit [`src/data/content.json`](src/data/content.json).** It is the single source the app renders —
themes, the talk archive, the deep-dive selection, and the stats. Change a headline, reorder themes,
fix a key point, swap which talks are "deep dives" (the `deepDives` array of talk ids), etc. No
rebuild of the pipeline needed; just save and the dev server hot-reloads.

To change the accent color, edit `accent` in [`tailwind.config.js`](tailwind.config.js).

---

## How the content was produced (the pipeline)

The content was generated in two passes, with all intermediate results saved to disk so nothing is
lost. Inputs live in [`./transcripts/`](transcripts) (39 word-for-word transcripts pulled from the
public talk recordings).

**Step 1 — per-talk summaries → [`content/summaries/`](content/summaries)** (one JSON per talk).
Each transcript/abstract was read and reduced to 3–5 key points and up to 2 verbatim quotes.
Titles and speakers come from Figma's official Config agenda.

**Step 2 — synthesis → [`content/synthesis.json`](content/synthesis.json).** All 96 summaries were
clustered into 12 themes (headline, explanation, supporting talk ids) plus a meta-narrative,
overview, and the 5 deep-dive picks.

**Assemble → `src/data/content.json`:**

```bash
python3 content/assemble_content.py content/synthesis.json
```

This step recomputes every stat directly from the files (never estimated) and re-verifies that all
theme/deep-dive references resolve to real talks. Re-run it any time you regenerate the summaries or
synthesis.

### Accuracy guarantees baked into the pipeline

- **Quotes are verbatim.** Every quote was checked as a literal substring of its transcript;
  11 that weren't an exact match (e.g. fragments stitched with "…") were dropped automatically.
- **Nothing invented.** Key points come only from the source text; abstract-only talks carry no
  quotes and are labeled "From abstract" in the UI.
- **Real counts.** All stats are computed from the files in `content/summaries/`.

---

## Project structure

```
transcripts/              39 source transcripts (.txt)
content/
  summaries/              96 per-talk summary JSONs (Step 1 output)
  synthesis.json          themes + deep dives (Step 2 output)
  assemble_content.py     builds src/data/content.json from the above
  step1_verification.json log of dropped quotes / thin summaries
src/
  data/content.json       ← the file the app imports (edit this to tweak content)
  components/              Hero, Themes, DeepDives, Archive, Stats, etc.
  lib/                     useTheme, useCountUp, motion variants
  App.tsx                 page composition
```
