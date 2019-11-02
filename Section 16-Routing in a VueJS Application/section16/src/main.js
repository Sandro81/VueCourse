import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {routes} from "@/router";

Vue.config.productionTip = false;
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
      return {selector: to.hash};
    }
    //return {x: 0, y: 700};
  }
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
