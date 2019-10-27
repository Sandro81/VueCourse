<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-server-details></app-server-details>


    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  import Servers from "@/components/Servers";
  import ServerDetails from "@/components/ServerDetails";

  export default {
    components: {
      'app-header': Header,
      'app-servers': Servers,
      'app-server-details': ServerDetails,
      'app-footer': Footer
    }
  }
</script>

<style>

</style>



