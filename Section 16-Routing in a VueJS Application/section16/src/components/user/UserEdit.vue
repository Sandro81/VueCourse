<template>
    <div>
        <h5>Edit the User</h5>
        <p>Locale: {{$route.query.locale}}</p>
        <p>Analytics: {{$route.query.q}}</p>
    </div>
</template>

<script>
    export default {
        name: "UserEdit"
    }
</script>

<style scoped>

</style>
