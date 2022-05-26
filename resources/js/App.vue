<template>
<div>
    <component :is="layout"></component>
    <router-view></router-view>
</div>
</template>

<script>
    export default {
        computed: {
            layout() {
                const layoutName = this.$route.meta.layout || 'Default' ;
                return () => import('./components/layouts/'+layoutName+'.vue')
            }
        }
    }
</script>

<style scoped>
</style>
