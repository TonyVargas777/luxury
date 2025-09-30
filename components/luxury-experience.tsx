
'use client'

import React from 'react'
import Image from 'next/image'
import { Shield, Truck, Award, Headphones } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    icon: Shield,
    title: 'Authentic Luxury',
    description: 'Every piece is guaranteed authentic and crafted with the finest materials',
  },
  {
    icon: Truck,
    title: 'White Glove Service',
    description: 'Complimentary worldwide shipping with premium packaging and care',
  },
  {
    icon: Award,
    title: 'Exclusive Access',
    description: 'Priority access to limited collections and designer collaborations',
  },
  {
    icon: Headphones,
    title: 'Personal Styling',
    description: 'Dedicated personal stylists to curate your perfect wardrobe',
  },
]

export function LuxuryExperience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-8">
              The LUXÉ Experience
            </h2>
            <div className="space-y-8">
              {features?.map((feature, index) => {
                const IconComponent = feature?.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                        {IconComponent && <IconComponent className="h-6 w-6 text-white" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature?.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature?.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[600px] overflow-hidden rounded-lg bg-gray-200">
              <Image
                src="https://thumbs.dreamstime.com/b/modern-interior-luxury-fashionable-clothing-store-elegant-design-stylish-displays-high-end-fashion-modern-355398982.jpg"
                alt="Luxury Store Experience"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
