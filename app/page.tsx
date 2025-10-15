import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { NextEvent } from "@/components/next-event"
import { NewsletterSection } from "@/components/newsletter-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

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
