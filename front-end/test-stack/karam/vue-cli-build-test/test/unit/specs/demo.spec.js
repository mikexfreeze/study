/**
 * Created by Micheal Xiao on 2017/7/12.
 */
// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import demo from '@/components/demo.vue'

// 这里是一些 Jasmine 2.0 的测试，你也可以使用你喜欢的任何断言库或测试工具。
describe('demo', () => {
    const Constructor = Vue.extend(demo)
    const vm = new Constructor().$mount()
    it('should render correct contents', () => {

        expect(vm.$el.querySelector('.demo').textContent)
            .to.equal('hello')
    })

    // it('has a created hook', () => {
    //     expect(typeof Constructor.created).toBe('function')
    // })

    it('has a created hook2', () => {
        console.log(typeof vm.$options.created[0])
        // expect((typeof vm.$options.created[0]) == 'function')
        expect(typeof vm.created == 'function')
    })

})