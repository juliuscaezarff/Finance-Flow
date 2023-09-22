import Image from 'next/image'

export const AboutOurMission = () => {
  return (
    <section className="mt-11 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row lg:gap-[122px]">
        <div className="pt-[150px]">
          <div className="pl-4 lg:pl-36 ">
            <h1 className="font-sans text-[28px] lg:text-[42px] font-bold">
              Our mission
            </h1>
            <p className="font-sans text-base lg:text-lg font-normal w-[330px] lg:w-[607px] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient lorem purus justo, ultricies. Sollicitudin odio
              elementum urna placerat lacus, vulputate. Non malesuada viverra et
              ultrices cras. Tincidunt tempor, blandit augue ac feugiat.
              Praesent arcu tempus ullamcorper quisque in. Magna fermentum,
              lacus, fermentum arcu.
            </p>
            <p className="font-sans text-base lg:text-lg font-normal w-[330px] lg:w-[607px] mt-8">
              Vulputate pellentesque proin facilisis dignissim gravida sed
              faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in
              nisl, in quis nulla tellus suscipit id. Semper velit odio cras
              pretium tristique habitant. Elit eu penatibus congue orci turpis.
              Enim diam id.
            </p>
          </div>

          <div className="pl-4 lg:pl-36 mt-20">
            <h1 className="font-sans text-[28px] lg:text-[42px] font-bold">
              Our story
            </h1>
            <p className="font-sans text-base lg:text-lg font-normal w-[330px] lg:w-[607px] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient lorem purus justo, ultricies. Sollicitudin odio
              elementum urna placerat lacus, vulputate. Non malesuada viverra et
              ultrices cras. Tincidunt tempor, blandit augue ac feugiat.
              Praesent arcu tempus ullamcorper quisque in. Magna fermentum,
              lacus, fermentum arcu.
            </p>
            <p className="font-sans text-base lg:text-lg font-normal w-[330px] lg:w-[607px] mt-8">
              Vulputate pellentesque proin facilisis dignissim gravida sed
              faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in
              nisl, in quis nulla tellus suscipit id. Semper velit odio cras
              pretium tristique habitant. Elit eu penatibus congue orci turpis.
              Enim diam id.
            </p>
          </div>
        </div>

        <div className="mt-20 lg:mt-[120px] flex items-start">
          <Image
            src={'/assets/planet.svg'}
            alt="imagem de um planeta"
            width={412}
            height={398}
            className="lg:hidden"
            priority={false}
          />

          <Image
            src={'/assets/planet.svg'}
            alt="imagem de um planeta"
            width={654}
            height={632}
            className="hidden lg:block"
            priority={false}
          />
        </div>
      </div>
    </section>
  )
}
