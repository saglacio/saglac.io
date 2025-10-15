import { NewsletterForm } from '@/components/newsletter-form'

export function NewsletterSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Restez <span className="text-primary">informé</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Ne manquez aucun événement ni annonce de conférence
            </p>
          </div>

          <NewsletterForm standalone />
        </div>
      </div>
    </section>
  )
}

