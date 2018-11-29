<template>
  <div class="">
    <div class="allsize">
      全部结果 > 技术支持 > 联系方式
    </div>
    <!---->
    <div class="centermy">
      <div class="left">
        <div class="details_left">
          <div class="detalis_top">技术支持</div>
          <ul>
            <li><a href="javascript:" class="li_active" @click="techincal">联系方式</a></li>
            <li><a href="javascript:" @click="techincal">咨询留言</a></li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="details_right">
          <ul>
            <li style="display:block;">
              <div class="tec_title">沈阳西郊汽配管理有限公司<span></span></div>
              <div class="left">
                <div class="tec_img"><img src="../../assets/images/04.jpg" width="351" height="223"/></div>
              </div>
              <div class="right">
                <div class="tec_p">
                  <p>—— 致力于打造国内最值得新来的汽配交易平台</p>
                  <p class="tec_pp">让您畅游在汽配世界</p>
                </div>
                <div class="tec_zi">
                  <p>地址：辽宁省沈阳市铁西区勋业六路与肇工南街交叉路口西150米</p>
                  <p>电话：024-31040888</p>
                  <p>邮箱：123456@163.com</p>
                </div>
              </div>
              <div class="clear"></div>
            </li>
            <!--1-->
            <li style="display:none;">
              <div class="tec_li">
                <ul>
                  <li>
                    <router-link to='/TeachnicalDetails'>
                      每个页面就10条列表哦~
                    </router-link>
                  </li>
                  <li>
                    <router-link to='/TeachnicalDetails'>
                      这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表
                    </router-link>
                  </li>
                  <li>
                    <router-link to='/TeachnicalDetails'>
                      这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表
                    </router-link>
                  </li>
                  <li>
                    <router-link to='/TeachnicalDetails'>
                      这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表
                    </router-link>
                  </li>
                  <li>
                    <router-link to='/TeachnicalDetails'>
                      这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表题列表
                    </router-link>
                  </li>
                  <li>
                    <router-link to='/TeachnicalDetails'>
                      这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表
                    </router-link>
                  </li>
                  <li>
                    <router-link to='/TeachnicalDetails'>
                      这里是问题列表这里是问题列表这里是问题列表这里是问题列表
                    </router-link>
                  </li>
                  <li>
                    <router-link to='/TeachnicalDetails'>
                      这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表
                    </router-link>
                  </li>
                  <li>
                    <router-link to='/TeachnicalDetails'>
                      这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表
                    </router-link>
                  </li>
                  <li>
                    <router-link to='/TeachnicalDetails'>
                      这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表这里是问题列表
                    </router-link>
                  </li>
                </ul>
              </div>
              <!-- 分页开始 -->
              <div class="tcdPageCode"></div>
              <!-- 分页结束 -->
            </li>
            <!--2-->
          </ul>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <!--中间内容 over-->
  </div>
</template>

<script>
  // $(".tcdPageCode").createPage({
  //   pageCount:20,
  //   current:1,
  //   backFn:function(p){
  //     //console.log(p);
  //   }
  // });
    export default {
        name: "TechnicalAssistance",
      methods: {
        techincal: function () {
          let _this = this;
          this.$('.details_left li').click(function () {
            _this.$('.details_left li').children("a").removeClass("li_active");
            _this.$(this).children("a").addClass("li_active");
            var index = _this.$(this).index();
            _this.$(".details_right>ul>li").hide().eq(index).show();
          });
        },
      }
    }
</script>

<style scoped>

</style>
