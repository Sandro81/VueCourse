import Vue from 'vue';
import router from './router';
import store from './store';
import App from "@/App";
import axios from 'axios';

axios.defaults.baseURL = 'https://vuecourse-bbdb1.firebaseio.com';
axios.defaults.headers.common['Authorization'] = 'asd token';
axios.defaults.headers.get['Accepts'] = 'application/json';

axios.interceptors.request.use(config => {
  console.log(config);
  return config;
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
