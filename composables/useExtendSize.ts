/**
 * A composable utility that splits a size prop into either a "library size" (used by UI libraries)
 * or a "custom/extended size" (user-defined sizes like '2xl', '3xl', etc).
 *
 * This is helpful when you want to support both built-in sizes (like 'sm', 'md', 'lg') and your
 * own extended sizes in a clean and type-safe way.
 *
 * @template T - A union of custom size strings (e.g., '2xl' | '3xl')
 * @template K - Full size input type (e.g., 'sm' | 'md' | 'lg' | TCustom)
 * @template U - Library-supported size type (e.g., 'sm' | 'md' | 'lg' | 'xl')
 *
 * @param { readonly T[] } custom - An array of custom sizes to check against.
 * @param { Ref<K> } size - A reactive ref containing the input size.
 * @param { U } fallback - A fallback UI size to use when a custom size is detected.
 *
 *
 * @example
 * const customSizes = ['2xl', '3xl'] as const
 * type CustomSizesType = typeof customSizes[number]
 * type UiSizes = 'sm' | 'md' | 'lg' | 'xl'
 * type AllSizes = UiSizes | CustomSizesType
 *
 * const props = defineProps<{ size?: AllSizes }>()
 * const { defineSize } = useSize<CustomSizes, AllSizes, UiSizes>(
 *   customSizes,
 *   computed(() => props.size ?? 'md'),
 *   'md'
 * )
 */
export const useExtendSize = <T extends K, K extends string, U extends K>(custom: readonly T[], size: Ref<K>, fallback: U) => {
  const isExtendSize = (_size: K): _size is T => custom.includes(_size as T)

  const defineSize = computed(() => ({
    ui: isExtendSize(size.value) ? fallback : (size.value as U),
    extend: isExtendSize(size.value) ? size.value : null
  }))

  return {
    isExtendSize,
    defineSize
  }
}
