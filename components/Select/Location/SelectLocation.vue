<script setup lang="ts">
import { getLocation } from '~/services/Feature/location'
const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])

const response = await getLocation()
</script>

<template>
  <pre>{{ response }}</pre>
  <div class="p-5 bg-white">
    <BaseFormSelect
      :items="items"
      size="2xl"
    />
  </div>
</template>
