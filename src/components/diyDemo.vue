<template>
<div>
    <div style='width:100%;background:#fff'>
        <ul id='tt'>
            <li>
                <div>
                    <img src='../assets/images/1.png'>
                    <p>美食</p>
                </div>
            </li>
            <li>
                <div>
                    <img src='../assets/images/2.png'>
                    <p>电影/演出</p>
                </div>
            </li>
            <li>
            <div>
                <img src='../assets/images/3.png'>
                <p>酒店住宿</p>
            </div>
        </li>
            <li>
            <div>
                <img src='../assets/images/4.png'>
                <p>休闲娱乐</p>
            </div>
        </li>
            <li>
            <div>
                <img src='../assets/images/5.png'>
                <p>外卖</p>
            </div>
        </li>
        <li>
            <div>
                <img src='../assets/images/7.png'>
                <p>KTV</p>
            </div>
        </li>
            <li>
            <div>
                <img src='../assets/images/11.png'>
                <p>学习培训</p>
            </div>
        </li>
            
            <li>
            <div>
                <img src='../assets/images/8.png'>
                <p>周边游玩</p>
            </div>
        </li>
            <li>
            <div>
                <img src='../assets/images/9.png'>
                <p>丽人/美发</p>
            </div>
        </li>
            <li>
            <div>
                <img src='../assets/images/10.png'>
                <p>旅游出行</p>
            </div>
        </li>

        </ul>
     </div>

     <!-- 杂项 start-->
    <div style='width:100%;background:#fff;margin-top:9px'>
        <div class='row' id='zx'>
            <div class="col-33" style='border-right:2px solid #eee;border-bottom:2px solid #eee'>
                <p class='rq'>人气外卖</p>
                <p class='gf'>点评高分餐馆</p>
                <img src='../assets/images/15.png'>
            </div>
             <div class="col-33" style='border-right:2px solid #eee;border-bottom:2px solid #eee'>
                <p class='rq'>0元午餐</p>
                <p class='gf' style='color:#EE1289'>会员免单福利</p>
                <img src='../assets/images/16.png'>
             </div>
             <div class="col-33" style='border-bottom:2px solid #eee'>
                <p class='rq'>圣诞美食</p>
                <p class='gf' style='color:#FF0000  '>3000万美食券</p>
                <img src='../assets/images/17.png'>
             </div>
        </div>
    </div>
    <div style='width:100%;background:#fff;'>
        <div class='row' id='zx'>
            <div class="col-33" style='border-right:1px solid #eee'>
                <p class='rq'>新客专享</p>
                <p class='gf' style='color:#FF6347'>电影红包来袭</p>
                <img src='../assets/images/18.png'>
            </div>
             <div class="col-33" style='border-right:1px solid #eee'>
                <p class='rq'>领100元红包</p>
                <p class='gf' style='color:#7CCD7C'>特价出国玩</p>
                <img src='../assets/images/19.png'>
             </div>
             <div class="col-33">
                 <p class='rq'>周二半价</p>
                <p class='gf' style='color:#1C86EE'>换圣诞造型</p>
                <img src='../assets/images/13.png'>
             </div>
        </div>
    </div>

     <!-- 杂项 end-->
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

#zx{text-align:center}
#zx p{margin:0px;padding:5px 0 0 0}
.rq{font-size:14px;font-weight:bold;text-align:center;}
.gf{font-size:12px;color:rgb(230,165,25);text-align:center}
#zx img{width:52px;margin-top:10px}
</style>