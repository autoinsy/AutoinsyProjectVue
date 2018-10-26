<template>
  <div class="">
    <div class="allsize">
      全部结果 > 支付详情
    </div>
    <!---->
    <div class="centermy">
      <div class="pay_top">
        <ul>
          <li><img src="images/20.jpg"/></li>
          <li>我的收银台</li>
        </ul>
        <div class="pay_top_p">
          <ul>
            <li>支付宝账户：1234567892</li>
            <li>唯一热线：024-31040888</li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>
      <div class="pay_box">
        <div class="pay_box_t">
          <ul>
            <li><img src="images/21.jpg"/></li>
            <li>
              <p>这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字</p>
              <p>卖家昵称：骆驼祥子</p>
            </li>
            <li><span style="color: #ff7300; font-size: 24px;">￥39.6</span></li>
          </ul>
          <div class="clear"></div>
          <div class="pay_b">
            <ul>
              <li class="active">
                <label class="demo_label">
                  <input class="demo_radio" type="radio" name="demo-radio">
                  <span class="demo_radioInput"></span>支付宝
                </label>
              </li>
              <li>
                <label class="demo-_label">
                  <input class="demo_radio" type="radio" name="demo-radio">
                  <span class="demo_radioInput"></span>银行卡
                </label>
              </li>
            </ul>
            <div class="clear"></div>
            <div class="pay_b_btn">
              <input type="button" value="其他付款方式"/>
            </div>
            <div class="pay_mima">
              支付密码：<input type="text" />
              <a href="">忘记密码？</a>
            </div>
            <div class="pay_btn">
              <input type="button" value="确认付款"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--中间内容 over-->
  </div>
</template>

<script>
    export default {
        name: "Pay"
    }
</script>

<style scoped>

</style>
