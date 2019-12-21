<template>
    <div class="header">
        选择城市
        <i class="iconfont" @click="backToHome">&#xe70a;</i>
        <!-- <button @click="backToHome">返回</button> -->
    </div>
</template>

<script>
export default {
    methods: {
        backToHome() {
            this.$router.push({
                path: "/"
            })
        }
    },
}
</script>

<style scoped>
.header{
    background: orange;
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    position: relative;
    text-align: center;
    color: #333;
    /* font-size: .5rem; */
}
.header i{
    position: absolute;
    right: .4rem;
    font-weight: 700;
}
</style>