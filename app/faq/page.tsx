import { loadFAQ } from '@/lib/data-loader'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Questions fréquemment posées sur les événements SagLac IO',
  openGraph: {
    title: 'FAQ - SagLac IO',
    description: 'Questions fréquemment posées sur les événements SagLac IO',
    type: 'website',
  },
}

export default function FAQPage() {
  const sections = loadFAQ()

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Questions <span className="text-primary">fréquentes</span>
              </h1>
              <p className="text-lg text-foreground/80">Tout ce que vous devez savoir sur SagLac IO</p>
            </div>

            <div className="space-y-8">
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h2 className="text-2xl font-bold mb-4 text-primary">{section.header}</h2>
                  <Accordion type="single" collapsible className="space-y-2">
                    {section.questions.map((q) => (
                      <AccordionItem
                        key={q.slug}
                        value={q.slug}
                        id={q.slug}
                        className="bg-card border border-border rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left hover:text-primary">
                          <div className="prose prose-sm dark:prose-invert max-w-none [&>p]:my-0">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{q.question}</ReactMarkdown>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-foreground/80 leading-relaxed">
                          <div className="prose prose-sm dark:prose-invert max-w-none">
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              components={{
                                a: ({ node, ...props }) => (
                                  <a
                                    {...props}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                  />
                                ),
                              }}
                            >
                              {q.answer}
                            </ReactMarkdown>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

