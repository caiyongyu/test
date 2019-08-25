<template>
    <div v-if="bookInfo.title" class="bookdetail clearfix">
        <p>{{bookInfo.title}}</p>
        <div class="detail-left">
            <img :src="bookInfo.pic.normal" alt="">
        </div>
        <div class="detail-right">
            <p>作者：{{bookInfo.author[0]}}</p>
            <p>出版社：{{bookInfo.press[0]}}</p>
            <p>出版年：{{bookInfo.pubdate[0]}}</p>
            <p>页数：{{bookInfo.rate.rating_count}}</p>
            <p>评分：{{bookInfo.rate.value_str}}</p>
            <p>定价：{{bookInfo.price[0]}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            bookInfo:{}
        }
    },
    created() {
        console.log(this.$route.params.id);
        this.getData(this.$route.params.id);
    },
    methods: {
        getData(id){
            let birdapi="https://bird.ioliu.cn/v2?url=";
            let bookUrl="https://m.douban.com/rexxar/api/v2/market/book/"+id;
            axios.get(birdapi+bookUrl).then((res)=>{
                console.log(res);
                this.bookInfo=res.data.data.subject;
                console.log(this.bookInfo);
                
            })
        }
    }
}
</script>
<style scoped>
    .bookdetail {
        padding: 10px;
        border: 1px solid black;
    }
    .bookdetail .detail-left {
        float: left;
        width: 40%;
    }
    .bookdetail .detail-left img {
        width: 90%;
    }
    .bookdetail .detail-right {
        float: right;
        width: 60%;
        font-size: .4rem;
        /* text-align: center; */
    }
</style>