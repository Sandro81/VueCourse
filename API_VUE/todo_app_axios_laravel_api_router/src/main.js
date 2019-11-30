import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'



//https://www.youtube.com/watch?v=7AXiN5mrOgY&list=PLEhEHUEU3x5q-xB1On4CsLPts0-rZ9oos&index=3
window.eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    store: store
}).$mount('#app')
