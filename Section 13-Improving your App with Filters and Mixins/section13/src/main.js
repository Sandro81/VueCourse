import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('to-lowerCaseGloballyFilter', function (value) {
    return value.toLowerCase();
});

Vue.mixin({
  created() {
    /*eslint no-console: "error"*/
// custom console
    Console.log('Global Mixin - Created Hook');
  }
});
new Vue({
  render: h => h(App),
}).$mount('#app')
