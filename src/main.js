import Vue from 'vue'
import App from './App.vue'
import VueProgressBar from 'vue-progressbar'
import store from '@/store'

Vue.config.productionTip = false

Vue.use(VueProgressBar,  {
  color: "#c10708",
  thickness: "5px",
})

export default new Vue({
  store,
  render: h => h(App),
}).$mount('#app')