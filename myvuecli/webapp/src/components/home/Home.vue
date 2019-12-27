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
import {mapState} from 'vuex'
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
    computed: {
        ...mapState(['cityName'])
    },
    data() {
        return {
            spikeList:[],
            likeList:[],
            oldCity:''
        }
    },

    methods: {
        http() {
            let That=this;
            this.axios.get("http://localhost:8080/api/dataHome.json").then((res)=>{
                res.data.data.forEach((item)=>{
                    if(item.city==That.cityName){
                        window.console.log(item.name);
                        That.spikeList=item.spikeList;
                        That.likeList=item.likeList;
                    }
                })
                window.console.log(res.data.data);
            })
        }
    },
    mounted() {
        // this.oldCity=this.cityName;
        this.http();
        
    },
    activated() {
        // window.console.log(1);
        if(this.oldCity != this.cityName){
            this.http();
            this.oldCity=this.cityName;
        }
    },

}
</script>

<style scoped>
.home{
    overflow: hidden;
}
</style>