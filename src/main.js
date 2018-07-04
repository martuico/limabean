import './../node_modules/foundation-sites/dist/css/foundation.min.css'
import './../node_modules/foundation-sites/dist/js/foundation.min.js'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
