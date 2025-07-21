<script lang="ts">
import type { _SelectMenuItem } from '~/components/Base/Form/BaseFormSelect.vue'

interface SelectLanguageEntity extends _SelectMenuItem {
  value: 'uz' | 'ru' | 'en'
  short?: string
}
</script>

<script setup lang="ts">
const currentLanguage = useCookie('current_language')
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

const languages = ref<SelectLanguageEntity[]>([
  {
    label: `O'zbek`,
    short: `O'zb`,
    value: 'uz',
    icon: 'flagpack:uz'
  },
  {
    label: `Русский`,
    short: `Рус`,
    value: 'ru',
    icon: 'flagpack:ru'
  },
  {
    label: `English`,
    short: `Eng`,
    value: 'en',
    icon: 'flagpack:gb-nir'
  }
])
const currentLocale = ref<SelectLanguageEntity>({
  label: undefined,
  short: undefined,
  value: 'uz',
  icon: undefined
})

watch(
  () => route.fullPath.slice(1, 3),
  (value) => {
    const locale = languages.value.find((language) => language.value === value)

    if (locale) {
      currentLocale.value = locale
      currentLanguage.value = locale.value
    }
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<template>
  <BaseFormSelect
    v-model="currentLocale"
    :items="languages"
    :search-input="false"
    variant="soft"
    size="lg"
    :ui="{
      base: 'w-28 font-medium',
      item: 'p-0',
      group: 'p-0.5'
    }"
  >
    <template #item="{ item }">
      <NuxtLink
        :to="switchLocalePath(item.value)"
        class="flex items-center gap-2 w-full px-2 py-1.5"
      >
        <UIcon
          v-if="item.icon"
          :name="item.icon"
          class="rounded-[2px]"
        />

        <BaseHeading
          :text="item.label"
          weight="medium"
          color="text-(--color-greyscale-900)"
          :ui="{
            root: 'text-[13px]'
          }"
        />
      </NuxtLink>
    </template>
  </BaseFormSelect>
</template>
