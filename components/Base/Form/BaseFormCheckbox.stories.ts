import type { Meta, StoryObj } from '@storybook/vue3'
import BaseFormCheckbox from './BaseFormCheckbox.vue'

const meta = {
  title: 'Base/Form/BaseFormCheckbox',
  component: BaseFormCheckbox,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'HTML tag or component used to render the root element.',
      defaultValue: 'div'
    },
    id: {
      control: 'text',
      description: 'ID attribute for the checkbox input.'
    },
    label: {
      control: 'text',
      description: 'Text label displayed next to the checkbox.'
    },
    description: {
      control: 'text',
      description: 'Additional descriptive text shown under the label.'
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'],
      description: 'Defines the color scheme of the checkbox.',
      defaultValue: 'primary'
    },
    variant: {
      control: 'select',
      options: ['card', 'list'],
      description: 'Visual style variant of the checkbox.',
      defaultValue: 'list'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Defines the size of the checkbox.',
      defaultValue: 'md'
    },
    indicator: {
      control: 'select',
      options: ['start', 'end', 'hidden'],
      description: 'Position or visibility of the checkbox indicator.'
    },
    icon: {
      control: 'text',
      description: 'Icon shown when checkbox is checked.'
    },
    indeterminateIcon: {
      control: 'text',
      description: 'Icon used when checkbox is in indeterminate state.'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox when set to true.'
    },
    value: {
      control: 'text',
      description: 'The value associated with the checkbox.'
    },
    name: {
      control: 'text',
      description: 'Name attribute of the checkbox input (for forms).'
    },
    required: {
      control: 'boolean',
      description: 'Marks the checkbox as required.'
    },
    defaultValue: {
      control: 'select',
      options: [true, false, 'indeterminate'],
      description: 'Initial value for the checkbox (used if v-model is not set).'
    },
    modelValue: {
      control: 'select',
      options: [true, false, 'indeterminate'],
      description: 'Bound value of the checkbox for two-way binding.'
    },
    ui: {
      control: 'object',
      description: 'UI class overrides for the checkbox’s internal elements.'
    },
    // Slots
    labelSlot: {
      name: 'label',
      control: 'text',
      description: 'Slot to override the default label text.',
      table: {
        category: 'slots'
      }
    },
    descriptionSlot: {
      name: 'description',
      control: 'text',
      description: 'Slot to override the default description text.',
      table: {
        category: 'slots'
      }
    }
  },
  args: {
    label: 'Accept terms and conditions',
    description: 'Please agree before continuing.',
    modelValue: false
  }
} satisfies Meta<typeof BaseFormCheckbox>

export default meta

type Story = StoryObj<typeof BaseFormCheckbox>

export const Default: Story = {
  render: (args) => ({
    components: { BaseFormCheckbox },
    setup() {
      return { args }
    },
    template: `
      <BaseFormCheckbox v-bind="args" />
    `
  })
}

export const WithSlots: Story = {
  render: (args) => ({
    components: { BaseFormCheckbox },
    setup() {
      return { args }
    },
    template: `
      <BaseFormCheckbox v-bind="args">
        <template #label="{ label }">
          <span class="text-blue-600 font-semibold">{{ label }} (Custom Slot)</span>
        </template>

        <template #description="{ description }">
          <span class="text-gray-500 italic">{{ description }}</span>
        </template>
      </BaseFormCheckbox>
    `
  }),
  args: {
    label: 'Subscribe to newsletter',
    description: 'You may unsubscribe at any time.',
    modelValue: false
  }
}
