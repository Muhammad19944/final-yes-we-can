/**
 * Extend a prop value into a UI-supported value and a custom/extended one.
 *
 * @template T - Custom values subset (e.g., '2xl', 'greyscale')
 * @template K - Full input union type (e.g., 'md' | '2xl')
 * @template U - UI-supported values (e.g., 'sm', 'md', 'lg')
 *
 * @param { readonly T[] } extend - Array of custom values.
 * @param { Ref<K | undefined> } props - Reactive prop or undefined value.
 * @param { U } fallback - UI value fallback if custom is used.
 *
 */
export const useExtendProps = <T extends K, K extends string, U extends K>(extend: readonly T[], props: Ref<K | undefined>, fallback: U) => {
  const isExtendProp = (value: K): value is T => extend.includes(value as T)

  const defineExtend = computed(() => {
    if (!props.value) {
      return {
        ui: undefined,
        extend: null
      }
    }

    return {
      ui: isExtendProp(props.value) ? fallback : (props.value as U),
      extend: isExtendProp(props.value) ? props.value : null
    }
  })

  return {
    isExtendProp,
    defineExtend
  }
}
