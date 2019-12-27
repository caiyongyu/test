<template>
    <footer class="footer">

        
            <a href="#" @click="toHome">
            <img src="img/footer3.png" alt="">
            <!-- <i class="iconfont">&#xe604;</i> -->
            <span>首页</span>
            </a>

         <a href="#" @click="toLiterature">
            <img src="img/footer2.png" alt="">
            <span>文献专题</span>
        </a>
                
        <a href="#" @click="toMycenter">
            <img src="img/footer3.png" alt="">
            <span>个人中心</span>
        </a>
      
        

        
    </footer>
</template>

<script>
export default {
    methods: {
        toHome() {
            this.$router.push({
                path: '/'
            })
        },
        toLiterature() {
            this.$router.push({
                path: '/toliterature'
            })
        },
        toMycenter() {
            this.$router.push({
                path: '/tomycenter'
            })
        }
    },
}
</script>

<style scoped>
.footer{
    position: fixed;
    bottom: 0;
    /* background: red; */
    width: 100%;
    height: 1.4666rem;
    z-index: 999;
    justify-content: center;
    align-items: center;
    display: flex;
}
.footer a{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: .2rem
}
.footer img{
    width: .72rem;
    height: .72rem;
    display: block;
}
.footer i{
    width: .72rem;
    height: .72rem;
}
.footer span{
    font-size: .4rem;
    /* display: block; */
    /* margin-left: 1rem; */
    color: #333;
    margin-top: .15rem;
}
</style>