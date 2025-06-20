import type { Meta, StoryObj } from '@storybook/vue3'
import BaseFormInput from './BaseFormInput.vue'
import BaseFormField from './BaseFormField.vue'

const meta = {
  title: 'Base/Form/BaseFormField',
  component: BaseFormField,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'HTML tag or component to use as the wrapper element.',
      defaultValue: 'div'
    },
    name: {
      control: 'text',
      description: 'The form field name (useful for validation or form bindings).'
    },
    errorPattern: {
      control: 'object',
      description: 'A regular expression used to validate the field value.'
    },
    label: {
      control: 'text',
      description: 'Text label displayed above or next to the field.'
    },
    description: {
      control: 'text',
      description: 'Short description shown to clarify field usage.'
    },
    help: {
      control: 'text',
      description: 'Helpful information shown below the field.'
    },
    error: {
      control: 'boolean',
      description: 'Error message string or boolean to trigger error state.'
    },
    hint: {
      control: 'text',
      description: 'Subtle hint displayed alongside the field.'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'Controls overall size of the field.',
      defaultValue: 'md'
    },
    required: {
      control: 'boolean',
      description: 'Marks the field as required.'
    },
    eagerValidation: {
      control: 'boolean',
      description: 'Whether validation should happen immediately as the user types.'
    },
    validateOnInputDelay: {
      control: 'number',
      description: 'Delay (ms) before validation triggers on input.',
      defaultValue: 300
    },
    ui: {
      control: 'object',
      description: 'Custom class names for internal UI structure.'
    },
    default: {
      control: 'text',
      description: 'Slot for custom input or content inside the field.',
      table: {
        category: 'slots'
      }
    },
    labelSlot: {
      name: 'label',
      control: 'text',
      description: 'Custom content for label slot (overrides `label` prop).',
      table: {
        category: 'slots'
      }
    },
    hintSlot: {
      name: 'hint',
      control: 'text',
      description: 'Custom content for hint slot (overrides `hint` prop).',
      table: {
        category: 'slots'
      }
    },
    descriptionSlot: {
      name: 'description',
      control: 'text',
      description: 'Custom content for description slot (overrides `description` prop).',
      table: {
        category: 'slots'
      }
    },
    helpSlot: {
      name: 'help',
      control: 'text',
      description: 'Custom content for help slot (overrides `help` prop).',
      table: {
        category: 'slots'
      }
    },
    errorSlot: {
      name: 'error',
      control: 'text',
      description: 'Custom content for error slot (overrides `error` prop).',
      table: {
        category: 'slots'
      }
    }
  },
  args: {
    size: 'xl'
  }
} satisfies Meta<typeof BaseFormField>
export default meta

type Story = StoryObj<typeof BaseFormField>

export const Default: Story = {
  render: (args) => ({
    components: {
      BaseFormField,
      BaseFormInput
    },
    setup() {
      return { args }
    },
    template: `
      <BaseFormField
        v-bind:label="args.label"
        v-bind:size="args.size"
        v-bind:required="args.required"
        v-bind:error="args.error"
      >
        <BaseFormInput placeholder="Enter your name" v-bind:size="args.size" />
      </BaseFormField>
    `
  }),
  args: {
    label: 'Form label',
    size: 'xl',
    required: true,
    error: false
  }
}

export const WithSlots: Story = {
  render: (args) => ({
    components: {
      BaseFormField,
      BaseFormInput
    },
    setup() {
      return { args }
    },
    template: `
      <BaseFormField
        v-bind:size="args.size"
        v-bind:required="args.required"
      >
        <BaseFormInput
          v-bind:size="args.size"
          placeholder="Enter your name"
          class="w-full"
        />

        <template #label>
          Label slot
        </template>

        <template #hint>
          Hint slot
        </template>

        <template #description>
          Description slot
        </template>

        <template #help>
          Help slot
        </template>

        <template #error>
          Error slot
        </template>
      </BaseFormField>
    `
  }),
  args: {
    size: 'xl',
    required: true
  }
}
