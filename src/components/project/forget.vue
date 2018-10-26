<template>
  <div class="newlogo">
    <img src="picture/newlogo.png" height="64" width="270"/>
    <div class="logindiv" >
      <img src="images/kefu01.png" height="18" width="18"/>
      <p>客服热线<span>024-31040888</span></p>
    </div>
  </div>

  <!--导航 over-->
  <div class="loginsize">
    还没有账号？<a href="enroll.html">立即注册</a>
  </div>
  <!---->
  <div class="loginbox">
    <div class="logintitle">忘记密码</div>
    <table width="0" border="0" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
        <td><em>*</em><p>手机号码</p></td>
        <td><input name="phonenumber" autocomplete="off" type="text" style="color:#999" value="" placeholder="请输入手机号码"{this.placeholder=''};this.style.color='#666';" onblur="if(this.placeholder==''||this.placeholder=='请输入手机号码'){this.placeholder='请输入手机号码';this.style.color='#666';}"><span style="display:none;"><i>!</i><p>该手机号已注册</p></span></td>
      </tr>
      <tr>
        <td><em>*</em><p>新密码</p></td>
        <td><input name="password" autocomplete="off" type="text" style="color:#999" value="" placeholder="请输入密码" onfocus="if(this.placeholder=='请输入密码'){this.placeholder=''};this.style.color='#666';" onblur="if(this.placeholder==''||this.placeholder=='请输入密码'){this.placeholder='请输入密码';this.style.color='#666';}"><span style="display:none;"><i>!</i><p>该密码错误</p></span></td>
      </tr>
      </tbody>
    </table>
    <input type="submit" value="确定" class="register_nav2" style="margin-top: 30px;"/>
  </div>
  <!--中间内容 over-->
</template>

<script>
    export default {
        name: "forget"
    }
</script>

<style scoped>

</style>
