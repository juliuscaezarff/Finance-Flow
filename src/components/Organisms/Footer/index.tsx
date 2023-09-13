'use client'

import Image from 'next/image'
import { BsInstagram } from 'react-icons/bs'
import { AiFillApple, AiFillFacebook } from 'react-icons/ai'
import { BiLogoLinkedin } from 'react-icons/bi'
import { NavFooter } from './NavFooter'
import { Button } from '@/components/Atoms/Button'

export const Footer = () => {
  return (
    <footer className="bg-blue-primary w-full">
      <div className="container pt-[59px] mt-[120px]">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:justify-between">
          <Image
            src={'/logos/logo.svg'}
            alt="Logo finance flow"
            width={154}
            height={30}
          />

          <div className="flex gap-6 ">
            <BsInstagram size={36} className="bg-gray-500 px-2 rounded-full" />

            <AiFillFacebook
              size={36}
              className="bg-gray-500 px-2 rounded-full"
            />

            <BiLogoLinkedin
              size={36}
              className="bg-gray-500 px-2 rounded-full"
            />
          </div>
        </div>

        <div className='flex flex-col lg:flex-row lg:justify-between'>
          <div className="mt-11">
            <h2 className="font-sans text-lg font-bold">Menu</h2>
            <hr className="mt-8" />

            <NavFooter />
          </div>

          <div className="bg-gray-light rounded-[40px] px-[34px] py-[44px] mt-[56px] lg:w-[509px]">
            <h1 className="font-sans text-lg font-bold uppercase">
              Download our Application
            </h1>
            <p className="font-sans text-lg font-normal mt-[18px] lg:w-[420px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed nulla integer{' '}
            </p>
            <div className="flex flex-col lg:flex-row items-center mt-[18px] gap-4">
              <Button className="flex gap-1 w-[274px] h-[70px]">
                <AiFillApple size={26} />
                App Store
              </Button>
              <Button className="flex gap-1 w-[274px] h-[70px]">
                <AiFillApple size={26} />
                PLAY STORE
              </Button>
            </div>
          </div>

        </div>
          <hr className='mt-8 mb-8'/>

          <div className='flex items-center justify-center pb-16'>
            <p className='font-sans text-sm font-normal'>All rights reserved</p>
          </div>
      </div>
    </footer>
  )
}
