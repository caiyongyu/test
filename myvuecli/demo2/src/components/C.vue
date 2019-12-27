<template>
    <div>
        这是CCCCC
        {{toRouter}}
    </div>
</template>
<script>
export default {
    computed:{
        toRouter(){
            window.console.log(this.$route);
            return 1;
        }
    }
}
</script>