import Vue from 'vue'
import VueRouter from 'vue-router'

//采用懒加载方式
const home = ()=> import('../views/home/home.vue')
const cart = ()=> import('../views/cart/cart.vue')
const category = ()=> import('../views/category/category.vue')
const profile = () => import('../views/profile/profile.vue')




//1、安装插件
Vue.use(VueRouter)


//解决编程式路由往同一地址跳转时会报错的情况
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
//push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};
//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject);
  return originalReplace.call(this, location).catch(err => err);
};

const routes=[
   {
    path:'',
    redirect:"/home"
   },
   {
    path:'/home',
    component:home
   },
   {
    path:'/cart',
    component:cart
   },
   {
    path:'/category',
    component:category
   },
   {
    path:'/profile',
    component:profile
   },
  
]


//实例化路由
const router=new VueRouter({
   //导入路由
   routes,
   mode:"history"
})

export default router