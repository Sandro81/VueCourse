<template>
    <div class="row">
            <app-quote
                    v-for="quote in quotes"
                    v-bind:key="quote.id"
                    :quote="quote"
                    @click.native="deleteQuote"></app-quote>
        </div>
</template>

<script>

    import Quote from "@/components/Quote";

    export default {
        props: ['quotes'],
        components: {
            appQuote: Quote
        },
        methods: {
            deleteQuote() {

            }
        }
    }
</script>

<style scoped>

</style>
