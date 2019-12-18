<template>
    <div class="icons">
        <ul>
            <li v-for="(item,index) in iconsList" :key="index">
                <img :src="item.imgUrl" alt="">
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            iconsList:[
                {
                    id:0,
                    imgUrl:'img/icons1.png',
                    name: '国内游'
                },
                {
                    id:1,
                    imgUrl:'img/icons1.png',
                    name: '国内游'
                },
                {
                    id:2,
                    imgUrl:'img/icons1.png',
                    name: '国内游'
                },
                {
                    id:3,
                    imgUrl:'img/icons1.png',
                    name: '国内游'
                },
                {
                    id:4,
                    imgUrl:'img/icons1.png',
                    name: '国内游'
                },
                {
                    id:5,
                    imgUrl:'img/icons1.png',
                    name: '国内游'
                },
                {
                    id:6,
                    imgUrl:'img/icons1.png',
                    name: '国内游'
                },
                {
                    id:7,
                    imgUrl:'img/icons1.png',
                    name: '国内游'
                },
                {
                    id:8,
                    imgUrl:'img/icons1.png',
                    name: '国内游'
                },
                {
                    id:9,
                    imgUrl:'img/icons1.png',
                    name: '国内游'
                }
            ]
        }
    },
}
</script>

<style scoped>
.icons{
    /* position: relative; */
    padding-top: .4rem;
    padding-bottom: .1rem;
    width: 100%;
    border-bottom: 1px solid #eee;
}
ul{
    overflow: hidden;
}
li{
    width: 20%;
    float: left;
    margin-bottom: .4rem;
}
li img{
    width: 1.0666666667rem;
    height: 1.0666666667rem;
    padding-bottom: .1rem;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
li p{
    text-align: center;
    font-size: .32rem;
    color: #333;
    margin-top: .1rem;
}
</style>