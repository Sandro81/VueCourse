<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img alt="Vue logo" src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" >
                Vue.js
            </a>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <router-link  class="nav-link" to="/" active-class="active" exact>Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link  class="nav-link" to="/user" active-class="active">User</router-link>
                </li>
            </ul>
        </nav>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
