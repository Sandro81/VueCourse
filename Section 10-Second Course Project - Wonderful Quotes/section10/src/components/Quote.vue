<template>
    <div class="col-6 col-md-4" >
        <div class="panel panel-default">
            <div class="panel-body quote">{{ quote }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['quote']
    }
</script>

<style scoped>
    .panel-body {
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: #6e6e6e;
    }
    .quote {
        cursor: pointer;
        padding: 10px;
    }
    .quote:hover{
        background-color: #ffe2e2;
    }
</style>
