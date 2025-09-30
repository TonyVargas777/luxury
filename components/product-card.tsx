
'use client'

import React from 'react'
import Image from 'next/image'
import { Heart, ShoppingBag, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useCart } from '@/components/cart-provider'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  description?: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addItem({
      id: product?.id || '',
      name: product?.name || '',
      price: product?.price || 0,
      image: product?.image || '',
      category: product?.category || '',
    })
    
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={product?.image || ''}
          alt={product?.name || 'Product'}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="ghost"
            size="sm"
            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            className="w-full bg-gray-900 hover:bg-gray-800 text-white"
            onClick={handleAddToCart}
            disabled={isAdded}
          >
            {isAdded ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Added!
              </>
            ) : (
              <>
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-gray-500 uppercase tracking-wide">
            {product?.category}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors duration-200">
          {product?.name}
        </h3>
        {product?.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product?.price?.toLocaleString?.() || '0'}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
