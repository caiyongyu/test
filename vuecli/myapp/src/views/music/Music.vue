<template>
    <div>
        <table class="music-list">
            <thead>
                <tr>
                    <th></th>
                    <th>歌曲名称</th>
                    <th>歌手</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>歌曲名称</td>
                    <td>歌手</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>歌曲名称</td>
                    <td>歌手</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
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
</style>