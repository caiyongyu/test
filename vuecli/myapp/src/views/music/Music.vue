<template>
  <div class="loading" v-if="!isShow">
    <img src="../../assets/img/01.jpg" alt />
  </div>
  <div v-else>
    <aplayer ref="aplayer" :audio="audio" :lrcType="3" />
    <table class="music-list">
      <thead>
        <tr>
          <th></th>
          <th>歌曲名称</th>
          <th>歌手</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="clickHandle(item.id)" v-for="(item,index) in dataList" :key="item.id">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.ar[0].name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Vue from 'vue';
import APlayer from '@moefe/vue-aplayer';
Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});
export default {
    data(){
        return {
            dataList: [],
            isShow:false,
            audio: [
        {
          name: '东西（Cover：林俊呈）',
          artist: '纳豆',
          url: 'https://cdn.moefe.org/music/mp3/thing.mp3',
          cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
          lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
        }
            ]
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
        clickHandle(id){
            let thisUrl="https://bird.ioliu.cn/netease/song?id="+id;
            axios.get(thisUrl).then((res)=>{
                console.log(res);
                // let obj={
                    this.audio[0].name= res.data.data.name;
                    // artist: res.data.data.ar[0].name,
                    this.audio[0].url= res.data.data.mp3.url;
                    this.audio[0].cover= res.data.data.al.picUrl; // prettier-ignore
                    // lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
                    this.$refs.aplayer.play();
                // this.audio=obj;
            })
        },
        getData(){
            let thisUrl="https://bird.ioliu.cn/netease/playlist?id=2899785819"
            // let thisUrl="https://musicapi.xiecheng.live/playlist/detail?id=2899785819"
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
  font-size: 0.4rem;
  border: 0;
  border-collapse: collapse;
}
.music-list tbody tr:nth-child(odd) {
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