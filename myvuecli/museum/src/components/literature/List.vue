<template>
    <div class="list">
        <div class="list-item">
            <p>推荐</p>
            <div v-for="(item,index) in mapCities" :key="index" @click="gotoHome(item.name)">
                {{item.name}}
            </div>
            
        </div>
        <div class="list-item">
            <p>政治</p>
            <div v-for="(item,index) in cities" :key="index" @click="gotoHome(item.name)">{{item.name}}</div>
            
        </div>
        <div class="list-item">
            <p>经济</p>
            <div v-for="(item,index) in hotCities" :key="index" @click="gotoHome(item.name)">{{item.name}}</div>
            
        </div>
        <div class="list-item">
            <p>文化</p>
            <div v-for="(item,index) in hotCities" :key="index" @click="gotoHome(item.name)">{{item.name}}</div>
            
        </div>
        <div class="list-item">
            <p>科技</p>
            <div v-for="(item,index) in mapCities" :key="index" @click="gotoHome(item.name)">{{item.name}}</div>
            
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    data() {
        return {
            mapCities:[],
            cities:[],
            hotCities:[]
        }
    },
    computed: {
        
    },
    methods: {
        gotoHome(city) {
            // alert(city);
            this.changeCity(city);
            this.$router.push({
                path:"/"
            })
        },
        ...mapMutations(['changeCity'])
    },
    mounted() {
        let That=this;
        this.axios.get('http://localhost:8080/api/city(1).json').then((res)=>{
            let data=res.data.data;
            // window.console.log(data);
            That.mapCities=data.mapCities;
            That.cities=data.cities;
            That.hotCities=data.hotCities;
        })
    },
}
</script>

<style scoped>
.list-item{
    padding-top: .3rem;
    padding-left: .4rem;
    color: #999;
    /* font-size: .5rem; */
}
.list-item p{
    padding-bottom: .3rem;
}
.list-item div{
    display: inline-block;
    margin-right: .4rem;
    width: 2rem;
    margin-bottom: .3rem;
    box-sizing: border-box;
    border: 1px solid #333;
    /* font-size: .6rem; */
    border-radius: .2rem;
    text-align: center;
    padding: .1rem;
}
</style>