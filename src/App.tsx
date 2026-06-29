import { useMemo } from 'react'
import contentData from './data/content.json'
import type { Content, Talk } from './types'
import { useTheme } from './lib/useTheme'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Overview } from './components/Overview'
import { Themes } from './components/Themes'
import { ShaderInterlude } from './components/ShaderInterlude'
import { DeepDives } from './components/DeepDives'
import { Archive } from './components/Archive'
import { Stats } from './components/Stats'
import { Closing } from './components/Closing'
import { Footer } from './components/Footer'

const content = contentData as Content

export default function App() {
  const { theme, toggle } = useTheme()

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
      <main>
        <Hero meta={content.meta} />
        <Overview meta={content.meta} />
        <Themes themes={content.themes} talksById={talksById} />
        <ShaderInterlude />
        <DeepDives talks={deepDiveTalks} />
        <Archive talks={content.talks} />
        <Stats stats={content.meta.stats} />
        <Closing meta={content.meta} />
      </main>
      <Footer meta={content.meta} />
    </div>
  )
}
