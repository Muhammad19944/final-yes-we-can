import type { Meta, StoryObj } from '@storybook/vue3'
import BaseAlert from './BaseAlert.vue'
import BaseHeading from '../Heading/BaseHeading.vue'

const meta: Meta<typeof BaseAlert> = {
  title: 'Base/Alert',
  component: BaseAlert,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error', 'neutral'],
      description: 'Defines the color theme of the alert.'
    },
    rounded: {
      control: 'text',
      description: 'Applies border radius to the alert. Can be boolean or a size string.'
    },
    title: {
      control: 'text',
      description: 'Main heading or title of the alert.'
    },
    description: {
      control: 'text',
      description: 'Secondary text providing more details about the alert.'
    },
    leading: {
      control: 'boolean',
      description: 'Displays the icon at the start (left side).'
    },
    trailing: {
      control: 'boolean',
      description: 'Displays the icon at the end (right side).'
    },
    icon: {
      control: 'text',
      description: 'Main icon shown inside the alert.'
    },
    decorativeIcon: {
      control: 'text',
      description: 'Large decorative icon displayed in the background of the alert.'
    },
    actions: {
      control: 'object',
      description: 'Array of buttons to render as actions inside the alert.'
    },
    actionOrientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Defines the layout direction of the action buttons.'
    },
    ui: {
      control: 'object',
      description: 'Custom UI classes for different parts of the alert.'
    }
  },
  args: {
    color: 'info',
    rounded: 'lg',
    title: 'Info Alert',
    description: 'This is an informational alert message.',
    icon: 'i-heroicons-information-circle',
    decorativeIcon: 'i-heroicons-sparkles',
    actionOrientation: 'vertical',
    actions: [
      {
        label: 'Dismiss',
        color: 'primary',
        variant: 'solid'
      }
    ]
  }
}

export default meta

type Story = StoryObj<typeof BaseAlert>

export const Default: Story = {
  render: (args) => ({
    components: { BaseAlert },
    setup: () => ({ args }),
    template: '<BaseAlert v-bind="args" />'
  })
}

export const WithSlots: Story = {
  render: (args) => ({
    components: { BaseAlert },
    setup: () => ({ args }),
    template: `
      <BaseAlert v-bind="args">
        <template #title>
          <span>🔔 Custom Title</span>
        </template>
        <template #description>
          <span>This is a custom description provided via slot.</span>
        </template>
      </BaseAlert>
    `
  })
}

