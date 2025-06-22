import type { Meta, StoryObj } from '@storybook/vue3'
import BaseFormRadioGroup from './BaseFormRadioGroup.vue'

const meta = {
  title: 'Base/Form/BaseFormRadioGroup',
  component: BaseFormRadioGroup,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'The HTML tag or component to render as the root wrapper.'
    },
    legend: {
      control: 'text',
      description: 'The legend text for the group (accessible label for the fieldset).'
    },
    valueKey: {
      control: 'text',
      description: 'The key to use for accessing the value in each item object.'
    },
    labelKey: {
      control: 'text',
      description: 'The key to use for accessing the label in each item object.'
    },
    descriptionKey: {
      control: 'text',
      description: 'The key to use for accessing the description in each item object.'
    },
    items: {
      control: 'object',
      description: 'The list of radio group items to display.'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Controls the size of the radio items.'
    },
    variant: {
      control: 'select',
      options: ['card', 'list', 'table'],
      description: 'The visual style of the radio group.'
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'],
      description: 'The color theme of the radio buttons.'
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout direction of the radio group.'
    },
    indicator: {
      control: 'select',
      options: ['start', 'end', 'hidden'],
      description: 'Position or visibility of the selected indicator.'
    },
    defaultValue: {
      control: 'text',
      description: 'Default value to pre-select when no value is bound.'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the entire group of radio buttons.'
    },
    loop: {
      control: 'boolean',
      description: 'Enable arrow-key loop navigation across radio buttons.'
    },
    modelValue: {
      control: 'text',
      description: 'The controlled value of the selected radio option.'
    },
    name: {
      control: 'text',
      description: 'Name attribute applied to each radio input (for forms).'
    },
    required: {
      control: 'boolean',
      description: 'Mark the radio group as a required field.'
    },
    ui: {
      control: 'object',
      description: 'Custom class names for internal elements.'
    },
    legendSlot: {
      name: 'legend',
      control: 'text',
      description: 'Slot to override legend content.',
      table: {
        category: 'slots'
      }
    }
  },
  args: {
    size: 'md',
    variant: 'list',
    color: 'primary',
    orientation: 'vertical',
    indicator: 'start',
    items: [
      { label: 'Option A', value: 'a' },
      { label: 'Option B', value: 'b' },
      { label: 'Option C', value: 'c' }
    ]
  }
} satisfies Meta<typeof BaseFormRadioGroup>

export default meta

type Story = StoryObj<typeof BaseFormRadioGroup>

export const Default: Story = {
  render: (args) => ({
    components: { BaseFormRadioGroup },
    setup() {
      return { args }
    },
    template: `
      <BaseFormRadioGroup v-bind="args" />
    `
  }),
  args: {
    legend: 'Choose an option',
    modelValue: 'a'
  }
}

export const WithSlots: Story = {
  render: (args) => ({
    components: { BaseFormRadioGroup },
    setup() {
      return { args }
    },
    template: `
      <BaseFormRadioGroup v-bind="args">
        <template #legend>
          <span class="text-lg font-bold text-red-500">Legend Slot</span>
        </template>

        <template #label="{ item }">
          <span class="text-blue-600">Custom: {{ item.label }}</span>
        </template>

        <template #description="{ item }">
          <span class="text-gray-500 text-sm italic">About {{ item.label }}</span>
        </template>
      </BaseFormRadioGroup>
    `
  }),
  args: {
    modelValue: 'b'
  }
}
