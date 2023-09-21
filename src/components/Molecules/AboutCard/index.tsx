import Image from "next/image"

interface AboutCardProps {
  imagesrc: string
  title: string
  text: string
}

export const AboutCard = ({ imagesrc, title, text }: AboutCardProps) => {
  return (
    <div className="w-[358px] lg:w-[585px] h-[370px] lg:h-[246px] bg-blue-primary flex flex-col py-14 px-8 rounded-[48px] lg:flex-row lg:items-start lg:gap-6">
      <Image src={imagesrc} alt="icone" width={68} height={68} />
      <div className="">
      <h2 className="font-sans text-lg mt-8 lg:mt-0">{title}</h2>
      <p className="font-sans text-base font-normal mt-2 w-[279px] lg:w-[402px]">
        {text}
      </p>
      </div>
    </div>
  )
}
