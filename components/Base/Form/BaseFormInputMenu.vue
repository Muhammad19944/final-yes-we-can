<script lang="ts">
import { useRounded } from '~/composables/useRounded'
import type { AcceptableValue, ArrayOrNested, ColorType, GetItemKeys, GetModelValue, NestedItem, SizeType, VariantType } from '~/types/libs'
import type { AvatarEntity } from '~/components/Base/Avatar/BaseAvatar.vue'
import type { FormInputEntity } from '~/components/Base/Form/BaseFormInput.vue'

/**
 * The Nuxt UI Input component supports size
 * prop values: 'xs', 'sm', 'md', 'lg', and 'xl'.
 * Here, we extend the size prop by adding custom
 * values '2xl' and '3xl' to support additional styling options.
 */
const customSizes = ['2xl', '3xl'] as const
type CustomSizesType = (typeof customSizes)[number]

type UiSizesType = Exclude<SizeType, '3xs' | '2xs' | CustomSizesType>
type ExtendSizesType = UiSizesType | CustomSizesType

export interface _SelectMenuItem {
  label?: string
  icon?: string
  avatar?: AvatarEntity
  type?: 'label' | 'separator' | 'item'
  disabled?: boolean
  onSelect?(e?: Event): void
  ui?: {
    label?: string | string[]
    separator?: string | string[]
    item?: string | string[]
    itemLeadingIcon?: string | string[]
    itemLeadingAvatarSize?: string | string[]
    itemLeadingAvatar?: string | string[]
    itemLeadingChipSize?: string | string[]
    itemLeadingChip?: string | string[]
    itemLabel?: string | string[]
    itemTrailing?: string | string[]
    itemTrailingIcon?: string | string[]
  }
}

export type SelectMenuItem = _SelectMenuItem | AcceptableValue | boolean

type SearchInputType = FormInputEntity & { size?: Exclude<FormInputEntity['size'], '3xs' | '2xs' | '2xl' | '3xl'> }

export interface BaseFormInputMenuEntity<T, VK extends GetItemKeys<T> | undefined = undefined, M extends boolean = false> {
  id?: string
  placeholder?: string
  searchInput?: boolean | SearchInputType
  color?: ColorType
  variant?: Exclude<VariantType, 'link' | 'solid'> | 'none'
  size?: ExtendSizesType
  required?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue?: GetModelValue<T, VK, M> | any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modelValue?: GetModelValue<T, VK, M> | any
  valueKey?: GetItemKeys<T>
  labelKey?: keyof NestedItem<T>
  multiple?: boolean
  rounded?: boolean | ExtendSizesType
  ui?: {
    base?: string | string[]
    value?: string | string[]
    placeholder?: string | string[]
    arrow?: string | string[]
    content?: string | string[]
    viewport?: string | string[]
    group?: string | string[]
    empty?: string | string[]
    label?: string | string[]
    separator?: string | string[]
    item?: string | string[]
    itemLeadingIcon?: string | string[]
    itemLeadingAvatar?: string | string[]
    itemLeadingAvatarSize?: string | string[]
    itemLeadingChip?: string | string[]
    itemLeadingChipSize?: string | string[]
    itemTrailing?: string | string[]
    itemTrailingIcon?: string | string[]
    itemLabel?: string | string[]
  }
}
</script>

<script setup lang="ts" generic="T extends ArrayOrNested<SelectMenuItem> = ArrayOrNested<SelectMenuItem>">
const props = withDefaults(defineProps<BaseFormInputMenuEntity<T> & { items?: T }>(), {
  placeholder: 'Manzilni tanlang',
  searchInput: true,
  color: 'primary',
  variant: 'subtle',
  size: '2xl',
  rounded: 'xl' as const
})

const emit = defineEmits<{
  (e: 'blur' | 'focus', event: FocusEvent): void
  (e: 'change', event: Event): void
  (e: 'update:open', value: boolean): void
  (e: 'create' | 'update:searchTerm', item: string): void
  (e: 'highlight', payload: { ref: HTMLElement; value: unknown } | undefined): void
  (e: 'update:modelValue', payload: never): void
}>()

const { defineExtend: defineSize } = useExtendProps<CustomSizesType, ExtendSizesType, UiSizesType>(
  customSizes,
  computed(() => props.size),
  'xl'
)

const defineExtendSize = computed(() => {
  switch (defineSize.value.extend) {
    case '2xl':
      return 'px-3.5 py-2.5 text-base'
    case '3xl':
      return 'p-4 text-base placeholder:text-lg'
    default:
      return ''
  }
})

const { defineRounded } = useRounded(computed(() => props.rounded))

const model = useModel(props, 'modelValue')
</script>

<template>
  <UInputMenu
    :id="id"
    v-model="model"
    :placeholder="placeholder"
    :search-input="searchInput"
    :color="color"
    :variant="variant"
    :size="defineSize.ui"
    :required="required"
    :value-key="valueKey"
    :label-key="labelKey"
    :items="items"
    :default-value="defaultValue"
    :multiple="multiple"
    :ui="{
      base: [defineExtendSize, defineRounded, ui?.base],
      arrow: [ui?.arrow],
      content: [ui?.content],
      viewport: [ui?.viewport],
      group: [ui?.group],
      empty: [ui?.empty],
      label: [ui?.label],
      separator: [ui?.separator],
      item: [ui?.item],
      itemLeadingIcon: [ui?.itemLeadingIcon],
      itemLeadingAvatar: [ui?.itemLeadingAvatar],
      itemLeadingAvatarSize: [ui?.itemLeadingAvatarSize],
      itemLeadingChip: [ui?.itemLeadingChip],
      itemLeadingChipSize: [ui?.itemLeadingChipSize],
      itemTrailing: [ui?.itemTrailing],
      itemTrailingIcon: [ui?.itemTrailingIcon],
      itemLabel: [ui?.itemLabel]
    }"
    @blur="(event) => emit('blur', event)"
    @focus="(event) => emit('focus', event)"
    @change="(event) => emit('change', event)"
    @update:open="(event) => emit('update:open', event)"
    @create="(event) => emit('create', event)"
    @update:search-term="(event) => emit('update:searchTerm', event)"
    @highlight="(event) => emit('highlight', event)"
  >
    <template #item="{ item, index }">
      <slot
        name="item"
        :item="item"
        :index="index"
      />
    </template>
  </UInputMenu>
</template>
