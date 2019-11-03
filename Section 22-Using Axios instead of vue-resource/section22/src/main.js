import Vue from 'vue';
import router from './router';
import store from './store';
import App from "@/App";
import axios from 'axios';

axios.defaults.baseURL = 'https://vuecourse-bbdb1.firebaseio.com';


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
