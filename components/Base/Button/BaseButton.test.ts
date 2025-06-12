import { h } from 'vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { it, expect } from 'vitest'
import BaseButton from './BaseButton.vue'

it('should render component', async () => {
  const wrapper = await mountSuspended(BaseButton)
  expect(wrapper.exists()).toBe(true)
})

it('should render label prop', async () => {
  const label = 'Click me'
  const wrapper = await mountSuspended(BaseButton, {
    props: {
      label
    }
  })

  expect(wrapper.html()).toContain(label)
})

it('should apply default props correctly', async () => {
  const wrapper = await mountSuspended(BaseButton)

  expect(wrapper.props('as')).toBe('button')
  expect(wrapper.props('color')).toBe('primary')
  expect(wrapper.props('variant')).toBe('solid')
  expect(wrapper.props('size')).toBe('md')
  expect(wrapper.props('type')).toBe('button')
})

it('should render default slot content', async () => {
  const defaultSlot = 'Default slot'
  const wrapper = await mountSuspended(BaseButton, {
    slots: {
      default: () => h('div', defaultSlot)
    }
  })

  expect(wrapper.find('div').text()).toBe(defaultSlot)
})

it('should pass through icon props', async () => {
  const icon = 'i-heroicons:home'
  const wrapper = await mountSuspended(BaseButton, {
    props: {
      icon
    }
  })

  expect(wrapper.html()).toContain(icon)
})

it('should pass through avatar props', async () => {
  const avatar = {
    src: 'https://github.com/benjamincanac.png',
    alt: 'Avatar'
  }

  const wrapper = await mountSuspended(BaseButton, {
    props: {
      avatar
    }
  })

  expect(wrapper.find('img').attributes('src')).toBe(avatar.src)
  expect(wrapper.find('img').attributes('alt')).toBe(avatar.alt)
})

it('should apply loading and disabled states', async () => {
  const wrapper = await mountSuspended(BaseButton, {
    props: {
      loading: true,
      disabled: true
    }
  })

  expect(wrapper.find('button').attributes('disabled')).toBe('')
  expect(wrapper.find('span').classes()).toContain('animate-spin')
})
