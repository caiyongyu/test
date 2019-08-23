<template>
    <div>
        <h1>音乐</h1>
    </div>
</template>
<script>
export default {
    created() {
        let obj = {
            title:"音乐",
            navName:"music"
        };
        this.$emit("changeActive",obj)
    }
}
</script>
<style scoped>
    
</style>