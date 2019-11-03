import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    }
  },
  actions: {
    signup({commit}, authData) {
      //https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
      console.log('$store signup',authData);
      axios.post('/accounts:signUp?key=AIzaSyAfayTtsI9es-kaTj9OSD3B_BnBVa4HVv8', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
          .then(res => {
            console.log(res);
            commit('authUser', {
              token: res.data.idToken,
              userId: res.data.localId
            })
          })
          .catch(error => console.log(error));
    },
    login({commit}, authData) {
      //https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
      console.log('$store login',authData);
      axios.post('/accounts:signInWithPassword?key=AIzaSyAfayTtsI9es-kaTj9OSD3B_BnBVa4HVv8', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
          .then(res => {
            console.log(res);
            commit('authUser', {
              token: res.data.idToken,
              userId: res.data.localId
            })
          })
          .catch(error => console.log(error));
    },
    fetchUser({commit}) {

    }
  },
  getters: {

  }
})
