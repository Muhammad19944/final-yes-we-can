<script lang="ts">
import type { FetchResponseWrapperEntity } from '~/shared/types/utils'
import type { LocationModelEntity } from '~/shared/types/location'

interface SelectLocationEntity {
  modelValue?: number | string
}
</script>

<script setup lang="ts">
const props = defineProps<SelectLocationEntity>()
const model = useModel(props, 'modelValue')

const locations = ref<FetchResponseWrapperEntity<LocationModelEntity>>({
  count: 0,
  next: null,
  previous: null,
  results: []
})

locations.value = await useClientFetch('/api/feature/location', { method: 'get' })
</script>

<template>
  <BaseFormSelect
    v-model="model"
    :items="locations.results"
    value-key="id"
    size="2xl"
    :ui="{
      base: 'w-full'
    }"
  />
</template>
