<template>
    <div>
        detail
    </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route.params.id);
        this.getData(this.$route.params.id);
    },
    methods:{
        getData(id){
            axios.get("https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/subject/"+id)
            .then((res)=>{
                console.log(res.data);
                
            })
        }
    }
}
</script>

<style scoped>
    
</style>