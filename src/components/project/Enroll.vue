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
      已有账号，
      <router-link to='/login'>立即登录</router-link>
    </div>
    <!---->
    <div class="loginbtn">
      <ul>
        <li><a href="javascript:" class="activer">个人注册</a></li>
        <li><a href="javascript:">商家注册</a></li>
      </ul>
    </div>
    <div class="loginbox">
      <ul>
        <li class="ablock" style="display: block;">
          <div class="logintitle">个人注册</div>
          <table width="0" border="0" cellspacing="0" id="userRegistry" cellpadding="0">
            <tbody>
            <tr>
              <td><em>*</em>
                <p>手机号码</p></td>
              <td>
                <input name="phonenumber" autocomplete="off" type="text" style="color:#999" value=""
                       placeholder="请输入手机号码"/>
                <span style="display:none;"><i>!</i><p>该手机号已注册</p></span>
              </td>
            </tr>
            <tr>
              <td><em>*</em>
                <p>账户密码</p></td>
              <td>
                <input name="password" autocomplete="off" type="password" style="color:#999" value=""
                       placeholder="请输入密码"/>
                <span style="display:none;"><i>!</i><p>该密码错误</p></span>
              </td>
            </tr>
            <tr>
              <td><em>*</em>
                <p>手机验证码</p></td>
              <td>
                <input name="passwords" class="samllinput" autocomplete="off" type="text" style="color:#999" value=""
                       placeholder="请输入验证码">
                <span style="display:none;"><i>!</i><p>该验证码错误</p></span>
                <input class="samllinputs" autocomplete="off" type="button" value="获取验证码">
              </td>
            </tr>
            <tr>
              <td><em>*</em>
                <p>验证码</p></td>
              <td>
                <input name="" class="samllinputa" autocomplete="off" type="text" style="color:#999" value=""
                       placeholder="请输入验证码">
                <span style="display:none;"><i>!</i><p>该验证码错误</p></span>
                <div class="samllinputas"><img src="../../assets/images/01.jpg" height="42" width="91"/></div>
                <span class="loginspan">看不清，换一张</span>
              </td>
            </tr>
            </tbody>
          </table>
          <h3>
            <input type="checkbox" checked="checked" id="checkbox_a0" class="chk_1">
            <label for="checkbox_a0"></label>我同意并准守<span class="yingshen"><a href="javascript:" style="color: #ff7300">《英沈商城用户协议》</a></span>
          </h3>
          <input type="button" value="立即注册" class="register_nav2" @click="registUser" @keydown.13="registUser"/>
        </li>
        <li class="bblock" style="display: none;">
          <div class="logintitle">商户注册</div>
          <div class="loginul">
            <ul>
              <li><a href="javascript:" class="activers">手机验证提交资料</a></li>
              <li><a href="javascript:">认证信息，上传图片</a></li>
            </ul>
          </div>
          <div class="enroll_li">
            <ul>
              <li style="display: block">
                <table width="0" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                  <tr>
                    <td><em>*</em>
                      <p>手机号码</p></td>
                    <td>
                      <input name="phonenumber" autocomplete="off" type="text" style="color:#999" value=""
                             placeholder="请输入手机号码"/>
                      <span style="display:none;"><i>!</i><p>该手机号已注册</p></span>
                    </td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>账户密码</p></td>
                    <td>
                      <input name="password" autocomplete="off" type="text" style="color:#999" value=""
                             placeholder="请输入密码"/>
                      <span style="display:none;"><i>!</i><p>该密码错误</p></span>
                    </td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>手机验证码</p></td>
                    <td>
                      <input name="passwords" class="samllinput" autocomplete="off" type="text" style="color:#999"
                             value="" placeholder="请输入验证码">
                      <span style="display:none;"><i>!</i><p>该验证码错误</p></span>
                      <input class="samllinputs" autocomplete="off" type="button" value="获取验证码">
                    </td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>验证码</p></td>
                    <td>
                      <input name="" class="samllinputa" autocomplete="off" type="text" style="color:#999" value=""
                             placeholder="请输入验证码">
                      <span style="display:none;"><i>!</i><p>该验证码错误</p></span>
                      <div class="samllinputas"><img src="../../assets/images/01.jpg" height="42" width="91"/></div>
                      <span class="loginspan">看不清，换一张</span>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <h3>
                  <input type="checkbox" checked="checked" id="checkbox_a0" class="chk_1">
                  <label for="checkbox_a0"></label>
                  我同意并准守
                  <span class="yingshen">
                    <a href="javascript:" style="color: #ff7300">《英沈商城用户协议》</a>
                  </span>
                </h3>
                <input type="button" value="保存并下一步" class="register_nav2 nextbtn" @click="holdData"/>
              </li>
              <li style="display: none">
                <table width="0" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                  <tr>
                    <td>
                      <em>*</em>
                      <p>身份证号</p>
                    </td>
                    <td>
                      <input name="phonenumber" autocomplete="off" type="text" style="color:#999" value=""
                             placeholder="请输入18位身份证号码"/>
                      <span style="display:none;"><i>!</i><p></p></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <em>*</em>
                      <p>上传身份证照片</p>
                    </td>
                    <td style="position: relative">
                      <div id="identifyCardImageFrontUrl">
                        <span>上传正面照</span>
                        <img src="" style="display: none"/>
                        <input type="file" class=""/>
                      </div>
                      <div id="identifyCardImageBackUrl">
                        <span>上传反面照</span>
                        <img src="" style="display: none"/>
                        <input type="file" class=""/>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <em>*</em>
                      <p>营业执照号</p>
                    </td>
                    <td id="businessLicenceNumber">
                      <input name="" autocomplete="off" type="text" style="color:#999" value="" placeholder="请输入营业执照号码">
                      <span style="display:none;"><i>!</i><p></p></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <em>*</em>
                      <p>上传营业执照照片</p>
                    </td>
                    <td style="position: relative" id="businessLicenceImageUrl">
                      <img src="" style="display: none"/>
                      <input type="file" class=""/>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <h3>
                  <input type="checkbox" checked="checked" id="checkbox_a0" class="chk_1">
                  <label for="checkbox_a0"></label>
                  我同意并准守
                  <span class="yingshen">
                    <a href="javascript:" style="color: #ff7300">《英沈商城用户协议》</a>
                  </span>
                </h3>
                <input type="button" value="立即注册" class="register_nav2" @click="registSeller"
                       @keydown.13="registSeller"/>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <!--中间内容 over-->
    <div class="yingshentanchu">
      <div class="tanchubg"></div>
    </div>
    <!--图片弹出开始-->
    <div class="bgs"></div>
    <div class="popup">
      <div class="popup_title">英沈汽配商城用户注册协议</div>
      <div class="cha"><a href="javascript:"></a></div>
      <div id="scroll" class="scroll_p">
        <p>尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。
          尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。</p>
        <p>尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。
          尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。</p>
        <p>尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。
          尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。</p>
        <p>尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。
          尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。</p>
        <p>尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。
          尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。</p>
        <p>尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。
          尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。</p>
        <p>尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。
          尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。</p>
        <p>尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。
          尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。</p>
        <p>尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。
          尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。</p>
        <p>尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。
          尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。</p>
        <p>尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。
          尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。</p>
        <p>尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。
          尊敬的用户，欢迎访问英沈汽配商城！ 在注册成为英沈汽配商城会员前，请您认真阅读本用户注册协议（以下简称“本协议”），以确保您
          已完整阅读、充分理解及自愿遵守本协议中的各项条款、责任和义务。</p>
      </div>
      <div class="popup_btn"><input type="button" value="同意并返回" class="return"/></div>
      <div class="clear"></div>
    </div>
    <!--图片弹出结束-->
  </div>
