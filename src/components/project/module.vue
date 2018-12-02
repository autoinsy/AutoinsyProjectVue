<template>
  <div class="">
    <div class="allsize">
      全部结果 > 商家模块
    </div>
    <!---->
    <div class="centermy">
      <div class="left">
        <div class="details_left">
          <div class="detalis_top">技术支持</div>
          <ul>
            <li><a href="javascript:" class="li_active" @click="module">发布产品</a></li>
            <li><a href="javascript:" @click="module">发布服务</a></li>
            <li><a href="javascript:" @click="module">发布租赁</a></li>
            <li><a href="javascript:" @click="module">发布招聘</a></li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="details_right ">
          <ul>
            <li style="display:block;">
              <div class="module_peoject">
                <div class="module_box">
                  <p class="module_box_p">基本信息</p>
                  <table width="0" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>标题</p>
                      </td>
                      <td>
                        <input name="" autocomplete="off" type="text" style="color:#999" value="">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>店铺</p>
                      </td>
                      <td>
                        <input name="" autocomplete="off" type="text" style="color:#999" value="">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>类别</p>
                      </td>
                      <td>
                        <select class="select_box">
                          <option>雨刮器</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>类别标签</p>
                      </td>
                      <td>
                        <input name="" autocomplete="off" type="text" style="color:#999" value="">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>价格</p>
                      </td>
                      <td>
                        <input name="" autocomplete="off" type="text" style="color:#999" value="">
                        <!--<select class="select_box">-->
                        <!--<option>面议</option>-->
                        <!--</select>-->
                      </td>
                    </tr>
                    <tr>
                      <td><em>*</em>
                        <p>产品说明</p></td>
                      <td>
                        <textarea class="textarea_box"></textarea>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div class="module_boxs">
                  <p class="module_box_p">联系方式</p>
                  <table width="0" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                    <tr>
                      <td><em>*</em>
                        <p>联系人</p></td>
                      <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                    </tr>
                    <tr>
                      <td><em>*</em>
                        <p>联系电话</p></td>
                      <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                    </tr>
                    <!--<tr>-->
                    <!--<td><em>*</em><p>验证码</p></td>-->
                    <!--<td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                    <!--<td><em>*</em><p>QQ或微信</p></td>-->
                    <!--<td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>-->
                    <!--</tr>-->
                    </tbody>
                  </table>
                </div>
                <input type="button" value="发布" class="module_btn module_peoject_btn" @click="moduletanchu"/>
              </div>
              <div class="module_tanchu">
                <div class="module_tanchu_img">
                  <img src="../../assets/images/icon06.png"/>
                  <span>产品发布成功</span>
                </div>
                <p style="text-align: center;">
                  <router-link to='/ProductManagement'>如需查看发布成功的产品，请点击此链接</router-link>
                </p>
              </div>
            </li>
            <!--1-->
            <li style="display:none;">
              <div class="module_box">
                <p class="module_box_p">基本信息</p>
                <table width="0" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                  <tr>
                    <td><em>*</em>
                      <p>标题</p></td>
                    <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>店铺</p></td>
                    <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>工时</p></td>
                    <td>
                      <select class="select_box">
                        <option>1小时</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>服务类别</p></td>
                    <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>价格</p></td>
                    <td>
                      <select class="select_box">
                        <option>面议</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>服务说明</p></td>
                    <td>
                      <textarea class="textarea_box"></textarea>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="module_boxs">
                <p class="module_box_p">联系方式</p>
                <table width="0" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                  <tr>
                    <td><em>*</em>
                      <p>联系人</p></td>
                    <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>联系电话</p></td>
                    <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <input type="button" value="发布" class="module_btn" @click="moduletanchu"/>
            </li>
            <!--2-->
            <li style="display:none;">
              <div class="module_box">
                <p class="module_box_p">基本信息</p>
                <table width="0" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                  <tr>
                    <td><em>*</em>
                      <p>商铺类型</p></td>
                    <td>
                      <select class="select_box">
                        <option>店铺</option>
                      </select>
                    </td>
                  </tr>
                  <!--<tr>-->
                  <!--<td><em>*</em><p>当前状态</p></td>-->
                  <!--<td>-->
                  <!--<input type="radio" value="经营中"/>-->
                  <!--<input type="radio" value="空置中"/>-->
                  <!--</td>-->
                  <!--</tr>-->
                  <tr>
                    <td><em>*</em>
                      <p>面积</p></td>
                    <td>
                      <select class="select_box">
                        <option>平米</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>商铺位置</p></td>
                    <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>价格</p></td>
                    <td>
                      <select class="select_box">
                        <option value="0">面议</option>
                        <option value="1">1K以下</option>
                        <option value="2">1K-2K</option>
                        <option value="3">2K-4K</option>
                        <option value="4">4K-6K</option>
                        <option value="5">6K-8K</option>
                        <option value="6">8K-10K</option>
                        <option value="7">10K-15K</option>
                        <option value="8">15K-25K</option>
                        <option value="9">25K-35K</option>
                        <option value="10">35K-50K</option>
                        <option value="11">50K-70K</option>
                        <option value="12">70K-100K</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>租期</p></td>
                    <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>标题</p></td>
                    <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>描述</p></td>
                    <td>
                      <textarea class="textarea_box"></textarea>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="module_boxs">
                <p class="module_box_p">联系方式</p>
                <table width="0" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                  <tr>
                    <td><em>*</em>
                      <p>联系人</p></td>
                    <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>联系电话</p></td>
                    <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <input type="button" value="发布" class="module_btn" @click="moduletanchu"/>
            </li>
            <!--3-->
            <li style="display:none;">
              <div class="module_box">
                <p class="module_box_p">职位发布</p>
                <table width="0" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                  <tr>
                    <td><em>*</em>
                      <p>公司名称</p></td>
                    <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>职位名称</p></td>
                    <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>职业类别</p></td>
                    <td>
                      <select class="select_box">
                        <option>销售</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>工资</p></td>
                    <td>
                      <select class="select_box">
                        <option value="0">面议</option>
                        <option value="1">1K以下</option>
                        <option value="2">1K-2K</option>
                        <option value="3">2K-4K</option>
                        <option value="4">4K-6K</option>
                        <option value="5">6K-8K</option>
                        <option value="6">8K-10K</option>
                        <option value="7">10K-15K</option>
                        <option value="8">15K-25K</option>
                        <option value="9">25K-35K</option>
                        <option value="10">35K-50K</option>
                        <option value="11">50K-70K</option>
                        <option value="12">70K-100K</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>工作内容</p></td>
                    <td>
                      <textarea class="textarea_box"></textarea>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="module_boxs">
                <p class="module_box_p">联系方式</p>
                <table width="0" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                  <tr>
                    <td><em>*</em>
                      <p>联系人</p></td>
                    <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>联系电话</p></td>
                    <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>验证码</p></td>
                    <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                  </tr>
                  <tr>
                    <td><em>*</em>
                      <p>QQ或微信</p></td>
                    <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <input type="button" value="发布" class="module_btn" @click="moduletanchu"/>
            </li>
            <!--4-->
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
    name: "module",
    data() {
      return {
        backCode: ''
      }
    },
    methods: {
      module: function () {
        let _this = this;
        this.$('.details_left li').click(function () {
          _this.$('.details_left li').children("a").removeClass("li_active");
          _this.$(this).children("a").addClass("li_active");
          var index = _this.$(this).index();
          _this.$(".details_right>ul>li").hide().eq(index).show();
        });
      },
      moduletanchu: function (e) {
        let _this = this;
        let trs = $(e.target).parent().children().eq(0).children('table').children().children();
        let moduleBoxs = $(e.target).parent().children().eq(1).children('table').children().children();
        let aes = $('.details_left a');
        let params = [];
        let aIndex = '';
        for (let i = 0; i < trs.length; i++) {
          params[i] = ($(trs[i]).children().eq(1).children().val());
        }
        let length = params.length;
        for (let i = 0; i < moduleBoxs.length; i++) {
          params[i + length] = $(moduleBoxs[i]).children().eq(1).children().val();
        }
        for (let i = 0; i < aes.length; i++) {
          if ($(aes[i]).hasClass('li_active')) {
            aIndex = i;
            break;
          }
        }
        switch (aIndex) {
          case 1:
            _this.pushLease(params, e);
            break;
          case 2:
            _this.pushService(params, e);
            break;
          case 3:
            _this.pushRecruit(params, e);
            break;
          default:
            _this.pushGood(params, e);
            break;
        }
      },
      pushGood: function (list, event) {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/goods/add?name=' + list[0] +
            '&price=' + list[1] +
            '&describe=' + list[2] +
            '&brand=' + list[3] +
            '&productPlace=' + list[4] +
            '&subTypeCode=' + list[5] +
            '&isInStock=' + list[6] +
            '&goodsPic=' + list[7] +
            '&mainType=' + list[8],
          method: 'POST'
        }).then(res => {
          _this.backCode = res.data.code
        })
      },
      pushLease: function (list, event) {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/lease/add?leaseType=' + list[0] +
            '&acreage=' + list[1] +
            '&stallPosition=' + list[2] +
            '&price=' + list[3] +
            '&leaseTerm=' + list[4] +
            '&title=' + list[5] +
            '&descript=' + list[6],
          method: 'POST'
        }).then(res => {
          _this.backCode = res.data.code
        })
      },
      pushService: function (list, event) {
        let _this = this;

      },
      pushRecruit: function (list, event) {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/recruit/add?companyName=' + list[0] +
            '&title=' + list[1] +
            '&startSalary=' + list[2] +
            '&positionRequirement=' + list[3] +
            '&publishTime=' + list[4],
          method: 'POST'
        }).then(res => {
          _this.backCode = res.data.code
        })
      }
    }
  }
</script>

<style scoped>

</style>
