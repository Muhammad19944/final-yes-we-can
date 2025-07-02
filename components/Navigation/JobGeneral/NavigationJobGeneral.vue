<script lang="ts">
import type { NavigationJobMetaEntity, NavigationItemEntity } from '~/components/Navigation/JobMeta/NavigationJobMeta.vue'

interface NavigationJobGeneralEntity extends Pick<NavigationJobMetaEntity, 'compact' | 'separator'> {
  append?: NavigationItemEntity
  ui?: NavigationItemEntity['ui']
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<NavigationJobGeneralEntity>(), {
  separator: 'divider',
  compact: false
})

const items = ref<NavigationItemEntity[]>([
  {
    label: '9 000 000',
    trailing: 'UZS',
    description: 'Ishbay narx',
    icon: 'solar:dollar-bold',
    ui: {
      icon: 'text-(--color-warning-500)'
    }
  },
  {
    label: 'O’rta daraja (Middle)',
    description: 'Talab etilgan daraja',
    icon: 'solar:bolt-bold',
    ui: {
      icon: 'text-(--color-info-500)'
    }
  }
])

const defineItems = computed(() => {
  if (props.append) {
    appendItem(props.append)
  }

  return items.value
})

const appendItem = (item: NavigationItemEntity) => {
  items.value.push(item)
}
</script>

<template>
  <NavigationJobMeta
    :items="defineItems"
    :compact="compact"
    :separator="separator"
    :ui="{
      label: ui?.label,
      icon: ui?.icon,
      description: ui?.description,
      link: ui?.link
    }"
  />
</template>
