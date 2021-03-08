import Vue from 'vue'
import router from './router/web.demo'
import LoginComponent from '@/components/Login.vue'

Vue.config.productionTip = false

new Vue({
  //router,
  render: h => h(LoginComponent)
}).$mount('#app')
