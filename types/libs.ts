// Exclude `boolean` type to prevent type casting
// reference: https://vuejs.org/guide/components/props.html#boolean-casting
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AcceptableValue = string | number | Record<string, any> | null

export type ArrayOrNested<T> = T[] | T[][]

export type PointerDownOutsideEvent = CustomEvent<{
  originalEvent: PointerEvent
}>

export type FocusOutsideEvent = CustomEvent<{ originalEvent: FocusEvent }>

export type NestedItem<T> = T extends Array<infer I> ? NestedItem<I> : T

export type GetItemKeys<I> = keyof Extract<NestedItem<I>, object>

export type GetItemValue<I, VK extends GetItemKeys<I> | undefined, T extends NestedItem<I> = NestedItem<I>> = T extends object ? (VK extends undefined ? T : VK extends keyof T ? T[VK] : never) : T

export type GetModelValue<T, VK extends GetItemKeys<T> | undefined, M extends boolean> = M extends true ? GetItemValue<T, VK>[] : GetItemValue<T, VK>

export type SizeType = '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

export type ColorType = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'

export type VariantType = 'link' | 'solid' | 'outline' | 'soft' | 'subtle' | 'ghost'

export type RadioVariantType = 'card' | 'list' | 'table'

export type OrientationType = 'horizontal' | 'vertical'

export type IndicatorType = 'start' | 'end' | 'hidden'

export type BorderTypes = 'solid' | 'dashed' | 'dotted'

export type SingleOrMultiple = 'single' | 'multiple'
