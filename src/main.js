import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import VCharts from 'v-charts'
import  *  as util from '@/utils/index'
import '@/styles/index.scss' // global css

import App from './App'
import router from './router/index'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control
// 引入价格格式化组件
// import priceColorScheme from 'price-color'

Vue.use(ElementUI, { locale })
Vue.use(VCharts)
// Vue.use(priceColorScheme);
Vue.config.productionTip = false
Vue.prototype.$util = util;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
