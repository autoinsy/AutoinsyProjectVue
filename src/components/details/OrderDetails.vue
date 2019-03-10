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
            <tr>
              <td colspan="6"><p style="line-height: 40px;font-size: 16px; border-bottom: 1px dashed #7eb3ff;">
                {{project.sellerName}}</p>
              </td>
            </tr>
            <tr>
              <td class="or1">
                <div class="div_or1">
                  <img :src="project.goodsPic" width="51" height="51"/>
                  <p>{{project.sellerName}}</p>
                  <p>{{project.describe}}</p>
                </div>
              </td>
              <td class="or2">{{project.name}}</td>
              <td class="or3">{{project.price}}</td>
              <td class="or4">
                <button @click="updatenum">-</button>
                <input style="width: 25px;" v-bind:value="quantity"/>
                <button @click="updatenum">+</button>
              </td>
              <td class="or5">包邮</td>
              <td class="or6">{{project.price * quantity}}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="order_line">
          <table class="line_table">
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
              <td colspan="2" style="border-bottom: none; text-align: right">店铺合计（含运费）：<span>￥{{count}}</span></td>
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
          <input type="button" value="提交支付" class="order_send_btn" @click="orderToPay"/>
        </div>
      </div>
    </div>
    <!--中间内容 over-->
  </div>
</template>

<script>
  export default {
    name: "OrderDetails",
    data() {
      return {
        project: {},
        quantity: 1,
        count: 0
      }
    },
    watch: {
      quantity() {
        if (this.quantity <= 0) {
          alert("商品数量不能为0");
          this.quantity = 1;
        }
      }
    },
    mounted() {
      this.project = this.$route.query.project;
      this.count = (this.project.price * this.quantity) + 15;
    },
    methods: {
      listAddress() {
        let _this = this;

      },
      orderToPay() {
        this.$router.push({path: '/Pay', query: {'count': this.count, 'sellerName': this.project.sellerName}});
      },
      updatenum(e) {
        if (this.quantity > 0) {
          if ($(e.target).index() === 2) {
            this.quantity++;
          } else if ($(e.target).index() === 0) {
            this.quantity--;
          }
        } else {
           alert("商品数量不能为0")
        }
      }
    }
  }
</script>

<style scoped>

</style>
