import { ReactNode } from 'react'

export type ButtonProps = {
  /** The contents of the button, could be text or components */
  children?: ReactNode
  /** Additional className used for themeing in the consuming application */
  className?: string
  /** URL to pass if this button needs to act as a link */
  href?: string
  /** Click handler if this button needs to act as a button */
  onClick?: () => void
}
