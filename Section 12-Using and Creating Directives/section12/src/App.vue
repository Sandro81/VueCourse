<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Some Strong Text</strong>'"></p>
      </div>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight>Color this</p>
        <h3>Value</h3>
        <p v-highlightWithBinding="'red'">Color this with Binding</p>
        <h3>Arguments</h3>
        <p v-highlightWithBindingWithArg:background="'yellow'">Color this with Binding and Arg</p>
        <p v-highlightWithBindingWithArg="'red'">Color this with Binding and Arg</p>
        <h3>Modifiers</h3>
        <p v-highlightWithBindingWithArgAndModifier:background.delayed="'deepskyblue'">Color this with Binding and Arg and Modifiers</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>

</style>
