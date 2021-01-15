import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 按需加载vant组件库
import './plugin/vant.js'
// 全局样式
import './styles/common.scss'
// 加载动态设置 REM 基准值
import 'amfe-flexible'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
