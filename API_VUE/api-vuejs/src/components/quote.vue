<template>
    <div>
        <div class="card">
            <div class="card-header">
                {{qt.content}}
            </div>
            <div class="card-body" v-if="editing">
                <input type="text" v-model="editValue">
                <a href="#" class="btn btn-primary" @click="onUpdate">Save</a>
                <a href="#" class="btn btn-primary" @click="onCancel">Cancel</a>
            </div>
            <div v-if="!editing">
                <a href="#" class="btn btn-primary" @click="onEdit">Edit</a>
                <a href="#" class="btn btn-primary" @click="onDelete">Delete</a>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        props: ['qt'],
        data() {
            return {
                editing: false,
                editValue: this.qt.content
            }
        },
        methods: {
            onEdit() {
                this.editing = true;
            },
            onCancel() {
                console.log('editing -> ' + this.editing);
                this.editing = false;
            },
            onUpdate() {
                this.editing =false;
                this.qt.content = this.editValue;
                axios.put('http://localhost/superenglishtest/public/api/quote/'+this.qt.id, {content: this.editValue})
                    .then(
                        (response) => {
                            console.log(response);

                        }
                    )
                    .catch(
                        (error) => console.log(error)
                    );
            },
            onDelete() {
                this.$emit('quoteDeleted', this.qt.id);
                axios.delete('http://localhost/superenglishtest/public/api/quote/'+this.qt.id)
                    .then(
                        (response) => {
                            console.log(response);
                        }
                    )
                    .catch(
                        (error) => console.log(error)
                    );
            }
        }
    }
</script>

<style scoped>

</style>
