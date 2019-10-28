<template>
    <div class="row">

            <app-quote  v-for="quote in quotes" v-bind:key="quote.id" :quote="quote"></app-quote>
        </div>

</template>

<script>

    import Quote from "@/components/Quote";

    export default {
        props: ['quotes'],
        components: {
            appQuote: Quote
        }
    }
</script>

<style scoped>

</style>
