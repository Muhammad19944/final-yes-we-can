import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonSocial from './ButtonSocial.vue'

const meta = {
  title: 'Button/ButtonSocial',
  component: ButtonSocial,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'Name of the icon to display (e.g., i-heroicons-globe-alt).'
    },
    text: {
      control: 'text',
      description: 'Text to display next to the icon.'
    }
  }
} satisfies Meta<typeof ButtonSocial>

export default meta
type Story = StoryObj<typeof ButtonSocial>

// export const Default: Story = {}

export const Google: Story = {
  args: {
    icon: 'i-ywc-google',
    text: 'Google'
  }
}

export const Facebook: Story = {
  args: {
    icon: 'i-ywc-facebook',
    text: 'Facebook'
  }
}
