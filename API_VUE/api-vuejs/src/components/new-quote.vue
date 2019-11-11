<template>
    <div>
        <form @submit.prevent="onSubmitted">
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Content</label>
                <div class="col-sm-10">
                    <input type="text"
                           class="form-control"
                           id="inputPassword"
                           placeholder="Content"
                           v-model="quoteContent">
                </div>
                <button class="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>



    </div>

</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                quoteContent: ''
            }
        },
        methods: {
            onSubmitted() {
                axios.post('http://localhost/superenglishtest/public/api/quote',
                    {content: this.quoteContent})
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
            },
        }
    }
</script>

<style scoped>

</style>
