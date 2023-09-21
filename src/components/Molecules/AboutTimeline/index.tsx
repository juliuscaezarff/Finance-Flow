interface AboutTimelineProps {
  year: number
}

export const AboutTimeline = ({ year }: AboutTimelineProps) => {
  return (
    <div className="w-[340px] h-[234px] lg:w-[678px] lg:h-[188px]">
      <div className="flex gap-12">
        <span className="w-6 h-6 bg-white rounded-full"></span>

        <div>
          <h1 className="font-sans text-[28px] font-bold">{year}</h1>
          <h3 className="font-sans text-lg font-bold mt-4">Announcement</h3>
          <p className="font-sans text-base font-normal w-[260px] lg:w-[600px] mt-3 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis
            vivamus at mattis bibendum congue cras id interdum. Risus leo et.
          </p>
        </div>
      </div>
      <hr />
    </div>
  )
}
