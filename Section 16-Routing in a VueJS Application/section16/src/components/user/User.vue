<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>The User Page</h1>
                </div>
                <div class="w-100"></div>
                <div class="col">
                    <button @click="navigateToHome" class="btn btn-primary">
                        Go to Home
                    </button>
                    <hr>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            navigateToHome() {
                this.$router.push({path: '/'});
            }
        }
    }
</script>

<style scoped>

</style>
