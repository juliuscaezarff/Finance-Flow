'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NavItem } from './nav-items'
import { Button } from '@/components/Atoms/Button'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Pricing',
    href: '/pricing'
  },
  {
    label: 'Tokens',
    href: '/tokens'
  },
  {
    label: 'Blog',
    href: '/blog'
  },
  {
    label: 'Contact Us',
    href: '/contact'
  }
]

const Header = () => {
  return (
    <header className="top-0 w-full h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-[66px]">
          <Link href="/">
            <Image
              src="/logos/logo-finance-mobile.svg"
              alt="logo finance flow"
              width={136}
              height={48}
            />
          </Link>

          <nav className="flex items-center gap-[27px]">
            {NAV_ITEMS.map(item => (
              <NavItem {...item} key={item.label} />
            ))}
          </nav>
        </div>
        <Button>Download App</Button>
      </div>
    </header>
  )
}

export default Header
