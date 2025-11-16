'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
}: CTASectionProps) {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 p-12 lg:p-16 text-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-noise opacity-30" />

          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              {title}
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <Link
              href={buttonHref}
              className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {buttonText}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
