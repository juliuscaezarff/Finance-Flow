// Nextjs
import { Metadata } from "next"

// Components
import { ContactPage } from "@/components/Templates/ContactPage"


export const metadata: Metadata = {
  title: 'FinanceFlow - Contact us',
  description: ''
}

function Page() {
  return (
    <ContactPage />
  )
}

export default Page