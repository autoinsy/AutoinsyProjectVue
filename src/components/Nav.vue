<template>
  <div class="jd-erbuf">
    <div class="jd-erbuf2">
      <div id="logo-1"><img src="../assets/picture/newlogo.png"/></div>
      <div class="form">
        <input class="kz" type="text" value="">
        <input type="button" class="ss" value="搜索">
        <!--<div class="biaoqian"><span><a style="color:#ff7300">雨刷器</a></span> <span><a href="">轮胎</a></span> <span><a-->
          <!--href="">排气管</a></span> <span><a href="">方向盘</a></span> <span><a href="">汽车配饰</a></span> <span><a-->
          <!--href="">车载</a></span> <span><a href="">油箱</a></span></div>-->
      </div>
      <div class="gouwuche"><img class="cileft" src="../assets/picture/10.png"> <span><router-link to='/car'>我的购物车</router-link></span>
        <a href=""><img class="jt" src="../assets/picture/11.png"></a><em></em>
        <div class="erlei"><img src="../assets/picture/12.png"> <span
          style="color:#ccc;width:206px;height:14px;font-size: 13px;position: absolute;left: 116px;top: 31px;">购物车还没有东西哦,赶紧选购吧！</span>
        </div>
      </div>
    </div>
    <div class="sanlei">
      <div class="zxkd">
        <div class="qbfl"><a href="">全部商品分类</a></div>
        <div class="sldh">
          <ul id="uile">
            <li><router-link to='/index' class="sldhactive">首页</router-link></li>
            <li><router-link to='/serve'>汽配服务</router-link></li>
            <li><router-link to='/Project'>汽配商城</router-link></li>
            <li><router-link to='/MotorPartsTown'>汽配城</router-link></li>
            <li><router-link to='/MotorPartsTownDetails'>关于本站</router-link></li>
            <li><router-link to='/TechnicalAssistance'>技术支持</router-link></li>
            <li><router-link to='/Recruitment'>招聘信息</router-link></li>
            <li><router-link to='/module'>商家模块</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>

</style>
