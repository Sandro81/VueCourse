<template>
  <div id="app">
    <router-view name="header-top"></router-view>
    <div class="container">
      <div class="row">
        <div class="col">
          <h4>Section 16: Routing in a VueJS Application</h4>
          <p>npm install --save vue-router</p>
          <hr>
        </div>
        <div class="w-100"></div>
        <div class="col">
          <transition name="slide" mode="out-in">
            <router-view></router-view>
          </transition>

        </div>
      </div>
    </div>

    <!--    <hr>-->
    <!--    <div class="container">-->
    <!--      <div class="row">-->
    <!--        <div class="col">col</div>-->
    <!--        <div class="col">col</div>-->
    <!--        <div class="w-100"></div>-->
    <!--        <div class="col">col</div>-->
    <!--        <div class="col">col</div>-->
    <!--      </div>-->
    <!--    </div>-->
    <router-view name="header-bottom"></router-view>
  </div>

</template>

<script>

  export default {
    name: 'app',
  }
</script>

<style>
  .col {
    min-height: 70px;

  }
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {
    /*opacity: 1;*/
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
    /*transform: translateY(20px);*/
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
  }


  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }



  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
