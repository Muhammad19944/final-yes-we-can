<script lang="ts" setup></script>

<template>
  <div class="p-20 space-y-5">
    <BaseAlert
      title="Mijozlarga qanday asosiy xizmatlarni taklif qilasiz?"
      description="Siz 5 tagacha Qobiliyatlarni tanlashingiz mumkin!"
      decorative-icon="solar:notes-bold-duotone"
      :ui="{
        container: 'px-5'
      }"
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
        {
          label: 'Batafsil',
          color: 'white',
          variant: 'solid',
          size: 'sm',
          raised: true
        },
        {
          label: 'Sotib olish',
          color: 'white',
          variant: 'solid',
          size: 'sm',
          raised: true
        }
      ]"
      :ui="{
        container: 'px-5',
        decorativeIcon: 'rotate-[15deg] !-bottom-6 !right-0'
      }"
      rounded="xl"
    >
      <template #title>
        <div class="flex items-center gap-2">
          <BaseHeading
            text="Sizda mavjud:"
            weight="normal"
            color="text-[var(--color-greyscale-600)]"
          />

          <BaseHeading
            text="36 ta"
            weight="semi"
            color="text-[var(--color-greyscale-900)]"
          />
        </div>
      </template>
    </BaseAlert>

    <BaseAlert
      icon="solar:diploma-verified-bold-duotone"
      action-orientation="horizontal"
      :actions="[
        {
          label: 'Sotib olish',
          color: 'info',
          variant: 'solid',
          size: 'lg'
        }
      ]"
      :ui="{
        content: '!space-y-0',
        icon: 'size-14',
        container: 'py-5 px-6'
      }"
      rounded="xl"
    >
      <template #title>
        <BaseHeading
          text="Mening hisobim:"
          weight="medium"
          color="text-(--color-greyscale-600)"
        />
      </template>

      <template #description>
        <BaseHeading
          text="54 ta bog’lanish"
          level="h8"
          weight="semi"
          color="text-(--color-greyscale-900)"
        />
      </template>
    </BaseAlert>

    <BaseAlert
      title="Ko’proq bog’lanishlar sizni kutmoqda!"
      description="Buning uchun tarifingizni o’zgartiring!"
      decorative-icon="solar:medal-ribbons-star-bold-duotone"
      :actions="[
        {
          label: 'O’zgartirish',
          color: 'success',
          variant: 'link',
          square: true,
          underline: true,
          to: '/jobs'
        }
      ]"
      :ui="{
        container: 'px-5',
        decorativeIcon: 'rotate-[15deg] !-bottom-6 !right-0',
        actions: '!mt-0 !-ml-1.5'
      }"
      rounded="xl"
    />

    <BaseAlert
      decorative-icon="solar:medal-ribbons-star-bold-duotone"
      :ui="{
        container: '!p-5',
        decorativeIcon: '!size-16 rotate-[15deg] !-bottom-3.5'
      }"
      rounded="xl"
    >
      <template #title>
        <div class="flex items-center gap-2">
          <BaseHeading
            text="Siz bog’lanish sotib olmoqchisiz:"
            weight="medium"
            color="text-[var(--color-greyscale-600)]"
          />

          <BaseHeading
            text="40 ta"
            weight="semi"
            color="text-[var(--color-greyscale-900)]"
          />
        </div>
      </template>
    </BaseAlert>

    <BaseAlert
      decorative-icon="solar:medal-ribbons-star-bold-duotone"
      :ui="{
        container: '!p-5',
        decorativeIcon: '!size-16 rotate-[15deg] !-bottom-3.5'
      }"
      rounded="xl"
    >
      <template #title>
        <div class="flex items-center gap-2">
          <BaseHeading
            text="Frilanser Premium:"
            weight="semi"
            color="text-[var(--color-greyscale-900)]"
          />

          <BaseHeading
            text="$15 / har oy"
            weight="medium"
            color="text-[var(--color-greyscale-600)]"
          />
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
        {
          label: 'Batafsil',
          color: 'warning',
          variant: 'solid',
          size: 'lg'
        }
      ]"
      :ui="{
        container: '!p-5',
        icon: 'size-12',
        content: '!space-y-0'
      }"
      rounded="xl"
    />

    <BaseAlert
      color="neutral"
      trailing
      icon="solar:dollar-bold-duotone"
      action-orientation="horizontal"
      :ui="{
        container: '!py-3 !px-4',
        icon: 'size-9 text-(--color-warning-500)'
      }"
      rounded="xl"
    >
      <template #title>
        <div class="flex items-center gap-2">
          <BaseHeading
            text="Sizning balansingiz:"
            weight="normal"
            color="text-[var(--color-greyscale-600)]"
          />

          <BaseHeading
            text="$1800"
            weight="semi"
            color="text-[var(--color-greyscale-900)]"
          />
        </div>
      </template>
    </BaseAlert>

    <BaseAlert
      color="neutral"
      trailing
      icon="solar:dollar-bold-duotone"
      :actions="[
        {
          label: 'Hisobni to’ldirish',
          color: 'gradient',
          variant: 'solid',
          size: 'sm'
        }
      ]"
      :ui="{
        container: '!py-3 !px-4',
        icon: 'size-18 text-(--color-warning-500)'
      }"
      rounded="xl"
    >
      <template #title>
        <div class="flex items-center gap-2">
          <BaseHeading
            text="Sizning balansingiz:"
            weight="normal"
            color="text-[var(--color-greyscale-600)]"
          />

          <BaseHeading
            text="$430"
            weight="semi"
            color="text-[var(--color-greyscale-900)]"
          />
        </div>
      </template>

      <template #description>
        <BaseHeading
          text="Loyihani e’lon qilish uchun sizda mablag’ yetarli emas!"
          weight="medium"
          color="text-(--color-critic-500)"
        />
      </template>
    </BaseAlert>

    <BaseAlert
      color="error"
      description="Bu loyiha ortiq faol emas!"
      icon="solar:info-circle-bold"
    />
  </div>
</template>

<style lang="scss" scoped></style>
