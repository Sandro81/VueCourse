import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import Quotes from "@/components/quotes";
import NewQuote from "@/components/new-quote";

Vue.use(VueRouter);
Vue.config.productionTip = false;


const routes = [
  {path: '', component: Quotes},
  {path: '/new-quote', component: NewQuote}
];

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
