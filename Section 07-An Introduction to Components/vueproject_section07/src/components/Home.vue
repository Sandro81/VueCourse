<template>
    <div>
        <app-server-status></app-server-status>
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
