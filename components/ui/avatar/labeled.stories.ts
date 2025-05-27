import type { Meta, StoryObj } from '@storybook/vue3'
import AvatarLabeled from '~/components/ui/avatar/labeled.vue'

const meta = {
  title: 'UI/Avatar/Labeled',
  component: AvatarLabeled,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'The HTML element to render as the avatar'
    },
    src: {
      control: 'text',
      description: 'The source URL of the avatar image'
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the avatar image'
    },
    icon: {
      control: 'text',
      description: 'Icon to display in the avatar'
    },
    text: {
      control: 'text',
      description: 'Text to display in the avatar'
    },
    size: {
      control: 'select',
      options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'Avatar sizes'
    },
    customSize: {
      control: 'number',
      description: 'Custom size for the avatar, e.g., 50'
    },
    background: {
      control: 'select',
      options: ['white', 'gradient'],
      description: 'Select background color of the avatar'
    },
    label: {
      control: 'text',
      description: 'Label text to display next to the avatar'
    },
    subLabel: {
      control: 'text',
      description: 'Sub-label text to display below the label'
    }
  }
} satisfies Meta<typeof AvatarLabeled>

export default meta
type Story = StoryObj<typeof AvatarLabeled>

export const Default: Story = {
  args: {
    src: 'https://github.com/benjamincanac.png',
    label: 'Benjamin Canac',
    subLabel: 'Software Engineer'
  }
}
