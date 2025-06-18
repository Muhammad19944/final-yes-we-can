import type { Meta, StoryObj } from '@storybook/vue3'
import BaseFormInput from './BaseFormInput.vue'

const meta = {
  title: 'Base/Form/BaseFormInput',
  component: BaseFormInput,
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
    type: {
      control: 'select',
      options: [
        'number',
        'reset',
        'submit',
        'color',
        'button',
        'checkbox',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'radio',
        'range',
        'search',
        'tel',
        'text',
        'time',
        'url',
        'week'
      ],
      description: 'Specifies the HTML input type (e.g. text, password, email, etc).'
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
    placeholder: 'Type something...',
    type: 'text',
    color: 'primary',
    variant: 'subtle',
    size: 'xl',
    autocomplete: 'off',
    autofocusDelay: 0
  }
} satisfies Meta<typeof BaseFormInput>
export default meta

type Story = StoryObj<typeof BaseFormInput>

export const Default: Story = {}

export const WithIcon: Story = {
  args: {
    icon: 'i-heroicons-magnifying-glass'
  }
}

export const WithAvatar: Story = {
  args: {
    avatar: {
      size: 'sm',
      src: 'https://github.com/benjamincanac.png',
      alt: 'User Avatar'
    }
  }
}

export const WithIcons: Story = {
  render: (args) => ({
    components: {
      BaseFormInput
    },
    setup() {
      return {
        args
      }
    },
    template: `
      <div class="flex flex-wrap gap-3">
        <BaseFormInput v-bind="args" icon="solar:alarm-add-linear" placeholder="With icon" />
        <BaseFormInput v-bind="args" icon="solar:alarm-add-linear" placeholder="Icon left" leading />
        <BaseFormInput v-bind="args" icon="solar:alarm-add-linear" placeholder="Icon right" trailing />
        <BaseFormInput v-bind="args" leadingIcon="solar:add-circle-outline" placeholder="Custom left icon" />
        <BaseFormInput v-bind="args" trailingIcon="solar:add-circle-outline" placeholder="Custom right icon" />
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

export const WithLeadingSlot: Story = {
  render: (args) => ({
    components: { BaseFormInput },
    setup() {
      return { args }
    },
    template: `
      <BaseFormInput v-bind="args">
        <template #leading>
          LS
        </template>
      </BaseFormInput>
    `
  }),
  args: {
    placeholder: 'Enter phone number'
  }
}

export const WithDefaultSlot: Story = {
  render: (args) => ({
    components: { BaseFormInput },
    setup() {
      return { args }
    },
    template: `
      <BaseFormInput v-bind="args">
        <template #default>
          DS
        </template>
      </BaseFormInput>
    `
  })
}

export const WithTrailingSlot: Story = {
  render: (args) => ({
    components: { BaseFormInput },
    setup() {
      return { args }
    },
    template: `
      <BaseFormInput v-bind="args">
        <template #trailing>
          TS
        </template>
      </BaseFormInput>
    `
  }),
  args: {
    placeholder: 'Enter text'
  }
}

export const RoundedTrue: Story = {
  args: {
    rounded: true
  }
}

export const RoundedSize: Story = {
  args: {
    rounded: 'xl'
  }
}
