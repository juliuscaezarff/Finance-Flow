import { Button } from '@/components/Atoms/Button'
import Image from 'next/image'

interface BlogCardProps {
  imageBlogsrc: string
  title: string
  text: string
  imagePerfilsrc: string
  name: string
  data: string
}

export const BlogCard = ({
  imageBlogsrc,
  title,
  text,
  imagePerfilsrc,
  name,
  data
}: BlogCardProps) => {
  return (
    <div className="w-[358px] h-[580px] lg:w-[382px] lg:h-[590px] bg-blue-primary rounded-[40px] overflow-hidden">
      <Image
        src={imageBlogsrc}
        alt="imagem de um computador"
        width={358}
        height={215}
        className="w-full"
      />

      <div className="mt-10 px-6">
        <span className="w-[109px] py-2 px-4 font-sans uppercase text-xs text-center mt-[-55px] absolute bg-blue-primary-light rounded-[1000px]">
          Products
        </span>
        <h2 className="w-[311px] font-sans text-[22px] font-bold">{title}</h2>
        <p className="w-[310px] font-sans text-base font-normal mt-4">{text}</p>

        <hr className="mt-8" />
      </div>
      <div className="flex gap-5 mt-9 px-6">
        <Image
          src={imagePerfilsrc}
          alt="imagem de uma pessoa"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex flex-col gap-1">
          <p className="font-sans text-base font-bold uppercase">{name}</p>
          <p className="font-sans text-base font-normal uppercase">{data}</p>
        </div>
      </div>
    </div>
  )
}
