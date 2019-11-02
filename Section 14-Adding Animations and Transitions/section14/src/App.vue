{<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" style="width: 50px; height: auto;">
        <div class="container">
            <div class="row">
                <div class="col"><h1>Animations</h1></div>
            </div>
            <div class="row">
                <div class="col"><button class="btn btn-primary" @click="show = !show, showAppear = !showAppear">Show Alert</button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h6>200. Using Dynamic Names and Attributes</h6>
                    <select name="" id="" v-model="alertAnimation" class="form-control">
                        <option value="fade">Fade</option>
                        <option value="slide">Slide</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col">  <transition :name="alertAnimation" >
                    <div class="alert alert-primary" role="alert" v-if="show">
                        v-if="show"using the :name=""
                    </div>
                </transition>
                </div>
                <div class="col">
                    <transition name="slide" type="animation">
                        <div class="alert alert-danger" role="alert" v-if="show">
                            Mixing Transition and Animation Properties
                        </div>
                    </transition>
                </div>
                <div class="w-100"></div>
                <div class="col">
                    <transition name="slide" type="animation" appear>
                        <div class="alert alert-danger" role="alert" v-if="showAppear">
                            Animation with appear
                        </div>
                    </transition>
                </div>
                <div class="col">
                    <transition
                            enter-active-class="animated bounce"
                            leave-active-class="animated shake"
                            appear>
                        <div class="alert alert-info" role="alert" v-if="showAppear">
                            Animation with appear from Animate.css
                        </div>
                    </transition>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <transition :name="alertAnimation" mode="out-in">
                        <div class="alert alert-primary" role="alert" v-if="show" key="info">
                            202. Transitioning between Multiple Elements (Practice) key="info"
                        </div>
                        <div class="alert alert-danger" role="alert" v-else key="warning">
                            202. Transitioning between Multiple Elements (Practice) key="warning"
                        </div>
                    </transition>
                </div>

            </div>
            <hr>
            <div class="row">
                <div class="col">204. Understanding JavaScript Animations</div>
                <div class="w-100"></div>
                <div class="col">
                    <button type="button" class="btn btn-dark" @click="load =!load">Load / Remove Element</button>
                </div>
                <div class="w-100"></div>
                <div class="col">
                    <transition
                            @before-enter="beforeEnter"
                            @enter="enter"
                            @after-enter="afterEnter"
                            @enter-cancelled="enterCancelled"

                            @before-leave="beforeLeave"
                            @leave="leave"
                            @after-leave="afterLeave"
                            @leave-cancelled="leaveCancelled"
                            :css="false">
                        <div
                                style="width: 300px; height: 100px; background-color: lightgreen"
                                v-if="load"></div>
                    </transition>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col">207. Animating Dynamic Components</div>
                <div class="w-100"></div>
                <div class="col">
                    <button type="button" class="btn btn-info"
                            @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'">Toggle Components</button>
                </div>
                <div class="w-100"></div>
                <div class="col">
                    <transition name="fade" mode="out-in">
                        <component :is="selectedComponent"></component>
                    </transition>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col">209. Using <b>transition-group</b> - Preparations</div>
                <div class="w-100"></div>
                <div class="col">
                    <button type="button" class="btn btn-primary" @click="addItem">Add Item</button>
                </div>
                <div class="w-100"></div>
                <div class="col">
                    <ul class="list-group">
                        <transition-group name="slide">
                            <li class="list-group-item"
                                v-for="(number, index) in numbers"
                                :key="number"
                                @click="removeItem(index)"
                                style="cursor: pointer">{{index}} {{number}}</li>
                        </transition-group>
                    </ul>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
    import DangerAlert from "@/components/DangerAlert";
    import SuccessAlert from "@/components/SuccessAlert";

    export default {
        data() {
            return {
                show: false,
                showAppear: true,
                alertAnimation: 'fade',
                load: true,
                elementWidth: 100,
                selectedComponent: 'app-success-alert',
                numbers: ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac', 'Vestibulum at eros', 'Cras justo odio','Cras justo odio','Cras justo odio',]
            }
        },
        methods: {
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1 );
            },
            removeItem(index) {
                this.numbers.splice(index, 1);
            },
            beforeEnter(el) {
                console.log(el  + 'beforeEnter');
                this.element = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                console.log('enter');
                let round = 1;
                const interval = setInterval(()=>{
                    el.style.width = (this.elementWidth + round * 10)+ 'px';
                    round++;
                    if(round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20)
            },
            afterEnter(el) {
                console.log(el  +'afterEnter');
            },
            enterCancelled(el) {
                console.log(el  +'enterCancelled');
            },
            beforeLeave(el) {
                console.log(el  +'beforeLeave');
                this.element = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                console.log(el  +'leave');
                let round = 1;
                const interval = setInterval(()=>{
                    el.style.width = (this.elementWidth - round * 10)+ 'px';
                    round++;
                    if(round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20)
            },
            afterLeave(el) {
                console.log(el  +'afterLeave');
            },
            leaveCancelled(el) {
                console.log(el  +'leaveCancelled');
            }
        },
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert
        }
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
        margin-top: 60px;
    }
</style>
}
