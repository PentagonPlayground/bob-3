import { useContext } from 'react'
import { ButtonProps } from './types'
import { ThemeContext } from '../ThemeContext'

export const Button = ({ children, className, onClick, href }: ButtonProps) => {
  const styles = useContext(ThemeContext)
  const rootClassNames = `${styles?.Button?.wrapper} ${className || ''}`

  if (href)
    return (
      <a href={href} className={rootClassNames}>
        {children}
      </a>
    )
  return (
    <button data-testid="button" className={rootClassNames} onClick={onClick}>
      {children}
    </button>
  )
}
