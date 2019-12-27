<template>
    <div class="scroll">
        <div class="scroll-content">
            <div class="scroll-right">
                <ul :class="{animatedTop}">
                    <li v-for="(item,index) in scrollList" :key="index">
                        <img src="@/assets/img/scroll.png">
                        {{item.content}}
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            animatedTop:false,
            scrollList:[
                {
                    id: 0,
                    content:"欢迎来到鱼水之乡--中国最美的城市龙岩大美汀州风景如画美不胜收"
                },
                {
                    id: 1,
                    content:'四川--中国最辣的城市火锅肥牛风景如画美不胜收'
                },
                {
                    id: 2,
                    content:'北国风光--中国最美的城市龙岩大美汀州风景如画美不胜收'
                },
                {
                    id: 3,
                    content:'哈尔滨欢迎来到鱼水之乡--中国最美的城市龙岩大美汀州'
                },
                {
                    id: 4,
                    content:'佳木斯欢迎来到鱼水之乡--中国最美的城市龙岩大美汀州'
                },
                {
                    id: 5,
                    content:'深圳欢迎来到鱼水之乡--中国最美的城市龙岩大美汀州'
                }
            ]
        }
    },
    mounted() {
        setInterval(this.scrollTem,2000);
    },
    methods: {
        scrollTem() {
            // window.console.log(1);
            this.animatedTop=true;
            setTimeout(()=>{
                this.scrollList.push(this.scrollList[0]);
                this.scrollList.shift();
                this.animatedTop=false;
            },500);
        }
    },
}
</script>

<style scoped>
.animatedTop{
    transform: .5s all;
    margin-top: -0.6666666rem;
}
.scroll{
    position: relative;
    padding: .3rem 0;
}
.scroll-content{
    background: url('http://localhost:8080/img/scroll.png') no-repeat;
    background-size: 100%;
    width: 100%;
    height: 1.333333rem;
}
.scroll-right{
    position: absolute;
    right: 0;
    width: 8.1333333rem;
    height: 1.333333rem;
    overflow: hidden;
}
li{
    font-size: .35rem;
    line-height: .666666rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
li img{
    width: .16rem;
    height: .16rem;
}
</style>