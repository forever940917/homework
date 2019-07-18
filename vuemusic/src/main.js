import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'


import 'common/stylus/index.styl'
Vue.config.productionTip = false

fastclick.attach(document.body)
console.log(store)
Vue.use(VueLazyLoad,{
    loading:require('common/image/default.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
