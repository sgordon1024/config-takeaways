# 2. Context authoring (skills written, mapping pending)

## Skills (written)
**product-voice.md**
- Plain, second person, calm and encouraging. No exclamation marks, no jargon.
- Before: "Yay! Your plant is all set up!!"  After: "Got it. Here is when to water your plant."

**onboarding-screen-rules.md**
- Use only these components: `Button`, `Input`, `SearchField`, `ListRow`, `Card`.
- Use only semantic tokens, no raw hex.
- One primary action per screen. AA contrast, labeled inputs, visible focus.
- Done = matches tokens, passes AA, copy follows product-voice.

## DONE (paste into the agent)
A screen is done when: every value resolves to a named token; AA contrast holds; every control is keyboard reachable with a visible focus; every component exists in the Sprout kit; copy follows product-voice and a human approved it.

## Golden set (written)
- "Build the add-plant step" -> known-good screen A.
- "Build the watering-schedule reveal" -> known-good screen B.
- Re-run after any token or skill change. Strict pass or fail.

## ▶ Open Figma
Map these components with Code Connect, then confirm the Figma MCP reads them:
- `Button` -> `<Button variant label />`
- `SearchField` -> `<SearchField onSelect />`
- `Card` -> `<Card />`
