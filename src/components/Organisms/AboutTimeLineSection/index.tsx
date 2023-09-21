import { AboutTimeline } from '@/components/Molecules/AboutTimeline'

export const TimeLineSection = () => {
  return (
    <section className="container flex flex-col items-center justify-center lg:mt-[179px]">
      <div className="flex flex-col lg:flex-row lg:gap-[133px]">
        <div className="pl-4">
          <h1 className="font-sans text-[28px] lg:text-[42px] font-bold">
            Timeline
          </h1>
          <p className="font-sans text-base lg:text-lg font-normal w-[330px] lg:w-[382px] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>

        <div className="flex flex-col gap-[56px] mt-10">
          <AboutTimeline year={2014} />
          <AboutTimeline year={2016} />
          <AboutTimeline year={2018} />
          <AboutTimeline year={2022} />
        </div>
      </div>
    </section>
  )
}
