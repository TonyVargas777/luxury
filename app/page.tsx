
import { HeroSection } from '@/components/hero-section'
import { FeaturedCollections } from '@/components/featured-collections'
import { CategoryShowcase } from '@/components/category-showcase'
import { LuxuryExperience } from '@/components/luxury-experience'

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CategoryShowcase />
      <FeaturedCollections />
      <LuxuryExperience />
    </div>
  )
}
