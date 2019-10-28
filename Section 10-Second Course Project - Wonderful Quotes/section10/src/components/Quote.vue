<template>
    <div class="col-sm">
        <div class="panel panel-default">
            <div class="panel-body quote"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['quotes']
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
    }
    .quote:hover{
        background-color: #ffe2e2;
    }
</style>
