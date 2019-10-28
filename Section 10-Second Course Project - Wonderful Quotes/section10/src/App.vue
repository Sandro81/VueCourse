<template>
  <div class="container">
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12" text-center>
        <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
      </div>
    </div>
  </div>
</template>

<script>
  import QuoteGrid from "@/components/QuoteGrid";
  import NewQuote from "@/components/NewQuote";
  export default {
    data: function () {
      return {
        quotes: [
                'Just a Quote to see something'
        ],
        maxQuotes: 10
      }
    },
    components: {
      appQuoteGrid: QuoteGrid,
      appNewQuote: NewQuote
    },
    methods: {
      newQuote(quote) {
        this.quotes.push(quote);
      }
    }
  }
</script>

<style>
</style>
