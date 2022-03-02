<!--  -->
<template>
<div class="tab-control">

   
    <div v-for="(item,index) in titles" class="tab-item" :class="{active: index === currentIndex}" @click="dd(index)">
        <span >{{item}}</span>
        
        </div> 

    
</div>
</template>

<script>
export default {
    name:"tabcontrol",
components:{

},
    data() {
        return {
           //记录活跃的item
           currentIndex:0
        }
    },
    methods:{
       dd (index) {
         this.currentIndex=index;
       }
    },
    props:{
        titles:{
            type:Array,
            default () {
                return []
            }
        }
        
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.tab-control{
    display: flex;
    text-align: center;
    background-color: bisque;
}
.tab-item{
    flex:1;
    height: 40px;
    line-height: 40px;
     text-align: center;
}
.active{
    color: deeppink;
}
.active span{
    padding: 0px;
    border-bottom: 5px solid deeppink;
} 
</style>