export const Examples: Story = {
  render: () => ({
    components: {
      BaseAlert,
      BaseHeading
    },
    template: `
      <div class="flex flex-col gap-4">
        <BaseAlert
          title="Mijozlarga qanday asosiy xizmatlarni taklif qilasiz?"
          description="Siz 5 tagacha Qobiliyatlarni tanlashingiz mumkin!"
          decorative-icon="solar:notes-bold-duotone"
          :ui="{ container: 'px-5' }"
        />

        <BaseAlert
          color="warning"
          description="Sizning profilingiz ko’rinishi shaxsiy, profilingizni ommaviyga o’tkazishingizni tavsiya qilamiz, aks holda loyihalar ololmaysiz!"
          icon="solar:info-circle-bold"
        />

        <BaseAlert
          color="success"
          decorative-icon="solar:medal-ribbons-star-bold-duotone"
          :actions="[
            { label: 'Batafsil', color: 'white', variant: 'solid', size: 'sm', raised: true },
            { label: 'Sotib olish', color: 'white', variant: 'solid', size: 'sm', raised: true }
          ]"
          :ui="{ container: 'px-5', decorativeIcon: 'rotate-[15deg] !-bottom-6 !right-0' }"
          rounded="xl"
        >
          <template #title>
            <div class="flex items-center gap-2">
              <BaseHeading text="Sizda mavjud:" weight="normal" color="text-[var(--color-greyscale-600)]" />
              <BaseHeading text="36 ta" weight="semi" color="text-[var(--color-greyscale-900)]" />
            </div>
          </template>
        </BaseAlert>

        <BaseAlert
          icon="solar:diploma-verified-bold-duotone"
          action-orientation="horizontal"
          :actions="[
            { label: 'Sotib olish', color: 'info', variant: 'solid', size: 'lg' }
          ]"
          :ui="{ content: '!space-y-0', icon: 'size-14', container: 'py-5 px-6' }"
          rounded="xl"
        >
          <template #title>
            <BaseHeading text="Mening hisobim:" weight="medium" color="text-(--color-greyscale-600)" />
          </template>
          <template #description>
            <BaseHeading text="54 ta bog’lanish" level="h8" weight="semi" color="text-(--color-greyscale-900)" />
          </template>
        </BaseAlert>

        <BaseAlert
          title="Ko’proq bog’lanishlar sizni kutmoqda!"
          description="Buning uchun tarifingizni o’zgartiring!"
          decorative-icon="solar:medal-ribbons-star-bold-duotone"
          :actions="[
            { label: 'O’zgartirish', color: 'success', variant: 'link', square: true, underline: true, to: '/jobs' }
          ]"
          :ui="{ container: 'px-5', decorativeIcon: 'rotate-[15deg] !-bottom-6 !right-0', actions: '!mt-0 !-ml-1.5' }"
          rounded="xl"
        />

        <BaseAlert
          decorative-icon="solar:medal-ribbons-star-bold-duotone"
          :ui="{ container: '!p-5', decorativeIcon: '!size-16 rotate-[15deg] !-bottom-3.5' }"
          rounded="xl"
        >
          <template #title>
            <div class="flex items-center gap-2">
              <BaseHeading text="Siz bog’lanish sotib olmoqchisiz:" weight="medium" color="text-[var(--color-greyscale-600)]" />
              <BaseHeading text="40 ta" weight="semi" color="text-[var(--color-greyscale-900)]" />
            </div>
          </template>
        </BaseAlert>

        <BaseAlert
          decorative-icon="solar:medal-ribbons-star-bold-duotone"
          :ui="{ container: '!p-5', decorativeIcon: '!size-16 rotate-[15deg] !-bottom-3.5' }"
          rounded="xl"
        >
          <template #title>
            <div class="flex items-center gap-2">
              <BaseHeading text="Frilanser Premium:" weight="semi" color="text-[var(--color-greyscale-900)]" />
              <BaseHeading text="$15 / har oy" weight="medium" color="text-[var(--color-greyscale-600)]" />
            </div>
          </template>
        </BaseAlert>

        <BaseAlert
          title="Eng yaxshi ishingizni oson va chiroyli tarzda namoyish eting!"
          description="Portfoliolarda endi ko'proq imkoniyatlar va yangi dizayn mavjud"
          color="warning"
          icon="solar:bolt-circle-bold-duotone"
          action-orientation="horizontal"
          :actions="[
            { label: 'Batafsil', color: 'warning', variant: 'solid', size: 'lg' }
          ]"
          :ui="{ container: '!p-5', icon: 'size-12', content: '!space-y-0' }"
          rounded="xl"
        />

        <BaseAlert
          color="neutral"
          trailing
          icon="solar:dollar-bold-duotone"
          action-orientation="horizontal"
          :ui="{ container: '!py-3 !px-4', icon: 'size-9 text-(--color-warning-500)' }"
          rounded="xl"
        >
          <template #title>
            <div class="flex items-center gap-2">
              <BaseHeading text="Sizning balansingiz:" weight="normal" color="text-[var(--color-greyscale-600)]" />
              <BaseHeading text="$1800" weight="semi" color="text-[var(--color-greyscale-900)]" />
            </div>
          </template>
        </BaseAlert>

        <BaseAlert
          color="neutral"
          trailing
          icon="solar:dollar-bold-duotone"
          :actions="[
            { label: 'Hisobni to’ldirish', color: 'gradient', variant: 'solid', size: 'sm' }
          ]"
          :ui="{ container: '!py-3 !px-4', icon: 'size-18 text-(--color-warning-500)' }"
          rounded="xl"
        >
          <template #title>
            <div class="flex items-center gap-2">
              <BaseHeading text="Sizning balansingiz:" weight="normal" color="text-[var(--color-greyscale-600)]" />
              <BaseHeading text="$430" weight="semi" color="text-[var(--color-greyscale-900)]" />
            </div>
          </template>
          <template #description>
            <BaseHeading text="Loyihani e’lon qilish uchun sizda mablag’ yetarli emas!" weight="medium" color="text-(--color-critic-500)" />
          </template>
        </BaseAlert>

        <BaseAlert
          color="error"
          description="Bu loyiha ortiq faol emas!"
          icon="solar:info-circle-bold"
        />
      </div>
    `
  })
}
