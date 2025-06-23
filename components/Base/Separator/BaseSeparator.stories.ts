import type { Meta, StoryObj } from '@storybook/vue3'
import BaseSeparator from './BaseSeparator.vue'

const meta = {
  title: 'Base/Separator',
  component: BaseSeparator,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'HTML tag or component to render as the wrapper element.',
      defaultValue: 'div'
    },
    label: {
      control: 'text',
      description: 'Optional label displayed within or near the separator.'
    },
    icon: {
      control: 'text',
      description: 'Optional icon to show in the separator.'
    },
    avatar: {
      control: 'object',
      description: 'Avatar object to render inside the separator. Useful for profile images.'
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'],
      description: 'Color theme of the separator.',
      defaultValue: 'neutral'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the separator.',
      defaultValue: 'xs'
    },
    type: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: 'Style of the separator line.',
      defaultValue: 'solid'
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the separator.',
      defaultValue: 'horizontal'
    },
    decorative: {
      control: 'boolean',
      description: 'If true, hides the separator from assistive technologies.',
      defaultValue: false
    },
    ui: {
      control: 'object',
      description: 'Object to provide custom Tailwind classes for internal parts.'
    },
    default: {
      control: 'text',
      description: 'Default slot for injecting custom content inside the separator.',
      table: {
        category: 'slots'
      }
    }
  }
} satisfies Meta<typeof BaseSeparator>

export default meta
type Story = StoryObj<typeof BaseSeparator>

export const Default: Story = {
  args: {
    label: 'OR'
  }
}

export const WithIcon: Story = {
  args: {
    icon: 'i-heroicons-sparkles-20-solid'
  }
}

export const WithAvatar: Story = {
  args: {
    avatar: {
      src: 'https://github.com/nuxt.png'
    }
  }
}

export const WithSlot: Story = {
  render: (args) => ({
    components: { BaseSeparator },
    setup() {
      return { args }
    },
    template: `
      <BaseSeparator v-bind="args">
        <template #default>
          <span class="text-xs text-gray-500">Custom slot content</span>
        </template>
      </BaseSeparator>
    `
  }),
  args: {
    label: 'Label from prop',
    color: 'info'
  }
}
