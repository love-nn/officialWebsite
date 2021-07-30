import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import elementUI from 'element-ui'
import store from './store/store'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(elementUI)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})

