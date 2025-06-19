import type { SizeType } from '~/types/utils'
/**
 * A composable utility that maps the `rounded` prop to corresponding Tailwind CSS classes.
 *
 * It supports:
 * - `false` or `undefined` → returns an empty string (no rounding),
 * - `true` → returns a fixed pill-like class (`rounded-[80px]`),
 * - predefined size values (`SizeType`) → maps to specific Tailwind `rounded` classes.
 *
 * @param { Ref<boolean | SizeType | undefined> } rounded - A reactive ref containing the rounding option.
 *   Can be a boolean (`true` for pill-rounded, `false` for none),
 *   a string from predefined size values (e.g., 'md', 'lg', '2xl', etc.),
 *   or `undefined`.
 *
 * An object with a computed `defineRounded` string representing the appropriate Tailwind class.
 *
 */
export const useRounded = (rounded: Ref<boolean | SizeType | undefined>) => {
  const roundedMap: Record<SizeType, string> = {
    xs: 'rounded',
    sm: 'rounded',
    md: 'rounded-lg',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '3xs': 'rounded',
    '2xs': 'rounded',
    '2xl': 'rounded-xl',
    '3xl': 'rounded-xl'
  }

  const defineRounded = computed(() => {
    if (!rounded.value) return ''
    if (typeof rounded.value === 'boolean') return 'rounded-[80px]'
    return roundedMap[rounded.value]
  })

  return {
    defineRounded
  }
}
