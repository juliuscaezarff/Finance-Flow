import { IconBox } from '@/components/Molecules/IconBox'
import Image from 'next/image'

export const HomeGetStartedSection = () => {
  return (
    <section className="container flex flex-col lg:flex-row items-center justify-center mt-12 lg:gap-[66px]">
      <div className="flex flex-col gap-4">
        <h2 className="font-sans text-[28px] lg:text-[42px] font-bold">
          Get started today
        </h2>
        <p className="font-sans text-base lg:text-lg font-normal w-[330px] lg:w-[470px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>
        <div className="flex flex-col gap-4">
          <IconBox
            iconsrc="/icons/started-icon-1.svg"
            text="Download app"
          />
          <IconBox
            iconsrc="/icons/started-icon-2.svg"
            text="Create a free account"
          />
          <IconBox
            iconsrc="/icons/started-icon-3.svg"
            text="Start trading"
          />
        </div>
      </div>

      <div className="bg-blue-primary w-[358px] h-[400px] lg:w-[662px] lg:h-[400px] rounded-[40px] flex items-center justify-center mt-10">
        <Image
          src={'/icons/play.svg'}
          alt="icone de play"
          width={100}
          height={100}
        />
      </div>
    </section>
  )
}
