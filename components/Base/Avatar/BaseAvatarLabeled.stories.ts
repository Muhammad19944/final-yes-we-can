import type { Meta, StoryObj } from '@storybook/vue3'
import BaseAvatar from '~/components/Base/Avatar/BaseAvatar.vue'
import BaseAvatarLabeled from '~/components/Base/Avatar/BaseAvatarLabeled.vue'
import BaseHeading from '~/components/Base/Heading/BaseHeading.vue'

const meta = {
  title: 'Base/Avatar/BaseAvatarLabeled',
  component: BaseAvatarLabeled,
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
    label: {
      control: 'text',
      description: 'Label text to display next to the avatar'
    },
    subLabel: {
      control: 'text',
      description: 'Sub-label text to display below the label'
    },
    labelSlot: {
      name: 'label',
      control: 'text',
      description: 'Slot for custom label content',
      table: {
        category: 'slots'
      }
    },
    subLabelSlot: {
      name: 'subLabel',
      control: 'text',
      description: 'Slot for custom sub label content',
      table: {
        category: 'slots'
      }
    }
  }
} satisfies Meta<typeof BaseAvatarLabeled>

export default meta
type Story = StoryObj<typeof BaseAvatarLabeled>

export const Default: Story = {
  args: {
    src: 'https://github.com/benjamincanac.png',
    label: 'Benjamin Canac',
    subLabel: 'Software Engineer'
  }
}

export const WithSlots: Story = {
  render: (args) => ({
    components: {
      BaseAvatar,
      BaseAvatarLabeled,
      BaseHeading
    },
    setup() {
      return { args }
    },
    template: `
      <BaseAvatarLabeled v-bind="args">
        <template #chip>
          <div class="absolute -bottom-[3px] -right-[5px]">
            <BaseAvatar
              icon="solar:pen-bold"
              size="xs"
              background="gradient"
            />
          </div>
        </template>

        <template #label>
          <BaseHeading text="Odinayev Muhammad" level="h3" weight="extra" />
        </template>

        <template #subLabel>
          <BaseHeading text="Frontend developer" level="h8" weight="normal" />
        </template>
      </BaseAvatarLabeled>
    `
  }),
  args: {
    src: 'https://github.com/benjamincanac.png',
    alt: 'User Avatar',
    size: 'md',
    background: 'white'
  },
  parameters: {
    docs: {
      source: {
        code: `
<BaseAvatarLabeled
  src="https://github.com/benjamincanac.png"
  alt="User Avatar"
  size="md"
>
  <template #chip>
    <BaseAvatar
      icon="solar:pen-bold"
      size="xs"
      background="gradient"
    />
  </template>

  <template #label>
    <BaseHeading text="Odinayev Muhammad" level="h3" weight="extra" />
  </template>

  <template #subLabel>
    <BaseHeading text="Frontend developer" level="h8" weight="normal" />
  </template>
</BaseAvatarLabeled>
        `.trim()
      }
    }
  }
}
