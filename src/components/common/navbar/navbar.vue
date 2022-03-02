<!--  -->
<template>
<div class="navbar">
<div class="navbar1"><slot name="left"></slot></div>
<div class="navbar2"><slot name="center"></slot></div>
<div class="navbar3"><slot name="right"></slot></div>

</div>
</template>

<script>
export default {
    name:"navbar",
components:{

},
    data() {
        return {

        }
    },
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.navbar{
    display: flex;
     line-height: 44px;
     text-align: center;
     box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.navbar1,.navbar3{
    width: 60px;
   
}
.navbar2{
    flex: 1;
  
}

</style>