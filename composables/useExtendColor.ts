/**
 * A composable utility that separates a color value into either a "UI-supported color"
 * or a custom/extended color defined by the developer.
 *
 * This is useful when your component supports both built-in color values (e.g., 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral')
 * and custom-defined color names (e.g., ''greyscale', 'white', 'gradient' etc.), allowing you to cleanly split them.
 *
 * @template T - A union of custom/extended color strings (e.g., 'greyscale', 'white')
 * @template K - The full color input type (e.g., union of both UI and custom colors)
 * @template U - UI-supported color strings (e.g., 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral')
 *
 * @param { readonly T[] } custom - An array of custom color values to be considered "extended".
 * @param { Ref<K> } size - A reactive ref holding the current color input value.
 * @param { U } fallback - A fallback UI color to use when a custom color is selected.
 *
 *
 * @example
 * const customColors = ['greyscale', 'brand'] as const
 * type CustomColors = typeof customColors[number]
 * type UiColors = 'primary' | 'gray' | 'success'
 * type AllColors = CustomColors | UiColors
 *
 * const props = defineProps<{ color: AllColors }>();
 * const color = computed(() => props.color)
 *
 * const { defineColor } = useExtendColor<CustomColors, AllColors, UiColors>(
 *   customColors,
 *   color,
 *   'primary'
 * )
 */
export const useExtendColor = <T extends K, K extends string, U extends K>(custom: readonly T[], size: Ref<K>, fallback: U) => {
  const isExtendColor = (_size: K): _size is T => custom.includes(_size as T)

  const defineColor = computed(() => ({
    ui: isExtendColor(size.value) ? fallback : (size.value as U),
    extend: isExtendColor(size.value) ? size.value : null
  }))

  return {
    isExtendColor,
    defineColor
  }
}
