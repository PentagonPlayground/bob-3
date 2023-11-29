import { ReactNode } from 'react'

export type AccordionProps = {
  type: 'single' | 'multiple'
  className?: string
  children?: ReactNode
}
