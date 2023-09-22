import { AboutHeroSection } from '@/components/Organisms/AboutHeroSection'
import { AboutOurMission } from '@/components/Organisms/AboutOurMission'
import { TeamSection } from '@/components/Organisms/AboutTeamSection'
import { TimeLineSection } from '@/components/Organisms/AboutTimeLineSection'

export function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutOurMission />
      <TimeLineSection />
      <TeamSection />
    </>
  )
}
