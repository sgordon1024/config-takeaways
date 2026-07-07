export type Plant = {
  id: string
  name: string
  botanical: string
  cadenceDays: number
  amountMl: number
  careNote: string
  extraNotes: string[]
}

// Cadence lives here once — the single source of truth the whole flow reads,
// so the estimate, the refined schedule, and the care notes can never disagree.
export const PLANTS: Plant[] = [
  {
    id: 'pothos',
    name: 'Pothos',
    botanical: 'Epipremnum aureum',
    cadenceDays: 8,
    amountMl: 120,
    careNote: 'Let the top inch of soil dry before watering. Yellow leaves usually mean overwatering.',
    extraNotes: ['In brighter conditions, check a day earlier during summer.', 'Empty the saucer 30 minutes after watering to prevent root rot.'],
  },
  {
    id: 'snake',
    name: 'Snake plant',
    botanical: 'Dracaena trifasciata',
    cadenceDays: 14,
    amountMl: 100,
    careNote: 'Water sparingly and let the soil dry out fully between waterings.',
    extraNotes: ['Tolerates low light, but grows faster in bright indirect light.', 'Avoid letting water pool in the leaf rosette.'],
  },
  {
    id: 'peace-lily',
    name: 'Peace lily',
    botanical: 'Spathiphyllum wallisii',
    cadenceDays: 5,
    amountMl: 150,
    careNote: 'Keep the soil lightly moist. Drooping leaves usually recover after watering.',
    extraNotes: ['Prefers bright indirect light, away from cold drafts.', 'Wipe the leaves occasionally so they can breathe.'],
  },
  {
    id: 'monstera',
    name: 'Monstera',
    botanical: 'Monstera deliciosa',
    cadenceDays: 7,
    amountMl: 150,
    careNote: 'Water when the top two centimetres of soil feel dry.',
    extraNotes: ['Fenestrations (leaf holes) develop with more light.', 'Empty the saucer 30 minutes after watering to prevent root rot.'],
  },
  {
    id: 'spider',
    name: 'Spider plant',
    botanical: 'Chlorophytum comosum',
    cadenceDays: 7,
    amountMl: 100,
    careNote: 'Keep the soil lightly moist in spring and summer.',
    extraNotes: ['Brown tips often mean tap water minerals; try filtered water.', 'Happy plants send out plantlets you can repot.'],
  },
  {
    id: 'zz',
    name: 'ZZ plant',
    botanical: 'Zamioculcas zamiifolia',
    cadenceDays: 14,
    amountMl: 100,
    careNote: 'Water only when the soil is fully dry. It stores water in its rhizomes.',
    extraNotes: ['Handles low light better than almost any houseplant.', 'Overwatering is the main way to kill it.'],
  },
  {
    id: 'aloe',
    name: 'Aloe vera',
    botanical: 'Aloe barbadensis miller',
    cadenceDays: 12,
    amountMl: 80,
    careNote: 'Soak thoroughly, then let the soil dry out completely.',
    extraNotes: ['Needs bright light; a south or west window is ideal.', 'Wrinkled leaves mean it is thirsty.'],
  },
  {
    id: 'rubber',
    name: 'Rubber plant',
    botanical: 'Ficus elastica',
    cadenceDays: 9,
    amountMl: 130,
    careNote: 'Water when the top inch of soil is dry. Wipe leaves to keep them glossy.',
    extraNotes: ['Drops leaves if moved around too much; pick a spot and keep it.', 'Rotate a quarter turn monthly for even growth.'],
  },
]

export const ROOMS = ['Living room', 'Bedroom', 'Kitchen', 'Bathroom', 'Office']

export const LIGHT_LEVELS = [
  { id: 'low', label: 'Low light', hint: 'No direct sun, away from windows' },
  { id: 'indirect', label: 'Bright indirect', hint: 'Near a window, no direct rays' },
  { id: 'direct', label: 'Direct sun', hint: 'Sunlight falls on the plant' },
]

export function nextWateringDate(cadenceDays: number): Date {
  const d = new Date()
  d.setDate(d.getDate() + cadenceDays)
  return d
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
}
