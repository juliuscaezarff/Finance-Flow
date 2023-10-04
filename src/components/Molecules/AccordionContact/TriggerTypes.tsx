'use client'

import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import './styles.css'

type AccordionTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: string
}

// eslint-disable-next-line react/display-name
export const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, ...props }, ref) => (
  <Accordion.Header>
    <Accordion.Trigger  className='AccordionTrigger flex justify-between items-center w-[358px] lg:w-[862px] text-lg font-bold' {...props} ref={ref}>
      {children}
      <ChevronDownIcon className="AccordionChevron w-[36px] h-[36px] " aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
))
