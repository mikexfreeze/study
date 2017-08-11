import Vue from 'vue'
import App from './App.vue'
import Ele from 'element-ui'
Vue.use(Ele)
new Vue({
  el: '#app',
  render: h => h(App)
})
