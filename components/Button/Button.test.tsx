import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from '.'
import { ThemeContext } from '../ThemeContext'

const styles = {
  Button: {
    wrapper: 'test-class banana',
  },
}

test('shows expected content', async () => {
  render(<Button>eee</Button>)
  expect(screen.getByTestId('button').textContent).toBe('eee')
})

test('shows expected classes when a theme is provided', async () => {
  render(
    <ThemeContext.Provider value={styles}>
      <Button>eee</Button>
    </ThemeContext.Provider>
  )
  expect(screen.getByTestId('button')).toHaveClass('test-class banana')
})

test('shows expected classes when a className prop is provided', async () => {
  render(<Button className="p-4 bg-red-500">eee</Button>)
  expect(screen.getByTestId('button')).toHaveClass('p-4 bg-red-500')
})
