<template>
  <div class="">
    <div class="allsize">
      全部结果 > 订单详情
    </div>
    <!---->
    <div class="centermy">
      <div class="order_box">
        <p class="order_p">选择收货地址</p>
        <div class="order_li">
          <ul>
            <li class="active">
              <div class="order_li_p">辽宁省沈阳市于洪区</div>
              <p>详细地址到门牌号详细地址到门牌号详细地址到门牌号详细地址到门牌号详细地址到门牌号详细地址到门牌号</p>
            </li>
            <li>
              <div class="order_li_p"></div>
              <p></p>
            </li>
            <li>
              <div class="order_li_p"></div>
              <p></p>
            </li>
            <li class="order_li_more">
              <div class="order_li_p"></div>
              <p></p>
            </li>
          </ul>
        </div>
        <div class="clear"></div>
        <input type="button" value="使用新地址" class="order_input"/>
        <p class="order_p">确认订单信息</p>
        <div class="order_tab">
          <table>
            <thead>
            <tr>
              <td class="or1">店铺宝贝</td>
              <td class="or2">商品属性</td>
              <td class="or3">单价</td>
              <td class="or4">数量</td>
              <td class="or5">快递</td>
              <td class="or6">小计</td>
            </tr>
            </thead>
            <tbody>
            <tr><td colspan="6"><p style="line-height: 40px;font-size: 16px; border-bottom: 1px dashed #7eb3ff;">店铺的名字</p></td></tr>
            <tr>
              <td class="or1">
                <div class="div_or1">
                  <img src="../../assets/images/02.jpg" width="51" height="51"/>
                  <p>这块是店铺的名字</p>
                  <p>这块是简介描述哦这块是简介描述哦</p>
                </div>
              </td>
              <td class="or2">雨刮器</td>
              <td class="or3">378.00</td>
              <td class="or4">1</td>
              <td class="or5">包邮</td>
              <td class="or6">378.00</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="order_line">
          <table class="line_table" >
            <tbody>
            <tr>
              <td rowspan="3" valign="top">
                给卖家留言：<input type="text" class="order_line_input" placeholder="选填：填写内容已经和卖家协商"/>
              </td>
              <td>运费险：0</td>
            </tr>
            <tr>
              <td>配送方式：普通快递</td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td colspan="2" style="border-bottom: none; text-align: right">店铺合计（含运费）：<span>￥399.9</span></td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="order_click">
          <label class="demo_label">
            <input class="demo_radio" type="radio" name="demo-radio">
            <span class="demo_radioInput"></span>找人代付
          </label>
          <label class="demo-_label">
            <input class="demo_radio" type="radio" name="demo-radio">
            <span class="demo_radioInput"></span>匿名购买
          </label>
        </div>
        <div class="order_send">
          <router-link to='/car'>返回购物车</router-link>
          <input type="button" value="提交支付" class="order_send_btn"/>
        </div>
      </div>
    </div>
    <!--中间内容 over-->
  </div>
</template>

<script>
    export default {
        name: "OrderDetails"
    }
</script>

<style scoped>

</style>
