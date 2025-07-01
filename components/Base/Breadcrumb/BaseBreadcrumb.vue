<script lang="ts">
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router'
import type { AvatarEntity } from '~/components/Base/Avatar/BaseAvatar.vue'

export interface BreadcrumbItemEntity {
  label?: string
  icon?: string
  avatar?: AvatarEntity
  slot?: string
  as?: unknown
  to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric
  type?: 'reset' | 'submit' | 'button'
  disabled?: boolean
  active?: boolean
  target?: '_blank' | '_parent' | '_self' | '_top' | (string & {}) | null
}

export interface BaseBreadcrumbEntity {
  as?: string
  separatorIcon?: string
  labelKey?: string
  ui?: {
    root?: string | string[]
    list?: string | string[]
    item?: string | string[]
    link?: string | string[]
    linkLeadingIcon?: string | string[]
    linkLeadingAvatar?: string | string[]
    linkLeadingAvatarSize?: string | string[]
    linkLabel?: string | string[]
    separator?: string | string[]
    separatorIcon?: string | string[]
  }
}
</script>

<script setup lang="ts" generic="T extends BreadcrumbItemEntity = BreadcrumbItemEntity">
withDefaults(defineProps<BaseBreadcrumbEntity & { items?: T[] }>(), {
  as: 'nav',
  labelKey: 'label'
})
const slots = defineSlots<{
  item(props: { item: T; index: number; active: boolean | undefined }): unknown
  ['item-leading'](props: { item: T; index: number; active: boolean | undefined }): unknown
  ['item-label'](props: { item: T; index: number; active: boolean | undefined }): unknown
  ['item-trailing'](props: { item: T; index: number; active: boolean | undefined }): unknown
  separator(): unknown
}>()
</script>

<template>
  <UBreadcrumb
    :as="as"
    :items="items"
    :separator-icon="separatorIcon"
    :label-key="labelKey"
    :ui="{
      root: [ui?.root],
      list: [ui?.list],
      item: [ui?.item],
      link: [ui?.link],
      linkLeadingIcon: [ui?.linkLeadingIcon],
      linkLeadingAvatar: [ui?.linkLeadingAvatar],
      linkLeadingAvatarSize: [ui?.linkLeadingAvatarSize],
      linkLabel: [ui?.linkLabel],
      separator: [ui?.separator],
      separatorIcon: [ui?.separatorIcon]
    }"
  >
    <template
      v-if="slots.item"
      #item="{ item, index, active }"
    >
      <slot
        name="item"
        :item="item"
        :index="index"
        :active="active"
      />
    </template>

    <template
      v-if="slots['item-leading']"
      #item-leading="{ item, index, active }"
    >
      <slot
        name="item-leading"
        :item="item"
        :index="index"
        :active="active"
      />
    </template>

    <template
      v-if="slots['item-label']"
      #item-label="{ item, index, active }"
    >
      <slot
        name="item-label"
        :item="item"
        :index="index"
        :active="active"
      />
    </template>

    <template
      v-if="slots['item-trailing']"
      #item-trailing="{ item, index, active }"
    >
      <slot
        name="item-trailing"
        :item="item"
        :index="index"
        :active="active"
      />
    </template>

    <template
      v-if="slots.separator"
      #separator
    >
      <slot name="separator" />
    </template>
  </UBreadcrumb>
</template>
