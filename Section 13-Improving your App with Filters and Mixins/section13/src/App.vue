<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins into App.vue</h1>
        <p>{{ text | toUpperCaseFilter}}</p>
        <p>{{ text | to-lowerCaseGloballyFilter}}</p>
        <hr>
        <button @click="fruits.push('Berries')">Add New Item</button>
        <input type="text" v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits" v-bind:key="fruit.id">{{fruit}}</li>
        </ul>
        <hr>
      </div>
      <app-list></app-list>
    </div>
  </div>
</template>

<script>
  import List from "@/components/List";
  import {fruitMixin} from "@/fruitMixin";

  export default {
    mixins: [fruitMixin],
    data(){
      return {
        text: 'Hello There',
      }
    },
    filters: {
      toUpperCaseFilter(value) {
        return value.toUpperCase();
      }
    },
    components: {
      appList: List
    }
  }
</script>

<style>

</style>
