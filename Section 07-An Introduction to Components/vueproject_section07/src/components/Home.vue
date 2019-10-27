<template>
    <div>
        <app-server-status v-for="server in 5"></app-server-status>
    </div>
</template>

<script>
    import ServerStatus from "@/components/ServerStatus";
    export default {
        components: {
            'app-server-status': ServerStatus
        }
    }
</script>
