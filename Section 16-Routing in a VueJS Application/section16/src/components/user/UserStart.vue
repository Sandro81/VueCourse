<template>
    <div>
        <ul class="list-group">
            <router-link
                    tag="li" class="list-group-item"
                    style="cursor: pointer"
                    to="/user/1">User 1</router-link>
            <router-link
                    tag="li" class="list-group-item"
                    style="cursor: pointer"
                    to="/user/2">User 2</router-link>
            <router-link
                    tag="li" class="list-group-item"
                    style="cursor: pointer"
                    to="/user/3">User 3</router-link>
            <router-link
                    tag="li" class="list-group-item"
                    style="cursor: pointer"
                    to="/user/4">User 4</router-link>
            <router-link
                    tag="li" class="list-group-item"
                    style="cursor: pointer"
                    to="/user/5">User 5</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "UserStart"
    }
</script>

<style scoped>

</style>
