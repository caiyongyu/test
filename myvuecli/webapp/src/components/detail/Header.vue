<template>
    <div class="detail">
        <div class="header-left">
            <i class="iconfont" @click="toHome">&#xe65b;</i>
        </div>
        <div class="header-title">
            详情
        </div>
        <div class="header-right">
            <i class="iconfont">&#xe65b;</i>
        </div>
        
    </div>
</template>

<script>
export default {
    methods: {
        toHome() {
            this.$router.push({
                path: '/'
            })
        }
    },
}
</script>

<style scoped>
.detail{
    background: red;
    height: 1.6rem;
    display: flex;
    width: 100%;
    line-height: 1.6rem;
    text-align: center;
    justify-content: space-between;
}
.header-left{
    margin-left: .3rem;
}
.header-right{
    margin-right: .3rem;
}
</style>