import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest'
import BaseAvatar from './BaseAvatar.vue'
import type { SizeType } from '~/types/utils'

const sizes: Record<SizeType, string> = {
  '3xs': 'size-4',
  '2xs': 'size-5',
  xs: 'size-6',
  sm: 'size-7',
  md: 'size-8',
  lg: 'size-9',
  xl: 'size-10',
  '2xl': 'size-11',
  '3xl': 'size-12'
}

describe('BaseAvatar', () => {
  it('component mounted', async () => {
    const wrapper = await mountSuspended(BaseAvatar)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('render src props', async () => {
    const src = 'https://github.com/benjamincanac.png'
    const wrapper = await mountSuspended(BaseAvatar, {
      props: {
        src
      }
    })

    expect(wrapper.find('img').attributes('src')).toBe(src)
  })

  it('render icon props', async () => {
    const icon = 'i-mdi:account'
    const wrapper = await mountSuspended(BaseAvatar, {
      props: {
        icon
      }
    })

    expect(wrapper.html()).toContain(icon)
  })

  it('render text props', async () => {
    const text = 'Muhammad'
    const wrapper = await mountSuspended(BaseAvatar, {
      props: {
        text
      }
    })

    expect(wrapper.html()).toContain(text)
  })

  it('render size props', async () => {
    const size: SizeType = '2xl'
    const wrapper = await mountSuspended(BaseAvatar, {
      props: {
        size
      }
    })

    expect(wrapper.classes()).toContain(sizes[size])
  })

  it('render customSize props', async () => {
    const customSize = 50
    const wrapper = await mountSuspended(BaseAvatar, {
      props: {
        customSize
      }
    })

    expect(wrapper.attributes('style')).toContain(`width: ${customSize}px`)
    expect(wrapper.attributes('style')).toContain(`height: ${customSize}px`)
  })

  it('render background props', async () => {
    const background = 'gradient'
    const wrapper = await mountSuspended(BaseAvatar, {
      props: {
        background
      }
    })

    expect(wrapper.classes()).toContain('bg-linear-[var(--primary-linear)]')
  })
})
