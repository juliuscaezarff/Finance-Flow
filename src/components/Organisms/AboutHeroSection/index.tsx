import { AboutCard } from '@/components/Molecules/AboutCard'
import { Card } from '@/components/Molecules/BenefitsBox'

export const AboutHeroSection = () => {
  return (
    <section className="pt-[48px] lg:pt-[60px]">
      <div className="container">
        <div className="flex flex-col lg:items-center lg:justify-center">
          <h1 className="font-sans text-3xl lg:text-6xl font-bold">
            About Finance Flow
          </h1>
          <p className="font-sans text-base font-normal w-[320px] lg:w-[606px] mt-4 lg:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-[156px] mt-10">
          <h2 className="font-sans text-[28px] text-start lg:text-[42px] font-bold w-[266px] lg:w-[539px]">
            What drives Finance Flow?
          </h2>
          <p className="font-sans text-base lg:text-lg font-normal w-[330px] lg:w-[461px] mt-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-[28px] mt-4 lg:mt-[28px]">
          <div className="flex flex-col gap-4 lg:gap-[28px]">
            <AboutCard
              imagesrc="/icons/benefits-box-1.svg"
              title="Send & Receive"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc."
            />
            <AboutCard
              imagesrc="/icons/benefits-box-1.svg"
              title="Send & Receive"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc."
            />
          </div>
          <div className="flex flex-col gap-4 lg:gap-[28px]">
            <AboutCard
              imagesrc="/icons/benefits-box-1.svg"
              title="Send & Receive"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc."
            />
            <AboutCard
              imagesrc="/icons/benefits-box-1.svg"
              title="Send & Receive"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
