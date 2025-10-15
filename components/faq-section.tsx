import { loadFAQ } from '@/lib/data-loader'
import { FAQSectionClient } from './faq-section-client'

export function FAQSection() {
  const sections = loadFAQ()

  return <FAQSectionClient sections={sections} />
}
