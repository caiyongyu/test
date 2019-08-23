<template>
    <div :class="[activeClass,'nav-container']">
        <!-- {{activeObj.title}} -->
        <header>
            <p>首页</p>
            <span>{{activeTitle}}</span>
        </header>
        <nav>
            <ul>
                <li @click="clickHandle(item)" v-for="(item,index) in navList" :key="index">{{item.title}}</li>
                <!-- <li @click="clickHandle(item)" v-for="item in navList">{{item.title}}</li> -->
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    //  created() {
    //     console.log(window.location.pathname);
    //     // this.$router.push(window.location.pathname);
    // },

     props: ["activeObj"],
    // mounted(){
    //     this.activeClass = this.activeObj.navName;
    //     this.activeTitle = this.activeObj.title;
    //     console.log(this.activeTitle)
    // },
    computed: {
        activeObj2(){
            return this.activeObj.title
        }
    },
    watch: {
       activeObj2(){
        this.activeClass = this.activeObj.navName;
        this.activeTitle = this.activeObj.title;
       }
    },
    methods: {
        clickHandle(obj) {
            // console.log(obj.pathName);
            this.$router.push(obj.pathName);
            this.activeClass=obj.Navclass;
            this.activeTitle=obj.title;
        }
    },
    data() {
        return {
            activeClass: "movie",
            activeTitle: "电影",
            navList : [
                {
                    title: "电影",
                    pathName: "/",
                    Navclass: "movie"
                },
                {
                    title: "音乐",
                    pathName: "/music",
                    Navclass: "music"
                },
                {
                    title: "书籍",
                    pathName: "/book",
                    Navclass: "book"
                },
                {
                    title: "聊天",
                    pathName: "/talk",
                    Navclass: "talk"
                }
            ]
        }
    }
}
</script>

<style scoped>
    .nav-container header,.nav-container nav {
        height: 1rem;
        background-color: gray;
        width: 100%;
    }

    .nav-container header {
        position: fixed;
        top: 0;
        font-size: 0.8rem;
        text-align: center;
    }

    .nav-container header p {
        font-size: .2rem;
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
    }

    .nav-container nav {
        position: fixed;
        bottom: 0;
        font-size: .5rem;
    }

    .nav-container nav ul {
        width: 100%;
        display: flex;
    }

    .nav-container nav ul li {
        flex-grow: 1;
        text-align: center;
        line-height: 1rem;
    }

    .movie header,.movie nav {
        background-color: rgb(33,150,243);
    }
    .music header,.music nav {
        background-color: rgb(0,150,136);
    }
    .book header,.book nav {
        background-color: rgb(121,85,72);
    }
    .talk header,.talk nav {
        background-color: rgb(63,81,181);
    }
</style>