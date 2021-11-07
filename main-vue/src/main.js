import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'

import mock from './mock.js'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

import "@/assets/styles.css"
import "@/assets/colors.css"
import "@/assets/footer.css"

let data = {
  ram: mock.ram,
  hdd: mock.hdd,
  ssd: mock.ssd
}

new Vue({
  data,
  router,
  render: h => h(App)
}).$mount('#app')
