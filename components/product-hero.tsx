
'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProductHeroProps {
  title: string
  subtitle: string
  backgroundImage: string
}

export function ProductHero({ title, subtitle, backgroundImage }: ProductHeroProps) {
  return (
    <section className="relative h-[60vh] overflow-hidden mt-16">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-200">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
