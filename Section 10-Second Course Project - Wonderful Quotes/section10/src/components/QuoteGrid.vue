<template>
    <div class="row">
        <div class="col-sm" v-for="quote in quotes" v-bind:key="quote.id">
            <app-quote  :quote="quote"></app-quote>
        </div>
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
