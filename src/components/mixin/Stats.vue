<template lang="html">
    <div class="text-center padding">
        <p class="h3">{{ numero  }}</p>
        <p class="h5">{{ metrica }}</p>
    </div>
</template>

<script>
export default {
    props: ['numero', 'metrica']
}
</script>

<style lang="css" scoped>
.padding {
    padding-bottom: 25px;
}
</style>
