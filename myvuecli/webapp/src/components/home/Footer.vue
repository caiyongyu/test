<template>
    <footer class="footer">
        <a href="#">
            <img src="@/assets/img/footer1.png" alt="">
            <span>首页</span>
        </a>
                
        <a href="#">
            <img src="@/assets/img/footer2.png" alt="">
            <span>订单</span>
        </a>
                
        <a href="#">
            <img src="@/assets/img/footer3.png" alt="">
            <span>个人中心</span>
        </a>
            
        
    </footer>
</template>

<style scoped>
.footer{
    position: fixed;
    bottom: 0;
    background: #fff;
    width: 100%;
    height: 1.4666rem;
    z-index: 9999;
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
    /* margin-left: .2rem; */
}
.footer img{
    width: .72rem;
    height: .72rem;
    display: block;
}
.footer span{
    font-size: .4rem;
    /* display: block; */
    /* margin-left: 1rem; */
    color: #333;
    margin-top: .15rem;
}
</style>