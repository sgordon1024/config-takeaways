import { useState } from 'react'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { EmptyState } from './components/EmptyState'
import { Onboarding } from './flow/Onboarding'
import { nextWateringDate, formatDate, type Plant } from './flow/plants'

export function App() {
  const [onboarding, setOnboarding] = useState(true)
  const [plants, setPlants] = useState<Plant[]>([])

  if (onboarding) {
    return (
      <main>
        <Onboarding
          onAdded={(plant) => {
            setPlants((prev) => (prev.some((p) => p.id === plant.id) ? prev : [...prev, plant]))
          }}
          onFinish={() => setOnboarding(true)}
        />
        {/* Escape hatch: onboarding never traps the user. */}
        <p style={{ textAlign: 'center', marginTop: 16 }}>
          <button type="button" className="skip-link" onClick={() => setOnboarding(false)}>
            Skip for now
          </button>
        </p>
      </main>
    )
  }

  return (
    <main>
      <h1 style={{ font: "700 22px 'Inter', sans-serif" }}>My garden</h1>
      {plants.length === 0 ? (
        <EmptyState
          title="No plants yet"
          subtitle="Add your first plant to see when to water it."
          action={
            <Button variant="primary" onClick={() => setOnboarding(true)}>
              Add a plant
            </Button>
          }
        />
      ) : (
        <div style={{ display: 'grid', gap: 16 }}>
          {plants.map((p) => (
            <Card
              key={p.id}
              title={p.name}
              subtitle={`Water every ${p.cadenceDays} days · next ${formatDate(nextWateringDate(p.cadenceDays))}`}
              imageSrc={`/plants/${p.id}.jpg`}
            />
          ))}
          <Button variant="secondary" onClick={() => setOnboarding(true)}>
            Add another plant
          </Button>
        </div>
      )}
    </main>
  )
}
