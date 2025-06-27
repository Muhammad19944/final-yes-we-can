import type { Meta, StoryFn } from '@storybook/vue3'
import BaseFormInputTags from './BaseFormInputTags.vue'

type modelValueType = string | Record<string, unknown>

export default {
  title: 'Base/Form/FormInputTags',
  tags: ['autodocs'],
  component: BaseFormInputTags,
  argTypes: {
    modelValue: {
      control: 'object',
      description: 'An array of tag values used as v-model.'
    },
    defaultValue: {
      control: 'object',
      description: 'The initial tag values before user interaction.'
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder text.'
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'],
      description: 'Color of the input field.'
    },
    variant: {
      control: 'select',
      options: ['subtle', 'outline', 'soft'],
      description: 'Visual style of the input field.'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'Size of the input field.'
    },
    autofocus: {
      control: 'boolean',
      description: 'Whether the input should autofocus on mount.'
    },
    autofocusDelay: {
      control: 'number',
      description: 'Delay (in ms) before autofocus is applied.'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input when true.'
    },
    deleteIcon: {
      control: 'text',
      description: 'Custom icon for the delete button on each tag.'
    },
    addOnPaste: {
      control: 'boolean',
      description: 'Add tags when pasting content.'
    },
    addOnTab: {
      control: 'boolean',
      description: 'Add tag when pressing Tab key.'
    },
    addOnBlur: {
      control: 'boolean',
      description: 'Add tag when input loses focus.'
    },
    duplicate: {
      control: 'boolean',
      description: 'Allow duplicate tag values.'
    },
    delimiter: {
      control: 'text',
      description: 'String or RegExp used to split tags when input contains it.'
    },
    max: {
      control: 'number',
      description: 'Maximum number of tags allowed.'
    },
    required: {
      control: 'boolean',
      description: 'Sets the input as required.'
    },
    readonly: {
      control: 'boolean',
      description: 'Makes the input field read-only.'
    },
    closeable: {
      control: 'boolean',
      description: 'Determines if tags can be manually deleted.'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'BaseFormInputTags is a tag input component supporting custom sizes, conversion logic, and extended styling via props and slots.'
      }
    }
  }
} satisfies Meta<typeof BaseFormInputTags>

const Template: StoryFn<typeof BaseFormInputTags> = (args) => ({
  components: { BaseFormInputTags },
  setup() {
    const onUpdateModelValue = (value: null | modelValueType[]) => {
      console.log('value', value)
    }
    return { args, onUpdateModelValue }
  },
  template: `
    <BaseFormInputTags
      v-bind="args"
      @update:model-value="onUpdateModelValue"
      @blur="console.log('blur', $event)"
      @focus="console.log('focus', $event)"
      @change="console.log('change', $event)"
      @invalid="console.log('invalid', $event)"
      @add-tag="console.log('addTag', $event)"
      @remove-tag="console.log('removeTag', $event)"
    />
  `
})

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Enter tags...',
  modelValue: ['Vue', 'Nuxt'],
  color: 'primary',
  variant: 'subtle',
  size: 'md',
  autofocus: false,
  autofocusDelay: 0,
  closeable: true
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  ...Default.args,
  readonly: true
}

export const WithMax = Template.bind({})
WithMax.args = {
  ...Default.args,
  max: 3
}

export const CustomDeleteIcon = Template.bind({})
CustomDeleteIcon.args = {
  ...Default.args,
  deleteIcon: 'heroicons:x-mark-20-solid'
}
