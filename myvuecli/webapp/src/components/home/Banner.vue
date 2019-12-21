<template>
    <div class="banner">
        <transition
            enter-active-class="bounceInLeft"
            leave-active-class="bounceOutLeft"
        >
            <div class="banner-left animated" v-show="isShow"></div>
        </transition>
        <div class="banner-header">
            <div class="banner-top">
                    <div class="top-left" @click="toCity">
                        北京
                        <i class="iconfont">&#xe65b;</i>
                    </div>
                <div class="top-center">
                    <i class="iconfont">&#xe60b;</i>
                    泰国
                    </div>
                <div class="top-right">
                    <img src="@/assets/img/show.png" @click="showLeft">
                </div>
            </div>
            <div class="banner-swiper">
                <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide><img src="@/assets/img/banner1.png" alt=""></swiper-slide>
                <swiper-slide><img src="@/assets/img/banner2.png" alt=""></swiper-slide>
                <swiper-slide><img src="@/assets/img/banner3.png" alt=""></swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
                <!-- <div class="swiper-button-next" slot="button-next"></div> -->
                <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
            </swiper>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
            swiperOption: {
                loop: true,
                pagination: {
                    
                    el: '.swiper-pagination',
                },
            }
        }
    },
    methods: {
        showLeft() {
            this.isShow=!this.isShow;
        },
        toCity() {
            this.$router.push({
                path:"/city"
            })
        }
    },
}
</script>

<style scoped>
.banner-left{
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    width: 6.66666rem;
    background: #000;
    z-index: 999;
}
.banner-header{
    background-color: #f5f5f5;
    width: 100%;
    height: 5.6rem;
    position: relative;
}
.banner-top{
    position: absolute;
    left: 0;
    top: .5rem;
    /* background-color: red; */
    width: 100%;
    height: 0.8rem;
    display: flex;
    z-index: 2;
    justify-content: center;
    align-items: center;
}
.top-left{
    color: #fff;
    font-size: .42666rem;
    padding: .2rem .4rem;
}
.top-center{
    font-size: .37333rem;
    padding: .2rem .2rem;
    flex: 1;
    border-radius: .1rem;
    color: #333;
    background: #fff;
}
.top-right{
    padding: .2rem .4rem;
}
.top-right img{
    width: 0.5333rem;
    height: 0.5333rem;
}
.banner-swiper{
    width: 100%;
    height: 5.6rem;
}
.banner-swiper img{
    width: 100%;
    height: 100%;
}
.swiper-pagination-bullets >>> .swiper-pagination-bullet-active{
    --swiper-theme-color: orange;
}
</style>