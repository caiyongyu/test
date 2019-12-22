<template>
    <div class="home">
        <Banner></Banner>
        <Spike :spikeList="spikeList"></Spike>
        <Scroll></Scroll>
        <Swiper></Swiper>
        <Footer></Footer>
    </div>
</template>


<script>
import Banner from './Banner'
import Spike from './Spike'
import Scroll from './Scroll'
import Swiper from './Swiper'
import Footer from './Footer'
export default {
    components:{
        Banner,
        Spike,
        Scroll,
        Swiper,
        Footer
    },
    data() {
        return {
            spikeList:[]
        }
    },
    mounted() {
        let That=this;
        this.axios.get('http://localhost:8080/api/dataHome.json').then((res)=>{
            That.spikeList=res.data.data[0].spikeList;
        })
    },
}
</script>

<style scoped>
.home{
    overflow: hidden;
}
</style>