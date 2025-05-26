import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from '~/components/ui/avatar/index.vue'

const meta = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: `<div class="flex justify-center items-center h-32"><story/></div>`
    })
  ],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source for the avatar'
    }
    // size: {
    //   control: 'select',
    //   options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    //   description: 'Avatar sizes'
    // }
  }
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof Avatar>

export const Size: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/123456789?v=4',
    alt: 'Avatar Image'
    // size: 'md'
  }
}
