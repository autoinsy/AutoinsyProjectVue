<template>
  <div class="">
    <div class="allsize">
      全部结果 > 内饰详情
    </div>
    <!---->
    <div class="centermy">
      <div class="bg">
        <div class="bg_left">
          <div class="show">
            <img src="../../assets/picture/img1.png" alt="">
            <div class="mask"></div>
          </div>
          <div class="smallshow">
            <p class="prev prevnone"></p>
            <div class="middle_box">
              <ul class="middle">
                <!--<video-player>-->
                  <!--videoUrl-->
                <!--</video-player>-->
                <li v-for="(ornamentImage, index) in ornamentDetail.ornamentImagesSet"><img :src="ornamentImage.ornamentImages" alt=""></li>
              </ul>
            </div>
            <p class="next "></p>
          </div>
        </div>
        <div class="bg_right">
          <div class="bigshow">
            <div class="bigitem">
              <img src="../../assets/picture/img1.png" alt="">
            </div>
          </div>
        </div>
        <!--lb-->
        <div class="left project_box">
          <div class="project_title">
            <p>{{ornamentDetail.ornamentName}}</p>
          </div>
        </div>
        <div id="wrap">
          <div id="bottom">
            <p>
              价格：
              <font>
                ￥
                <span id='price'>{{ornamentDetail.price}}</span>.00
              </font>
            </p>
            <button>立即购买</button>
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
    </div>
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
        <p>品牌:{{brand}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrnamentDetail",
    data() {
      return {
        ornamentDetail: ''
      }
    },
    watch: {},
    mounted: function () {
      let _this = this;
      this.$axios({
        url: _this.HOME + '/ornament/showInfo',
        method: 'POST',
        data: _this.qs.stringify({
          ornamentId: _this.$route.query.id
        })
      }).then(res => {
        _this.ornamentDetail = res.data.data;
      })
    },
    methods: {
      addToShoppingCart: function (e) {

      }
    }
  }
</script>

<style scoped>

</style>
