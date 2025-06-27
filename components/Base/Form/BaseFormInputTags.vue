<script lang="ts">
import { useExtendProps } from '~/composables/useExtendProps'
import type { SizeType } from '~/types/utils'
import type { FormInputEntity } from './BaseFormInput.vue'

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

type modelValueType = string | Record<string, unknown>

export interface BaseFormInputTagsEntity extends Omit<FormInputEntity, 'type' | 'autocomplete' | 'modelValue' | 'ui'> {
  deleteIcon?: string
  modelValue?: null | modelValueType[]
  defaultValue?: modelValueType[]
  addOnPaste?: boolean
  addOnTab?: boolean
  addOnBlur?: boolean
  duplicate?: boolean
  delimiter?: string | RegExp
  max?: number
  convertValue?: (value: string) => modelValueType
  displayValue?: (value: modelValueType) => string
  closeable?: boolean
  ui?: {
    root?: string | string[]
    base?: string | string[]
    leading?: string | string[]
    leadingIcon?: string | string[]
    leadingAvatar?: string | string[]
    item?: string | string[]
    itemText?: string | string[]
    itemDelete?: string | string[]
    itemDeleteIcon?: string | string[]
    input?: string | string[]
  }
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseFormInputTagsEntity>(), {
  as: 'div',
  color: 'primary',
  variant: 'subtle',
  autofocusDelay: 0,
  rounded: 'xl' as const
})

const emit = defineEmits<{
  (e: 'blur' | 'focus', event: FocusEvent): void
  (e: 'change', event: Event): void
  (e: 'invalid' | 'addTag' | 'removeTag', payload: null | modelValueType): void
  (e: 'update:modelValue', payload: null | modelValueType[]): void
}>()

const { defineExtend: defineSize } = useExtendProps<CustomSizesType, ExtendSizesType, UiSizesType>(
  customSizes,
  computed(() => props.size),
  'md'
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

const definePaddingOnVModel = computed(() => {
  if (!model.value?.length) {
    return
  }

  switch (props.size) {
    case '3xl':
      return '!p-3.5'
    case '2xl':
      return 'p-2'
    case 'xl':
      return 'p-1.5'
    default:
      return ''
  }
})

const defineItemSize = computed(() => {
  switch (props.size) {
    case '3xl':
    case '2xl':
      return ['text-sm p-[6px]', props.closeable ? 'pl-3' : 'px-3']
    case 'xl':
      return ['text-xs p-1', props.closeable ? 'pl-2' : 'px-2']
    default:
      return ['text-xs p-1', props.closeable ? 'pl-1.5' : 'px-1.5']
  }
})

const { defineRounded } = useRounded(computed(() => props.rounded))

const slots = useSlots()
const model = useModel(props, 'modelValue')
</script>

<template>
  <UInputTags
    :id="id"
    v-model="model"
    :as="as"
    :placeholder="placeholder"
    :color="color"
    :variant="variant"
    :size="defineSize.ui"
    :autofocus="autofocus"
    :autofocus-delay="autofocusDelay"
    :delete-icon="deleteIcon"
    :highlight="highlight"
    :default-value="defaultValue"
    :add-on-paste="addOnPaste"
    :add-on-tab="addOnTab"
    :add-on-blur="addOnBlur"
    :duplicate="duplicate"
    :disabled="disabled"
    :delimiter="delimiter"
    :max="max"
    :convert-value="convertValue"
    :display-value="displayValue"
    :name="name"
    :required="required"
    :icon="icon"
    :avatar="avatar"
    :leading="leading"
    :leading-icon="leadingIcon"
    :trailing="trailing"
    :trailing-icon="trailingIcon"
    :loading="loading"
    :loading-icon="loadingIcon"
    :ui="{
      root: [definePaddingOnVModel, ui?.root],
      base: [defineExtendSize, defineRounded, ui?.base],
      leading: [ui?.leading],
      leadingIcon: [ui?.leadingIcon],
      leadingAvatar: [ui?.leadingAvatar],
      item: ['gap-2 bg-white h-7 ring-0 shadow-10 rounded-[80px] font-medium', defineItemSize, ui?.item],
      itemText: [ui?.itemText],
      itemDelete: [closeable ? '' : 'hidden', 'rounded-full', ui?.itemDelete],
      itemDeleteIcon: [ui?.itemDeleteIcon],
      input: [props.readonly ? 'pointer-events-none' : '', ui?.input]
    }"
    @blur="(event: FocusEvent) => emit('blur', event)"
    @change="(event: Event) => emit('change', event)"
    @invalid="(payload: null | modelValueType) => emit('invalid', payload)"
    @add-tag="(payload: null | modelValueType) => emit('addTag', payload)"
    @remove-tag="(payload: null | modelValueType) => emit('removeTag', payload)"
    @update:model-value="(payload: null | modelValueType[]) => emit('update:modelValue', payload)"
  >
    <template
      v-if="leading || slots.leading"
      #leading
    >
      <slot name="leading" />
    </template>

    <template #default>
      <slot name="default" />
    </template>

    <template
      v-if="trailing || slots.trailing"
      #trailing
    >
      <slot name="trailing" />
    </template>

    <template #item-text="{ item, index }">
      <slot
        name="item-text"
        :item="item"
        :index="index"
      />
    </template>

    <template #item-delete="{ item, index }">
      <slot
        name="item-delete"
        :item="item"
        :index="index"
      >
        <BaseButton
          size="xs"
          square
          rounded
          icon="heroicons:x-mark-20-solid"
          :ui="{
            base: 'bg-(--color-greyscale-600)/15 hover:bg-(--color-greyscale-600)/25 cursor-pointer p-[2px]',
            leadingIcon: 'text-(--color-greyscale-600)'
          }"
        />
      </slot>
    </template>
  </UInputTags>
</template>
