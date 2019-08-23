<template>
    <div>
        <h1>电影</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList:[]
        }
    },
    created() {
        this.getData();
        let obj = {
            title:"电影",
            navName:"movie"
        };
        this.$emit("changeActive",obj)
    },
    methods: {
        getData(){
            let birdapi='https://bird.ioliu.cn/v2?url='
            let urlapi=`https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=0&count=10`
            // let urlapi=`https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=0&count=10`
            axios.get(birdapi+urlapi)
            .then((res)=>{
                console.log(res);
                
            })
        }
    }
}
</script>

<style scoped>
    
</style>