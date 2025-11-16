'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Users, MapPin, HeartPulse, LucideIcon } from 'lucide-react'

interface Feature {
  title: string
  description: string
  icon: string
}

interface WhyChooseUsSectionProps {
  title: string
  features: Feature[]
}

const iconMap: Record<string, LucideIcon> = {
  'shield-check': ShieldCheck,
  'users': Users,
  'map-pin': MapPin,
  'heart-pulse': HeartPulse,
}

export default function WhyChooseUsSection({ title, features }: WhyChooseUsSectionProps) {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || ShieldCheck

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
