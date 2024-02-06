import { HomeHeroSection } from '@/components/Organisms/HomeHeroSection'
import { HomeBenefitsSection } from '@/components/Organisms/HomeBenefitsSection'
import { HomeRewardsTokenSection } from '@/components/Organisms/HomeRewardsTokenSection'
import { ExploreAppSection } from '@/components/Molecules/ExploreAppSection'
import { HomeGetStartedSection } from '@/components/Organisms/HomeGetStartedSection'
import { HomeBlogSection } from '@/components/Organisms/HomeBlogSection'
import { DownloadSection } from '@/components/Organisms/HomeDownloadSection'
import { Carrousel } from '@/components/Organisms/HomeSlideSection'

export function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <HomeBenefitsSection />
      <HomeRewardsTokenSection />
      <ExploreAppSection />
      <Carrousel />
      <HomeGetStartedSection />
      <HomeBlogSection />
      <DownloadSection />
    </>
  )
}
