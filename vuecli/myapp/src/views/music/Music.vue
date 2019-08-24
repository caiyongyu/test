<template>
    <div class="loading" v-if="!isShow">
        <img src="../../assets/img/01.jpg" alt="">
    </div>
    <div v-else>
        <table class="music-list">
            <thead>
                <tr>
                    <th></th>
                    <th>歌曲名称</th>
                    <th>歌手</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in dataList" :key="item.id">
                    <td>{{index+1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.ar[0].name}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            dataList: [],
            isShow:false
        }
    },
    created() {
        let obj = {
            title:"音乐",
            navName:"music"
        };
        this.$emit("changeActive",obj)
        this.getData();
    },
    methods: {
        getData(){
            let thisUrl="https://bird.ioliu.cn/netease/playlist?id=2899785819"
            axios.get(thisUrl).then((res)=>{
                console.log(res.data.playlist.tracks);
                this.dataList=res.data.playlist.tracks;
                this.isShow=true;
            })
        }
    }
}
</script>
<style scoped>
    .music-list {
        font-size: .4rem;
        border: 0;
        border-collapse: collapse;
    }
    .music-list tbody tr:nth-child(odd){
        /* background-color: #f7f7f7; */
        background-color: rgb(184, 79, 79);
    }
    .loading {
        width: 100vw;
    }

    .loading img {
        width: 100%;
    }
</style>