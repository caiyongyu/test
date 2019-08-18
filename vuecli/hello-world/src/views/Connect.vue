<template>
    <div>
        <h1>this is connect pageaaaaaaaa</h1>
        <!-- <router-link to="/connect/test1">test1</router-link> -->
        <!-- <router-link to="/connect/test2">test2</router-link> -->
        <router-link :to="{name:'test1',params:{name:'小a',age:'12'}}">test1</router-link>
        <router-link to="/connect/test2/xiaob/20">test2</router-link>
        <router-link to="/connect/gotest2/xiaoc/30">gotest2</router-link>
        <router-view/>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>