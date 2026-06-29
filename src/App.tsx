import { useEffect, useMemo, useState } from 'react'
import contentData from './data/content.json'
import type { Content, Talk } from './types'
import { useTheme } from './lib/useTheme'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Themes } from './components/Themes'
import { DeepDives } from './components/DeepDives'
import { PredictionCta } from './components/PredictionCta'
import { PredictionPage } from './components/PredictionPage'
import { Stats } from './components/Stats'
import { Closing } from './components/Closing'
import { Footer } from './components/Footer'

const content = contentData as Content

export default function App() {
  const { theme, toggle } = useTheme()

  // Tiny hash router: #/prediction shows the forecast page, everything else
  // (including the in-page #section / #talk- anchors) shows the main page.
  const [hash, setHash] = useState(() => (typeof window !== 'undefined' ? window.location.hash : ''))
  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  const isPrediction = hash.startsWith('#/prediction')
  useEffect(() => {
    if (isPrediction) window.scrollTo(0, 0)
  }, [isPrediction])

  const talksById = useMemo(() => {
    const m = new Map<string, Talk>()
    content.talks.forEach((t) => m.set(t.id, t))
    return m
  }, [])

  const deepDiveTalks = useMemo(
    () => content.deepDives.map((id) => talksById.get(id)).filter((t): t is Talk => Boolean(t)),
    [talksById],
  )

  return (
    <div className="min-h-screen bg-paper text-ink transition-colors duration-500 dark:bg-ink dark:text-paper">
      <Nav theme={theme} onToggleTheme={toggle} />
      {isPrediction ? (
        <PredictionPage />
      ) : (
        <main>
          <Hero meta={content.meta} />
          <Themes themes={content.themes} talksById={talksById} />
          <DeepDives talks={deepDiveTalks} />
          <PredictionCta />
          <Stats stats={content.meta.stats} />
          <Closing meta={content.meta} />
        </main>
      )}
      <Footer meta={content.meta} />
    </div>
  )
}
