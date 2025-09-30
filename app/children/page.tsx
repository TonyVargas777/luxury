
import { ProductGrid } from '@/components/product-grid'
import { ProductHero } from '@/components/product-hero'
import { childrenProducts } from '@/lib/products-data'

export default function ChildrenPage() {
  return (
    <div className="min-h-screen">
      <ProductHero 
        title="Children's Collection"
        subtitle="Luxury fashion for the next generation"
        backgroundImage="images/children.png"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProductGrid products={childrenProducts} />
      </div>
    </div>
  )
}
