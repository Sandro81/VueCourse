import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home';
Vue.config.productionTip = false
Vue.component('app-server', Home);
new Vue({
  render: h => h(App),
}).$mount('#app')
