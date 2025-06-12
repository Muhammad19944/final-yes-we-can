import { h } from 'vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest'
import BaseAvatarLink from './BaseAvatarLink.vue'

describe('BaseAvatarLink', () => {
  it('should render component', async () => {
    const wrapper = await mountSuspended(BaseAvatarLink)

    expect(wrapper.exists()).toBe(true)
  })

  it('should render with correct "to" and "target" attributes', async () => {
    const wrapper = await mountSuspended(BaseAvatarLink, {
      props: {
        to: '/profile',
        target: '_blank'
      }
    })

    const link = wrapper.find('a')

    expect(link.attributes('href')).toBe('/profile')
    expect(link.attributes('target')).toBe('_blank')
  })

  it('should apply underlineOnHover props', async () => {
    const wrapper = await mountSuspended(BaseAvatarLink, {
      props: {
        underlineOnHover: true
      }
    })

    expect(wrapper.find('a').classes()).toContain('hover:underline')
  })

  it('should render BaseAvatar by default', async () => {
    const wrapper = await mountSuspended(BaseAvatarLink)

    expect(wrapper.findComponent({ name: 'BaseAvatar' }).exists()).toBe(true)
  })

  it('should render default slot content', async () => {
    const defaultSlot = 'Custom default slot'

    const wrapper = await mountSuspended(BaseAvatarLink, {
      slots: {
        default: () => h('div', defaultSlot)
      }
    })

    expect(wrapper.find('div').text()).toBe(defaultSlot)
  })
})
