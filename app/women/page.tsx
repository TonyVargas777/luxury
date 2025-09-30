
import { ProductGrid } from '@/components/product-grid'
import { ProductHero } from '@/components/product-hero'
import { womenProducts } from '@/lib/products-data'

export default function WomenPage() {
  return (
    <div className="min-h-screen">
      <ProductHero 
        title="Women's Collection"
        subtitle="Embrace feminine elegance with our exquisite designs"
        backgroundImage="https://i.ytimg.com/vi/752ACQaG0CY/maxresdefault.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProductGrid products={womenProducts} />
      </div>
    </div>
  )
}
