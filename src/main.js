import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelazyload from 'vue-lazyload'
import BaidiMap from 'vue-baidu-map'
import initMap from "../utils/Bmap"
Vue.use(BaidiMap, {
  ak: 'RGUMatevLOAQ5QyaeP8YxvRpj3j6A25u'
})





Vue.config.productionTip = false
Vue.use(initMap)
Vue.use(Vuelazyload)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
