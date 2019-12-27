<template>
    <div>
        BB
        {{change}}
    </div>
</template>
<script>
import bus from './Link';
export default {
    computed: {
        change() {
            return bus.$on("btnChange",function(data){
                alert(data);
                
            })
            
        }
    },
}
</script>