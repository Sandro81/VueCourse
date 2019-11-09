<template>
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
</template>

<script>
    export default {
        data() {
            return {
                quoteContent: ''
            }
        },
        methods: {
            onSubmitted() {

            }
        }
    }
</script>

<style scoped>

</style>
