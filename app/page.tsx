import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { NextEvent } from "@/components/next-event"
import { NewsletterSection } from "@/components/newsletter-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accueil',
  description: 'Rencontres mensuelles gratuites pour passionnés de technologies au Saguenay—Lac-Saint-Jean. Discussions, présentations et réseautage dans la communauté tech.',
  alternates: {
    canonical: 'https://saglac.io',
  },
  openGraph: {
    title: 'Accueil - SagLac IO',
    description: 'Rencontres mensuelles gratuites pour passionnés de technologies au Saguenay—Lac-Saint-Jean. Discussions, présentations et réseautage.',
    url: 'https://saglac.io',
    type: 'website',
    locale: 'fr_CA',
    siteName: 'SagLac IO',
    images: [
      {
        url: '/images/open-graph-default-image.png',
        width: 1200,
        height: 630,
        alt: 'SagLac IO - Communauté Tech du Saguenay—Lac-Saint-Jean',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accueil - SagLac IO',
    description: 'Rencontres mensuelles gratuites pour passionnés de technologies au Saguenay—Lac-Saint-Jean.',
    creator: '@saglacio',
    images: ['/images/open-graph-default-image.png'],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <NextEvent />
      <NewsletterSection />
      <AboutSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
