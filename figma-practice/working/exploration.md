# 3. Divergent exploration (prompts ready for Figma Make)

Fire all three in parallel. Each is constrained to the Sprout kit, tokens, and skills.

**Shared constraint (prepend to each):**
> Build first-run onboarding for Sprout, a houseplant care app. Goal: the user adds their first plant and sees its watering schedule in under 2 minutes. Use only the Sprout component kit and semantic tokens. Follow product-voice: plain, second person, no exclamation marks. AA contrast, labeled inputs, one primary action per screen.

1. **Checklist**
> Home is a 3-item checklist with a progress bar: Add a plant, Pick its room, See your schedule. Build the add-plant step and the schedule reveal.

2. **Wizard**
> One question per screen: (1) search and pick a plant, (2) choose room and light, (3) reveal the watering schedule. Minimal chrome.

3. **Progressive**
> Drop the user straight into an add-plant screen (search + pick), then immediately reveal the personalized schedule. Teach room and light inline as optional refinements after the first success.

## Curated (three built in Figma Make, compared)
- **Survivor: C (Progressive).** Reaches the schedule in ~2 taps (search, pick, done); room and light are an optional "Refine for your space." Only direction that never gates value, so it fits the under-2-min bet.
- **Graft from B (Wizard):** pull B's richer payoff into C, the week view, water amount, specific care notes, and the "check the soil first" tip. Frame C's optional refine as "add light to sharpen this estimate." This covers the trust half of the bet (C alone gives a generic plant-only schedule).
- **Kill list:**
  - A (Checklist): opens with a "here are 3 steps" screen, an extra gate before value. ~5 taps. Slowest.
  - B (Wizard): strong trust payoff but gates the schedule behind room+light. Kept only as the payoff donor.

Note: all three drifted off-kit (serif type, sage palette) because no components were attached to Make. The survivor gets rebuilt on the real kit in stage 4.
