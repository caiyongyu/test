<template>
    <div :class="[activeClass,'nav-container']">
        <header>
            <p>首页</p>
            <span>电影</span>
        </header>
        <nav>
            <ul>
                <li>电影</li>
                <li>音乐</li>
                <li>书籍</li>
                <li>聊天</li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeClass: "movie",
            navList : [
                {
                    title: "电影",
                    pathName: "/",
                    Navclass: "movie"
                },
                {
                    title: "电影",
                    pathName: "/",
                    Navclass: "movie"
                },
                {
                    title: "书籍",
                    pathName: "/",
                    Navclass: "book"
                },
                {
                    title: "电影",
                    pathName: "/",
                    Navclass: "movie"
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