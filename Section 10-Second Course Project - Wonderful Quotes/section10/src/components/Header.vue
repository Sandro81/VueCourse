<template>
    <div>
        <h3>Quote Added</h3>
        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"
            :style="{width: (quoteCount/maxQuotes) * 100 + '%'}">
                {{quoteCount}} / {{maxQuotes}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['quoteCount', 'maxQuotes']
    }
</script>

<style scoped>

</style>
