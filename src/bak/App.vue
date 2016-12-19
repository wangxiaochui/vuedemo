<template>
  <div id="app">
  <!--<div class="loading" v-if="loading">
        Loading...
      </div> -->


    <header class="bar bar-nav" style='background:black;'>
    <span class="icon icon-settings pull-right" style='color:#fff'>

  </span>
  <h1 class="title " style='color:#fff'>我的测试首页</h1>
</header>
   <router-view class="view"></router-view>
   <bar-item :nav_list="nav_list"></bra-item>

      <!--    <nav class="bar bar-tab">
          <router-link to="/first" class="tab-item external active">
           <span class="icon icon-home"></span>
           <span class="tab-label">首页</span>
          </router-link>
           <router-link to="/first" class="tab-item external">
               <span class="icon icon-me"></span>
               <span class="tab-label">信息</span>
               <span class="badge">2</span>
            </router-link>
         <router-link to="/first" class="tab-item external">
           <span class="icon icon-star"></span>
           <span class="tab-label">收藏</span>
         </router-link>
          <router-link to="/first" class="tab-item external">
           <span class="icon icon-cart"></span>
           <span class="tab-label">购物车</span>
         </router-link>
         <router-link to="/first" class="tab-item external">
           <span class="icon icon-settings"></span>
           <span class="tab-label">设置</span>
         </router-link>
       </nav> -->

  </div>
</template>

<script>

var nav_list =  [
    {'path' : '/index', 'label': '首页', 'icon':'icon-home'},
    {'path' : '/message', 'label': '信息', 'icon':'icon-me'},
    {'path' : '/start', 'label': '收藏', 'icon':'icon-star'},
    {'path' : '/cart', 'label': '购物', 'icon':'icon-cart'},
    {'path' : '/setting', 'label': '设置', 'icon':'icon-settings'}
];
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loading:true,
      nav_list : nav_list
    }
  },
}
</script>
<style src="./css/sm.min.css"></style>
<style src="./css/sm-extend.min.css"></style>
<style>


</style>
