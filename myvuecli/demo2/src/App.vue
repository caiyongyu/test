<template>
  <div>
    <!-- <router-view></router-view>
    <router-link to="/" tag='button'>首页</router-link>
    <router-link :to="{path: '/fav',query:{userId:123}}">收藏</router-link>
    <router-link to="/config">设置</router-link>
    <button @click="clicktoConfig">跳转到设置</button> -->

    <router-link to="/toA" tag="button">AAAAAA</router-link>
    <router-link to="/toB" tag="button">BBBBBB</router-link>
    <router-link :to="{path: '/toC',query:{userId: 123}}" tag="button">CCCCCC</router-link>
    <keep-alive include="aaa">
      <router-view></router-view>
    </keep-alive>
    <!-- <V-share></V-share> -->



    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
    


    <ul>
      <li v-for="item in str" :key="item">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      str:[],
      swiperOption: {
        pagination: {
            el: '.swiper-pagination',
          },
        }
    }
  },
  beforeCreate() {
      window.console.log(1);
    },
    created() {
      window.console.log(2);
    },
    mounted() {
      let that=this;
      this.axios.get('http://localhost:8080/data.json').then((res)=>{
        // window.console.log(res.data)
        that.str=res.data.arr
      })
      window.console.log("onload");
    },
  methods: {
    clicktoConfig() {
      this.$router.push("/config");
    },
    
  },
}
</script>

<style scoped>
.swiper-pagination-bullets >>> .swiper-pagination-bullet-active{
  --swiper-theme-color: red;
}
</style>