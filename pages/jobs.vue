<script lang="ts" setup>
const items = ref([
  {
    label: 'Figma'
  },
  {
    label: 'UX/UI dizayn'
  },
  {
    label: 'Dashboard'
  },
  {
    label: 'Website'
  },
  {
    label: 'SEO'
  }
])
</script>

<template>
  <div class="p-20 space-y-5">
    <CardJobDescription />

    <CardJobGeneral />

    <CardJobSize />

    <CardJobFiles />

    <CardJobSkills :skills="items" />
  </div>
</template>

<style lang="scss" scoped></style>
