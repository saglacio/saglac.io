'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { FAQSection as FAQSectionType } from '@/lib/types'

interface FAQSectionClientProps {
  sections: FAQSectionType[]
}

export function FAQSectionClient({ sections }: FAQSectionClientProps) {
  // Show only first 2 sections on homepage
  const previewSections = sections.slice(0, 2)

  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Questions <span className="text-primary">fréquentes</span>
            </h2>
            <p className="text-lg text-foreground/80">Tout ce que vous devez savoir sur SagLac IO</p>
          </div>

          <div className="space-y-8">
            {previewSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-2xl font-bold mb-4 text-primary">{section.header}</h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {section.questions.slice(0, 3).map((q) => (
                    <AccordionItem
                      key={q.slug}
                      value={q.slug}
                      className="bg-card border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:text-primary">
                        <div className="prose prose-sm dark:prose-invert max-w-none [&>p]:my-0">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>{q.question}</ReactMarkdown>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed prose prose-sm dark:prose-invert max-w-none">
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
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/faq" className="text-primary hover:underline font-medium">
              Voir toutes les questions →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

