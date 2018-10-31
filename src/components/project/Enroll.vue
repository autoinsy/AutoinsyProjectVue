<template>
  <div class="all">
    <div id="jd-denglu">
      <div class="dingbu">
        <ul class="yfd">
          <li><a href="login.html">你好,请登录</a></li>
          <li><a href="enroll.html">免费注册</a></li>
          <li style="color:#ccc;">|</li>
          <li><a href="">我的订单</a></li>
          <li style="color:#ccc;">|</li>
          <li id="kkk"><a href="center.html">个人中心</a>
            <div id="wdjd">
              <em></em>
              <div class="diyi">
                <div class="wd"><img src="picture/16.jpg"></div>
                <div class="jd"><span><a href="###">你好,请登录</a></span> <span><a href="###">消息</a></span>
                </div>
              </div>
              <div class="dier">
                <div class="wen">
                  <span><a href="###">待处理订单</a></span>
                  <span><a href="###">咨询回复</a></span>
                  <span><a href="###">返修退换货</a></span>
                </div>
                <div class="zi">
                  <span><a href="###">我的关注</a></span>
                  <span><a href="###">我的收藏</a></span>
                </div>
              </div>
            </div>
          </li>
          <li style="color:#ccc;">|</li>
          <li id="iii"><img style="width:10px;height:14px; margin: 5px 5px 0 0;" src="picture/3.png"><a
            href="">手机电商</a>
            <div id="sjjd"><img src="picture/30.png"> <em></em></div>
          </li>
          <li style="color:#ccc;">|</li>
          <li id="ppp"><a href="">关注电商&nbsp;</a>
            <div id="gzjd"><img src="picture/32.jpg"> <em></em></div>
          </li>
        </ul>
      </div>
    </div>
    <!--top over-->
    <div class="newlogo">
      <img src="../../assets/picture/newlogo.png" height="64" width="270"/>
      <div class="logindiv" >
        <img src="../../assets/images/kefu01.png" height="18" width="18"/>
        <p>客服热线<span>024-31040888</span></p>
      </div>
    </div>

    <!--导航 over-->
    <div class="loginsize">
      已有账号， <a href="login.html">立即登录</a>
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
    <div id="cfoo6">
      <div class="mod_service">
        <div class="grid_c1 mod_service_inner">
          <ul class="mod_service_list">
            <li class="mod_service_item">
              <div class="mod_service_unit"><h5 class="mod_service_tit mod_service_duo">多</h5>
                <p class="mod_service_txt">品类齐全，轻松购物</p></div>
            </li>
            <li class="mod_service_item">
              <div class="mod_service_unit"><h5 class="mod_service_tit mod_service_kuai">快</h5>
                <p class="mod_service_txt">多仓直发，极速配送</p></div>
            </li>
            <li class="mod_service_item">
              <div class="mod_service_unit"><h5 class="mod_service_tit mod_service_hao">好</h5>
                <p class="mod_service_txt">正品行货，精致服务</p></div>
            </li>
            <li class="mod_service_item">
              <div class="mod_service_unit"><h5 class="mod_service_tit mod_service_sheng">省</h5>
                <p class="mod_service_txt">天天低价，畅选无忧</p></div>
            </li>
          </ul>
        </div>
      </div>
      <div id="w">
        <dl class="xx1">
          <dt>购物指南</dt>
          <dd>
            <div><a>购物流程</a></div>
            <div><a>会员介绍</a></div>
            <div><a>生活旅行/团购</a></div>
            <div><a>常见问题</a></div>
            <div><a>大家电</a></div>
            <div><a>联系客服</a></div>
          </dd>
        </dl>
        <dl class="xx2">
          <dt>配送方式</dt>
          <dd>
            <div><a>上门自提</a></div>
            <div><a>211限时达</a></div>
            <div><a>配送服务查询</a></div>
            <div><a>配送费收取标准</a></div>
            <div><a>海外配送</a></div>
          </dd>
        </dl>
        <dl class="xx1">
          <dt>支付方式</dt>
          <dd>
            <div><a>货到付款</a></div>
            <div><a>在线支付</a></div>
            <div><a>分期付款</a></div>
            <div><a>邮局汇款</a></div>
            <div><a>公司转账</a></div>
          </dd>
        </dl>
        <dl class="xx1">
          <dt>售后服务</dt>
          <dd>
            <div><a>售后政策</a></div>
            <div><a>价格保护</a></div>
            <div><a>退款说明</a></div>
            <div><a>返修/退换货</a></div>
            <div><a>取消订单</a></div>
          </dd>
        </dl>
        <dl class="xx1">
          <dt>特色服务</dt>
          <dd>
            <div><a>夺宝岛</a></div>
            <div><a>DIY装机</a></div>
            <div><a>延保服务</a></div>
            <div><a>电商E卡</a></div>
            <div><a>电商通信</a></div>
          </dd>
        </dl>
        <div id="coverage">
          <div class="dt"> 电商自营覆盖区县</div>
          <div class="dd">
            <p> 电商已向全国2050个区县提供自营配送服务，支持货到付款、POS机刷卡和售后上门服务。 </p>
            <p class="ar"><a>查看详情 >&nbsp;</a></p>
          </div>
        </div>
      </div>
      <div id="guding">
        <div id="ggg"><i class=""></i> <em class="">购物车</em></div>
        <div id="ggg1"><i class=""></i> <em class="">我的关注</em></div>
        <div id="ggg2"><i class=""></i> <em class="">我的足迹</em></div>
        <div id="ggg3"><i class=""></i> <em class="">客服JIMI</em></div>
        <div id="ggg4"><i class="sad"></i></div>
        <div id="ggg5"><i class=""></i></div>
      </div>
    </div>
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
