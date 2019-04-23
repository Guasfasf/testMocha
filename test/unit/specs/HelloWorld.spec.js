import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    // querySelector 可以使用它的类（.buttonClass），其id（#buttonId）或元素的名称（button）来找到一个元素。
    // toEqual 检查值是否相同
    // tobE 检查值是否相同，并且检查是否是同个对象
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
