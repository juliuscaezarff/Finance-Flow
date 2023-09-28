import Image from 'next/image'

export const PricingHeroSection = () => {
  return (
    <section className="container">
      <div className="lg:flex lg:flex-col lg:items-center mt-10">
        <h1 className="font-sans text-[38px] lg:text-6xl font-bold">
          Pricing
        </h1>
        <p className="font-sans text-base font-normal w-[320px] lg:w-[568px] lg:text-center mt-4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aenean dis placerat. Scelerisque
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-9 lg:gap-14 2xl:gap-[150px]  mt-10">
        <div className="flex items-center gap-[18px] lg:gap-6 w-[275px]">
          <Image
            src={'/icons/benefits-box-1.svg'}
            alt="Icone"
            width={68}
            height={68}
          />
          <p className="font-sans text-base lg:text-lg  font-normal lg:w-[146px]">
            Send & receive
          </p>
        </div>
        <div className="flex items-center gap-[18px] lg:gap-6 w-[275px]">
          <Image
            src={'/icons/benefits-box-3.svg'}
            alt="Icone"
            width={68}
            height={68}
          />
          <p className="font-sans text-base lg:text-lg font-normal">
            Trading Charts
          </p>
        </div>
        <div className="flex items-center gap-[18px] lg:gap-6 w-[161px]">
          <Image
            src={'/icons/benefits-box-2.svg'}
            alt="Icone"
            width={68}
            height={68}
          />
          <p className="font-sans text-base lg:text-lg font-normal">Wallet</p>
        </div>
        <div className="flex items-center gap-[18px] lg:gap-6 w-[275px]">
          <Image
            src={'/icons/benefits-box-4.svg'}
            alt="Icone"
            width={68}
            height={68}
          />
          <p className="font-sans text-base lg:text-lg font-normal">
            Real Time Trading
          </p>
        </div>
      </div>
    </section>
  )
}
