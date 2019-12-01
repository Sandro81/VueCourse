import Vue from 'vue'
//import App from './App.vue'
import Master from './components/layouts/Master'
import {store} from './store/store'
//npm install vue-router --save
import VueRouter from 'vue-router'
import routes from './routes'


//https://www.youtube.com/watch?v=7AXiN5mrOgY&list=PLEhEHUEU3x5q-xB1On4CsLPts0-rZ9oos&index=3
window.eventBus = new Vue();

Vue.config.productionTip = false
Vue.use(VueRouter)

//this is useful to avoid the # in the root
const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'todo',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  render: h => h(Master),
  router: router,
    store: store
}).$mount('#app')
