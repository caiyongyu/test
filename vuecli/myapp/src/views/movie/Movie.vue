<template>
    <div>
        <div>
            <ul>
                <li @click="goDetail(item.id)" v-for="item in dataList" :key="item.id" class="list-item clearfix">
                    <div class="li-left">
                        <img :src="'https://images.weserv.nl/?url='+item.cover.url">
                    </div>
                    <div class="li-right">
                        <p>{{item.title}}</p>
                        <p>主演:
                            <span v-for="item2 in item.actors" :key="item2">{{item2}}/</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            start: 0,
            total:10,
            dataList:[]
        }
    },
    created() {
        this.getData();
        this.listenScroll();
        let obj = {
            title:"电影",
            navName:"movie"
        };
        this.$emit("changeActive",obj)
    },
    methods: {
        goDetail(id){
            this.$router.push({
                name:"moviedetail",
                params:{
                    id
                }
            })
        },
        listenScroll(){
            let ele=document.documentElement;

            window.onscroll=()=>{
                let cHeight = ele.clientHeight;
                let sHeight = ele.scrollHeight;
                let sTop = ele.scrollTop;
                // console.log(ele.scrollTop);
                if(sHeight-sTop <= cHeight+10){
                    // console.log("到底部了");
                    this.start+=10;
                    this.getData();
                }
            }
        },
        getData(){
            if(this.dataList.length!=this.total) {
                let birdapi='https://bird.ioliu.cn/v2?url=';
            let urlapi=`https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=${this.start}&count=10`;
            axios.get(birdapi+urlapi)
            .then((res)=>{
                this.total=res.data.total;
                console.log(res.data.subject_collection_items);
                this.dataList=this.dataList.concat(res.data.subject_collection_items);
            })
            }
        }
    }
}
</script>

<style scoped>
    .list-item {
        padding: 10px;
        border-bottom: 1px solid black;
    }

    .li-left {
        float: left;
        width: 40%;

    }

    .li-left  img{
        width: 90%;
    }

    .li-right {
        float: right;
        width: 60%;
        font-size: .4rem;
    }
</style>