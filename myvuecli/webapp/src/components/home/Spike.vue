<template>
    <div class="spike">
        <swiper :options="swiperOption">
                <!-- slides -->
                    <swiper-slide v-for="(item,index) in spikeList" :key="index">
                        <div class="spike-content">
                            <div class="spike-top">
                                <img src="@/assets/img/spike1.png" alt="">
                                <span>距离结束</span>
                                <count-down
                                :currentTime="item.startTime"
                                :startTime="item.startTime"
                                :endTime="item.endTime"
                                :dayTxt="'天'"
                                :hourTxt="':'"
                                :minutesTxt="':'"
                                :secondsTxt="''">
                                </count-down>
                            </div>
                            <div class="spike-bottom">
                                <img :src="item.imgUrl" alt="">
                                <div class="spike-title">
                                    <p class="showTitle">{{item.title}}
                                    </p>
                                    <div class="spike-price">
                                        <span>￥{{item.price}}</span>
                                        <p>还剩{{item.num}}件</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>


                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
                <!-- <div class="swiper-button-next" slot="button-next"></div> -->
                <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </div>
</template>

<script>
import CountDown from 'vue2-countdown'
export default {
    props:['spikeList'],
   data() {
       return {
           swiperOption: {
                // loop: true,
                pagination: {
                    
                    el: '.swiper-pagination',
                },
            }
       }
   },
   components: {
        CountDown
    },
    mounted() {
        window.console.log(new Date().getTime()+5*24*3600);
    },
}
</script>

<style scoped>
.spike-content{
    padding: .3rem;
}
.spike{
    /* padding: .3rem; */
    width: 100%;
    height: 4.3777777rem;
    /* background: red; */
}
.spike-top{
    font-size: .35rem;
    display: flex;
    width: 100%;
    height: 1.23rem;
    /* justify-content:space-between; */
    align-items: center;
}
.spike-top>div{
    margin-left: .15rem;
}
.spike-top>div >>>span{
    margin-left: .15rem;
    color: #fff;
    background: #8b8b8b;
    border-radius: .1rem;
    padding: 0 .1rem;
}
.spike-top img{
    width: 1.893333rem;
    height: .413333rem;
}
.spike-top span{
    margin-left: .15rem;
}
.spike-bottom{
    display: flex;
    justify-content: space-between;
}
.spike-bottom img{
    width: 3.093333rem;
    height: 2.12rem;
}
.spike-title{
    font-size: .35rem;
    /* display: flex; */
     width: 5.86rem;
}
.spike-price{
    display: flex;
    justify-content: space-between;
    margin-top: .6rem;
}
.spike-price p{
    padding: .1rem;
    border: 1px solid #f5f5f5;
    border-radius: .1rem;
    background: orange;
}
.spike-title .showTitle{
    /* height: 1rem; */
    line-height: .38rem;
    /* white-space: nowrap; */

    overflow: hidden;
    /* text-overflow: ellipsis; */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    /* text-align: center; */
    font-size: .28rem;
}
.swiper-container{
    overflow: visible;
}
.swiper-pagination-bullets >>> .swiper-pagination-bullet-active{
    --swiper-theme-color: orange;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -.8rem;
}
</style>