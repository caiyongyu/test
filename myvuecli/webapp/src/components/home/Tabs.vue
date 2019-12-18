<template>
    <div class="tabs">
        <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in tabsList" :key="index">
                    <div>
                        <img :src='item.imgUrl' alt="">
                        <p>{{item.title}}</p>  
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
export default {
    data() {
        return {
            tabsList:[{
                id: 0,
                imgUrl: 'img/tabs1.gif',
                title: '签证'
            },
            {
                id: 1,
                imgUrl: 'img/tabs1.gif',
                title: '签证'
            },
            {
                id: 2,
                imgUrl: 'img/tabs1.gif',
                title: '签证'
            },
            {
                id: 3,
                imgUrl: 'img/tabs1.gif',
                title: '签证'
            },
            {
                id: 4,
                imgUrl: 'img/tabs1.gif',
                title: '签证'
            },
            {
                id: 5,
                imgUrl: 'img/tabs1.gif',
                title: '签证'
            },
            {
                id: 6,
                imgUrl: 'img/tabs1.gif',
                title: '签证'
            },
            {
                id: 7,
                imgUrl: 'img/tabs1.gif',
                title: '签证'
            },
            {
                id: 8,
                imgUrl: 'img/tabs1.gif',
                title: '签证'
            }],
            swiperOption: {
                slidesPerView : 4.6,
            }
        }
    },
}
</script>

<style scoped>
.tabs{
    padding: .3rem 0;
}
.tabs img{
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: .77333333rem;
    height: .77333333rem;
}
.tabs p{
    text-align: center;
    padding-top: .1rem;
    font-size: .32rem;
}
</style>