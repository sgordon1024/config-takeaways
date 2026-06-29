// Shape of src/data/content.json, the single file the app imports.
// Produced by the content pipeline (see content/ and the README handoff notes).

export interface Quote {
  /** Verbatim text copied from the transcript. */
  text: string
  /** Talk the quote came from (title). */
  talk: string
}

export type TalkSource = 'transcript' | 'abstract'

export interface Talk {
  id: string
  title: string
  speakers: string
  stage: string
  source: TalkSource
  /** YouTube id if a public recording exists, else null. */
  video: string | null
  keyPoints: string[]
  quotes: Quote[]
  /** True for the curated "deep dive" talks. */
  deepDive?: boolean
}

export interface Theme {
  id: number
  headline: string
  explanation: string
  /** Ids of talks that support this theme (traceability). */
  talkIds: string[]
  talkCount: number
}

export interface Stats {
  totalTalks: number
  transcribedTalks: number
  abstractTalks: number
  themes: number
  speakers: number
  stages: number
}

export interface Content {
  meta: {
    conference: string
    host: string
    location: string
    dates: string
    curator: string
    tagline: string
    overview: string
    stats: Stats
  }
  themes: Theme[]
  /** Ids of the top featured talks. */
  deepDives: string[]
  talks: Talk[]
}
