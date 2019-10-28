<template>
    <div class="row">
        <div class="col-sm-8 col-sm-offset">
            <label for="text01">Quote</label>
            <textarea name="" id="text01" cols="30" rows="3" class="form-control"
                      v-model="quote">
            </textarea>
            <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
        </div>
    </div>

</template>

<script>
    export default {
        data: function () {
            return {
                quote: ''
            }
        },
        methods: {
            createNew() {
                this.$emit('quoteAdded', this.quote);
                this.quote = '';
            }
        }
    }
</script>

<style scoped>

</style>
