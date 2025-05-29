import type { Meta, StoryObj } from '@storybook/vue3'
import BaseHeading from '~/components/Base/Heading/BaseHeading.vue'

const meta = {
  title: 'Base/Heading',
  component: BaseHeading,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Heading font text'
    },
    level: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9'],
      description: 'Heading font types'
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semi', 'bold', 'extra'],
      description: 'Heading font weight'
    },
    color: {
      control: 'text',
      description: 'Heading font colors using tailwind classes'
    }
  }
} satisfies Meta<typeof BaseHeading>

export default meta
type Story = StoryObj<typeof BaseHeading>

export const Types: Story = {
  args: {
    text: 'Lorem ipsum',
    level: 'h9',
    weight: 'medium',
    color: 'text-green-500'
  }
}
