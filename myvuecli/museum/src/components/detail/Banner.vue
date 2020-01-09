<template>
    <div class="banner">
        <div>
            <img :src="item.imgUrl" alt="">
        </div>
        <div>
            <p>{{item.title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item:''
        }
    },
    activated() {
        window.console.log(this.$route.query);
        // this.item=this.$route.query.item;
        // window.console.log(1);
    },
}
</script>

<style scoped>
.banner img{
    width: 100%;
    height: 5rem;
}
.banner p{
    padding: .1rem .2rem;
    color: #333;
    font-size: .5rem;
    font-weight: 600;
    line-height: .6rem;
}
</style>