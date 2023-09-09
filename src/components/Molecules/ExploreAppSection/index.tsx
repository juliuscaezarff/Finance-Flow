import { Button } from '@/components/Atoms/Button'
import Image from 'next/image'

export const ExploreAppSection = () => {
  return (
    <section className='w-full bg-blue-primary-light mt-[80px] lg:h-[450px]'>
      <div className='container mt-10 flex flex-col lg:flex-row items-center justify-center'>
        <div className='flex flex-col items-center justify-center lg:items-start'>
          <h2 className='font-sans w-[305px] lg:w-[589px] text-[28px] lg:text-[42px] font-bold text-center lg:text-left'>Explore endless possibilities with FinanceFlow</h2>
          <p className='w-[330px] lg:w-[496px] font-sans text-base lg:text-lg font-normal text-center lg:text-left mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
          <Button className='w-[338px] lg:w-[210px] bg-white text-blue-primary-light lg:mt-8 text-sm'>Download App</Button>
        </div>
        <Image
          src={'/assets/two-iphone-cut-mobile.png'}
          alt="imagem de dois celulares"
          width={297}
          height={319}
          className='mt-[-9px] lg:hidden'
        />
         <Image
          src={'/assets/two-iphone-cut-desktop.svg'}
          alt="imagem de dois celulares"
          width={592}
          height={689}
          className='mt-[-110px] hidden lg:block'
        />
      </div>
    </section>
  )
}
