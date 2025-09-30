
import { ProductGrid } from '@/components/product-grid'
import { ProductHero } from '@/components/product-hero'
import { menProducts } from '@/lib/products-data'

export default function MenPage() {
  return (
    <div className="min-h-screen">
      <ProductHero 
        title="Men's Collection"
        subtitle="Discover sophisticated elegance and timeless craftsmanship"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/5c34764c297114ca20d6777b/ecc1bc86-61d0-4ad0-98b7-2235a680707a/FA22_MMK_AD_16x9_2.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProductGrid products={menProducts} />
      </div>
    </div>
  )
}
