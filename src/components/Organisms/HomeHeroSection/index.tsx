import { Button } from '@/components/Atoms/Button'
import Image from 'next/image'

interface HomeHeroSectionProps {}
export const HomeHeroSection = () => {
  return (
    <section>
      <div className="container flex flex-col items-center lg:flex-row lg:justify-between lg:h-[585px]">
        <div className='lg:flex lg:flex-col lg:justify-center lg:w-[740px]'>
          <h1 className='font-sans text-4xl w-[320px] lg:w-[700px] lg:text-6xl lg:leading-[79px] font-bold'>Buy, trade, and hold 350+ cryptocurrencies</h1>
          <p className='font-sans text-base font-normal mt-4 lg:text-lg lg:max-w-[568px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat.
          </p>
          <div className='flex lg:flex-row flex-col items-center justify-center mt-10 gap-4 lg:items-start lg:justify-start'>
            <Button className='w-full lg:w-[210px] lg:text-sm'>Download App</Button>
            <Button className='w-full bg-gray-dark lg:w-[210px] lg:text-sm'>view pricing</Button>
          </div>
        </div>
        <Image
          src={'/assets/apple-computers-mobile.png'}
          alt="Image de computador"
          width={358}
          height={215}
          className='mt-10 lg:hidden'
        />
        {/* <Image
          src={'/assets/apple-computers-desktop.png'}
          alt="Image de computador"
          width={971}
          height={585}
          className='mt-10 hidden lg:block'
        /> */}
      </div>
    </section>
  )
}
