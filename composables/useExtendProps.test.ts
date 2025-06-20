import { it, expect, describe } from 'vitest'
import { useExtendProps } from '~/composables/useExtendProps'
import type { ColorType, SizeType } from '~/types/utils'

describe('useExtendProps composable', () => {
  const customColors = ['greyscale', 'white', 'gradient'] as const
  type CustomColorsType = (typeof customColors)[number]

  type UiColorsType = ColorType
  type ExtendColorsType = ColorType | CustomColorsType

  const customSizes = ['2xl', '3xl'] as const
  type CustomSizesType = (typeof customSizes)[number]

  type UiSizesType = Exclude<SizeType, '3xs' | '2xs' | CustomSizesType>
  type ExtendSizesType = UiSizesType | CustomSizesType

  it('composable should return library ui color for used components', () => {
    const { defineExtend } = useExtendProps<CustomColorsType, ExtendColorsType, UiColorsType>(customColors, ref('success'), 'primary')

    expect(defineExtend.value).toEqual({
      ui: 'success',
      extend: null
    })
  })

  it('composable should return extend custom color for used components', () => {
    const { defineExtend } = useExtendProps<CustomColorsType, ExtendColorsType, UiColorsType>(customColors, ref('gradient'), 'primary')

    expect(defineExtend.value).toEqual({
      ui: 'primary',
      extend: 'gradient'
    })
  })

  it('composable should return library ui size for used components', () => {
    const { defineExtend } = useExtendProps<CustomSizesType, ExtendSizesType, UiSizesType>(customSizes, ref('xl'), 'md')

    expect(defineExtend.value).toEqual({
      ui: 'xl',
      extend: null
    })
  })

  it('composable should return extend custom size for used components', () => {
    const { defineExtend } = useExtendProps<CustomSizesType, ExtendSizesType, UiSizesType>(customSizes, ref('2xl'), 'md')

    expect(defineExtend.value).toEqual({
      ui: 'md',
      extend: '2xl'
    })
  })
})
