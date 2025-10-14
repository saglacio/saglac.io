import { loadEvents, resolveEvent } from '@/lib/data-loader'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArchivesList } from '@/components/archives-list'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Archives',
  description: 'Archive complète des événements SagLac IO passés',
  openGraph: {
    title: 'Archives - SagLac IO',
    description: 'Archive complète des événements SagLac IO passés',
    type: 'website',
  },
}

export default function ArchivesPage() {
  const now = new Date()
  const events = loadEvents()
    .filter((e) => new Date(e.date) < now) // Only past events
    .map(resolveEvent)

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Archives des <span className="text-primary">événements</span>
              </h1>
              <p className="text-lg text-foreground/80">
                Découvrez tous nos événements passés depuis 2013
              </p>
            </div>

            <ArchivesList events={events} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

