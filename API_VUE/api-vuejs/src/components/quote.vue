<template>
    <div>
        <div class="card">
            <div class="card-header">
                {{qt.content}}
            </div>
            <div class="card-body">
                <input type="text">
                <a href="#" class="btn btn-primary" @click="onUpdate">Save</a>
                <a href="#" class="btn btn-primary" @click="onCancel">Cancel</a>
                <a href="#" class="btn btn-primary" @click="onEdit">Edit</a>
                <a href="#" class="btn btn-primary" @click="onDelete">Delete</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       props: ['qt']
    }
</script>

<style scoped>

</style>
