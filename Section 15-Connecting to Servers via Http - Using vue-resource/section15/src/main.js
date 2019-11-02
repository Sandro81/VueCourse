import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import response from "vue-resource/src/http/response";


Vue.config.productionTip = false

Vue.use(VueResource);
Vue.http.options.root = 'https://vuehttptest-f8e41.firebaseio.com/data.json';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if(request.method == 'POST') {
    request.method = 'PUT';
  }
  next(response => {

  });
});
new Vue({
  render: h => h(App),
}).$mount('#app')
