<template>
  <div class="">
    <div class="allsize">
      全部结果 > 内饰列表
    </div>
    <!---->
    <div class="centermy">
      <div class="serve_box">
        <div class="serve_box_top">
          <p>找到<span>内饰商品</span>相关信息共<span>{{all}}</span>条：</p>
        </div>
        <div class="sousuo">
          <dl class="selectbarTree clearfix">
            <dt><a href="javascript:">品牌：</a></dt>
            <dd class="clearfix">
              <ul class="s_ul row">
                <li v-for="(brand, index) in brandList" v-if="index < 10" class="col-2">
                  <a href="javascript:">
                    <img :src="brand.brandLogo" style="width: 10%; height: 10%">
                    <i>{{brand.brandName}}</i>
                  </a>
                </li>
                <li v-else style='display:none' class="col-2">
                  <a href="javascript:">
                    <img :src="brand.brandLogo" style="width: 10%; height: 10%">
                    <i>{{brand.brandName}}</i>
                  </a>
                </li>
              </ul>
              <span name='cateswitch' class="moreBtn b1" @click="showMore">展开</span>
            </dd>
          </dl>
        </div>
        <ul>
          <li v-for="ornament in ornamentList">
            <router-link :to="{path:'/ornamentDetail', query: {id: ornament.ornamentId}}">
              <img :src="ornament.ornamentImagesSet[0].ornamentImages">
              <p>
                  <span style="color: #ff7300;">
                  ￥<span style="font-size: 24px">{{ornament.price}}</span>
                  </span>
              </p>
              <p>{{ornament.ornamentName}}</p>
              <p>
                <span style="color: #ff7300;">0</span> 条评价
              </p>
              <p>店铺的名字</p>
              <p>
                <img src="../../assets/images/22.jpg"/>
              </p>
            </router-link>
            <div class="proul">
              <ul>
                <li>
                  <a href="javascript:"> 对比</a>
                </li>
                <li>
                  <a href="javascript:"> 关注</a>
                </li>
                <li v-bind:value="good.goodsCode">
                  <button class="btn-link" @click="addToShoppingCart">
                    <img src="../../assets/images/7.png" style="margin-right: 10px"/>
                    加入购物车
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div class="clear"></div>
        <div class="tcdPageCode"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Ornament",
    data() {
      return {
        ornamentList: [],
        brandList: [],
        cur: 0,
        size: 10,
        all: '',
        allElement: '',
      }
    },
    mounted: function () {
      let _this = this;
      this.$axios({
        url: _this.HOME + '/brand/all',
        method: 'POST'
      }).then(res => {
        _this.brandList = res.data.data;
      });
      this.$axios({
        url: _this.HOME + '/ornament/list?page=' + _this.cur + '&size=' + _this.size
      }).then(res => {
        _this.ornamentList = res.data.data.content;
        _this.all = res.data.totalPages;
        _this.allElement = res.data.data.totalElements;
      });
    },
    methods: {
      showMore: function (e) {
        let displayLi = $(e.target).parent().children('ul');
        if ($(displayLi).children('li[style="display: none"]').length() > 0) {
          $(displayLi).children('li[style="display: none"]').attr('style', '');
          $(e.target).text('收起')
        } else {
          let li = $(displayLi).children();
          for (let i = 0; i < $(li).length(); i++) {
            if (i >= 10) {
              $(li).eq(i).attr('style', 'display: none');
              $(e.target).text('展开')
            }
          }
        }
      },
      addToShoppingCart: function (e) {
        // let goodCode = $(e.target).parent().attr("value");
        // let userCode = sessionStorage.getItem("userCode");
        // let _this = this;
        // if (userCode) {
        //   this.$axios({
        //     url: _this.HOME + '/cart/add',
        //     method: 'post',
        //     data: _this.qs.stringify({
        //       "userCode": userCode,
        //       "goodCode": goodCode,
        //       "purchaseQuantity": 0,
        //     })
        //   }).then(res => {
        //     alert(res.data.message);
        //   })
        // } else {
        //   alert("您还没有登录，请登录后再加入购物车。")
        // }
      }
    }
  }
</script>

<style scoped>

</style>
