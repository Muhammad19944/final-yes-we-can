<script lang="ts">
import { useProjectStore } from '~/stores/Projects'
import { useAccountStore } from '~/stores/account'

interface ProjectDrawerEntity {
  modelValue?: boolean
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ProjectDrawerEntity>(), {})
const model = useModel(props, 'modelValue')

const route = useRoute()
const { locale } = useI18n()
const projectStore = useProjectStore()
const accountStore = useAccountStore()

watch(
  () => model.value,
  (value) => {
    // Когда drawer закрывается сбрасываем данные проекта
    if (!value) {
      projectStore.actionProjectResetModel()
      accountStore.actionResetAccountByIdModel()
    }
  },
  {
    immediate: true
  }
)
</script>

<template>
  <BaseDrawer
    v-model:open="model"
    :close="false"
    :ui="{
      content: 'max-w-[1022px] w-full',
      header: 'justify-between',
      body: 'flex flex-col bg-greyscale-50'
    }"
  >
    <template #header>
      <BaseButton
        icon="solar:arrow-left-outline"
        color="success"
        variant="link"
        size="2xl"
        :ui="{
          base: 'cursor-pointer p-0'
        }"
        @click="model = false"
      />

      <NuxtLinkLocale
        :to="`/project/detail?id=${route.query.id}`"
        class="flex"
      >
        <BaseButton
          icon="solar:square-top-down-outline"
          color="success"
          variant="link"
          size="md"
          :ui="{
            base: 'gap-2 cursor-pointer p-0'
          }"
        >
          <BaseHeading
            level="h8"
            text="Yangi oynada ochish"
            weight="semi"
            color="text-(--color-green-500)"
          />
        </BaseButton>
      </NuxtLinkLocale>
    </template>

    <template #body>
      <WidgetProjectDetail />
    </template>

    <template #footer>
      <div class="flex justify-end gap-3 w-full">
        <BaseButton
          primary-gradient
          variant="solid"
          :to="`/${locale}/project/proposal/send/${route.query.id}`"
        >
          Taklif yuborish
        </BaseButton>
      </div>
    </template>
  </BaseDrawer>
</template>
