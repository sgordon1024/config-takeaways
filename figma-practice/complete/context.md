# 2. Context authoring

**Do in Figma:** make sure Tally's components exist as real Figma components, map them to code with Code Connect, and confirm the Figma MCP can read them. Then write the skills below into your agent setup.

## Skills
**product-voice.md**
- Plain language, second person, no exclamation marks.
- Before: "Awesome! Let's get you set up!!"  After: "Add your first expense. It takes a few seconds."

**onboarding-screen-rules.md**
- Use only these components: `Button`, `Input`, `ListRow`, `Avatar`.
- Use only semantic tokens, no raw hex.
- AA contrast, visible focus, labeled inputs.
- Done = matches tokens, passes AA, copy follows product-voice.

## DONE (paste into the agent)
A screen is done when: every value resolves to a named token; AA contrast holds; every control is keyboard reachable with a visible focus state; every component exists in the Tally kit; copy follows product-voice and a human approved it.

## Code Connect map (example)
Map Figma `Button` to `<Button variant label />` in code. You author this by hand. It is what lets an agent reuse the real button instead of inventing one.

## Golden set (start small)
- "Build the email-capture step" -> known-good screen A.
- "Build the add-expense step" -> known-good screen B.
- Re-run after any token or skill change. Score strict pass or fail, not "close enough."
