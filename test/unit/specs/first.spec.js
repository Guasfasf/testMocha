// vue 单元测试
import Vue from 'vue'
import first from '@/components/test/first'
// describe 是Jasmine的全局函数，用于创建一个测试套件，可以理解为一组测试用例的集合。
// describe 函数接受两个参数（一个字符串和一个回调函数）。
// 字符串是这个测试套件的名字或标题，通常描述被测试内容，用之前的比喻来说，describe就是一个故事，字符串就是这个故事的标题。
// 回调函数是实现测试套件的代码块（称为describe块）。
describe('测试first.vue文件', () => {
  // it 也是 Jasmine 的全局函数，用来在describe块中创建一个测试用例（spec），和describe一样。
  // it 接受两个参数（一个字符串一个回调函数），字符串参数是测试用例的名字或标题，回调函数是实现测试用例的代码块（称为it块）
  it('listItems 在 list 渲染', () => {
    const Constructor = Vue.extend(first)
    const ListComponent = new Constructor().$mount()
    // ListComponent.$el 通过textContent获取到文本play games
    expect(ListComponent.$el.textContent).toContain('play games')
  })

  it('sleep in li', () => {
    const Constructor = Vue.extend(first)
    const ListComponent = new Constructor().$mount()
    // querySelector 可以使用它的类（.buttonClass），其id（#buttonId）或元素的名称（button）来找到一个元素。
    // toEqual 检查值是否相同（空格也包含）
    // tobE 检查值是否相同，并且检查是否是同个对象
    expect(ListComponent.$el.querySelector('.li').textContent).toEqual('test List')
  })

  it('adds a new item to list on click', () => {
    // 点击事件测试
    const Constructor = Vue.extend(first)
    const ListComponent = new Constructor().$mount()
    ListComponent.newItem = 'brush my teeth'
    // 找到button
    const button = ListComponent.$el.querySelector('button')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    // 在测试环境中，List组件不会监听任何事件，因此我们需要手动运行监视器。
    ListComponent._watcher.run()
    // 检查 如果所有检查没有问题全部绿色，错误的话，cmd 中会指出错误位置
    expect(ListComponent.$el.textContent).toContain('brush my teeth')
    expect(ListComponent.listItems).toContain('brush my teeth')
  })
})
