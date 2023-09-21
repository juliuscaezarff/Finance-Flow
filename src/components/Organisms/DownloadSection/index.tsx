import { Button } from '@/components/Atoms/Button'
import Image from 'next/image'
import { AiFillApple } from 'react-icons/ai'
import { BsGooglePlay } from 'react-icons/bs'

export const DownloadSection = () => {
  return (
    <section className="container ">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <h2 className="font-sans text-[28px] lg:text-[42px] font-bold w-[300px] lg:w-[468px] mt-20">
        Download our app
        </h2>
        <p className="font-sans text-base lg:text-lg font-normal w-[330px] lg:w-[461px] mt-4 lg:mt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque
          orci amet, amet .
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 lg:gap-[72px] mt-6 lg:flex-row">
        <div className="w-[358px] lg:w-[563px] h-[580px] lg:h-[775px] bg-blue-primary flex flex-col items-center rounded-[48px]">
          <div className="text-left">
            <h2 className="font-sans font-bold text-[28px] lg:text-[42px] mt-9 text-left w-[252px]lg:w-[348px] lg:mt-[48px]">
              iOS & Android App
            </h2>
            <p className="font-sans text-base lg:text-lg font-normal mt-4 lg:mt-2 w-[293px] lg:w-[443px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed nulla integer in pellentesque tortor semper elementum. Felis.
            </p>
            <Button className="flex gap-1 mt-6 h-[70px] lg:w-[193px] text-xs font-normal">
              <AiFillApple size={26} />
              App Store
            </Button>
          </div>
          <Image
            src={'/assets/iPhones-mobile.svg'}
            alt="icone"
            width={284}
            height={585813}
            className="mt-[39px] lg:hidden"
          />
          <Image
            src={'/assets/iPhones-desktop.svg'}
            alt="icone"
            width={485}
            height={935}
            className="mt-10 hidden lg:block"
          />
        </div>

        <div className="w-[358px] lg:w-[563px] h-[580px] lg:h-[775px] bg-blue-primary flex flex-col items-center rounded-[48px]">
          <div className="text-left">
            <h2 className="font-sans font-bold text-[28px] lg:text-[42px] mt-9 text-left w-[252px]lg:w-[441px] lg:mt-[48px]">
              Download for Android
            </h2>
            <p className="font-sans text-base lg:text-lg font-normal mt-4 lg:mt-2 w-[293px] lg:w-[443px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed nulla integer in pellentesque tortor semper elementum. Felis.
            </p>
            <Button className="flex gap-2 mt-6 lg:mt-8 h-[70px] lg:w-[193px] text-xs font-normal">
              <BsGooglePlay size={26} />
              PLAY STORE
            </Button>
          </div>
          <Image
            src={'/assets/samsung-galaxys-mobile.svg'}
            alt="icone"
            width={284}
            height={581}
            className="mt-[36px] lg:hidden"
          />
          <Image
            src={'/assets/samsung-galaxys-desktop.svg'}
            alt="icone"
            width={454}
            height={935}
            className="mt-14 hidden lg:block"
          />
        </div>
      </div>
    </section>
  )
}
