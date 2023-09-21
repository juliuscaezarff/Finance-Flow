import { Button } from '@/components/Atoms/Button'
import { HomeBenefitsBox } from '@/components/Molecules/BenefitsBox'
import { CompanySection } from '@/components/Molecules/CompanySection'
import Image from 'next/image'

export const HomeBenefitsSection = () => {
  return (
    <section>
      <div className="container flex flex-col items-center justify-center">
        <CompanySection />

        <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-[740px] mt-[64px]">
          <h1 className="font-sans font-bold text-3xl w-[273px] lg:w-[534px] lg:text-[42px]">
            Build your crypto portfolio
          </h1>
          <p className="font-sans text-base w-[314px] lg:w-[496px] lg:text-center mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row mt-20 lg:gap-[26px]">
          <div className="flex flex-col gap-4">
            <HomeBenefitsBox
              iconsrc="/icons/benefits-box-1.svg"
              title="Send & Receive"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
            />
            <HomeBenefitsBox
              iconsrc="/icons/benefits-box-2.svg"
              title="100% Secure Wallet"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
            />
          </div>
          <div className="w-[358px] lg:w-[477px] h-[622px] bg-blue-primary-light flex flex-col items-center rounded-[48px]">
            <div>
              <h2 className="font-sans text-lg mt-8 text-left w-[208px]">
                iOS & Android App
              </h2>
              <p className="font-sans text-base font-normal mt-6 lg:mt-2 w-[303px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                amet, morbi non at sed neque.
              </p>
            </div>
            <Image
              src={'/assets/iphone-benefits-mobile.png'}
              alt="icone"
              width={285}
              height={583}
              className="mt-10 lg:hidden"
            />
            <Image
              src={'/assets/iphone-benefits-desktop.png'}
              alt="icone"
              width={374}
              height={10}
              className=" hidden lg:block mt-[17px]"
            />
          </div>
          <div className="flex flex-col gap-4">
            <HomeBenefitsBox
              iconsrc="/icons/benefits-box-3.svg"
              title="100% Secure Wallet"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
            />
            <HomeBenefitsBox
              iconsrc="/icons/benefits-box-4.svg"
              title="100% Secure Wallet"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
            />
          </div>
        </div>

        <Button className="mt-12">Download App</Button>
      </div>
    </section>
  )
}
