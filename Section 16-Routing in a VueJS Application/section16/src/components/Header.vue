<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img alt="Vue logo" src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" >
                Vue.js
            </a>
            <router-link class=" nav-item nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
            <router-link class=" nav-item nav-link" to="/user">User</router-link>


        </nav>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
