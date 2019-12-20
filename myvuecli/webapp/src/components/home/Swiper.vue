<template>
    <div class="swiper">
        <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide><img src="@/assets/img/swiper1.png" alt=""></swiper-slide>
                <swiper-slide><img src="@/assets/img/swiper2.png" alt=""></swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
                <!-- <div class="swiper-button-next" slot="button-next"></div> -->
                <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
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
    background: orange;
    width: 100%;
    height: 3.2rem;
}
.swiper img{
    width: 100%;
    height: 3.2rem;
}
.swiper-pagination-bullets >>> .swiper-pagination-bullet-active{
    --swiper-theme-color: orange;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 5px;
}
</style>