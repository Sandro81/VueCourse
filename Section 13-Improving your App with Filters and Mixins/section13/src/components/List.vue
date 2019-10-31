<template>
    <div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins into List.vue</h1>
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits" v-bind:key="fruit.id">{{fruit}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {fruitMixin} from "@/fruitMixin";

    export default {
        mixins: [fruitMixin]
    }
</script>

<style>

</style>
