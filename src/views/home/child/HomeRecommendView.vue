<!--  -->
<template>
<div class="recommend">
    <div v-for="item in recommends" class="recommend-item"> 
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
    </div>
</div>
</template>

<script>
export default {
    name:"recommends",
components:{

},
    data() {
        return {

        }
    },
    props:{
        recommends:{
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
.recommend{
    width: 100%;
    text-align: center;
    display:flex;
    font-size: 12px;
    /* padding: 10px 0px 20px; */
     border-bottom: 10px solid #eee;
}
.recommend img{
    width: 20px;
    height:20px;
    
   
}
.recommend-item{
    flex:1;
}
</style>