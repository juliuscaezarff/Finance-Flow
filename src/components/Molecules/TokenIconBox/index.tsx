import Image from 'next/image'

interface TokenIconBoxProps {
  iconsrc: string
  text: string
}

export const TokenIconBox = ({ iconsrc, text }: TokenIconBoxProps) => {
  return (
    <div className="flex items-center gap-4">
      <Image src={iconsrc} alt="icone" width={46} height={46} />
      <p className="font-sans text-base lg:text-lg font-light">{text}</p>
    </div>
  )
}
