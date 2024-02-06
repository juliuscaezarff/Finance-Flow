'use client'

import Slider from './slider'
import { SwiperProps, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

interface CarrouselProps {}
export function Carrousel(props: CarrouselProps) {
  const settings: SwiperProps = {
    spaceBetween: 50,
    navigation: true,
    pagination: {
      clickable: true
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    },
    loop: true
  }

  return (
    <section className="container flex flex-col items-center justify-center mt-[87px] xl:mt-[191px]">
      <h1 className="font-sans text-[28px] lg:text-[42px] font-bold">
        What our users say?
      </h1>

      <div className="xl:container flex items-center justify-center w-[390px] ">
        <Slider settings={settings}>
          <SwiperSlide>
            <div className="px-[55px] py-[44px] flex flex-col  w-[335px] xl:w-[912px] h-[343px] bg-primary rounded-2xl text-white bg-blue-primary">
              <p className="font-sans text-base  font-medium w-[243px] xl:w-[700px] xl:text-[25px] h-[257px] xl:leading-[39px] leading-5 mb-[25px]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                commodo dolor fermentum dignissim et pellentesque egestas
                mauris, faucibus. Tellus nisi amet non at phasellus faucibus
                senectus in”
              </p>
              <div className="flex items-center gap-5 px-6 w-[243px]">
                <Image
                  src={'/assets/foto-de-pessoa-branca.png'}
                  alt="imagem de uma pessoa"
                  width={58}
                  height={58}
                  className="rounded-full h-[58px]"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-sans text-base font-bold uppercase">
                    John carter
                  </p>
                  <p className="font-sans text-base font-normal uppercase">
                    Role, Company
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-[55px] py-[44px] flex flex-col  w-[335px] xl:w-[912px] h-[343px] bg-primary rounded-2xl text-white bg-blue-primary">
              <p className="font-sans text-base  font-medium w-[243px] xl:w-[700px] xl:text-[25px] h-[257px] xl:leading-[39px] leading-5 mb-[25px]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                commodo dolor fermentum dignissim et pellentesque egestas
                mauris, faucibus. Tellus nisi amet non at phasellus faucibus
                senectus in”
              </p>
              <div className="flex items-center gap-5 px-6 w-[243px]">
                <Image
                  src={'/assets/foto-de-pessoa-branca.png'}
                  alt="imagem de uma pessoa"
                  width={58}
                  height={58}
                  className="rounded-full h-[58px]"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-sans text-base font-bold uppercase">
                    John carter
                  </p>
                  <p className="font-sans text-base font-normal uppercase">
                    Role, Company
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-[55px] py-[44px] flex flex-col  w-[335px] xl:w-[912px] h-[343px] bg-primary rounded-2xl text-white bg-blue-primary">
              <p className="font-sans text-base  font-medium w-[243px] xl:w-[700px] xl:text-[25px] h-[257px] xl:leading-[39px] leading-5 mb-[25px]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                commodo dolor fermentum dignissim et pellentesque egestas
                mauris, faucibus. Tellus nisi amet non at phasellus faucibus
                senectus in”
              </p>
              <div className="flex items-center gap-5 px-6 w-[243px]">
                <Image
                  src={'/assets/foto-de-pessoa-branca.png'}
                  alt="imagem de uma pessoa"
                  width={58}
                  height={58}
                  className="rounded-full h-[58px]"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-sans text-base font-bold uppercase">
                    John carter
                  </p>
                  <p className="font-sans text-base font-normal uppercase">
                    Role, Company
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Slider>
      </div>
    </section>
  )
}
