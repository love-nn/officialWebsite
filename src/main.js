import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import elementUI from 'element-ui'
import store from './store/store'
import animated from "animate.css"
import flexible from './components/redrock/flexible.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css'
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(elementUI)
Vue.use(flexible)
Vue.use(VueAwesomeSwiper)
Vue.use(animated)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})

