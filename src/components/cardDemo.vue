<template>
<div>
  <div class="content-block-title">简单卡片</div>
    <div class="card">
        <div class="card-content">
           <div class="card-content-inner">这是一个用纯文本的简单卡片。但卡片可以包含自己的页头，页脚，列表视图，图像，和里面的任何元素。</div>
        </div>
  </div>
 <div class="content-block-title">风格卡片</div>
  <div class="card demo-card-header-pic">
    <div valign="bottom" class="card-header color-white no-border no-padding">
      <img class='card-cover' src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" alt="">
    </div>
    <div class="card-content">
      <div class="card-content-inner">
        <p class="color-gray">发表于 2015/01/15</p>
        <p>此处是内容...</p>
      </div>
    </div>
    <div class="card-footer">
      <a href="#" class="link">赞</a>
      <a href="#" class="link">更多</a>
    </div>
   </div>
   <div style='height:100px'></div>
</template>

<script>
export default {
  data() {
    return {
      author: "yanxs",
      articles: [],
    }
  },
   // props : ['loading'],  //父组件通信
     created() {
       //this.$parent.loading = true
      }

}
</script>