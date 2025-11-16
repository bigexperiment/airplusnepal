'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, MapPin, Mountain } from 'lucide-react'

interface TrekCardProps {
  title: string
  slug: string
  region: string
  duration: string
  image: string
  difficulty?: string
  index?: number
}

export default function TrekCard({
  title,
  slug,
  region,
  duration,
  image,
  difficulty,
  index = 0,
}: TrekCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/treks/${slug}`} className="group block">
        <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
          {/* Image */}
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Difficulty Badge */}
          {difficulty && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
              {difficulty}
            </div>
          )}

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{region}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{duration}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
