import Header from '@/components/Organisms/Header'
import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

const Sans = DM_Sans({
  variable: '--font-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'FinanceFlow',
  description: ''
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Sans.variable}>
        <Header />
        {children}
      </body>
    </html>
  )
}
