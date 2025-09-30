
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const featuredCollections = [
  {
    id: 'holiday',
    title: 'Holiday Collection',
    subtitle: 'Festive elegance meets luxury craftsmanship',
    image: 'https://theimpression.com/wp-content/uploads/2024/11/HOLIDAY-CAMPAIGN-2024_16x9_01.jpg',
    href: '/women',
  },
  {
    id: 'signature',
    title: 'Signature Collection',
    subtitle: 'Iconic pieces that define timeless style',
    image: 'https://fashionista.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_768/MjAyOTI4NzI0ODU5OTU0MjQ0/2023-memorable-ads.png',
    href: '/men',
  },
]

export function FeaturedCollections() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Featured Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most exclusive and sought-after pieces
          </p>
        </motion.div>

        <div className="space-y-16">
          {featuredCollections?.map((collection, index) => (
            <motion.div
              key={collection?.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <div className="flex-1">
                <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src={collection?.image || ''}
                    alt={collection?.title || 'Featured Collection'}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
                    {collection?.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {collection?.subtitle}
                  </p>
                  <p className="text-gray-700 mb-8">
                    Experience the pinnacle of luxury fashion with pieces that embody 
                    sophisticated craftsmanship and timeless design philosophy.
                  </p>
                </div>
                <Button asChild size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
                  <Link href={collection?.href || '#'} className="flex items-center space-x-2">
                    <span>Explore Collection</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
