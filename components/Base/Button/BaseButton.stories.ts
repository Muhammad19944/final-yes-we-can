import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from '~/components/Base/Button/BaseButton.vue'

const meta = {
  title: 'Base/Button',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'The HTML element to render (e.g. button, a, div)'
    },
    label: {
      control: 'text',
      description: 'Text label for the button'
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral', 'greyscale', 'white', 'gradient'],
      description: 'Color variant of the button'
    },
    activeColor: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral', 'greyscale', 'white', 'gradient'],
      description: 'Color when button is active'
    },
    variant: {
      control: 'select',
      options: ['link', 'solid', 'outline', 'soft', 'subtle', 'ghost'],
      description: 'Visual variant of the button'
    },
    activeVariant: {
      control: 'select',
      options: ['link', 'solid', 'outline', 'soft', 'subtle', 'ghost'],
      description: 'Variant when button is active'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'Button size'
    },
    square: {
      control: 'boolean',
      description: 'Make the button square (not remove rounded)'
    },
    block: {
      control: 'boolean',
      description: 'Make the button take full width'
    },
    loadingAuto: {
      control: 'boolean',
      description: 'Auto loading behavior'
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
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type attribute'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button'
    },
    active: {
      control: 'boolean',
      description: 'Button is in active state'
    },
    target: {
      control: 'text',
      description: 'The target attribute for the link, e.g., "_blank" for opening in a new tab'
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
  }
} satisfies Meta<typeof BaseButton>

export default meta
type Story = StoryObj<typeof BaseButton>

export const Default: Story = {
  args: {
    label: 'Click me'
  }
}

export const ActiveColor: Story = {
  args: {
    label: 'Active color',
    color: 'primary',
    active: true,
    activeColor: 'error'
  }
}

export const ActiveVariant: Story = {
  args: {
    label: 'Active variant',
    variant: 'outline',
    active: true,
    activeVariant: 'soft'
  }
}

export const Sizes: Story = {
  args: {
    label: 'Button',
    size: 'lg'
  }
}

export const WithLoadingAuto: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      async function onClick() {
        return new Promise<void>((res) => setTimeout(res, 2000))
      }

      return {
        args,
        onClick
      }
    },
    template: `
      <BaseButton v-bind="args" loading-auto @click="onClick" />
    `
  }),
  args: {
    label: 'Auto loading button',
    icon: 'i-heroicons-lock-closed',
    color: 'error'
  }
}

export const WithIcons: Story = {
  render: (args) => ({
    components: {
      BaseButton
    },
    setup() {
      return {
        args
      }
    },
    template: `
      <div class="flex flex-wrap gap-3">
        <BaseButton v-bind="args" icon="solar:alarm-add-linear" />
        <BaseButton v-bind="args" icon="solar:pen-bold" variant="solid" rounded square />
        <BaseButton v-bind="args" label="Text with icon" icon="solar:alarm-add-linear" />
        <BaseButton v-bind="args" label="Icon left" leading icon="solar:alarm-add-linear" />
        <BaseButton v-bind="args" label="Icon right" trailing icon="solar:alarm-add-linear" />
        <BaseButton v-bind="args" label="Custom left icon" leadingIcon="solar:add-circle-outline" />
        <BaseButton v-bind="args" label="Custom right icon" trailingIcon="solar:add-circle-outline" />
      </div>
    `
  }),
  args: {
    variant: 'ghost',
    size: 'lg'
  }
}

export const WithAvatar: Story = {
  args: {
    avatar: {
      src: 'https://github.com/benjamincanac.png',
      alt: 'User avatar',
      size: 'sm'
    },
    color: 'neutral',
    variant: 'outline'
  }
}

export const Loading: Story = {
  args: {
    label: 'Loading...',
    loading: true,
    size: 'lg'
  }
}

export const Disabled: Story = {
  args: {
    label: 'Disabled button',
    disabled: true,
    size: 'lg'
  }
}

export const RoundedTrue: Story = {
  args: {
    label: 'Rounded with true boolean',
    rounded: true
  }
}

export const RoundedSize: Story = {
  args: {
    label: 'Rounded with specific size',
    rounded: 'xl'
  }
}
