// Author data structure
export interface Author {
  id: string
  name: string
  twitter?: string
  github?: string
  linkedin?: string
  website?: string
  avatar?: string
}

// Location data structure
export interface Location {
  id: string
  name: string
  address: string
  url?: string
  facebook?: string
  description?: string
  map?: string
}

// Talk data structure
export interface Talk {
  title: string
  description?: string
  authors: string[] // Author IDs
  slides?: string | string[]
}

// Event data structure
export interface Event {
  title: string
  description?: string
  date: string
  event_url?: string
  location: string // Location ID
  talks?: Talk[]
  slug: string // Derived from filename
}

// FAQ data structure
export interface FAQQuestion {
  slug: string
  question: string
  answer: string
}

export interface FAQSection {
  header: string
  questions: FAQQuestion[]
}

// Resolved types (with full data)
export interface ResolvedTalk extends Omit<Talk, 'authors'> {
  authors: Author[]
}

export interface ResolvedEvent extends Omit<Event, 'location' | 'talks'> {
  location: Location
  talks?: ResolvedTalk[]
}


