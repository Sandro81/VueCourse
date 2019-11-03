import Vue from 'vue';
import router from './router';
import store from './store';
import App from "@/App";
import axios from 'axios';
import Vuelidate from "vuelidate/src";

Vue.use(Vuelidate);

axios.defaults.baseURL = 'https://vuecourse-bbdb1.firebaseio.com';
axios.defaults.headers.common['Authorization'] = 'asd token';
axios.defaults.headers.get['Accepts'] = 'application/json';

axios.interceptors.request.use(config => {
  console.log('axios.interceptors.request.use()', config);
  return config;
});
axios.interceptors.response.use(res => {
  console.log('axios.interceptors.response.use()', res);
  return res;
});


// To remove the interceptors from execution
// axios.interceptors.request.eject(reqInterceptor);
// axios.interceptors.response.eject(resInterceptor);
//     const reqInterceptor = axios.interceptors.request.use(config => {
//       console.log('axios.interceptors.request.use()', config);
//       return config;
//     });
//     const resInterceptor = axios.interceptors.response.use(res => {
//       console.log('axios.interceptors.response.use()', res);
//       return res;
//     });

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
