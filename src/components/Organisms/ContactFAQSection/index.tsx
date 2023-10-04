'use client'

import { AccordionBox } from '@/components/Molecules/AccordionContact'

export const Faqsection = () => {
  return (
    <section className='container flex flex-col items-center mt-[120px] '>
      <h1 className='font-sans text-[38px] font-bold lg:text-6xl mb-8 lg:mb-20 '>FAQ</h1>
      <AccordionBox />
    </section>
  )
}
