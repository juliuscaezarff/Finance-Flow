'use client'

import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
// import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { ReactNode } from 'react'
import './Slider.css'

interface SlideProps {
  settings: SwiperProps
  children: ReactNode
}

export default function Slider({ settings, children }: SlideProps) {
  return <Swiper modules={[Navigation, Pagination]} {...settings}>{children}</Swiper>
}