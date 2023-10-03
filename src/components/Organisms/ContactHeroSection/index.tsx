import { Button } from '@/components/Atoms/Button'
import { Input } from '@/components/Atoms/Input'
import Image from 'next/image'

interface ContactHeroSectionProps {}
export function ContactHeroSection(props: ContactHeroSectionProps) {
  return (
    <section className="lg:container pt-20">
      <h1 className="font-sans text-[38px] font-bold ml-4">Get in touch</h1>

      <div className="flex flex-col lg:flex-row lg:gap-[63px] 2xl:gap-[263px]">
        <div className="flex flex-col items-center lg:items-start mt-10">
          <form action="">
            <div className="flex flex-col lg:flex-row gap-6">
              <Input label="Name" type="text" placeholder="Full Name" />
              <Input
                label="Email"
                type="email"
                placeholder="email@example.com"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-6 mt-6 mb-6 lg:mb-8">
              <Input label="Company" type="text" placeholder="Company Name" />
              <Input
                label="Subject"
                type="text"
                placeholder="How can we help?"
              />
            </div>
            <Input
              label="Message"
              type="text"
              placeholder="Your Message"
              className="h-[162px] lg:w-[753px] rounded-[14px] py-0 px-2"
            />
          </form>

          <div className="mt-8 flex">
            <Button className="w-[358px] lg:w-[202px] lg:text-sm h-[70px]">
              Send Message
            </Button>
          </div>
        </div>

        <div className="mt-12 ml-4">
          <h1 className="font-sans text-[28px] lg:text-[22px] font-bold ">
            Want to reach us directly?
          </h1>
          <p className="font-sans text-base font-normal w-[358px] lg:text-lg lg:w-[377px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
            pharetra elementum sit id sagittis non donec egestas.
          </p>

          <div className="flex flex-col gap-6 mt-9">
            <div className="flex items-center gap-4">
              <Image src={'/icons/mail.png'} alt="" width={38} height={38} />
              <p className="font-sans text-lg font-medium">
                contact@example.com
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={'/icons/mail.png'} alt="" width={38} height={38} />
              <p className="font-sans text-lg font-medium">
                support@example.com
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={'/icons/mail.png'} alt="" width={38} height={38} />
              <p className="font-sans text-lg font-medium">press@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
