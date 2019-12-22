<template>
    <div class="swiper">
        
        <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide><img src="img/mswiper1.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="img/mswiper2.jpg" alt=""></swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
                <!-- <div class="swiper-button-next" slot="button-next"></div> -->
                <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
      
        <div class="museum-info">
            <div>备案情况</div>
            <div>电子邮箱</div>
            <div>服务电话</div>
            <div>使用帮助</div>
            <div>意见反馈</div>
        </div>
    </div>
</template>

<script>
export default {
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
}
</script>

<style scoped>
.swiper{
    /* background: orange; */
    width: 100%;
    height: 4.2rem;
}
.swiper img{
    width: 100%;
    height: 3.2rem;
}
.museum-info{
    display: flex;
    font-size: .4rem;
    padding: .2rem 0;
    justify-content: space-between;
    margin-bottom: 3rem;
    height: 4rem;
    /* z-index: 99999; */
}
.swiper-pagination-bullets >>> .swiper-pagination-bullet-active{
    --swiper-theme-color: orange;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 5px;
}
</style>