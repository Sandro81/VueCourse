import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Quotes from "@/components/quotes";
import NewQuote from "@/components/new-quote";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {path: '', components: Quotes},
  {path: '/new-quote', components: NewQuote}
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  routes: routes,
  render: h => h(App),
}).$mount('#app')
