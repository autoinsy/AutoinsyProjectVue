<template>
  <div class="">
    <div class="allsize">
      全部结果 > 租赁详情
    </div>
    <!---->
    <div class="centermy">
      <div class="rentd_title">
        <p>{{lease.title}}</p>
        <p><span>{{lease.publishDate}}</span></p>
      </div>
      <div class="rentd_top">
        <div class="left">
          <div class="banner_all">
            <div class="large_box">
              <ul>
                <li style="display: none;" v-for="leaseImg in lease.leaseImageSet">
                  <img v-bind:src="leaseImg.leaseImageUrl" width="465" height="400">
                </li>
              </ul>
            </div>
            <div class="small_box">
              <span class="btns left_btn"></span>
              <div class="small_list">
                <ul>
                  <li v-for="leaseImg in lease.leaseImageSet">
                    <img v-bind:src="leaseImg.leaseImageUrl" width="112" height="75">
                    <div class="bun_bg"></div>
                  </li>
                </ul>
              </div>
              <span class="btns right_btn"></span>
            </div>
          </div>
        </div>
        <div class="left rentd_title_p">
          <p><span class="rentd_span">{{lease.price}}</span><span style="color: #ff7300;">元/月</span><span
            style="padding-left: 30px;">{{lease.leaseTerm}}</span></p>
          <p>租赁方式： 整租</p>
          <p>房屋面积： {{lease.acreage}}</p>
          <p>所在区域： {{lease.stallPosition}}</p>
          <p>档口编号： {{lease.stallCode}}</p>
          <input type="button" value="查看电话号码" class="rentd_title_btn" @click="showTelphone"/>
        </div>
        <div class="left">
          <div class="rentd_left_box">
            <div class="rentd_box_title">沈阳西部汽配B102</div>
            <div class="rentd_box_icon">
              <img src="../../assets/images/15.jpg"/>
              <div class="clear"></div>
            </div>
            <div class="rentd_block">
              <ul>
                <li style="border-right: 1px solid #ddd">
                  <p style="font-size: 16px">27个月</p>
                  <p style="color: #999">加入英沈</p>
                </li>
                <li>
                  <p style="font-size: 16px">129次</p>
                  <p style="color: #999">浏览次数</p>
                </li>
              </ul>
              <div class="clear"></div>
            </div>
            <div class="rentd_hui"></div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="left rentd_d">
        <p style="font-size: 18px;">租赁详情</p>
        <p>{{lease.descript}}</p>
        <img v-for="leaseImg in lease.leaseImageSet" v-bind:src="leaseImg"/>
      </div>
      <div class="right rentd_r">
        <p class="rentd_r_p">推荐租赁消息</p>
        <ul>
          <li>
            <div class="left rentd_r_img">
              <img src="../../assets/images/05.jpg"/>
            </div>
            <div class="right rentd_r_zi">
              <p>这里是大标题这里是大标题这里是大标题</p>
              <p>这里是描述</p>
              <p>这里是描述</p>
              <p style="color: #ff7300; line-height: 40px">4400元/月</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RentDetails",
    data() {
      return {
        lease: '',
      }
    },
    mounted: function () {
      let _this = this;
      let leaseID = this.$route.query.leaseId;
      this.$axios({
        url: _this.HOME + '/lease/getOne?leaseId=' + leaseID,
        method: 'POST'
      }).then(res => {
        _this.lease = res.data.data
      })
    },
    methods: {
      showTelphone(e) {
        $(e.target).val(this.lease.mobile_phone_num);
      }
    }
  }
</script>

<style scoped>

</style>
