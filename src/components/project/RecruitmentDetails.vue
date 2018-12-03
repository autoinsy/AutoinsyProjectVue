<template>
  <div class="">
    <div class="allsize">
      全部结果 > 招聘列表 >招聘详情
    </div>
    <!---->
    <div class="centermy">
      <div class="left">
        <div class="rec_top_box">
          <div class="rec_top_box_title">
            <div class="left">
              <p class="left_so">{{recruit.title}}</p>
              <p class="left_s">{{recruit.companyName}}</p>
            </div>
            <div class="right">
              <p class="left_color">{{recruit.startSalary}}-{{recruit.endSalary}} <span style="font-size: 18px;">元/月</span></p>
            </div>
            <div class="clear"></div>
            <div class="rec_top_btn">
              <ul>
                <li><a href="">五险一金</a></li>
                <li><a href="">周末双休</a></li>
                <li><a href="">带薪年假</a></li>
              </ul>
            </div>
            <div class="clear"></div>
          </div>
          <div class="rec_top_box_li">
            <ul>
              <li>招{{recruit.recruitPersonNumber}}人</li>
              <li>|</li>
              <li>{{recruit.educationRequirement}}</li>
              <li>|</li>
              <li>{{recruit.experience}}</li>
              <li>|</li>
              <li>可接收应届毕业生</li>
            </ul>
            <div class="clear"></div>
            <p>商家地址：{{recruit.sellerAddress}}</p>
            <input type="button" value="申请职位" class="rec_top_box_btn1"/>
            <!--<input type="button" value="收藏职位" class="rec_top_box_btn2"/>-->
            <!--<div class="rec_btn_1">-->
              <!--<a href="">-->
                <!--<img src="../../assets/images/10.jpg"/>-->
                <!--<p>微聊</p>-->
                <!--<span style="display: none">{{recruit.weichat}}</span>-->
              <!--</a>-->
            <!--</div>-->
            <!--<div class="rec_btn_1">-->
              <!--<a href="">-->
                <!--<img src="../../assets/images/11.jpg"/>-->
                <!--<p>电话沟通</p>-->
                <!--<span style="display: none">{{recruit.contactPhoneNum}}</span>-->
              <!--</a>-->
            <!--</div>-->
          </div>
        </div>
        <div class="rec_b_box">
          <p><span>岗位职责：</span></p>
          <p>{{recruit.positionRequirement}}</p>
          <p><span>任职要求：</span></p>
          <p>{{recruit.takeOfficeRequirement}}</p>
          <!--<div class="rec_b_box_btn">查看更多 ></div>-->
        </div>
      </div>
      <div class="right">
        <div class="rec_r_box">
          <!--<div class="rec_r_box_title">—— 名企 ——</div>-->
          <div class="rec_last">
            <p style="font-size: 18px; color: #333;line-height: 42px;">沈阳伟恒科技发展有限公司</p>
            <!--<p><img src="../../assets/images/12.jpg"/></p>-->
            <p>互联网/摄像机</p>
            <p>100-499人</p>
          </div>
          <div class="rec_r_box_b">
            <img src="../../assets/images/13.jpg"/>
            <img src="../../assets/images/14.jpg"/>
          </div>
          <!--<div class="rec_li_r">-->
            <!--<ul>-->
              <!--<li>-->
                <!--<p>0%</p>-->
                <!--<p><span>简历反馈率</span></p>-->
              <!--</li>-->
              <!--<li>-->
                <!--<p>6个</p>-->
                <!--<p><span>职位招聘</span></p>-->
              <!--</li>-->
              <!--<li>-->
                <!--<p>4月</p>-->
                <!--<p><span>加入英沈</span></p>-->
              <!--</li>-->
            <!--</ul>-->
            <!--<div class="clear"></div>-->
          <!--</div>-->
          <div style="margin: 30px auto; width: 279px; height: 50px;"><input type="button" value="查看招聘职位"
                                                                             class="rec_btn_r"/></div>
        </div>
        <div class="rec_rb_box">
          <p class="rec_rb_box_p">职位推荐</p>
          <ul>
            <li>
              <a href="">
                <p>汽车销售</p>
                <p class="rec_rb_box_color_q">5000-10000元/月</p>
                <p class="rec_rb_box_color_d">铁西区-兴工街</p>
              </a>
            </li>
            <li>
              <a href="">
                <p>汽车销售</p>
                <p class="rec_rb_box_color_q">5000-10000元/月</p>
                <p class="rec_rb_box_color_d">铁西区-兴工街</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <!--中间内容 over-->
  </div>
</template>

<script>
  export default {
    name: "RecruitmentDetails",
    data() {
      return {
        recruit:'',
      }
    },
    mounted: function() {
      let _this = this;
      let recruitId = this.$route.query.recruitId;
      this.$axios({
        url: _this.HOME + '/recruit/showRecruit?recruit_id=' + recruitId,
        method: 'POST'
      }).then(res => {
        _this.recruit = res.data.data
      })
    }
  }
</script>

<style scoped>

</style>
