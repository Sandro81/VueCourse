<template>
    <div class="alert alert-danger text-center">
        <h1>That's Correct!</h1>
        <hr>
        <button class="btn btn-primary" @click="onBackQuestion">Repeat Question</button>
    </div>
</template>
<style>

</style>
<script>

    export default{
        methods: {
            onBackQuestion() {
                this.$emit('confirmedWrongAnswer');
            }
        }
    }
</script>
