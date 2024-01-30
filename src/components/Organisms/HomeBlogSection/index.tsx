import { Button } from '@/components/Atoms/Button'
import { BlogCard } from '@/components/Molecules/BlogCard'

export const HomeBlogSection = () => {
  return (
    <section className="container">
      <div  className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-[300px] mt-10">
        <h2 className="font-sans text-[28px] lg:text-[42px] font-bold w-[300px] lg:w-[468px] mt-20">
          Browse our latest news
        </h2>
        <p className="font-sans text-base lg:text-lg font-normal w-[330px] lg:w-[461px] mt-4 lg:mt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque
          orci amet, amet .
        </p>
      </div>

      <div className="flex flex-col items-center justify-center lg:flex-row gap-6 mt-6 lg:mt-12">
        <BlogCard
          imageBlogsrc={'/assets/blog-image.png'}
          title="The Basics about Cryptocurrency"
          text="Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo."
          imagePerfilsrc={'/assets/foto-de-pessoa-branca.png'}
          name="Alex Turner"
          data="August 2, 2021"
        />
          <BlogCard
          imageBlogsrc={'/assets/blog-image.png'}
          title="The Basics about Cryptocurrency"
          text="Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo."
          imagePerfilsrc={'/assets/foto-de-pessoa-branca.png'}
          name="Alex Turner"
          data="August 2, 2021"
        />
          <BlogCard
          imageBlogsrc={'/assets/blog-image.png'}
          title="The Basics about Cryptocurrency"
          text="Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo."
          imagePerfilsrc={'/assets/foto-de-pessoa-branca.png'}
          name="Alex Turner"
          data="August 2, 2021"
        />
      </div>

     <div className='flex items-center justify-center mt-10'>
     <Button className='bg-gray-dark text-sm w-[242px]'>View All Articles</Button>
     </div>
    </section>
  )
}
