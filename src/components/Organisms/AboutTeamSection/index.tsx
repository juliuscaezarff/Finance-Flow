import { CompanySection } from '@/components/Molecules/CompanySection'
import Image from 'next/image'

export const TeamSection = () => {
  return (
    <section className="container mt-20 lg:mt-[120px]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-[156px]">
        <h2 className="font-sans text-[28px] lg:text-[42px] font-bold w-[300px] lg:w-[468px] mt-20">
          Our Team
        </h2>
        <p className="font-sans text-base lg:text-lg font-normal w-[330px] lg:w-[496px] mt-4 lg:mt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
          lorem purus justo, ultricies.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center lg:flex-row gap-6 mt-6 lg:mt-12">
        <div className="bg-blue-primary w-[358px] h-[528px] px-6 py-6 rounded-[40px]">
          <Image
            src={'/assets/team-person1.png'}
            alt="pessoa branca com camisa cinza"
            width={327}
            height={400}
            className="rounded-[32px]"
          />

          <h4 className="font-sans text-base font-bold mt-8">John Carter</h4>
          <p className="font-sans text-base font-normal mt-3">
            CEO & CO-Founder
          </p>
        </div>

        <div className="bg-blue-primary w-[358px] h-[528px] px-6 py-6 rounded-[40px]">
          <Image
            src={'/assets/team-person2.png'}
            alt="pessoa branca com camisa cinza"
            width={327}
            height={400}
            className="rounded-[32px]"
          />

          <h4 className="font-sans text-base font-bold mt-8">Sophie Moore</h4>
          <p className="font-sans text-base font-normal mt-3">Community Lead</p>
        </div>

        <div className="bg-blue-primary w-[358px] h-[528px] px-6 py-6 rounded-[40px]">
          <Image
            src={'/assets/team-person3.png'}
            alt="pessoa branca com camisa cinza"
            width={327}
            height={400}
            className="rounded-[32px]"
          />

          <h4 className="font-sans text-base font-bold mt-8">Alex Turner</h4>
          <p className="font-sans text-base font-normal mt-3">Operations</p>
        </div>
      </div>

      <div className='flex flex-col items-center mt-[127px]'>
        <h1 className='font-sans text-[28px] lg:text-[42px] font-bold text-center'>Investors</h1>
        <p className='font-sans text-base lg:text-lg font-normal w-[330px] lg:w-[496px] text-center lg:mb-10 mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
          lorem purus justo, ultricies.
        </p>

        <CompanySection />
      </div>
    </section>
  )
}
