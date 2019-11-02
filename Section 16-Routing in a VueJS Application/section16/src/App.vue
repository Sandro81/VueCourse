<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <img alt="Vue logo" src="./assets/logo.png" style="width: 50px; height: auto;">
        </div>
        <div class="w-100"></div>
        <div class="col">
          <h1>Section 16: Routing in a VueJS Application</h1>
          <p>npm install --save vue-router</p>
        </div>
      </div>
    </div>

    <hr>
    <div class="container">
      <div class="row">
        <div class="col">col</div>
        <div class="col">col</div>
        <div class="w-100"></div>
        <div class="col">col</div>
        <div class="col">col</div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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
