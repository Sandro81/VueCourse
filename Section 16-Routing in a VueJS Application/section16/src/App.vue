<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <div class="col">

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
        <div class="col">
          <router-view></router-view>
        </div>
        <div class="w-100"></div>
        <div class="col">col</div>
        <div class="col">col</div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from "@/components/Header";

export default {
  name: 'app',
  components: {
    appHeader: Header
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
}
</style>
