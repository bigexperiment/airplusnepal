'use client'

import { motion } from 'framer-motion'

interface Stat {
  value: string
  label: string
}

interface StatsSectionProps {
  stats: Stat[]
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="section bg-muted/30">
      <div className="max-w-7xl mx-auto container-px">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
