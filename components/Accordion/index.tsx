import { Children } from 'react'
import * as RadixAccordion from '@radix-ui/react-accordion'
import { AccordionProps } from './types'

export const Accordion = ({
  type = 'single',
  className,
  children,
}: AccordionProps) => {
  const arrayChildren = Children.toArray(children)
  const classNames = `${className}`
  return (
    <RadixAccordion.Root
      data-testid="accordion"
      className={classNames}
      type={type}
    >
      {Children.map(arrayChildren, (child, i) => (
        <RadixAccordion.Item value={`item-${i}`}>
          <RadixAccordion.Header className="">
            {child}
            <RadixAccordion.Trigger className="" />
          </RadixAccordion.Header>
          <RadixAccordion.Content className="">
            content goes here
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  )
}
