<script lang="ts">
import type { FetchResponseWrapperEntity, OptionEntity } from '~/shared/types/utils'

interface SelectTechnologyEntity {
  modelValue?: OptionEntity[]
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<SelectTechnologyEntity>(), {})

const model = useModel(props, 'modelValue')

const data = ref<FetchResponseWrapperEntity<OptionEntity>>({
  count: 0,
  next: null,
  previous: null,
  results: []
})

const { data: results } = await useFetch<FetchResponseWrapperEntity<OptionEntity>>('/api/feature/technology', {
  method: 'get'
})

if (results.value) {
  data.value = results.value
}
</script>

<template>
  <BaseFormInputMenu
    v-model="model"
    :items="data.results"
    label-key="name"
    multiple
    placeholder="Qobiliyatlarni tanlang"
  />
</template>
