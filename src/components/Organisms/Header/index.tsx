'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { NavItem } from './nav-items'
import { NAV_ITEMS } from './type'
import { Button } from '@/components/Atoms/Button'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleOpenMenu = () => {
    setOpen(!open)
  }

  return (
    <header className="top-4 w-full h-24 flex items-center justify-center">
      <div className="container flex flex-col lg:flex-row lg:items-center gap-[66px]">
        <Link href="/">
          <Image
            src="/logos/logo.svg"
            alt="logo finance flow"
            width={154}
            height={48}
          />
        </Link>
        <div
          className="text-white absolute right-8 top-8 block lg:hidden bg-blue-primary-light px-3 py-2.5 
          rounded-full"
          onClick={handleOpenMenu}
        >
          {open ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        <div className="hidden lg:block w-full ">
          <div className="flex items-center justify-between w-full">
            <nav className="flex flex-row items-center gap-[27px]">
              {NAV_ITEMS.map(item => (
                <NavItem {...item} key={item.label} />
              ))}
            </nav>
            <Button className="">Download App</Button>
          </div>
        </div>

        <div
          className={
            open
              ? 'lg:hidden fixed left-0 top-20 w-full h-full bg-[#010725] ease-in-out duration-700'
              : 'ease-in-out duration-500 fixed top-[-100%]'
          }
        >
          <nav className="lg:hidden flex flex-col items-center gap-[27px] pt-[80px]">
            {NAV_ITEMS.map(item => (
              <NavItem {...item} key={item.label} className='text-3xl	'/>
            ))}
            <Button className="mt-[40px] w-[300px]">Download App</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
