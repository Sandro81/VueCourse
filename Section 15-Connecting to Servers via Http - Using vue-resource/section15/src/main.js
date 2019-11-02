import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';


Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.http.options.root = 'https://vuehttptest-f8e41.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if(request.method == 'POST') {
    request.method = 'PUT';
  }
  next();
  // next(response => {
  //   response.json = () => {
  //     return { messages: response.body}
  //   }
  // });
});
new Vue({
  render: h => h(App),
}).$mount('#app')
