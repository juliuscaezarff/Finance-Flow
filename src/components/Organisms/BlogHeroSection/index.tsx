import { BlogCard } from '@/components/Molecules/BlogCard'
import Image from 'next/image'

export const BlogHerosection = () => {
  return (
    <section className="container flex flex-col items-center">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-[80px] mt-10">
        <h2 className="font-sans text-[38px] text-start lg:text-6xl font-bold w-[341px] lg:w-[539px]">
          Blog
        </h2>
        <p className="font-sans text-base lg:text-lg font-normal w-[320px] lg:w-[568px] mt-4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aenean dis placerat.
        </p>
      </div>

      <div>
        <div className='hidden lg:block mt-12'>
          <div className="bg-blue-primary rounded-[40px] w-[1198px] flex">
            <div className='py-[58px] pl-[47px] pr-[105px]'>
              <span className="w-[73px] py-2 px-4 font-sans uppercase text-xs text-center  bg-blue-primary-light rounded-[1000px]">
                Products
              </span>
              <h2 className="font-sans text-[28px] font-bold w-[455px] mt-[21px]">
                Cryptocurrency Explained With Pros and Cons for Investment
              </h2>
              <p className="font-sans text-lg font-normal w-[463px] mt-4">
                Lorem ipsum dolor sit ametero irseo, consectetur adipiscing
                elit. Scelerisque viverra donec diammeo.
              </p>
            </div>

            <Image
              src={'/assets/blog-image-hero-section.png'}
              alt=""
              width={586}
              height={334}
              className='rounded-r-[40px]'
            />
          </div>
        </div>

        <BlogCard
          imageBlogsrc={'/assets/blog-image.png'}
          title="The Basics about Cryptocurrency"
          text="Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo."
          imagePerfilsrc={'/assets/foto-de-pessoa-branca.png'}
          name="Alex Turner"
          data="August 2, 2021"
          className="lg:hidden mt-12"
        />
      </div>
    </section>
  )
}
