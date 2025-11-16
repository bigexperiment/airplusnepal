'use client'

import { motion } from 'framer-motion'
import { Mountain, Camera, Map, LucideIcon } from 'lucide-react'

interface Activity {
  name: string
  description: string
  icon: string
}

interface ActivitiesSectionProps {
  activities: Activity[]
}

const iconMap: Record<string, LucideIcon> = {
  mountain: Mountain,
  camera: Camera,
  map: Map,
}

export default function ActivitiesSection({ activities }: ActivitiesSectionProps) {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto container-px">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = iconMap[activity.icon] || Mountain

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{activity.name}</h3>
                <p className="text-muted-foreground">{activity.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
