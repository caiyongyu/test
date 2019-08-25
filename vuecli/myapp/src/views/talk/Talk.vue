<template>
    <div>
        <h1>聊天咋啦</h1>
    </div>
</template>
<script>
export default {
    created() {
        let obj = {
            title:"聊天",
            navName:"talk"
        };
        this.$emit("changeActive",obj)
    }
}
</script>
<style scoped>
    
</style>