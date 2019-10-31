<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUpperCaseFilter}}</p>
        <p>{{ text | to-lowerCaseGloballyFilter}}</p>
        <hr>
        <input type="text" v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits" v-bind:key="fruit.id">{{fruit}}</li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        text: 'Hello There',
        fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
        filterText: ''
      }
    },
    filters: {
      toUpperCaseFilter(value) {
        return value.toUpperCase();
      }
    },
    computed: {
      filteredFruits() {
        return this.fruits.filter((element) => {
          return element.match(this.filterText);
        });
      }
    }
  }
</script>

<style>

</style>
