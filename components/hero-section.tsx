
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-200">
        <Image
          src="images/children.png"
          alt="Luxury Fashion Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 tracking-wide">
              Timeless
              <span className="block text-4xl sm:text-5xl lg:text-6xl mt-2">
                Elegance
              </span>
              <br />
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover extraordinary luxury fashion that transcends seasons and defines sophistication
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6">
                <Link href="/women" className="flex items-center space-x-2">
                  <span>Explore Collection</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              {/* <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6">
                <Link href="/men">
                  Discover Men's
                </Link>
              </Button> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
