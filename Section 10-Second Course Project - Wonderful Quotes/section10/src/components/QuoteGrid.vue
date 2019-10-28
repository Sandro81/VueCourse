<template>
    <div class="row">
            <app-quote
                    v-for="(quote, index) in quotes"
                    v-bind:key="quote.id"
                    :quote="quote"
                    @click.native="deleteQuote(index)"></app-quote>
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
            deleteQuote(index) {
                this.$emit('quoteDeleted', index);
            }
        }
    }
</script>

<style scoped>

</style>
