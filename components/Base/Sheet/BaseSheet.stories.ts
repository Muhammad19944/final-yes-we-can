import type { Meta, StoryObj } from '@storybook/vue3'
import BaseSheet from './BaseSheet.vue'

const meta: Meta<typeof BaseSheet> = {
  title: 'Base/Sheet',
  component: BaseSheet,
  tags: ['autodocs'],
  args: {
    shadow: 'shadow-1',
    rounded: 'xl',
    ui: {
      root: ''
    }
  },
  argTypes: {
    shadow: {
      control: { type: 'select' },
      options: [false, 'shadow-1', 'shadow-2'],
      description: 'Controls the shadow level or disables it completely. `false` disables shadow.',
      table: {
        category: 'Props',
        defaultValue: { summary: `'shadow-1'` },
        type: { summary: `'shadow-1' | 'shadow-2' | false` }
      }
    },
    rounded: {
      control: 'select',
      options: [true, false, 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'Rounded corners — can be boolean or specific size',
      table: {
        type: {
          summary: 'boolean | SizeType'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    ui: {
      control: 'object',
      description: 'Allows you to apply custom classes to the root element.',
      table: {
        category: 'Props',
        type: { summary: 'Partial<{ root?: string | string[] }>' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A base visual container component with shadow and rounded options. Commonly used for wrapping UI blocks like cards, forms, or modals.'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof BaseSheet>

export const Default: Story = {
  render: (args) => ({
    components: { BaseSheet },
    setup: () => ({ args }),
    template: `
      <BaseSheet v-bind="args">
        <div class="p-4 text-center text-sm text-gray-600">
          This is a sheet. You can place any content inside.
        </div>
      </BaseSheet>
    `
  })
}
