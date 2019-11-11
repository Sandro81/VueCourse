<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="container">
      <div class="row">
        <router-link to="/">Quotes</router-link>
        <router-link to="/new-quote">New Quote</router-link>
      </div>
    </div>
    <hr>
    <div class="container">
      <div class="row">
        <router-view></router-view>
<!--        <app-new-quote></app-new-quote>-->
      </div>
    </div>
  </div>
</template>

<script>
  // import NewQuote from './components/new-quote';
export default {
  data() {
    return {}
  },
  // components: {
  //   'app-new-quote': NewQuote
  // }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
