<template>
    <div>
        <div class="card">
            <div class="card-header">
                {{qt.content}}
            </div>
            <div class="card-body" v-if="editing">
                <input type="text">
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
                this.editing = false;
            }
        }
    }
</script>

<style scoped>

</style>
