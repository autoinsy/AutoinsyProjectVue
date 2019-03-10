<template>
  <div class="">
    <div class="allsize">
      全部结果 > 产品详情
    </div>
    <!---->
    <div class="centermy">
      <div class="bg">
        <!--<div class="bg_left">-->
          <!--&lt;!&ndash;<div class="show">&ndash;&gt;-->
            <!--&lt;!&ndash;<img src="../../assets/picture/img1.png" alt="">&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="mask"></div>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="smallshow">&ndash;&gt;-->
            <!--&lt;!&ndash;<p class="prev prevnone"></p>&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="middle_box">&ndash;&gt;-->
              <!--&lt;!&ndash;<ul class="middle">&ndash;&gt;-->
                <!--&lt;!&ndash;<li><img src="../../assets/picture/img1.png" alt=""></li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li><img src="../../assets/picture/img2.png" alt=""></li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li><img src="../../assets/picture/img3.png" alt=""></li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li><img src="../../assets/picture/img4.png" alt=""></li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li><img src="../../assets/picture/img5.png" alt=""></li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li><img src="../../assets/picture/img6.png" alt=""></li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li><img src="../../assets/picture/img7.png" alt=""></li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li><img src="../../assets/picture/img8.png" alt=""></li>&ndash;&gt;-->
              <!--&lt;!&ndash;</ul>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;<p class="next "></p>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--</div>-->
        <!--<div class="bg_right">-->
          <!--<div class="bigshow">-->
            <!--<div class="bigitem">-->
              <!--<img src="../../assets/picture/img1.png" alt="">-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--lb-->
        <div class="left project_box">
          <div class="project_title">
            <p>{{goodInfo.name}}</p>
            <p><span>{{goodInfo.publishTime}}</span></p>
          </div>
          <div id="wrap">
            <div id="top">
              <p id='model'>
                <font>型号</font>
                <span>4.7英寸</span>
                <span>5.5英寸</span>
              </p>
              <p id='color'>
                <font>颜色</font>
                <span>银色</span>
                <span>金色</span>
                <span>深空灰色</span>
              </p>
              <p id='rom'>
                <font>内存</font>
                <span>16GB</span>
                <span>64GB</span>
                <span>128GB</span>
              </p>
              <p id='banben'>
                <font>版本</font>
                <span>公开版</span>
                <span>移动赠费版</span>
                <span>联通合约版</span>
              </p>
            </div>
            <div id="bottom">
              <p>价格： <font>￥ <span id='price'>{{goodInfo.price}}</span></font>
              </p>
              <button @click="routerToOrder">立即购买</button>
            </div>
          </div>
        </div>
        <div class="right pro_list">
          <div class="pro_list_title">这里是店铺的名字</div>
          <div class="pro_li">
            <ul>
              <li><span>描述相符</span><span>{{goodInfo.describeScore}}</span><span>↑</span><span>持平</span></li>
              <li><span>发货速度</span><span>{{goodInfo.deliverySpeedScore}}</span><span>↑</span><span>持平</span></li>
              <li><span>服务态度</span><span>{{goodInfo.serviceMannerScore}}</span><span>↑</span><span>持平</span></li>
            </ul>
            <div class="clear"></div>
          </div>
          <div class="pro_p">
            <ul>
              <li>公司名称：XXXXXX有限公司</li>
              <li>所在地：铁西区</li>
              <li>联系电话：15012365412</li>
            </ul>
            <div class="clear"></div>
          </div>
          <div class="pro_btn">
            <router-link to='/SHindex'><input type="button" value="进入店铺"/></router-link>
            <input type="button" value="关注店铺">
          </div>
          <div class="pro_btn">
            <a href="javascript:"><img src="../../assets/images/4.png"/></a>
            <a href="javascript:"><img src="../../assets/images/5.png"/></a>
            <a href="javascript:"><img src="../../assets/images/6.png"/></a>
          </div>
        </div>

      </div>
      <div class="clear mb30"></div>
      <!--top over-->
      <div class="left served_left_box">
        <div class="served_left_box_title">
          <ul>
            <li><a href="" class="title_color_li"> 商品介绍</a></li>
            <li><a href="javascript:"> 规格与包装</a></li>
            <li><a href="javascript:"> 售后保障</a></li>
            <li><a href="javascript:"> 商品评价</a></li>
            <li><a href="javascript:"> 本店好评商品</a></li>
          </ul>
          <div class="served_r">
            <input @click="addToShoppingCart" class="btn btn-link" type="button" value="加入购物车"/>
          </div>
          <div class="clear"></div>
        </div>
        <div class="served_top_box">
          <p>品牌:{{goodInfo.brand}}</p>
          <ul>
            <li>商品名称：{{goodInfo.name}}</li>
            <li>商品编号：{{goodInfo.goodsCode}}</li>
            <li>店铺：这里是店铺的名字</li>
            <li>产品毛重：2.0KG</li>
            <li>产品产地：中国大陆</li>
            <li>类别：{{goodInfo.mainType}} {{goodInfo.subType}}</li>
          </ul>
          <div class="clear"></div>
        </div>
        <div class="served_p">
          <p>
            {{goodInfo.describe}}
          </p>
          <img v-bind:src="goodInfo.goodsPic" width="790"/>
        </div>
      </div>
      <div class="right served_right_box">
        <div class="served_right_box_title">热门销售</div>
        <ul>
          <li>
            <img src="../../assets/images/03.jpg" width="178" height=""/>
            <p>这里是标题这里是标题这里是标题</p>
            <p>￥39.6</p>
          </li>
          <li>
            <img src="../../assets/images/03.jpg" width="178" height=""/>
            <p>这里是标题这里是标题这里是标题</p>
            <p>￥39.6</p>
          </li>
          <li>
            <img src="../../assets/images/03.jpg" width="178" height=""/>
            <p>这里是标题这里是标题这里是标题</p>
            <p>￥39.6</p>
          </li>
          <li>
            <img src="../../assets/images/03.jpg" width="178" height=""/>
            <p>这里是标题这里是标题这里是标题</p>
            <p>￥39.6</p>
          </li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
    <!--中间内容 over-->
  </div>
</template>

<script>
  export default {
    name: "ProjectDetails",
    data() {
      return {
        goodsId: this.$route.query.goodsId,
        goodInfo: '',
      }
    },
    watch: {},
    mounted: function () {
      let _this = this;
      this.$axios({
        url: _this.HOME + '/goods/getGoodsInfo?goods_Id=' + this.goodsId,
        method: 'post'
      }).then(res => {
        _this.goodInfo = res.data.data;
      })
    },
    methods: {
      addToShoppingCart: function () {
        let userCode = sessionStorage.getItem("userCode");
        let _this = this;
        if (userCode) {
          this.$axios({
            url: _this.HOME + '/cart/add',
            method: 'post',
            data: _this.qs.stringify({
              "userCode": userCode,
              "goodCode": _this.goodInfo.goodsCode,
              "purchaseQuantity": 1,
            })
          }).then(res => {
            alert(res.data.message);
          })
        } else {
          alert("您还没有登录，请登录后再加入购物车。")
        }
      },
      routerToOrder() {
        let userCode = sessionStorage.getItem("userCode");
        if (userCode) {
          this.$router.push({path: '/OrderDetails', query: {project: this.goodInfo}});
        }
      }
    }
  }
</script>

<style scoped>

</style>
