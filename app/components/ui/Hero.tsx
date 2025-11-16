'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface HeroProps {
  title: string
  subtitle: string
  image: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
}

export default function Hero({
  title,
  subtitle,
  image,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto container-px text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>

        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {primaryCta.text}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all hover:scale-105 border border-white/20"
              >
                {secondaryCta.text}
              </Link>
            )}
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
