import type { Meta, StoryObj } from '@storybook/vue3'
import BaseAvatar from '~/components/Base/Avatar/BaseAvatar.vue'

const meta = {
  title: 'Base/Avatar',
  component: BaseAvatar,
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
    }
  }
} satisfies Meta<typeof BaseAvatar>

export default meta
type Story = StoryObj<typeof BaseAvatar>

export const Image: Story = {
  args: {
    src: 'https://github.com/benjamincanac.png'
  }
}

export const Size: Story = {
  args: {
    src: 'https://github.com/benjamincanac.png',
    size: 'md'
  }
}

export const Background: Story = {
  args: {
    background: 'gradient',
    size: '2xl',
    icon: 'solar:user-speak-rounded-bold'
  }
}
