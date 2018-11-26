<template>
  <div class="">
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
      <div class="logintitle">忘记密码</div>
      <table width="0" border="0" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
          <td><em>*</em>
            <p>手机号码</p></td>
          <td><input name="phonenumber" autocomplete="off" type="text" style="color:#999" value="" placeholder="请输入手机号码"
                     id="phone"
                     onblur="if(this.placeholder==''||this.placeholder=='请输入手机号码'){this.placeholder='请输入手机号码';this.style.color='#666';}"><span
            style="display:none;"><i>!</i><p>该手机号已注册</p></span></td>
          <td id="code">
            <div v-if="show">
              <input name="passwords" class="samllinput" id="" autocomplete="off" type="text" style="color:#999"
                     value="" :aria-placeholder="context">
              <span><i></i><p>{{time}}</p>秒</span>
            </div>
            <input v-if="!show" class="samllinputs" autocomplete="off" style="margin-left: 10px;margin-top: 6px;"
                   type="button"
                   @click="sendCode" value="获取验证码">
          </td>
        </tr>
        <tr>
          <td><em>*</em>
            <p>新密码</p></td>
          <td><input name="password" id="pwd" autocomplete="off" type="text" style="color:#999" value=""
                     placeholder="请输入密码"
                     onfocus="if(this.placeholder=='请输入密码'){this.placeholder=''};this.style.color='#666';"
                     onblur="if(this.placeholder==''||this.placeholder=='请输入密码'){this.placeholder='请输入密码';this.style.color='#666';}"><span
            style="display:none;"><i>!</i><p>该密码错误</p></span></td>
        </tr>
        </tbody>
      </table>
      <input type="button" @keydown.13="sendNewPwd" @click="sendNewPwd" value="确定" class="register_nav2"
             style="margin-top: 30px;"/>
    </div>
    <!--中间内容 over-->
  </div>
</template>

<script>
  export default {
    name: "forget",
    data() {
      return {
        time: 60,
        show: false,
        context: '点击获取验证码'
      }
    },
    methods: {
      sendCode: function () {
        let _this = this;
        let phone = $('#phone').val();
        this.$axios({
          url: _this.HOME + '/user/sendCode?phoneNum=' + phone,
          method: 'post',
        }).then(res => {
          if (Math.ceil(res.data.code) === 200) {
            this.show = !this.show;
            let clock = window.setInterval(() => {
              this.time--;
              if (this.time < 0) {     //当倒计时小于0时清除定时器
                window.clearInterval(clock);
                this.time = 60;
                this.show = !this.show;
                $('#code input[name="passwords"]').val("");
                this.context = '重新获取验证码'
              }
            }, 1000)
          }
        }).catch(e => {
          console.log(e)
        })
      },
      sendNewPwd: function () {
        let _this = this;
        let validateCode = $('#code input').val();
        let userName = $('#phone').val();
        let newPassword = $('#pwd').val();
        if (validateCode) {
          this.$axios({
            url: _this.HOME + '/user/forgetPassword?validateCode=' + validateCode + '&userName=' + userName + '&newPassword=' + newPassword,
            method: 'post'
          }).then(res => {
            alert(res.data.message)
          }).catch(e => {
            console.log(e)
          })
        } else {
          alert("验证码不能为空。")
        }
      }
    }
  }
</script>

<style scoped>

</style>
