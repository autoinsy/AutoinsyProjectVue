<template>
  <div id="jd-denglu">
    <div class="dingbu">
      <ul class="yfd">
        <li><router-link to='/login'>你好,请登录</router-link></li>
        <li><router-link to='/Enroll'>免费注册</router-link></li>
        <li style="color:#ccc;">|</li>
        <li><router-link to='/OrderDetails'>我的订单</router-link></li>
        <li style="color:#ccc;">|</li>
        <li id="kkk"><router-link to='/center'>个人中心</router-link>
          <!--<div id="wdjd">-->
            <!--<em></em>-->
            <!--<div class="diyi">-->
              <!--<div class="wd"><img src="../assets/picture/16.jpg"></div>-->
              <!--<div class="jd"><span><a href="###">你好,请登录</a></span> <span><a href="###">消息</a></span>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="dier">-->
              <!--<div class="wen">-->
                <!--<span><a href="###">待处理订单</a></span>-->
                <!--<span><a href="###">咨询回复</a></span>-->
                <!--<span><a href="###">返修退换货</a></span>-->
              <!--</div>-->
              <!--<div class="zi">-->
                <!--<span><a href="###">我的关注</a></span>-->
                <!--<span><a href="###">我的收藏</a></span>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        </li>
        <li style="color:#ccc;">|</li>
        <li id="iii"><a href="">手机电商</a>
          <div id="sjjd"><img src="../assets/picture/30.png"> <em></em></div>
        </li>
        <li style="color:#ccc;">|</li>
        <li id="ppp"><a href="">关注电商&nbsp;</a>
          <div id="gzjd"><img src="../assets/picture/32.jpg"> <em></em></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TopNav"
    }
</script>

<style scoped>

</style>
