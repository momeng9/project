<!--  -->
<template>
<div id="home">
<navbar class="home-nav"><div slot="center">购物街</div></navbar>

<dswiper :banners="banners" :recommends="recommends" ></dswiper> 
<recommend :recommends="recommends"></recommend>
<feature></feature>
<tabcontrol :titles="titles" class="tab-control"></tabcontrol>

</div>

</template>

<script>

//公共组件
import navbar from 'components/common/navbar/navbar';
import tabcontrol from 'components/content/tabcontrol/tabcontrol.vue';
//
import dswiper from './child/dswiper.vue';
import recommend from './child/HomeRecommendView.vue';
import feature from './child/feature.vue';


//方法引用
import {gethomedata} from 'network/home.js';

export default {
    name:"home",
    components:{
      navbar,
      dswiper,
      recommend,
      feature,
      tabcontrol
        
    },
   
    data() {
        return {
          banners:[],
          recommends:[],
          titles:['dd','ff','gg']
        }
    },

    created () {

       
    },
      mounted(){  
       gethomedata().then( res => {
            this.banners=res.data.banner.list;
            this.recommends=res.data.recommend.list;
             console.log( res)
            console.log( this.recommends);
            console.log( this.banners)
       

        })
   
  },
  updated () {
     
  }
  
}
</script>
<style scoped>
 #home{
   padding-top:44px;
   height: 2000px;
 }

.home-nav{
    background-color: var(--color-text);
    color:white;
    position:fixed;
    top:0px;
    left: 0px;
    right:0px;
    z-index: 9;

}
.tab-control{
  position: sticky;
  top:44px;
}

</style>



