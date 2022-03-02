<!--  -->
<template>
    <div class="tabbaritem" @click="item">
        <div v-show="!active">
            <slot name="tupian" > </slot>
        </div>
           <div v-show="active">
            <slot name="tupian2" ></slot>
           </div>
        
       <div :style="d">
             <slot name="wenzi"></slot>
       </div>       
</div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
     
        path:String,
        activecolor:{
            String,
            default:"red"
        }
    },
    data() {
        return {
           
        }
    },
    computed:{
      active () {
          //动态绝对是点击了谁 谁是活跃

          //获取从父组件传过来的属性PATH  看看是否等于活跃的路由  如果等于就说明是此路由活跃 则显示
          // route是获取活跃的路由
          return this.$route.path.indexOf(this.path) !== -1
      },
      d () {
          return this.active ? {color:this.activecolor} : {}
      }
    },
    methods:{
       style(){
            return "{color:'bule'}";
        },
        item () {
            //全局变量
          this.$router.push(this.path)
         
        }
    },
   
}
</script>
<style scoped  >
/* @import url(); 引入css类 */
.tabbaritem{
    flex:1;
    height: 49px;
  
    text-align: center;
}
.tabbaritem img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
}
.sd{
    color:red;
}
</style>