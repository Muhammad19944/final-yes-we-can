import BaseAccordion from './BaseAccordion.vue'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Base/Accordion',
  tags: ['autodocs'],
  component: BaseAccordion,
  argTypes: {
    as: {
      control: 'text',
      description: 'The HTML element or component to render as the wrapper.'
    },
    items: {
      control: 'object',
      description: 'Array of accordion items with content, label, icons, and UI configuration.'
    },
    trailingIcon: {
      control: 'text',
      description: 'Icon shown on the trailing edge of accordion headers.'
    },
    labelKey: {
      control: 'text',
      description: 'Key name in item object to use as label.'
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether all items can be collapsed or not.'
    },
    defaultValue: {
      control: 'object',
      description: 'Default expanded item(s).'
    },
    modelValue: {
      control: 'object',
      description: 'Controlled expanded item(s).'
    },
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Accordion selection type.'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables all accordion interaction when true.'
    },
    unmountOnHide: {
      control: 'boolean',
      description: 'Unmount content when it is hidden.'
    },
    ui: {
      control: 'object',
      description: 'Custom UI classes for accordion layout and internal elements.'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'BaseAccordion is a wrapper for UAccordion component with extended props and slot support.'
      }
    }
  }
} satisfies Meta<typeof BaseAccordion>

const Template: StoryFn<typeof BaseAccordion> = (args) => ({
  components: { BaseAccordion },
  setup() {
    const onUpdateModelValue = (value: string | string[] | undefined) => {
      console.log('value', value)
    }
    return { args, onUpdateModelValue }
  },
  template: `
    <BaseAccordion
      v-bind="args"
    />
  `
})

export const Default = Template.bind({})
Default.args = {
  // modelValue: 'section-1',
  // collapsible: true,
  // labelKey: 'label',
  // type: 'single',
  // unmountOnHide: true,
  items: [
    {
      label: 'Section 1',
      content: 'Content for section 1',
      value: 'section-1'
    },
    {
      label: 'Section 2',
      content: 'Content for section 2',
      value: 'section-2'
    },
    {
      label: 'Section 3',
      content: 'Content for section 3',
      value: 'section-3'
    }
  ]
}

export const MultipleOpen = Template.bind({})
MultipleOpen.args = {
  ...Default.args,
  type: 'multiple',
  modelValue: ['section-1', 'section-2']
}

export const WithCustomTrailingIcon = Template.bind({})
WithCustomTrailingIcon.args = {
  ...Default.args,
  trailingIcon: 'heroicons:chevron-down'
}

export const DisabledAccordion = Template.bind({})
DisabledAccordion.args = {
  ...Default.args,
  disabled: true
}
