<template>
<div>
    <div style='width:100%;background:#fff'>
        <ul id='tt'>
            <li>
                <div>
                    <img src='../assets/images/1.png'>
                    <p>测试</p>
                </div>
            </li>
            <li>
                <div>
                    <img src='../assets/images/2.png'>
                    <p>测试</p>
                </div>
            </li>
            <li>
            <div>
                <img src='../assets/images/3.png'>
                <p>测试</p>
            </div>
        </li>
            <li>
            <div>
                <img src='../assets/images/4.png'>
                <p>测试</p>
            </div>
        </li>
            <li>
            <div>
                <img src='../assets/images/5.png'>
                <p>测试</p>
            </div>
        </li>
            <li>
            <div>
                <img src='../assets/images/6.png'>
                <p>测试</p>
            </div>
        </li>
            <li>
            <div>
                <img src='../assets/images/7.png'>
                <p>测试</p>
            </div>
        </li>
            <li>
            <div>
                <img src='../assets/images/8.png'>
                <p>测试</p>
            </div>
        </li>
            <li>
            <div>
                <img src='../assets/images/9.png'>
                <p>测试</p>
            </div>
        </li>
            <li>
            <div>
                <img src='../assets/images/10.png'>
                <p>测试</p>
            </div>
        </li>

        </ul>
     </div>
</div>
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

<style>

#tt{list-style:none;margin:0px;padding:0px;padding-top:0px;padding-bottom:10px}
#tt li{display:inline-block;margin-left:25px;margin-top:10px}
#tt li p{margin:0px; padding:0px;font-size:12px;text-align:center;color:#555;line-height:1}
#tt li img{width:40px}
</style>