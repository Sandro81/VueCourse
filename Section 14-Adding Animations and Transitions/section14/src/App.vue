{<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="show = !show, showAppear = !showAppear">Show Alert</button>
        <br><br>
        <transition name="fade">
            <div class="alert alert-primary" role="alert" v-if="show">
                A simple primary alert—check it out!
            </div>
        </transition>
        <transition name="slide" type="animation">
            <div class="alert alert-danger" role="alert" v-if="show">
                A simple danger alert—check it out!
            </div>
        </transition>
        <transition name="slide" type="animation" appear>
            <div class="alert alert-danger" role="alert" v-if="showAppear">
                Animation with appear
            </div>
        </transition>
        <transition
                enter-active-class="animated bounce"
                leave-active-class="animated shake"
                appear>
            <div class="alert alert-info" role="alert" v-if="showAppear">
                Animation with appear from Animate.css
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                showAppear: true
            }
        }
    }
</script>

<style>
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
        margin-top: 60px;
    }
</style>
}
