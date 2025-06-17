import type { Meta, StoryObj } from '@storybook/vue3'
import BaseLabel from '~/components/Base/Label/BaseLabel.vue'

const meta = {
  title: 'Base/Label',
  component: BaseLabel,
  tags: ['autodocs'],
  argTypes: {
    visible: {
      control: 'boolean',
      description: 'Label visible toggle'
    },
    text: {
      control: 'text',
      description: 'Heading font text'
    }
  }
} satisfies Meta<typeof BaseLabel>

export default meta
type Story = StoryObj<typeof BaseLabel>

export const Default: Story = {
  args: {
    text: 'Label text',
    visible: true
  }
}
