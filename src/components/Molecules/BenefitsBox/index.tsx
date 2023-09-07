import Image from 'next/image'

interface HomeBenefitsBoxProps {
  iconsrc: string
  title: string
  paragraph: string
}

export const HomeBenefitsBox = ({
  iconsrc,
  title,
  paragraph
}: HomeBenefitsBoxProps) => {
  return (
    <div className='w-[358px] lg:w-[325px] h-[295px] bg-blue-primary flex flex-col py-12 px-6 rounded-[48px]'>
      <Image src={iconsrc} alt="icone" width={68} height={68} />
      <h2 className='font-sans text-lg mt-8'>{title}</h2>
      <p className='font-sans text-base font-normal mt-2 w-[279px]'>{paragraph}</p>
    </div>
  )
}
