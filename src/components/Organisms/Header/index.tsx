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
            width={136}
            height={48}
          />
        </Link>
        <div
          className="text-white absolute right-8 top-8 block lg:hidden"
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
              ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#010725] ease-in-out duration-500'
              : 'ease-in-out duration-500 fixed left-[-100%]'
          }
        >
          <nav className="flex flex-col lg:flex-row items-center gap-[27px] lg:ml-[66px] pt-[80px]">
            {NAV_ITEMS.map(item => (
              <NavItem {...item} key={item.label} />
            ))}
            <Button className="mt-[40px] lg:mt-0">aperte aqui</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
