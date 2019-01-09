<template>
  <div class="all">
    <div class="newlogo">
      <img src="../../assets/picture/newlogo.png" height="64" width="270"/>
      <div class="logindiv">
        <img src="../../assets/images/kefu01.png" height="18" width="18"/>
        <p>客服热线<span>024-31040888</span></p>
      </div>
    </div>
    <!--导航 over-->
    <div class="loginsize">
      还没有账号？
      <router-link to='/Enroll'>立即注册</router-link>
    </div>
    <!---->
    <div class="loginbox">
      <div class="logintitle">用户登录
        <div class="logintitle_img">
          <router-link to='/loginphone'>
            <img src="../../assets/images/06.jpg" height="40" width="40"/>
          </router-link>
        </div>
      </div>

      <table width="0" border="0" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
          <td><em>*</em>
            <p>手机号码</p></td>
          <td><input name="phonenumber" autocomplete="off" type="text" style="color:#999" value="" placeholder="请输入手机号码"
                     id="userName"
                     onblur="if(this.placeholder==''||this.placeholder=='请输入手机号码'){this.placeholder='请输入手机号码';this.style.color='#666';}"><span
            style="display:none;"><i>!</i><p>该手机号已注册</p></span></td>
        </tr>
        <tr>
          <td><em>*</em>
            <p>账户密码</p></td>
          <td><input type="password" autocomplete="off" style="color:#999" value="" placeholder="请输入密码" id="pwd"
                     onfocus="if(this.placeholder=='请输入密码'){this.placeholder=''};this.style.color='#666';"
                     onblur="if(this.placeholder==''||this.placeholder=='请输入密码'){this.placeholder='请输入密码';this.style.color='#666';}"><span
            style="display:none;"><i>!</i><p>该密码错误</p></span></td>
        </tr>
        </tbody>
      </table>
      <h3>
        <input type="checkbox" id="checkbox_a0" class="chk_1">
        <label for="checkbox_a0" @click="checkCheckBox"></label>
        <span>记住账号</span>
        <span class="loginforget"><router-link to='/forget'>忘记密码？</router-link></span>
      </h3>
      <input type="button" @click="login" value="登录" class="register_nav2"/>
    </div>
    <!--中间内容 over-->
  </div>
</template>

<script>
  import md5 from '../../assets/js/md5'
  export default {
    name: "login",
    data() {
      return {
        isChecked:false
      }
    },
    methods: {
      login: function () {
        let _this = this;
        let param = new URLSearchParams;
        param.append("mobileNumber", $('#userName').val());
        param.append("password", $('#pwd').val());
        param.append("rememberMe", $('h3>input[checked="checked"]')?"0":"1");
        this.$axios({
          url: _this.HOME + '/user/login',
          method: 'POST',
          data: param
        }).then(res => {
          if (Math.ceil(res.data.code) === 200){
            alert(res.data.message);
            if(res.data.data.isSeller === 0) {
              sessionStorage.setItem("token", md5($('#pwd').val()));
              sessionStorage.setItem("userCode", res.data.data.userCode);
            }
          } else {
            alert(res.data.message)
          }
        }).catch(e => {
          console.log(e)
        })
      },
      checkCheckBox: function () {
        this.isChecked = !this.isChecked;
        $('h3>input').attr('checked', this.isChecked);
        console.log(this.isChecked)
      }
    }
  }
</script>
<style scoped>

</style>

