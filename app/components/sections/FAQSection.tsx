'use client'

import { motion } from 'framer-motion'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about trekking in Nepal
          </p>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Accordion.Item
                value={`item-${index}`}
                className="glass rounded-2xl overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between p-6 text-left font-semibold hover:bg-white/5 transition-colors">
                    <span>{faq.question}</span>
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180 text-primary" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                  <div className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}
