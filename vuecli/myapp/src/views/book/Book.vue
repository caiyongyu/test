<template>
    <div>
        <h1>书籍</h1>
    </div>
</template>
<script>
export default {
    created() {
        let obj = {
            title:"书籍",
            navName:"book"
        };
        this.$emit("changeActive",obj)
    }
}
</script>
<style scoped>
    
</style>