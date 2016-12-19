<template>
  <div id="app">
     <header class="bar bar-nav">
        <span class="icon icon-settings pull-right">
        </span>
        <h1 class="title ">我的测试首页</h1>
    </header>
    <div class="content">
         <router-view class="view"></router-view>
     </div>

    <bar-item :nav_list="nav_list"></bar-item>
  </div>
</template>

<script>

var nav_list =  [
    {'path' : '/index', 'label': '首页', 'icon':'icon-home'},
    {'path' : '/list', 'label': '列表', 'icon':'icon-me'},
    {'path' : '/card', 'label': '卡片', 'icon':'icon-star'},
    {'path' : '/cart', 'label': '购物', 'icon':'icon-cart'},
    {'path' : '/diy', 'label': '自定义', 'icon':'icon-settings'}
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
