<template>
    <div>
        <form @submit.prevent="onGet">
            <div class="form-group row">
                <button class="btn btn-primary" type="submit">Get Quotes</button>
            </div>
        </form>
        <hr>
        <app-quote v-for="quote in quotes" v-bind:key="quotes.id" :qt="quote"></app-quote>
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
                const instance = axios.create({
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
                    );
            }
        },
        components: {
            'app-quote': Quote
        }
    }
</script>

<style scoped>

</style>