</template>

<script>
  export default {
    name: "Enroll",
    data() {
      return {
        userName: '',
        password: '',
        msgCode: '',
        code: '',
        lincese: '',
        idCard0: '',
        idCard1: '',
      }
    },
    methods: {
      enroll: function () {
        let _this = this;
        this.$('.loginbtn li').click(function () {
          _this.$('.loginbtn li').children("a").removeClass("activer");
          _this.$(this).children("a").addClass("activer");
          var index = _this.$(this).index();
          _this.$(".loginbox>ul>li").hide().eq(index).show();
        });
      },
      registUser: function () {
        let inputs = $('#userRegistry input');
        let values = [];
        let param = new URLSearchParams;
        let _this = this;
        for (let i = 0; i < inputs.length; i++) {
          if ($(inputs[i]).attr('type') !== 'button') {
            let length = values.length + 1;
            for (let j = 0; j < length; j++) {
              if (!values[j]) {
                values[j] = $(inputs[i]).val();
              }
            }
          }
        }
        param.append("userName", values[0]);
        param.append("password", values[1]);
        param.append("validateCode", values[2]);
        param.append("type", 1);
        this.$axios({
          url: _this.HOME + '/user/registryUser',
          method: 'post',
          data: param
        }).then(res => {
          if (Math.ceil(res.data.code) === 200) {

          }
          alert(res.data.message)
        }).catch(e => {
          console.log(e)
        })
      },
      registSeller: function (e) {
        if (this.userName && this.password && this.msgCode && this.code) {
          let _this = this;
          let param = new URLSearchParams();
          param.append("type", 0);
          param.append("validateCode", this.msgCode);
          param.append("password", this.password);
          param.append("userName", this.userName);
          let table = $(e.target).parent().children("table");
          let trs = $(table).children().children();
          let values = [];
          for (let i = 0; i < trs.length; i++) {
            values[i] = $(trs[i]).children().eq(1).children('input').eq(0).val();
          }
          this.$axios({
            url: _this.HOME + '/user/registryUser',
            method: 'POST',
            data: param
          }).then(res => {
            if (Math.ceil(res.data.code) === 200) {
              let data = new URLSearchParams();
              data.append("identifyCardImageFrontUrl", $('#identifyCardImageFrontUrl').attr('src'));
              data.append("identifyCardImageBackUrl", $('#identifyCardImageBackUrl').attr('src'));
              data.append("businessLicenceNumber", $('#businessLicenceNumber').children('input').val());
              data.append("businessLicenceImageUrl", $('#businessLicenceImageUrl').attr('src'));
              data.append("userCode", res.data.data);
              _this.$axios({
                url: _this.HOME + '/user/registrySeller',
                method: 'post',
                data: data
              }).then(res => {
                alert(res.data.message)
              }).catch(e => {
                console.log(e)
              })
            }
          }).catch(e => {
            console.log(e)
          })
        } else {
          if (!confirm("上一步信息为空")) {
            for (let i = 0; i < 10; i++) {
              if (confirm("快回去填信息")) {
                let parent = $(e.target).parent().parent().children();
                let loginulLi = $('.loginul li');
                $(parent).eq(1).css('display', 'none');
                loginulLi.eq(1).children('a').addClass("activers");
                $(parent).eq(0).css('display', 'block');
                loginulLi.eq(0).children('a').removeClass("activers");
                break;
              }
            }
          } else {
            let parent = $(e.target).parent().parent().children();
            let loginulLi = $('.loginul li');
            $(parent).eq(1).css('display', 'none');
            loginulLi.eq(1).children('a').addClass("activers");
            $(parent).eq(0).css('display', 'block');
            loginulLi.eq(0).children('a').removeClass("activers");
          }
        }
      },
      holdData: function (e) {
        let table = $(e.target).parent().children("table");
        let trs = $(table).children().children();
        let values = [];
        for (let i = 0; i < trs.length; i++) {
          values[i] = $(trs[i]).children().eq(1).children('input').eq(0).val();
        }

        this.userName = values[0];
        this.password = values[1];
        this.msgCode = values[2];
        this.code = values[3];
        let parent = $(e.target).parent();
        let loginulLi = $('.loginul li');
        $(parent).css('display', 'none');
        loginulLi.eq(0).children('a').removeClass("activers");
        $(parent).next().css('display', 'block');
        loginulLi.eq(1).children('a').addClass("activers");
      },
      uploadImg: function (event, data, previewId, index) {
        console.log(event);
        console.log(data);
        console.log(previewId);
        console.log(index);
      },
      registNIM: function () {

      }
    },
    mounted: function () {
      let _this = this;
      this.enroll();
      this.$('input[type="file"]').fileinput({
        language: 'zh',
        uploadUrl: _this.HOME + "/user/upload",
        showCancel: false,
        showBrowse: false,
        showPreview: true,
        showCaption: false,
        browseOnZoneClick: true,
        dropZoneTitleClass: 'drop_zone_title',
        fileActionSettings: {
          showUpload: false,
          showDownload: false,
          showRemove: false,
          showZoom: false,
          showDrag: false,
        },
        previewZoomButtonIcons: {
          prev: '<i class="glyphicon glyphicon-triangle-left"></i>',
          next: '<i class="glyphicon glyphicon-triangle-right"></i>',
          toggleheader: '<i class="glyphicon glyphicon-resize-vertical"></i>',
          fullscreen: '<i class="glyphicon glyphicon-fullscreen"></i>',
          borderless: '<i class="glyphicon glyphicon-resize-full"></i>',
          close: '<i class="glyphicon glyphicon-remove"></i>'
        },
      }).on("fileuploaded", function (event, data, previewId, index) {
        let successData = data.response.data;
        let elementId = event.currentTarget.id;
        let imgElements = $('#' + elementId).parent().parent().children('img');
        $(imgElements).attr("src", successData);
      })
    }
  }
</script>

<style scoped>

</style>

