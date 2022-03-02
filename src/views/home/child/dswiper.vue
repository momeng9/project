<template>
  <div class="recommendPage">
    <swiper :options="swiperOption" ref="mySwiper">
        
      <swiper-slide v-for="item in banners"  >
       
          <a :href="item.link">
           <img :src="item.image">
          </a>
          
      </swiper-slide>
     
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import Swiper from 'swiper';




export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
     
     swiperOption: {
         loop: true,
         autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        observer: true, 
        observeParents: true,
        //循环引起重复
       notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置

        //自动循环有时候不起作用 则换一个
        //autoplay: true,
        //autoplay: 1000,
        speed:1000,
        setWrapperSize: true,
        autoHeight: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,


        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        }
      
      }
     
  
  },
  props:{
      banners:{
        type: Array,
        default () {
          return []
        }
      },

      recommends:{
        type: Array,
        default () {
          return []
        }
      }
  },
  // methods:{
  //   dd () {
  //     new Swiper('.swiper-container',{
         
  //       loop: true,
  //       autoplay: {
  //         delay: 3000,
  //         stopOnLastSlide: false,
  //         disableOnInteraction: false
  //       },

  //     //   //循环引起重复
  //     //  notNextTick: true,
  //     //   // swiper configs 所有的配置同swiper官方api配置

  //     //   //自动循环有时候不起作用 则换一个
  //     //   //autoplay: true,
  //     //   //autoplay: 1000,
  //     //   speed:1000,
  //     //   setWrapperSize: true,
  //     //   autoHeight: true,
  //     //   pagination: ".swiper-pagination",
  //     //   paginationClickable: true,
  //     //   mousewheelControl: true,
  //     //   observeParents: true,
  //     //   // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
  //     //   debugger: true,


  //       // 显示分页
  //       pagination: {
  //         el: ".swiper-pagination",
  //         clickable: true //允许分页点击跳转
  //       },
  //       // 设置点击箭头
  //       navigation: {
  //         nextEl: ".swiper-button-next",
  //         prevEl: ".swiper-button-prev"
  //       },
        
      
  //     })
  //   },
  //   ddd () {

  //      setTimeout (() => {
  //       return  swiperOption={
  //        loop: true,
  //        autoplay: {
  //         delay: 1000,
  //         stopOnLastSlide: false,
  //         disableOnInteraction: false
  //       },
  //       observer: true, 
  //       observeParents: true,
  //       //循环引起重复
  //      notNextTick: true,
  //       // swiper configs 所有的配置同swiper官方api配置

  //       //自动循环有时候不起作用 则换一个
  //       //autoplay: true,
  //       //autoplay: 1000,
  //       speed:1000,
  //       setWrapperSize: true,
  //       autoHeight: true,
  //       pagination: ".swiper-pagination",
  //       paginationClickable: true,
  //       mousewheelControl: true,
  //       observeParents: true,
  //       // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
  //       debugger: true,


  //       // 显示分页
  //       pagination: {
  //         el: ".swiper-pagination",
  //         clickable: true //允许分页点击跳转
  //       },
  //       // 设置点击箭头
  //       navigation: {
  //         nextEl: ".swiper-button-next",
  //         prevEl: ".swiper-button-prev"
  //       },
  //       }
  //      },2000)
  //      }
         
  // },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
     }
  },
  created () {
   
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
     console.log("this is current swiper instance object", this.swiper);
      // setTimeout( () => {
      //   this.$refs.mySwiper.swiper.update()
      //  console.log('ssssssssssss')
      //  },3000)
      //this.swiper.slideTo(3, 1000, true);
        

  } 
};
</script>
<style scoped >
.recommendPage .swiper-container{
  position: relative;
  width: 100%;
  /* height: 200px; */
  background: pink;
}  
.recommendPage .swiper-container .swiper-slide{
  width: 100%;
  /* line-height: 200px; */
  background: yellowgreen;
  color: #000;
  font-size: 16px;
  text-align: center;
}
.swiper-slide img{
   width: 100%;
}
</style>

