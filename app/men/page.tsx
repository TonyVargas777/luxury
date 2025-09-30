
import { ProductGrid } from '@/components/product-grid'
import { ProductHero } from '@/components/product-hero'
import { menProducts } from '@/lib/products-data'

export default function MenPage() {
  return (
    <div className="min-h-screen">
      <ProductHero 
        title="Men's Collection"
        subtitle="Discover sophisticated elegance and timeless craftsmanship"
        backgroundImage="https://i.ytimg.com/vi/752ACQaG0CY/maxresdefault.jpg"
      
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProductGrid products={menProducts} />
      </div>
    </div>
  )
}
