import { HomeHeroSection } from '@/components/Organisms/HomeHeroSection'
import { HomeBenefitsSection } from '@/components/Organisms/HomeBenefitsSection'
import { HomeRewardsTokenSection } from '@/components/Organisms/HomeRewardsTokenSection'
import { ExploreAppSection } from '@/components/Molecules/ExploreAppSection'
import { HomeGetStartedSection } from '@/components/Organisms/HomeGetStartedSection'
import { HomeBlogSection } from '@/components/Organisms/HomeBlogSection'
import { DownloadSection } from '@/components/Organisms/DownloadSection'

export function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <HomeBenefitsSection />
      <HomeRewardsTokenSection />
      <ExploreAppSection />
      <HomeGetStartedSection />
      <HomeBlogSection />
      <DownloadSection />
    </>
  )
}
