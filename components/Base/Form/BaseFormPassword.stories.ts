import type { Meta, StoryObj } from '@storybook/vue3'
import BaseFormPassword from './BaseFormPassword.vue'

const meta = {
  title: 'Base/Form/BaseFormPassword',
  component: BaseFormPassword,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'The HTML element to render as the input'
    },
    id: {
      control: 'text',
      description: 'Set id to input element'
    },
    name: {
      control: 'text',
      description: 'Set name to input element'
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder text'
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'],
      description: 'Color variant of the input'
    },
    variant: {
      control: 'select',
      options: ['outline', 'soft', 'subtle', 'ghost', 'none'],
      description: 'Visual variant of the input'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'Input size'
    },
    required: {
      control: 'boolean',
      description: 'Set required input'
    },
    autocomplete: {
      control: 'text',
      description: 'Set autocomplete input (default `off`)'
    },
    autofocus: {
      control: 'boolean',
      description: 'Autofocus in input'
    },
    autofocusDelay: {
      control: 'number',
      description: 'Set autofocusDelay number in input (default `0`)'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable input'
    },
    highlight: {
      control: 'boolean',
      description: 'Set highlight input border'
    },
    icon: {
      control: 'text',
      description: 'Icon name (e.g. solar:home)'
    },
    avatar: {
      control: 'object',
      description: 'Avatar props to display inside the button'
    },
    leading: {
      control: 'boolean',
      description: 'Position leading icon/avatar to left'
    },
    leadingIcon: {
      control: 'text',
      description: 'Icon on the leading side'
    },
    trailing: {
      control: 'boolean',
      description: 'Enable trailing icon'
    },
    trailingIcon: {
      control: 'text',
      description: 'Icon on the trailing side'
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state'
    },
    loadingIcon: {
      control: 'text',
      description: 'Custom loading icon'
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
    }
  },
  args: {
    placeholder: 'Enter password',
    type: 'text',
    color: 'primary',
    variant: 'subtle',
    size: 'xl',
    autocomplete: 'off',
    autofocusDelay: 0
  }
} satisfies Meta<typeof BaseFormPassword>
export default meta

type Story = StoryObj<typeof BaseFormPassword>

export const Default: Story = {}

export const ChangeToggleIcons: Story = {
  render: (args) => ({
    components: {
      BaseFormPassword
    },
    setup() {
      return {
        args
      }
    },
    template: `
      <div class="flex flex-wrap gap-3">
        <BaseFormPassword v-bind="args" modelValue="Change show and hide icons" show-icon="solar:add-circle-outline" hide-icon="solar:minus-circle-outline" />
      </div>
    `
  }),
  args: {
    type: 'text',
    color: 'primary',
    variant: 'subtle',
    size: 'xl'
  }
}
