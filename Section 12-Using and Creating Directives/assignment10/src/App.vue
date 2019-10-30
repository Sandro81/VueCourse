<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <button class="btn btn-primary" v-customOn:click="clicked">Click me</button>
        <hr>
        <div
                style="width: 100px; height: 100px; background-color: #42b983"
                v-customOn:mouseenter="mouseEnter"
                v-customOn:mouseleave="mouseLeave"> </div>
        <p>{{consoleLog}}</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        consoleLog: ''
      }
    },
    directives: {
      customOn: {
        bind(el, binding) {
          el.onClick = function () {
            binding.value();
          }
          const type = binding.arg;
          const fn = binding.value;
          el.addEventListener(type, fn);
        }
      }
    },
    methods: {
      clicked() {
        this.consoleLog = 'I was clicked';
      },
      mouseEnter() {
        this.consoleLog = 'Mouse Entered';
      },
      mouseLeave() {
        this.consoleLog = 'Mouse Leaved';
      }
    },
  }
</script>

<style>
</style>
