'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { AccordionTrigger } from './TriggerTypes'

export const AccordionBox = () => {
  return (
    <Accordion.Root
      className="font-sans text-white w-[358px] lg:w-[862px]"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <Accordion.Item className="py-6" value="item-1">
        <AccordionTrigger>Question 1</AccordionTrigger>
        <Accordion.Content className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
          pharetra elementum sit id sagittis non donec egestas.
        </Accordion.Content>
        <hr className="mt-6" />
      </Accordion.Item>

      <Accordion.Item className="py-6" value="item-2">
        <AccordionTrigger>
          Question 2
        </AccordionTrigger>
        <Accordion.Content className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
          pharetra elementum sit id sagittis non donec egestas.
        </Accordion.Content>
        <hr className="mt-6" />
      </Accordion.Item>

      <Accordion.Item className="py-6" value="item-3">
        <AccordionTrigger>
          Question 3
        </AccordionTrigger>
        <Accordion.Content className="mt-4">
          <div className="AccordionContentText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
            pharetra elementum sit id sagittis non donec egestas.
          </div>
        </Accordion.Content>
        <hr className="mt-6" />
      </Accordion.Item>

      <Accordion.Item className="py-6" value="item-4">
        <AccordionTrigger>
          Question 4
        </AccordionTrigger>
        <Accordion.Content className="mt-4">
          <div className="AccordionContentText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
            pharetra elementum sit id sagittis non donec egestas.
          </div>
        </Accordion.Content>
        <hr className="mt-6" />
      </Accordion.Item>

      <Accordion.Item className="py-6" value="item-5">
        <AccordionTrigger>
          Question 5
        </AccordionTrigger>
        <Accordion.Content className="mt-4">
          <div className="AccordionContentText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
            pharetra elementum sit id sagittis non donec egestas.
          </div>
        </Accordion.Content>
        <hr className="mt-6" />
      </Accordion.Item>
    </Accordion.Root>
  )
}
