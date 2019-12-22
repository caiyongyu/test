<template>
    <div class="banner">
        <div class="banner-header">
            <div class="banner-search">
                <i class="iconfont">&#xe60b;</i>
                文献
            </div>
            <div class="banner-right">
                <img src="img/show.png" alt="">
            </div>
        </div>
        <div class="banner-img">
            <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide>
                <img src="img/mbanner1.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="img/banner2.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="img/banner3.png" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
            <!-- <div class="swiper-button-next" slot="button-next"></div> -->
            <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
            </swiper>
        </div>
        
            
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
                loop:true,
                pagination: {
                    el: '.swiper-pagination'
          }
        },
        }
    },
}
</script>

<style scoped>
.banner{
    position: relative;
}
.banner-img{
    width: 100%;
    height: 5.6301rem
}
.banner-img img{
    width: 100%;
    height: 5.6301rem;
}
.banner-header{
    position: absolute;
    top: .4rem;
    left: 0;
    z-index: 99;
    display: flex;
    width: 100%;
    /* text-align: center; */
    /* justify-content: center; */
    /* justify-content: space-between; */
    align-items: center;
    height: .8rem;
    line-height: .8rem;
    /* background: red; */
}
.banner-header .banner-search{
    margin-left: 2.4rem;
    /* border: 1px solid #333; */
    color: #333;
    padding-left: .1rem;
    border-radius: .2rem;
    padding-right:3rem;
    background: #fff;

    /* font-size: .37333rem;
    padding: .2rem .8rem;

    /* flex: 1; */
    /* border-radius: .1rem;
    color: #333;
    background: #fff; */
}
.banner-header .banner-right img{
    width: .7rem;
    height: .7rem;
    display: block;
    top: 0;
    right: .4rem;
    position: absolute;
}
</style>

