<template>
    <div>
        <h5>Edit the User</h5>
        <p>Locale: {{$route.query.locale}}</p>
        <p>Analytics: {{$route.query.q}}</p>
        <hr>
        <button class="btn btn-primary">Confirm</button>
        <div style="height: 700px"></div>
        <p id="data">Some extra Data</p>
        <div style="height: 700px"></div>
        <p id="data2">Some extra Data2</p>
        <div style="height: 700px"></div>
    </div>
</template>

<script>
    export default {
        name: "UserEdit"
    }
</script>

<style scoped>

</style>
