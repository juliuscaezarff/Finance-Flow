import { Button } from '@/components/Atoms/Button'
import { Input } from '@/components/Atoms/Input'
import Image from 'next/image'

export const NewsletterSection = () => {
  return (
    <section className="bg-blue-primary-light w-full mt-20 h-[521px] lg:h-[278px] lg:py-[84px] ">
      <div className="container flex flex-col lg:flex-row items-center justify-center ">
        <div className="flex flex-col lg:flex-row lg:gap-6 items-center">
          <Image
            src={'/icons/mail-white.png'}
            alt=""
            width={68}
            height={68}
            className="mt-20 lg:mt-0 w-[68px] h-[68px]"
          />
          <h1 className="font-sans text-[28px] lg:text-[42px] w-[350px] lg:w-[562px] font-bold text-center mt-8 lg:text-start lg:mt-0 ">
            Subscribe to our crypto news weekly newsletter!
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center">
          <Input
            placeholder="Enter email address"
            className="w-[358px] lg:w-[480px] lg:h-[80px] bg-white text-black mt-5"
            type="email"
          />

          <Button className="lg:bg-blue-primary-light bg-blue-light w-[354px] h-[70px] mt-5 lg:absolute lg:w-[140px] lg:h-[64px] lg:ml-[315px] lg:mt-8 ">
            SUbscribe
          </Button>
        </div>
      </div>
    </section>
  )
}
