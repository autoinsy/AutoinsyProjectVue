<template>
  <div class="">
    <div class="allsize">
      全部结果 > 服务列表
    </div>
    <!---->
    <div class="centermy">
      <div class="serve_box">
        <div class="serve_box_top">
          <p>找到<span>汽车服务</span>相关信息共<span>1120</span>条：</p>
        </div>
        <div class="sousuo">
          <dl class="selectbarTree clearfix">
            <dt><a href="javascript:">类别：</a></dt>
            <dd class="clearfix">
              <ul class="s_ul">
                <li><a href="javascript:"></a><i>53</i></li>
                <li><a href="javascript:"></a><i>32</i></li>
                <li><a href="javascript:"></a><i>18</i></li>
                <li><a href="javascript:"></a><i>6</i></li>
                <li><a href="javascript:"></a><i>3</i></li>
                <li style='display:none'><a href="javascript:"></a><i>2</i></li>
                <li style='display:none'><a href="javascript:"></a><i>1</i></li>
                <li style='display:none'><a href="javascript:"></a><i>1</i></li>
                <li style='display:none'><a href="javascript:"></a><i>1</i></li>
                <li style='display:none'><a href="javascript:"></a><i>1</i></li>
              </ul>
              <span name='cateswitch' class="moreBtn b1">展开</span>
            </dd>
          </dl>
        </div>
        <section id="selection">
          <dl class="secitem">
            <dt class="secitem_brand">服务区域 ：</dt>
            <dd id="local">
              <a href="" class='select'>全沈阳</a>
              <a href="javascript:">和平</a>
              <a href="javascript:">沈河</a>
              <a href="javascript:">皇姑</a>
              <a href="javascript:">大东</a>
              <a href="javascript:">铁西</a>
              <a href="javascript:">东陵</a>
              <a href="javascript:">于洪</a>
              <a href="javascript:">沈北新区</a>
              <a href="javascript:">苏家屯</a>
              <a href="javascript:">浑南新区</a>
              <a href="javascript:">沈阳周边</a>
            </dd>
          </dl>
          <div id="selected" class="bar"></div>
          <i class="shadow"></i>
        </section>
      </div>
      <div class="containnerWrap clearfix">
        <section id="mainlist" class="main clearfix pr">
          <div class="filterbar" style="height: 30px;">
            <div class="filterbar-l">
              <div class="filterup" id="filterup">
                <a class="m1 sel" title="默认" href="#" rel="nofollow"><span>默认排序<em></em></span></a>
              </div>
              <span class="checkbox-ico" id="renzheng">
                            <a href="javascript:void(0);">只看认证</a>
                        </span>
            </div>
            <div class="filterbar-md">
              <a class="mdtj" style="display:inline-block;" rel="nofollow" target="_blank" href="">想提升接单效果，请致电024-31040888</a>
            </div>
          </div>
          <div id="infolist" class="cleft">
            <table id="jingzhun" class="small-tbimg ac_container" cellspacing="0" cellpadding="0">
              <tr data-sign="" class="ac_item">
                <td class="img">
                  <div class="ac_linkurl">
                    <router-link to='/ServeDetails'>
                      <img src="../../assets/images/05.jpg"/>
                    </router-link>
                  </div>
                </td>
                <td class="t">
                  <router-link to='ServeDetails'>
                    <div class="tdiv">
                      <router-link to='/ServeDetails' class="t ac_linkurl">全沈阳<b>汽修</b> 修理 换配件 清洗 修理 换配件 清洗 修理 换配件 清洗
                        <span class='tu'>[5图]</span>
                        <span class="jingpin">精</span>
                      </router-link>
                      <div class="item-desc">
                        沈阳全区域每个街道都有师傅 十分钟上门维修
                      </div>
                      <p class="seller">
                        <router-link to='/ServeDetails' class='sellername ac_linkurl' rel="nofollow">辽宁XXX服务有限公司
                        </router-link>
                      </p>
                      <p class="item-tags">
                        <span class="async-tags"></span>
                      </p>
                    </div>
                  </router-link>
                </td>
                <td class="vertop">
                  <div class="yuyue_vertop ac_linkurl " data-id='31996204049709'>
                                    <span class='cont_Pa'>
                                         <router-link to='/ServeDetails' class='click_btn'>联系商家</router-link>
                                    </span>
                  </div>
                </td>
              </tr>
              <tr data-sign="" v-for="service in serviceList" class="ac_item">
                <td class="img">
                  <div class="ac_linkurl">
                    <a href="javascript:">
                      <img v-if="service.serviceImagesSet.length > 0" :src="service.serviceImagesSet[0].serviceImagesUrl"/>
                    </a>
                  </div>
                </td>
                <td class="t">
                  <div class="tdiv">
                    <router-link :to='{path: "/ServeDetails", query: {serverId: service.serviceID}}' class="t ac_linkurl">{{service.serviceArea}}
                      <span class='tu'>{{service.serviceImagesSet.length}}图</span>
                      <span class="jingpin"></span>
                    </router-link>
                    <div class="item-desc">
                    </div>
                    <p class="seller">
                      <router-link :to='{path: "/talk", query:{seller: service.contacts}}' class='sellername ac_linkurl' rel="nofollow"></router-link>
                    </p>
                    <p class="item-tags">
                      <span class="async-tags"></span>
                    </p>
                  </div>
                </td>
                <td class="vertop">
                  <div class="yuyue_vertop ac_linkurl " data-id='31996204049709'>
                    <span class='cont_Pa'>
                      <router-link :to='{path: "/talk", query:{seller: service.contacts}}' class='sellername ac_linkurl' rel="nofollow"></router-link>
                    </span>
                  </div>
                </td>
              </tr>

            </table>
          </div>
        </section>
        <div class="serve_right">
          <div class="serve_right_title">
            热销排行
          </div>
          <div class="serve_right_li">
            <ul>
              <li>
                <div class="left">
                  <div class="serve_img"><img src="../../assets/images/02.jpg" width="87px" height="70"/></div>
                </div>
                <div class="left">
                  <div class="serve_p">
                    <p></p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="clear"></div>
      <!-- 分页开始 -->
      <div class="tcdPageCode"></div>
      <!-- 分页结束 -->
    </div>
    <!--中间内容 over-->
  </div>
</template>

<script>
  export default {
    name: "Serve",
    data() {
      return {
        cur: 0,
        allTotalPage: 0,
        serviceList: [],
      }
    },
    mounted: function () {
      let _this = this;
      this.$axios({
        url: _this.HOME + '/service/list?page=' + _this.cur
      }).then(res => {
        console.log(res);
        _this.serviceList = res.data.data.content;
        _this.allTotalPage = res.data.data.allTotalPages
      })
    },
  }
</script>

<style scoped>

</style>
