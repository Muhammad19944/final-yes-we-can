import { h } from 'vue'
import { expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import BaseAvatarLabeled from './BaseAvatarLabeled.vue'
import BaseAvatar from '~/components/Base/Avatar/BaseAvatar.vue'

it('should render BaseAvatar', async () => {
  const wrapper = await mountSuspended(BaseAvatarLabeled)
  expect(wrapper.findComponent(BaseAvatar).exists()).toBe(true)
})

it('should render label and subLabel props', async () => {
  const label = 'John Doe'
  const subLabel = 'Developer'

  const wrapper = await mountSuspended(BaseAvatarLabeled, {
    props: {
      label,
      subLabel
    }
  })

  expect(wrapper.html()).toContain(label)
  expect(wrapper.html()).toContain(subLabel)
})

it('should render label slot content', async () => {
  const labelSlot = 'Custom label'

  const wrapper = await mountSuspended(BaseAvatarLabeled, {
    slots: {
      label: () => h('div', labelSlot)
    }
  })

  expect(wrapper.html()).toContain(labelSlot)
})

it('should render subLabel slot content', async () => {
  const labelSlot = 'Custom subLabel'

  const wrapper = await mountSuspended(BaseAvatarLabeled, {
    slots: {
      subLabel: () => h('div', labelSlot)
    }
  })

  expect(wrapper.html()).toContain(labelSlot)
})

it('should render chip slot content', async () => {
  const chipSlot = '🟢 Online'

  const wrapper = await mountSuspended(BaseAvatarLabeled, {
    slots: {
      chip: () => h('div', chipSlot)
    }
  })

  expect(wrapper.html()).toContain(chipSlot)
})
