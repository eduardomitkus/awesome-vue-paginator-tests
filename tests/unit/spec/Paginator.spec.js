import { shallowMount } from '@vue/test-utils'
import Paginator from '@/components/Paginator/Paginator'

describe('Paginator.vue', () => {
  it('should set current page 1 by default', () => {
    const paginator = shallowMount(Paginator)
    expect(paginator.vm.currentPage).toBe(1)
  })

  it('Should set next page 2 to current page when click the next Button', () => {
    const paginator = shallowMount(Paginator)
    let button = paginator.find('.paginator_next-btn')
    button.trigger('click')
    expect(paginator.vm.currentPage).toBe(2)
  })

  it('should set previous page to current page when click the previous Button', () => {
    const paginator = shallowMount(Paginator)
    paginator.setData({
      currentPage: 4
    })
    let button = paginator.find('.paginator_previous-btn')
    button.trigger('click')
    expect(paginator.vm.currentPage).toBe(3)
  })
})