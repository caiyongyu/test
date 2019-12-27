<template>
    <div>
        这是BBBBBB
        {{toRouter}}
        {{http}}
    </div>
</template>
<script>
export default {
    computed:{
        toRouter(){
            window.console.log(this.$route);
            return 1;
        },
        http() {
            
            // this.axios.get('http://localhost:8080/data.json',{
            //     params:{
            //         id:1
            //     }
            // }
            // ).then((res)=>{
            //     window.console.log(res)
            // });

            // this.axios.post('http://localhost:8080/data.json',{
            //     id:1
            // }
            // ).then((res)=>{
            //     window.console.log(res)
            // });
            return 2;
        }
    }
}
</script>