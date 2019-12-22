<template>
    <div class="scroll">
        <div class="scroll-content">
            <div class="scroll-right">
                <ul :class="{animatedTop}">
                    <li v-for="(item,index) in scrollList" :key="index">
                        <img src="img/scroll.png">
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
                    content:"《儿女英雄》戏剧小丛书之十一，白山文委会编辑室集体创作，卞和之、刚鑑执笔，孙康作曲，东北书店辽宁分店1949年5月1版1次3000册"
                },
                {
                    id: 1,
                    content:'《百战百胜》鲁亚农著，止怡配曲，东北书店出版发行，1949年5月初版，长春1版1次10000册'
                },
                {
                    id: 2,
                    content:'《钢骨铁筋》（四幕歌剧）苏里、武照题、吴因集体创作，武照题执笔，吴因、巩志卫谱曲，1948年12月东北书店初版，哈尔滨印10000册'
                },
                {
                    id: 3,
                    content:'《儿女英雄》戏剧小丛书之十一，白山文委会编辑室集体创作，卞和之、刚鑑执笔，孙康作曲，东北书店辽宁分店1949年5月1版1次3000册'
                },
                {
                    id: 4,
                    content:'《百战百胜》鲁亚农著，止怡配曲，东北书店出版发行，1949年5月初版，长春1版1次10000册'
                },
                {
                    id: 5,
                    content:'《钢骨铁筋》（四幕歌剧）苏里、武照题、吴因集体创作，武照题执笔，吴因、巩志卫谱曲，1948年12月东北书店初版，哈尔滨印10000册'
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