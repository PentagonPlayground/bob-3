import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Accordion } from '.'

test('shows expected content', async () => {
  render(<Accordion type="single">eee</Accordion>)
  expect(screen.getByTestId('accordion').textContent).toBe('eee')
})
