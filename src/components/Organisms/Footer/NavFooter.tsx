import Link from 'next/link'

export const NavFooter = () => {
  return (
    <div className='flex gap-[95px] mt-9'>
      <div className='flex flex-col gap-4'>
        <Link
          href={'/'}
          className="text-light-gray font-medium font-sans text-sm uppercase"
        >
          Home
        </Link>
        <Link
          href={'/about'}
          className="text-light-gray font-medium font-sans text-sm uppercase flex items-center gap-2"
        >
          About
        </Link>
        <Link
          href={'/pricing'}
          className="text-light-gray font-medium font-sans text-sm uppercase flex items-center gap-2"
        >
          Pricing
        </Link>
      </div>
      <div className='flex flex-col gap-4'>
        <Link
          href={'/'}
          className="text-light-gray font-medium font-sans text-sm uppercase flex items-center gap-2"
        >
          Tokens
        </Link>
        <Link
          href={'/'}
          className="text-light-gray font-medium font-sans text-sm uppercase flex items-center gap-2"
        >
          Blog
        </Link>
        <Link
          href={'/'}
          className="text-light-gray font-medium font-sans text-sm uppercase flex items-center gap-2"
        >
          Contact us
        </Link>
      </div>
    </div>
  )
}
