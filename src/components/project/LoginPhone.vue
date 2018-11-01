<template>
  <div class="">
    <div class="newlogo">
      <img src="../../assets/picture/newlogo.png" height="64" width="270"/>
      <div class="logindiv" >
        <img src="../../assets/images/kefu01.png" height="18" width="18"/>
        <p>客服热线<span>024-31040888</span></p>
      </div>
    </div>
    <!--导航 over-->
    <div class="loginsize">
      还没有账号？<router-link to='/Enroll'>立即注册</router-link>
    </div>
    <!---->
    <div class="loginbox">
      <div class="logintitle">用户登录</div>
      <img src="../../assets/images/07.jpg" height="136" onmouseover="this.src='../../assets/images/27.jpg'" onmouseout="this.src='../../assets/images/07.jpg'"/>
      <div class="login_p"><p>打开<span>手机</span> 扫描二维码</p></div>
      <img src="../../assets/images/08.jpg" height="25" width="233" style="margin: 10px 0"/>
      <div class="login_p"><p><span><router-link to='/login'>账号密码登录</router-link> </span></p></div>
    </div>
    <!--中间内容 over-->
  </div>
</template>

<script>
    export default {
        name: "LoginPhone"
    }
</script>

<style scoped>

</style>
