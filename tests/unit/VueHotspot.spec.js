import { shallowMount } from '@vue/test-utils'
import VueHotspot from '@/components/VueHotspot.vue'

describe('VueHotspot.vue', () => {
  it('set config correctly when props.initOptions passed', () => {
    const initOptions = {
      data: [],
      image: 'test',
      editable: 'test',
      interactivity: 'test',
      schema: [
        {
          'property': 'test',
          'default': 'test'
        },
        {
          'property': 'test',
          'default': 'test'
        }
      ]
    }
    const wrapper = shallowMount(VueHotspot)
    wrapper.setProps({ initOptions })

    const config = { ...wrapper.vm.defaultOptions, ...initOptions }
    expect(wrapper.vm.config).not.toBeNull()
    expect(wrapper.vm.config).toEqual(config)
  })
})
