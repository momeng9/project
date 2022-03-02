import Vue from 'vue'
import App from './App.vue'
import router from './router' //可以省去index.js


Vue.config.productionTip = false

new Vue({
  
  router,
  render: h => h(App),
}).$mount('#app')


