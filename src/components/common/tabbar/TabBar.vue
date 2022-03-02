<!--  -->
<template>
        <div id="tab-bar"> 
           <slot>

           </slot>
       
            </div>
   
</template>

<script>
export default {
    name:"TabBar",
    data() {
        return {

        }
    },
  
}
</script>
<style  scoped>
/* @import url(); 引入css类 */

#tab-bar{
    display: flex;
    background-color: #f6f6f6;
    /* background-color: rgb(49, 44, 44); */
    position: fixed; 
    left:0px;
    right:0px;
    bottom:0px;
   

}

</style>