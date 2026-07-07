import { useMemo, useState } from 'react'
import { Button } from '../components/Button'
import { SearchField } from '../components/SearchField'
import { ListRow } from '../components/ListRow'
import { Chip } from '../components/Chip'
import { EmptyState } from '../components/EmptyState'
import { PLANTS, ROOMS, LIGHT_LEVELS, nextWateringDate, formatDate, type Plant } from './plants'

type Step = 'search' | 'added' | 'refine' | 'done'

function ScheduleWeek({ plant }: { plant: Plant }) {
  const next = nextWateringDate(plant.cadenceDays)
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return (
    <div className="week">
      {days.map((d, i) => (
        <div key={d} className="week-day">
          <span className="week-label">{d}</span>
          <span className={`week-dot${i === next.getDay() ? ' week-dot-active' : ''}`}>
            {i === next.getDay() ? '💧' : ''}
          </span>
        </div>
      ))}
    </div>
  )
}

export function Onboarding({
  onAdded,
  onFinish,
}: {
  onAdded: (plant: Plant) => void
  onFinish: () => void
}) {
  const [step, setStep] = useState<Step>('search')
  const [query, setQuery] = useState('')
  const [plant, setPlant] = useState<Plant | null>(null)
  const [room, setRoom] = useState<string | null>(null)
  const [light, setLight] = useState<string | null>(null)

  const complete = () => {
    if (plant) onAdded(plant)
    setStep('done')
  }

  const restart = () => {
    setStep('search')
    setQuery('')
    setPlant(null)
    setRoom(null)
    setLight(null)
  }

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return PLANTS
    return PLANTS.filter((p) => p.name.toLowerCase().includes(q) || p.botanical.toLowerCase().includes(q))
  }, [query])

  // ---- 1. Search (progressive entry: no gate before value) ----
  if (step === 'search') {
    return (
      <section>
        <p className="eyebrow">Sprout</p>
        <h1 className="screen-title">Which plant are you adding?</h1>
        <p className="screen-sub">Search by common or botanical name.</p>
        <SearchField placeholder="Search plants" value={query} onChange={setQuery} />
        <div className="rows">
          {results.map((p) => (
            <ListRow
              key={p.id}
              title={p.name}
              subtitle={p.botanical}
              imageSrc={`/plants/${p.id}.jpg`}
              onClick={() => {
                setPlant(p)
                setStep('added')
              }}
            />
          ))}
          {results.length === 0 && (
            <EmptyState title="No matches" subtitle="Try the common name, like pothos or monstera." />
          )}
        </div>
      </section>
    )
  }

  if (!plant) return null
  const next = formatDate(nextWateringDate(plant.cadenceDays))

  // ---- 2. Added: the schedule shows immediately, refine stays optional ----
  if (step === 'added') {
    return (
      <section>
        <p className="added-badge">✓ Plant added</p>
        <h1 className="screen-title">{plant.name}</h1>
        <p className="screen-sub">{plant.botanical}</p>

        <div className="schedule-card">
          <p className="schedule-label">Watering schedule</p>
          <p className="schedule-cadence">Every {plant.cadenceDays} days</p>
          <p className="schedule-hint">Starting estimate. It gets more accurate when you add light.</p>
          <div className="schedule-next">
            <span>Next watering</span>
            <strong>{next}</strong>
          </div>
        </div>

        <div className="care-card">
          <p className="care-label">Care note</p>
          <p>{plant.careNote}</p>
        </div>

        <button type="button" className="refine-row" onClick={() => setStep('refine')}>
          <span>Refine for your space</span>
          <span className="refine-optional">Optional</span>
        </button>

        <Button variant="primary" onClick={complete}>
          Go to my plants
        </Button>
      </section>
    )
  }

  // ---- 3. Refine (optional): room + light sharpen the same schedule ----
  if (step === 'refine') {
    return (
      <section>
        <button type="button" className="back" onClick={() => setStep('added')} aria-label="Back">
          ←
        </button>
        <h1 className="screen-title">Your watering schedule</h1>
        <p className="screen-sub">Add your space details for a more accurate plan.</p>

        <p className="group-label">Room</p>
        <div className="chips">
          {ROOMS.map((r) => (
            <Chip key={r} label={r} variant={room === r ? 'selected' : 'default'} onClick={() => setRoom(r)} />
          ))}
        </div>

        <p className="group-label">Light level</p>
        <div className="rows">
          {LIGHT_LEVELS.map((l) => (
            <ListRow
              key={l.id}
              title={l.label}
              subtitle={l.hint}
              onClick={() => setLight(l.id)}
            />
          ))}
        </div>
        {light && <p className="light-confirm">Light set: {LIGHT_LEVELS.find((l) => l.id === light)?.label}</p>}

        <div className="schedule-card">
          <p className="schedule-label">Watering schedule</p>
          <ScheduleWeek plant={plant} />
          <div className="schedule-next">
            <span>Next watering</span>
            <strong>{next}</strong>
            <span className="schedule-amount">{plant.amountMl} ml</span>
          </div>
        </div>

        <div className="care-card">
          <p className="care-label">Care notes</p>
          <ul>
            <li>Water every {plant.cadenceDays} days. {plant.careNote}</li>
            {plant.extraNotes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>

        <Button variant="primary" onClick={complete}>
          Add to my plants
        </Button>
      </section>
    )
  }

  // ---- 4. Done ----
  return (
    <EmptyState
      title="Your garden starts here."
      subtitle={`Sprout will remind you when ${plant.name} needs water. You can add more plants any time.`}
      action={
        <Button variant="secondary" onClick={() => { restart(); onFinish() }}>
          Add another plant
        </Button>
      }
    />
  )
}
