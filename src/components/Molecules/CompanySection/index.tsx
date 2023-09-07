import Image from 'next/image'

export const CompanySection = () => {
  return (
    <div className="container flex flex-col items-center justify-center pt-[80px] lg:pt-0">
      <p className="font-sans text-base font-normal lg:text-lg">
        Finance flow has been featured on
      </p>
      <div className="flex flex-col items-center justify-center mt-6 lg:flex-row lg:gap-[93px]">
        <div className="flex gap-10 lg:gap-[93px]">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-[93px]">
            <Image
              src={'/icons/company-icon-1.png'}
              alt="logo company"
              width={179}
              height={32}
            />
            <Image
              src={'/icons/company-icon-2.png'}
              alt="logo company"
              width={179}
              height={32}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-[93px]">
            <Image
              src={'/icons/company-icon-3.png'}
              alt="logo company"
              width={179}
              height={32}
            />
            <Image
              src={'/icons/company-icon-4.png'}
              alt="logo company"
              width={179}
              height={32}
            />
          </div>
        </div>
        <Image
          src={'/icons/company-icon-5.png'}
          alt="logo company"
          width={179}
          height={32}
          className='mt-4 lg:mt-0'
        />
      </div>
    </div>
  )
}
