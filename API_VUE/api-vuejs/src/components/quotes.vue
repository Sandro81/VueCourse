<template>
    <div>
        <form @submit.prevent="onGetQuotes">
            <div class="form-group row">
                <button class="btn btn-primary" type="submit">Get Quotes</button>
            </div>
        </form>
        <hr>
        <app-quote
                v-for="quote in quotes"
                v-bind:key="quote.id"
                :qt="quote"
        @quoteDeleted="onQuoteDeleted($event)"></app-quote>
    </div>
</template>

<script>
    import axios from 'axios';
    import Quote from './quote';
    export default {
        data() {
            return {
                quotes: []
            }
        },
        methods: {
            onGetQuotes() {

                axios.get('http://localhost/superenglishtest/public/api/quotes')
                    .then(
                        (response) => {
                            console.log(response.data);
                            console.log(response.status);
                            console.log(response.statusText);
                            console.log(response.headers);
                            console.log(response.config);
                            this.quotes = response.data.quotes;
                        }
                    )
                    .catch(
                        (error) => console.log(error)
                    );
                /*const instance = axios.create({
                    baseURL: 'http://localhost/superenglishtest/public/api/quotes',
                });

                instance.get()
                    .then(
                        (response) => {
                            console.log(response.data);
                            console.log(response.status);
                            console.log(response.statusText);
                            console.log(response.headers);
                            console.log(response.config);
                        }
                    )
                    .catch(
                        (error) => console.log(error)
                    );*/
            },
            onQuoteDeleted(id) {
                const position = this.quotes.findIndex((element) => {
                   return element.id == id;
                });
                this.quotes.splice(position, 1);
            }
        },
        components: {
            'app-quote': Quote
        }
    }
</script>

<style scoped>

</style>
