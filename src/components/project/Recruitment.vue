<template>
  <div class="">
    <div class="allsize">
      全部结果 > 招聘列表
    </div>
    <!---->
    <div class="centermy">
      <div class="rec_title">
        <p> 汽配城商户招聘职位</p>
        <input type="button" value="我要发布" class="rec_btn"/>
      </div>
      <div class="rec_list">
        <ul>
          <li>
            <div class="rec_li">
              <ul>
                <li>职位类别</li>
                <li><a href="">销售</a></li>
                <li><a href="">销售</a></li>
                <li><a href="">销售</a></li>
                <li><a href="">销售</a></li>
                <li><a href="">销售</a></li>
                <li><a href="">销售</a></li>
              </ul>
            </div>
          </li>
          <li>
            <div class="rec_li">
              <ul>
                <li>单位类型</li>
                <li><a href="">汽车配件</a></li>
                <li><a href="">汽车修理</a></li>
                <li><a href="">汽车配件</a></li>
                <li><a href="">汽车修理</a></li>
                <li><a href="">汽车配件</a></li>
                <li><a href="">汽车修理</a></li>
                <li><a href="">汽车配件</a></li>
                <li><a href="">汽车修理</a></li>
              </ul>
            </div>
          </li>
          <li>
            <div class="rec_li">
              <ul>
                <li>关键词</li>
                <li>
                  <input type="text" class="rec_li_input" placeholder="请输入您要搜索的关键词"/>
                  <input type="button" value="" class="rec_li_btm"/>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="rec_tab_li">
        <ul>
          <li>职位名称</li>
          <li>工作地点</li>
          <li>职业类别</li>
          <li>单位名称</li>
        </ul>
      </div>
      <div class="clear"></div>
      <div class="rec_tab">
        <ul>
          <li v-for="recruit in recruitList">
            <router-link :to="{path: '/RecruitmentDetails', query: {recruitId: recruit.recruitID}}">
              <div class="rec_ul">
                <ul>
                  <li>{{recruit.title}}</li>
                  <li>{{recruit.sellerAddress}}</li>
                  <li>销售</li>
                  <li>XXX配车配件厂家直销</li>
                </ul>
                <div class="clear"></div>
                <p>{{recruit.positionRequirement}}</p>
              </div>
            </router-link>
          </li>
        </ul>
        <div class="clear"></div>
      </div>
      <!-- 分页开始 -->
      <div class="tcdPageCode"></div>
      <!-- 分页结束 -->
    </div>
    <!--中间内容 over-->
  </div>
</template>

<script>
  export default {
    name: "Recruitment",
    data() {
      return {
        recruitList: []
      }
    },
    mounted: function () {
      let _this = this;
      this.$axios({
        url: _this.HOME + '/recruit/allRecruit'
      }).then(res => {
        _this.recruitList = res.data.data;
      })
    }
  }
</script>

<style scoped>

</style>
