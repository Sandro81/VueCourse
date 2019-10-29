<template>
    <div>
        <div class="form-group">
            <label for="firstName">First name</label>
            <input type="text"
                   class="form-control"
                   id="firstName"
                   placeholder="First name"
                   v-model="firstName">
        </div>
        <div class="form-group">
            <label for="lastName">Last name</label>
            <input type="text"
                   class="form-control"
                   id="lastName"
                   placeholder="Last name"
                   v-model="lastName">
        </div>
    </div>
</template>

<script>
    export default {
        name: "FullName"
    }
</script>

<style scoped>

</style>
