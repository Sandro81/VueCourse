import Vue from 'vue';
import Vuex from 'vuex';
import axios from './axios-auth';
import globalAxios from 'axios';
import router from "@/router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
      router.replace('/dashboard');
    },
    storeUser(state, user) {
      state.user = user;
    },
    clearAuthData(state) {
      console.log('clearAuthData',state);
      state.idToken = null;
      state.userId = null;
      state.user = null;
     router.replace('/signin');
    }
  },
  actions: {
    setLogoutTimer({commit}, expirationTime){
      setTimeout( () => {
        commit('clearAuthData')
      }, expirationTime * 1000);
    },
    signup({commit, dispatch}, authData) {
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
              userId: res.data.userId,
              user: res.data.user
            })
            dispatch('storeUser', authData);
            dispatch('setLogoutTimer', res.data.expiresIn);
            router.replace('/signin');
          })
          .catch(error => console.log(error));
    },
      login({commit, dispatch}, authData) {
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
              userId: res.data.userId,
              user: res.data.user
            })
            dispatch('setLogoutTimer', res.data.expiresIn);
          })
          .catch(error => console.log(error));

    },
    logout({commit}) {
      commit('clearAuthData');
    },
    storeUser({commit, state}, userData) {
      if(!state.idToken) {
        return;
      }
      globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
          .then(res => console.log(res))
          .catch(error => console.log(error));
    },
    fetchUser({commit, state}) {
      console.log('fetchUser - state.idToken: ',state.idToken);
      if(!state.idToken) {
        return;
      }
      globalAxios.get('/users.json' + '?auth=' + state.idToken)
          .then(res => {
            console.log(res);
            const data = res.data;
            const users = [];
            for (let key in data) {
              const user = data[key];
              user.id = key;
              users.push(user);
            }
            console.log(users);
            //this.email = users[0].email;
            commit('storeUser', users[0]);
          })
          .catch(error => console.log(error));
    }
  },
  getters: {
    user (state) {
      return state.user;
    },
    isAuthenticated(state){
      return state.idToken !== null;
    }
  }
})
