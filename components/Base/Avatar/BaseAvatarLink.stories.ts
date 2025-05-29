import type { Meta, StoryObj } from '@storybook/vue3'
import BaseAvatarLabeled from '~/components/Base/Avatar/BaseAvatarLabeled.vue'
import BaseAvatarLink from '~/components/Base/Avatar/BaseAvatarLink.vue'
import BaseHeading from '~/components/Base/Heading/BaseHeading.vue'

const meta = {
  title: 'Base/Avatar/BaseAvatarLink',
  component: BaseAvatarLink,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'The HTML element to render as the avatar'
    },
    src: {
      control: 'text',
      description: 'The source URL of the avatar image'
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the avatar image'
    },
    icon: {
      control: 'text',
      description: 'Icon to display in the avatar'
    },
    text: {
      control: 'text',
      description: 'Text to display in the avatar'
    },
    size: {
      control: 'select',
      options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'Avatar sizes'
    },
    customSize: {
      control: 'number',
      description: 'Custom size for the avatar, e.g., 50'
    },
    background: {
      control: 'select',
      options: ['white', 'gradient'],
      description: 'Select background color of the avatar'
    },
    to: {
      control: 'text',
      description: 'The URL to navigate to when the avatar is clicked'
    },
    target: {
      control: 'text',
      description: 'The target attribute for the link, e.g., "_blank" for opening in a new tab'
    },
    underlineOnHover: {
      control: 'boolean',
      description: 'Whether to underline the link on hover'
    }
  }
} satisfies Meta<typeof BaseAvatarLink>

export default meta
type Story = StoryObj<typeof BaseAvatarLink>

export const Default: Story = {
  args: {
    src: 'https://github.com/benjamincanac.png',
    size: '3xl',
    to: 'https://github.com/',
    target: '_blank'
  }
}

export const WithNoImage: Story = {
  args: {
    background: 'gradient',
    text: 'BC',
    size: '3xl',
    to: 'https://github.com/',
    target: '_blank'
  }
}

export const UnderlineOnHover: Story = {
  render: (args) => ({
    components: {
      BaseAvatarLabeled,
      BaseAvatarLink,
      BaseHeading
    },
    setup() {
      return { args }
    },
    template: `
      <BaseAvatarLink
        to="https://github.com/"
        target="_blank"
        underline-on-hover
      >
        <template #default>
          <BaseAvatarLabeled src="https://github.com/benjamincanac.png" alt="User Avatar" size="md">
            <template #label>
              <BaseHeading text="Odinayev Muhammad" level="h5" weight="bold" />
            </template>

            <template #subLabel>
              <BaseHeading text="Frontend developer" level="h8" weight="normal" />
            </template>
          </BaseAvatarLabeled>
        </template>
      </BaseAvatarLink>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<BaseAvatarLink to="https://github.com/" target="_blank" underline-on-hover>
  <template #default>
    <BaseAvatarLabeled src="https://github.com/benjamincanac.png" alt="User Avatar" size="md">
      <template #label>
        <BaseHeading text="Odinayev Muhammad" level="h5" weight="bold" />
      </template>

      <template #subLabel>
        <BaseHeading text="Frontend developer" level="h8" weight="normal" />
      </template>
    </BaseAvatarLabeled>
  </template>
</BaseAvatarLink>
        `.trim()
      }
    }
  }
}

export const WithAvatarLabeled: Story = {
  render: (args) => ({
    components: {
      BaseAvatarLabeled,
      BaseAvatarLink,
      BaseHeading
    },
    setup() {
      return { args }
    },
    template: `
      <BaseAvatarLink to="https://github.com/" target="_blank">
        <template #default>
          <BaseAvatarLabeled src="https://github.com/benjamincanac.png" alt="User Avatar" size="md">
            <template #label>
              <BaseHeading text="Odinayev Muhammad" level="h5" weight="bold" />
            </template>

            <template #subLabel>
              <BaseHeading text="Frontend developer" level="h8" weight="normal" />
            </template>
          </BaseAvatarLabeled>
        </template>
      </BaseAvatarLink>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<BaseAvatarLink to="https://github.com/" target="_blank">
  <template #default>
    <BaseAvatarLabeled src="https://github.com/benjamincanac.png" alt="User Avatar" size="md">
      <template #label>
        <BaseHeading text="Odinayev Muhammad" level="h5" weight="bold" />
      </template>

      <template #subLabel>
        <BaseHeading text="Frontend developer" level="h8" weight="normal" />
      </template>
    </BaseAvatarLabeled>
  </template>
</BaseAvatarLink>
        `.trim()
      }
    }
  }
}

export const WithNoImageAvatar: Story = {
  render: (args) => ({
    components: {
      BaseAvatarLabeled,
      BaseAvatarLink,
      BaseHeading
    },
    setup() {
      return { args }
    },
    template: `
      <BaseAvatarLink to="https://github.com/" target="_blank" underline-on-hover>
        <template #default>
          <BaseAvatarLabeled background="gradient" text="BC" size="md">
            <template #label>
              <BaseHeading text="Odinayev Muhammad" level="h5" weight="bold" />
            </template>

            <template #subLabel>
              <BaseHeading text="Frontend developer" level="h8" weight="normal" />
            </template>
          </BaseAvatarLabeled>
        </template>
      </BaseAvatarLink>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<BaseAvatarLink to="https://github.com/" target="_blank" underline-on-hover>
  <template #default>
    <BaseAvatarLabeled background="gradient" text="BC" size="md">
      <template #label>
        <BaseHeading text="Odinayev Muhammad" level="h5" weight="bold" />
      </template>

      <template #subLabel>
        <BaseHeading text="Frontend developer" level="h8" weight="normal" />
      </template>
    </BaseAvatarLabeled>
  </template>
</BaseAvatarLink>
        `.trim()
      }
    }
  }
}
