<template>
    <div class="like">
        <div class="like-content" v-for="(item,index) in likeList" :key="index">
            <div class="like-top">
                <div class="like-title">
                    {{item.title}}
                </div>
                <div class="like-more">
                    更多>
                </div>
            </div>
            <div class="like-bottom">
                <div class="bottom-header" :style="{'background':'url('+item.imgUrl+')'}">
                    <div class="like-info">
                        <span>{{item.Introduction}}</span>
                        <span>￥{{item.price}}起</span>
                    </div>
                    
                </div>
                <ul>
                    <li v-for="(item,index) in item.cityList" :key="index">
                        <img :src="item.imgUrl" alt="">
                        <span class="title">{{item.title}}</span>
                        <span class="price">￥{{item.price}}</span>
                    </li>
                </ul>
            </div>
        </div>

           
    </div>
</template>

<script>
export default {
    props: ['likeList']
}
</script>

<style scoped>
.like{
    /* margin-top: .3rem; */
    /* padding-top: .7rem; */
    
    /* background: red; */
}
.like-content{
    padding: .5rem;
    height: 11rem;
}
.like-top{
    position: relative;
    display: flex;
    justify-content: space-between;
}
.like-top .like-title{
    font-size: .5rem;
    font-weight: 500;
    color: #333;
    margin-left: .3rem;
}
.like-top .like-title::before{
    position: absolute;
    content: "";
    width: .1rem;
    height: .48rem;
    background: #fed101;
    left: 0;
}
.like-top .like-more{
    padding-right: .5rem;
    font-size: .4rem;
    font-weight: 500;
    color: #999;
}
.like-bottom{
    padding: .3rem;
}
.like-bottom .bottom-header{
    position: relative;
    /* background: url('http://localhost:8080/img/like1.jpg') no-repeat; */
    height: 4.4666666rem;
    width: 100%;
    background-size: 100%;
}
.bottom-header .like-info{
    display: flex;
    position: absolute;
    bottom: .26rem;
    left: .4rem;
    justify-content: space-between;
    /* width: 100%; */
}
.like-bottom .bottom-header .like-info span:nth-child(1){
    width: 5rem;
    white-space: nowrap;
    overflow: hidden;
    color: #fff;
    font-size: .5rem;
    font-weight: 700;
    text-overflow: ellipsis;
}
.like-bottom .bottom-header .like-info span:nth-child(2){
    margin-left: 1.5rem;
    font-size: .5rem;
    color: orange;
}
.like-bottom ul{
    padding: .2rem 0;
    display: flex;
    justify-content: space-between;
}
.like-bottom ul li{
    width: 2.96rem;
}
.like-bottom ul img{
    width: 100%;
    height: 1.9584rem;
}
.like-bottom ul li .title{
    /* width: 3rem; */
    text-overflow: ellipsis;
     overflow: hidden;
    /* white-space: nowrap; */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: #333;
    font-size: .28rem;
    font-weight: 700;
    margin-top: .1rem;
    display: block;
    height: .68rem;
    /* background: red; */
}
.like-bottom ul li .price{
    margin-top: .1rem;
    font-size: .4rem;
    color: orange;
    display: block;
}
</style>