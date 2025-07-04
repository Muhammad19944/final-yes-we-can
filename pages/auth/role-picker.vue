<script setup lang="ts">
import type { RadioPickerItemEntity } from '~/components/Card/RadioPicker/RadioPicker.vue'

definePageMeta({
  layout: 'auth'
})

const items = ref<RadioPickerItemEntity[]>([
  {
    label: 'Men mijozman, loyiha e’lon qilaman',
    value: 'customer',
    icon: 'solar:user-speak-rounded-bold'
  },
  {
    label: 'Men frilanserman, ish izlamoqdaman',
    value: 'freelancer',
    icon: 'solar:user-hand-up-bold'
  }
])
const role = ref('customer')
</script>

<template>
  <BaseSheet
    shadow="shadow-2"
    :ui="{
      root: 'max-w-[535px] w-full py-8 px-10'
    }"
  >
    <BaseHeading
      text="Quyidagilardan birini tanlang"
      level="h4"
      weight="semi"
      color="text-(--color-greyscale-900)"
      :ui="{
        root: 'mb-0.5'
      }"
    />

    <BaseHeading
      text="Mijoz yoki frilanser bo’lib ro’yxatdan o’tish"
      level="h8"
      weight="medium"
      color="text-(--color-greyscale-500)"
    />

    <div class="my-6">
      <CardRadioPicker
        v-model="role"
        :items="items"
      />
    </div>

    <BaseButton
      type="submit"
      color="gradient"
      size="2xl"
      rounded="xl"
      block
      :ui="{
        base: 'cursor-pointer'
      }"
    >
      Davom ettirish
    </BaseButton>

    <div class="flex items-center justify-center gap-2 mt-5">
      <BaseHeading
        text="Allaqachon ro’yxatdan o’tganmisiz?"
        weight="medium"
        color="text-(--color-greyscale-500)"
      />

      <NuxtLinkLocale
        to="/auth/login"
        class="text-(--color-green-500) underline underline-offset-2"
      >
        <BaseHeading
          text="Kirish"
          weight="medium"
        />
      </NuxtLinkLocale>
    </div>
  </BaseSheet>
</template>
