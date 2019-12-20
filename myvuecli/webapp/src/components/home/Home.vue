<template>
    <div class="home">
        <Banner></Banner>
        <Icons></Icons>
        <Tabs></Tabs>
        <Scroll></Scroll>
        <Swiper></Swiper>
        <Spike :spikeList="spikeList"></Spike>
        <Like :likeList="likeList"></Like>
        <Footer></Footer>
    </div>
</template>

<script>
import Banner from './Banner'
import Icons from './Icons'
import Tabs from './Tabs'  
import Scroll from './Scroll'
import Swiper from './Swiper'
import Spike from './Spike'
import Like from './Like'
import Footer from './Footer'
export default {
    components: {
        Banner,
        Icons,
        Tabs,
        Scroll,
        Swiper,
        Spike,
        Like,
        Footer
    },
    data() {
        return {
            spikeList:[],
            likeList:[]
        }
    },
    mounted() {
        this.http();
    },
    methods: {
        http() {
            let That=this;
            this.axios.get("http://localhost:8080/api/dataHome.json").then((res)=>{
                That.spikeList=res.data.data[0].spikeList;
                That.likeList=res.data.data[0].likeList;
                // window.console.log(res.data.data[0]);
            })
        }
    },
}
</script>

<style scoped>
.home{
    overflow: hidden;
}
</style>