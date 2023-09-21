// Nextjs
import { Metadata } from "next"

// Components
import { AboutPage } from "@/components/Templates/AboutPage"


export const metadata: Metadata = {
  title: 'FinanceFlow - About',
  description: ''
}

function Page() {
  return (
    <AboutPage />
  )
}

export default Page