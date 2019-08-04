import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
import Vuex from 'vuex'
import router from './router'
import MintUI from 'mint-ui'
import {httpGet, httpPost} from './js/request'
import 'mint-ui/lib/style.css'

Vue.use(Vuex)
Vue.use(MintUI)

Vue.config.productionTip = false
Vue.prototype.$httpGet = httpGet
Vue.prototype.$httpPost = httpPost

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
