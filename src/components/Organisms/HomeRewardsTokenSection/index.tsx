import { IconBox } from '@/components/Molecules/IconBox'
import Image from 'next/image'

export const HomeRewardsTokenSection = () => {
  return (
    <section className="container mt-20 flex flex-col items-center justify-center">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[163px]">
        <div>
          <Image
            src={'/assets/two-iphone-mobile.png'}
            alt="imagem de dois celulares"
            width={324}
            height={382}
            className="lg:hidden"
          />
          <Image
            src={'/assets/two-iphone-desktop.png'}
            alt="imagem de dois celulares"
            width={501}
            height={591}
            className="hidden lg:block"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-sans text-[28px] font-bold mt-10 lg:w-[475px] lg:text-[42px]">
            Earn daily rewards on your idle tokens
          </h2>
          <p className="font-sans text-base font-normal max-w-[330px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
          <div className="flex flex-col gap-4">
            <IconBox
              iconsrc="/icons/token-icon-1.svg"
              text="Lowest fees in market"
            />
            <IconBox
              iconsrc="/icons/token-icon-2.svg"
              text="Fast and secure transactions"
            />
            <IconBox
              iconsrc="/icons/token-icon-3.svg"
              text="256-bit secure encryption"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[163px]">
        <div className="flex flex-col gap-4">
          <h2 className="font-sans text-[28px] font-bold mt-10 lg:w-[475px] lg:text-[42px]">
            Earn daily rewards on your idle tokens
          </h2>
          <p className="font-sans text-base font-normal max-w-[330px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
          <div className="flex flex-col gap-4">
            <IconBox
              iconsrc="/icons/token-icon-4.svg"
              text="100% Private data"
            />
            <IconBox
              iconsrc="/icons/token-icon-5.svg"
              text="99.99% Uptime guarantee"
            />
            <IconBox
              iconsrc="/icons/token-icon-6.svg"
              text="24/7 Dedicated support"
            />
          </div>
        </div>
        <div>
          <Image
            src={'/assets/apple-computers-mobile.png'}
            alt="imagem de dois celulares"
            width={358}
            height={215}
            className="mt-10"
          />
        </div>
      </div>
    </section>
  )
}
