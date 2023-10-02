import { Button } from '@/components/Atoms/Button'

interface PricingCardsProps {}
export const PricingCards = (props: PricingCardsProps) => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 lg:gap-7 2xl:gap-16 lg:flex-row lg:container mt-12">
      <div className="w-[358px] h-[612px] px-[30px] py-[42px] bg-blue-primary rounded-[48px] ">
        <Button className="w-[73px] h-[36px] px-4 py-2 text-sm font-normal ">
          BASIC
        </Button>
        <h1 className="font-sans text-[43px] font-bold mt-4 ">$ 100 USD</h1>
        <p className="font-sans text-lg font-normal w-[298px] mt-4 ">
          Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et
          nibh.
        </p>
        <div className="mt-[40px] flex flex-col gap-4">
          <h2 className="font-sans text-lg font-bold">Features</h2>
          <div className="flex gap-4 items-center">
            <span className="w-[8px] h-[8px] bg-blue-primary-light rounded-full"></span>
            <h2 className="font-sans text-lg font-normal">
              Everything included in Basic
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <span className="w-[8px] h-[8px] bg-blue-primary-light rounded-full"></span>
            <h2 className="font-sans text-lg font-normal">
              Trading up to $1MM per month
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <span className="w-[8px] h-[8px] bg-blue-primary-light rounded-full"></span>
            <h2 className="font-sans text-lg font-normal">
              Windows & macOS App
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <span className="w-[8px] h-[8px] bg-blue-primary-light rounded-full"></span>
            <h2 className="font-sans text-lg font-normal">Premium Support</h2>
          </div>
        </div>
        <div className="mt-[54px] flex items-center justify-center w-[298px] ">
          <Button className="w-full">contact us</Button>
        </div>
      </div>

      <div className="w-[358px] h-[612px] px-[30px] py-[42px] bg-blue-primary rounded-[48px] ">
        <Button className="w-[73px] h-[36px] px-4 py-2 text-sm font-normal ">
          PRO
        </Button>
        <h1 className="font-sans text-[43px] font-bold mt-4 ">$ 150 USD</h1>
        <p className="font-sans text-lg font-normal w-[298px] mt-4 ">
          Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et
          nibh.
        </p>
        <div className="mt-[40px] flex flex-col gap-4">
          <h2 className="font-sans text-lg font-bold">Features</h2>
          <div className="flex gap-4 items-center">
            <span className="w-[8px] h-[8px] bg-blue-primary-light rounded-full"></span>
            <h2 className="font-sans text-lg font-normal">
              Everything included in Basic
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <span className="w-[8px] h-[8px] bg-blue-primary-light rounded-full"></span>
            <h2 className="font-sans text-lg font-normal">
              Trading up to $1MM per month
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <span className="w-[8px] h-[8px] bg-blue-primary-light rounded-full"></span>
            <h2 className="font-sans text-lg font-normal">
              Windows & macOS App
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <span className="w-[8px] h-[8px] bg-blue-primary-light rounded-full"></span>
            <h2 className="font-sans text-lg font-normal">Premium Support</h2>
          </div>
        </div>
        <div className="mt-[54px] flex items-center justify-center w-[298px] ">
          <Button className="w-full">contact us</Button>
        </div>
      </div>

      <div className="w-[358px] h-[612px] px-[30px] py-[42px] bg-blue-primary rounded-[48px] ">
        <Button className="w-[81px] h-[36px] py-2 text-sm font-normal ">
          EXPERT
        </Button>
        <h1 className="font-sans text-[43px] font-bold mt-4 ">$ 200 USD</h1>
        <p className="font-sans text-lg font-normal w-[298px] mt-4 ">
          Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et
          nibh.
        </p>
        <div className="mt-[40px] flex flex-col gap-4">
          <h2 className="font-sans text-lg font-bold">Features</h2>
          <div className="flex gap-4 items-center">
            <span className="w-[8px] h-[8px] bg-blue-primary-light rounded-full"></span>
            <h2 className="font-sans text-lg font-normal">
              Everything included in Basic
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <span className="w-[8px] h-[8px] bg-blue-primary-light rounded-full"></span>
            <h2 className="font-sans text-lg font-normal">
              Trading up to $1MM per month
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <span className="w-[8px] h-[8px] bg-blue-primary-light rounded-full"></span>
            <h2 className="font-sans text-lg font-normal">
              Windows & macOS App
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <span className="w-[8px] h-[8px] bg-blue-primary-light rounded-full"></span>
            <h2 className="font-sans text-lg font-normal">Premium Support</h2>
          </div>
        </div>
        <div className="mt-[54px] flex items-center justify-center w-[298px] ">
          <Button className="w-full">contact us</Button>
        </div>
      </div>
    </section>
  )
}
