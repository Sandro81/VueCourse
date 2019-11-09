<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="container">
      <div class="row">
        <app-new-quote></app-new-quote>
      </div>
    </div>

  </div>
</template>

<script>

  import NewQuote from './components/new-quote';
export default {
  name: 'app',
  components: {
    'app-new-quote': NewQuote
  }
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
