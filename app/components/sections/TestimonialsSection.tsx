'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  location?: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="section bg-muted/30">
      <div className="max-w-7xl mx-auto container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What Travelers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from adventurers who have experienced the magic of Nepal with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl relative"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground italic mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                {testimonial.location && (
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
