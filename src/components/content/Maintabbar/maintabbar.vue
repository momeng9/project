<!--  -->
<template>
    <tabbar>

        <tabbaritem path="/home" activecolor="blue">
          
            <img slot="tupian" src="@/assets/img/tabbar/亚古兽.svg">
          
            <img slot="tupian2" src="@/assets/img/tabbar/亚古兽 (1).svg">
          
          
            <div slot="wenzi">亚古兽</div>
         
        </tabbaritem>
        
        <tabbaritem path="/cart" activecolor="yellow">
         
            <img slot="tupian" src="@/assets/img/tabbar/甲虫兽.svg">
            <img slot="tupian2" src="@/assets/img/tabbar/甲虫兽 (1).svg">
        
            <div  slot="wenzi">甲虫兽</div>
          
        </tabbaritem>
        
        <tabbaritem path="/category" activecolor="pink">
          
            <img slot="tupian" src="@/assets/img/tabbar/加布兽.svg">
            <img slot="tupian2" src="@/assets/img/tabbar/加布兽 (1).svg">
         
            <div  slot="wenzi">加布兽</div>
        
        </tabbaritem>
        
        <tabbaritem path="/profile" activecolor="red">
            <img slot="tupian" src="@/assets/img/tabbar/比丘兽.svg">
            <img slot="tupian2" src="@/assets/img/tabbar/比丘兽 (1).svg">
            <div  slot="wenzi">比丘兽</div>
         
        </tabbaritem>
        
        
          </tabbar>
         

</template>

<script>

import tabbar from '@/components/common/tabbar/TabBar.vue'
import tabbaritem from '@/components/common/tabbar/tabbaritem.vue'

export default {
    name:"maintarbar",
    components:{
        tabbar,
        tabbaritem
        
    },
    data() {
        return {

        }
    },
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>