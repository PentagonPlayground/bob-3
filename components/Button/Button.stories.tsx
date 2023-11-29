import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

// Enter a description below
/** A simple button component that can exist as an Anchor or a Button. */
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Click here',
  },
}

export const WithAnAdditionalClassname: Story = {
  args: {
    ...Default.args,
    className: 'w-[300px]',
  },
}

export const AsAButton: Story = {
  args: {
    ...Default.args,
    onClick: () => alert('clicked!'),
  },
}

export const AsALink: Story = {
  args: {
    ...Default.args,
    href: 'https://pentagonplay.co.uk',
  },
}
