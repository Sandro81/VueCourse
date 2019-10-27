<template>
    <div>
        <h3>New quote</h3>
        <button @click="counter++">Increse!</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                counter: 0
            }
        },
        destroyed() {
            alert("Destroyed");
            //console.log("Destroyed!");
        },
        deactivated() {
            alert("deactivated");
        },
        activated() {
            alert("activated");
        }
    }
</script>

<style scoped>

</style>
