
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const categories = [
  {
    id: 'men',
    title: "Men's Collection",
    subtitle: 'Sophisticated craftsmanship',
    image: 'http://pollyannaevents.com/cdn/shop/files/S77c0eec5830f489497e8b6e16475fc11h.webp?v=1748445528',
    href: '/men',
  },
  {
    id: 'women',
    title: "Women's Collection",
    subtitle: 'Feminine elegance redefined',
    image: 'https://cdn.abacus.ai/images/d64af533-5cc7-48ba-b429-b9fb775022bc.png',
    href: '/women',
  },
  {
    id: 'children',
    title: "Children's Collection",
    subtitle: 'Luxury for the next generation',
    image: 'https://i.pinimg.com/736x/9a/71/97/9a719768f8eb15dd94bf412f78170449.jpg',
    href: '/children',
  },
]

export function CategoryShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Our Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore curated collections that embody the essence of luxury fashion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories?.map((category, index) => (
            <motion.div
              key={category?.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <Link href={category?.href || '#'}>
                <div className="relative h-96 mb-6 overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src={category?.image || ''}
                    alt={category?.title || 'Category'}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors duration-200">
                    {category?.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category?.subtitle}</p>
                  <span className="inline-flex items-center text-gray-900 group-hover:text-gray-600 transition-colors duration-200">
                    Explore Collection
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
