import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/utils/components.js'; // 自定义组件
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
