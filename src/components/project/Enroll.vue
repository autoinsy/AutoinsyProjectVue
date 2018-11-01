<template>
  <div class="all">
    <div class="newlogo">
      <img src="../../assets/picture/newlogo.png" height="64" width="270"/>
      <div class="logindiv" >
        <img src="../../assets/images/kefu01.png" height="18" width="18"/>
        <p>客服热线<span>024-31040888</span></p>
      </div>
    </div>

    <!--导航 over-->
    <div class="loginsize">
      已有账号， <router-link to='/login'>立即登录</router-link>
    </div>
    <!---->
    <div class="loginbtn">
      <ul>
        <li><a href="javascript:" class="activer">个人注册</a> </li>
        <li><a href="javascript:" >商家注册</a></li>
      </ul>
    </div>
    <div class="loginbox">
      <ul>
        <li class="ablock" style="display: block;">
          <div class="logintitle">个人注册</div>
          <table width="0" border="0" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
              <td><em>*</em><p>手机号码</p></td>
              <td>
                <input name="phonenumber" autocomplete="off" type="text" style="color:#999" value="" placeholder="请输入手机号码"/>
                <span style="display:none;"><i>!</i><p>该手机号已注册</p></span>
              </td>
            </tr>
            <tr>
              <td><em>*</em><p>账户密码</p></td>
              <td>
                <input name="password" autocomplete="off" type="text" style="color:#999" value="" placeholder="请输入密码" />
                <span style="display:none;"><i>!</i><p>该密码错误</p></span>
              </td>
            </tr>
            <tr>
              <td><em>*</em><p>手机验证码</p></td>
              <td>
                <input name="passwords" class="samllinput" autocomplete="off" type="text" style="color:#999" value="" placeholder="请输入验证码">
                <span style="display:none;"><i>!</i><p>该验证码错误</p></span>
                <input  class="samllinputs" autocomplete="off" type="button" value="获取验证码">
              </td>
            </tr>
            <tr>
              <td><em>*</em><p>验证码</p></td>
              <td>
                <input name="" class="samllinputa" autocomplete="off" type="text" style="color:#999" value="" placeholder="请输入验证码">
                <span style="display:none;"><i>!</i><p>该验证码错误</p></span>
                <div  class="samllinputas" ><img src="../../assets/images/01.jpg" height="42" width="91"/></div>
                <span class="loginspan">看不清，换一张</span>
              </td>
            </tr>
            </tbody>
          </table>
          <h3>
            <input type="checkbox" checked="checked" id="checkbox_a0" class="chk_1">
            <label for="checkbox_a0"></label>我同意并准守<span class="yingshen"><a href="javascript:" style="color: #ff7300">《英沈商城用户协议》</a></span>
          </h3>
          <input type="submit" value="立即注册" class="register_nav2"/>
        </li>
        <li style="display: none;" class="bblock">
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
                    <td><em>*</em><p>手机号码</p></td>
                    <td>
                      <input name="phonenumber" autocomplete="off" type="text" style="color:#999" value="" placeholder="请输入手机号码"/>
                      <span style="display:none;"><i>!</i><p>该手机号已注册</p></span>
                    </td>
                  </tr>
                  <tr>
                    <td><em>*</em><p>账户密码</p></td>
                    <td>
                      <input name="password" autocomplete="off" type="text" style="color:#999" value="" placeholder="请输入密码" />
                      <span style="display:none;"><i>!</i><p>该密码错误</p></span>
                    </td>
                  </tr>
                  <tr>
                    <td><em>*</em><p>手机验证码</p></td>
                    <td>
                      <input name="passwords" class="samllinput" autocomplete="off" type="text" style="color:#999" value="" placeholder="请输入验证码">
                      <span style="display:none;"><i>!</i><p>该验证码错误</p></span>
                      <input  class="samllinputs" autocomplete="off" type="button" value="获取验证码">
                    </td>
                  </tr>
                  <tr>
                    <td><em>*</em><p>验证码</p></td>
                    <td>
                      <input name="" class="samllinputa" autocomplete="off" type="text" style="color:#999" value="" placeholder="请输入验证码">
                      <span style="display:none;"><i>!</i><p>该验证码错误</p></span>
                      <div  class="samllinputas" ><img src="../../assets/images/01.jpg" height="42" width="91"/></div>
                      <span class="loginspan">看不清，换一张</span>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <h3>
                  <input type="checkbox" checked="checked" id="checkbox_a0" class="chk_1">
                  <label for="checkbox_a0"></label>我同意并准守<span class="yingshen"><a href="javascript:" style="color: #ff7300">《英沈商城用户协议》</a></span>
                </h3>
                <input type="submit" value="保存并下一步" class="register_nav2 nextbtn"/>
              </li>
              <li style="display: none">
                <table width="0" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                  <tr>
                    <td><em>*</em><p>身份证号</p></td>
                    <td>
                      <input name="phonenumber" autocomplete="off" type="text" style="color:#999" value="" placeholder="请输入18位身份证号码"/>
                      <span style="display:none;"><i>!</i><p></p></span>
                    </td>
                  </tr>
                  <tr>
                    <td><em>*</em><p>上传身份证照片</p></td>
                    <td style="position: relative">
                      <input name="" autocomplete="off" type="text" style="color:#999" class="table_style" value="" placeholder="点击上传身份证正面照片" />
                      <input type="file" class="table_styles"/>
                      <input name="" autocomplete="off" type="text" style="color:#999" class="table_style" value="" placeholder="点击上传身份证反面照片" />
                      <input type="file" class="table_stylesd"/>
                    </td>
                  </tr>
                  <tr>
                    <td><em>*</em><p>营业执照号</p></td>
                    <td>
                      <input name="" autocomplete="off" type="text" style="color:#999" value="" placeholder="请输入营业执照号码">
                      <span style="display:none;"><i>!</i><p></p></span>
                    </td>
                  </tr>
                  <tr>
                    <td><em>*</em><p>上传营业执照照片</p></td>
                    <td style="position: relative">
                      <input name="" autocomplete="off" type="text" style="color:#999" class="table_style" value="" placeholder="点击上传营业执正面照片" />
                      <input type="file" class="table_styles"/>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <h3>
                  <input type="checkbox" checked="checked" id="checkbox_a0" class="chk_1">
                  <label for="checkbox_a0"></label>我同意并准守<span class="yingshen"><a href="javascript:" style="color: #ff7300">《英沈商城用户协议》</a></span>
                </h3>
                <input type="submit" value="立即注册" class="register_nav2"/>
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
      <div class="popup_btn"><input type="button" value="同意并返回" class="return"/> </div>
      <div class="clear"></div>
    </div>
    <!--图片弹出结束-->
  </div>
</template>

<script>
    export default {
        name: "Enroll"
    }
</script>

<style scoped>

</style>
