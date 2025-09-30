<script lang="ts">
import type { TableColumn, TableData, TableOptions } from '@nuxt/ui'

export interface BaseTableEntity<T extends TableData = TableData> extends /* @vue-ignore */ TableOptions<T> {
  as?: string
  data: T[]
  columns?: TableColumn<T>[]
  ui?: {
    root?: string | string[]
    base?: string | string[]
    caption?: string | string[]
    thead?: string | string[]
    tbody?: string | string[]
    tr?: string | string[]
    th?: string | string[]
    td?: string | string[]
    separator?: string | string[]
    empty?: string | string[]
    loading?: string | string[]
  }
}
</script>

<script setup lang="ts" generic="T extends TableData">
withDefaults(defineProps<BaseTableEntity>(), {
  as: 'div'
})
</script>

<template>
  <BaseSheet
    rounded="2xl"
    shadow="shadow-2"
    :ui="{
      root: 'py-6 px-8'
    }"
  >
    <UTable
      :data="data"
      :columns="columns"
      :ui="{
        root: [ui?.root],
        base: [ui?.base],
        caption: [ui?.caption],
        thead: [ui?.thead],
        tbody: [ui?.tbody],
        tr: [ui?.tr],
        th: [ui?.th],
        td: [ui?.td],
        separator: [ui?.separator],
        empty: [ui?.empty],
        loading: [ui?.loading]
      }"
    />
  </BaseSheet>
</template>
