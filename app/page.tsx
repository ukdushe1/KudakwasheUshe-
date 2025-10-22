import Hero from '@/components/sections/Hero'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Services from '@/components/sections/Services'
import Stats from '@/components/sections/Stats'
import CTA from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Services />
      <Stats />
      <CTA />
    </>
  )
}