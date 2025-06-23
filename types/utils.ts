// Exclude `boolean` type to prevent type casting
// reference: https://vuejs.org/guide/components/props.html#boolean-casting
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AcceptableValue = string | number | Record<string, any> | null

export type SizeType = '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

export type ColorType = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'

export type VariantType = 'link' | 'solid' | 'outline' | 'soft' | 'subtle' | 'ghost'

export type RadioVariantType = 'card' | 'list' | 'table'

export type OrientationType = 'horizontal' | 'vertical'

export type IndicatorType = 'start' | 'end' | 'hidden'

export type BorderTypes = 'solid' | 'dashed' | 'dotted'
