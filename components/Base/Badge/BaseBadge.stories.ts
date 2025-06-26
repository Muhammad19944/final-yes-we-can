import BaseBadge from './BaseBadge.vue'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Base/Badge',
  tags: ['autodocs'],
  component: BaseBadge,
  argTypes: {
    as: {
      control: 'text',
      description: 'HTML tag or component to render as.',
      defaultValue: 'span'
    },
    label: {
      control: 'text',
      description: 'Text or number to display inside the badge.'
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral', 'greyscale', 'white'],
      description: 'Color of the badge. Supports Nuxt UI and custom colors.'
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'soft', 'subtle'],
      description: 'Visual variant of the badge. "link" and "ghost" are excluded.'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of the badge.'
    },
    square: {
      control: 'boolean',
      description: 'Whether to render the badge as a square shape.',
      defaultValue: false
    },
    icon: {
      control: 'text',
      description: 'Name of the icon to display in the badge.'
    },
    avatar: {
      control: 'object',
      description: 'Avatar object to render inside the badge.'
    },
    leading: {
      control: 'boolean',
      description: 'Whether to show content in the leading slot.'
    },
    leadingIcon: {
      control: 'text',
      description: 'Name of the icon to render on the leading side.'
    },
    trailing: {
      control: 'boolean',
      description: 'Whether to show content in the trailing slot.'
    },
    trailingIcon: {
      control: 'text',
      description: 'Name of the icon to render on the trailing side.'
    },
    shadow: {
      control: 'boolean',
      description: 'Applies shadow style if true.'
    },
    closable: {
      control: 'boolean',
      description: 'Whether the badge can be closed (not implemented visually).'
    },
    ui: {
      control: 'object',
      description: 'UI customization classes for internal elements.'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'BaseBadge component extends Nuxt UI UBadge and supports custom sizes and colors.'
      }
    }
  }
} satisfies Meta<typeof BaseBadge>

const Template: StoryFn<typeof BaseBadge> = (args) => ({
  components: { BaseBadge },
  setup() {
    return { args }
  },
  template: `
    <BaseBadge v-bind="args">
      <template v-if="args.leading" #leading>
        <span style="color: green;">Leading slot</span>
      </template>
      <template #default>
        {{ args.label }}
      </template>
      <template v-if="args.trailing" #trailing>
        <span style="color: red;">Trailing slot</span>
      </template>
    </BaseBadge>
  `
})

export const Default = Template.bind({})
Default.args = {
  label: 'Default Badge',
  color: 'primary',
  variant: 'solid',
  size: 'md'
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  label: 'With Icon',
  icon: 'i-heroicons-check-circle',
  color: 'success',
  variant: 'soft',
  size: 'lg'
}

export const WithAvatar = Template.bind({})
WithAvatar.args = {
  label: 'With Avatar',
  avatar: {
    src: 'https://github.com/benjamincanac.png',
    alt: 'User',
    size: 'xs'
  },
  color: 'info',
  size: 'md'
}

export const WithLeadingAndTrailing = Template.bind({})
WithLeadingAndTrailing.args = {
  label: 'Custom Content',
  color: 'warning',
  leading: true,
  trailing: true
}

export const CustomSizeAndColor = Template.bind({})
CustomSizeAndColor.args = {
  label: 'Custom Colors',
  color: 'greyscale',
  size: '2xl',
  variant: 'outline'
}
