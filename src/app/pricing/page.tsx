// Nextjs
import { Metadata } from "next"

// Components
import { PricingPage } from "@/components/Templates/PricingPage"


export const metadata: Metadata = {
  title: 'FinanceFlow - Pricing',
  description: ''
}

function Page() {
  return (
    <PricingPage />
  )
}

export default Page