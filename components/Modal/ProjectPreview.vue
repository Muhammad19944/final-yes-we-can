<script lang="ts">
import { useAccountStore } from '~/stores/account'
import { useProjectStore } from '~/stores/Projects'
import type { NavigationItemEntity } from '~/components/Navigation/Project/Meta.vue'

interface ProjectPreviewEntity {
  modelValue?: boolean
  projectId: string
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ProjectPreviewEntity>(), {})
const model = useModel(props, 'modelValue')
const emit = defineEmits<{
  (e: 'emit:close', value: boolean): void
  (e: 'emit:publish'): void
}>()
const accountStore = useAccountStore()
const projectStore = useProjectStore()
const { currentLevel, currentSize, currentDuration, currentType } = useProjectMeta()
const { loading, setLoading } = useLoader()
const { sleep } = useTimeout()

const defineGeneralItems = computed<NavigationItemEntity[]>(() => {
  return [
    {
      label: formatCurrency(Number(projectStore.projectRequest.price)),
      trailing: 'UZS',
      description: 'Ishbay narx',
      icon: 'solar:dollar-bold',
      ui: {
        icon: 'text-(--color-warning-500)'
      }
    },
    {
      label: currentLevel(projectStore.projectRequest.level)?.label ?? '',
      description: 'Talab etilgan daraja',
      icon: 'solar:bolt-bold',
      ui: {
        icon: 'text-(--color-info-500)'
      }
    }
  ]
})
const defineProjectSizeItems = computed<NavigationItemEntity[]>(() => {
  return [
    {
      label: currentSize(projectStore.projectRequest.size)?.label ?? '',
      description: 'Loyiha hajmi',
      icon: 'solar:calculator-minimalistic-bold',
      ui: {
        icon: 'text-(--color-info-500)'
      }
    },
    {
      label: currentDuration(projectStore.projectRequest.duration)?.label ?? '',
      description: 'Loyiha muddati',
      icon: 'solar:calendar-bold',
      ui: {
        icon: 'text-(--color-warning-500)'
      }
    },
    {
      label: currentType(projectStore.projectRequest.type)?.label ?? '',
      description: 'Ishga olish imkoniyati',
      icon: 'solar:user-check-rounded-bold',
      ui: {
        icon: 'text-(--color-green-500)'
      }
    }
  ]
})
const isCanPayment = computed(() => parseFloat(accountStore.account.info?.balance as string) >= parseFloat(projectStore.projectRequest?.price as string))

const publish = async () => {
  try {
    setLoading(true)
    await useClientFetch(`/api/project/published`, {
      method: 'patch',
      body: {
        step: 'published',
        id: props.projectId
      }
    })
    emit('emit:publish')
  } catch (error) {
    console.error('Publish Error:', error)
  } finally {
    await sleep()
    setLoading(false)
  }
}
</script>

<template>
  <BaseModal
    v-model:open="model"
    :ui="{
      content: 'max-w-[865px]',
      body: 'bg-(--color-greyscale-50) !py-5'
    }"
  >
    <template #header>
      <BaseHeading
        text="Umumiy ko’rinish"
        level="h5"
        weight="semi"
        color="text-(--color-greyscale-900)"
      />

      <div class="flex-1" />

      <BaseButton
        color="greyscale"
        size="xs"
        square
        rounded
        icon="heroicons:x-mark-20-solid"
        :ui="{
          base: 'cursor-pointer'
        }"
        @click="emit('emit:close', false)"
      />
    </template>

    <template #body>
      <div class="space-y-2">
        <CardProjectDescription
          :title="projectStore.projectRequest.title"
          :content="projectStore.projectRequest.profession"
        />

        <CardProjectSheet title="Umumiy">
          <NavigationProjectMeta
            :items="defineGeneralItems"
            :compact="false"
            separator="divider"
            :ui="{
              root: 'mt-5',
              separator: 'mx-4'
            }"
          />
        </CardProjectSheet>

        <CardProjectSheet title="Loyiha hajmi">
          <NavigationProjectMeta
            :items="defineProjectSizeItems"
            :compact="false"
            separator="divider"
            :ui="{
              root: 'mt-5',
              separator: 'mx-4'
            }"
          />
        </CardProjectSheet>

        <CardProjectSkills :skills="projectStore.projectRequest.technologies" />

        <ProfileCustomerBalance />
      </div>
    </template>

    <template #footer>
      <div class="flex justify-end gap-3 w-full">
        <BaseButton
          primary-gradient
          variant="solid"
          :loading="loading"
          :disabled="!isCanPayment"
          @click="publish"
        >
          Ishni e’lon qilish
        </BaseButton>
      </div>
    </template>
  </BaseModal>
</template>
