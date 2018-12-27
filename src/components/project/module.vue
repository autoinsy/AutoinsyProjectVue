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
            <!--<li><a href="javascript:" @click="module">发布招聘</a></li>-->
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="details_right ">
          <ul>
            <!--商品-->
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
                        <p>产品说明</p>
                      </td>
                      <td>
                        <textarea class="textarea_box"></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>品牌</p>
                      </td>
                      <td>
                        <select class="select_box">
                          <option></option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>类别</p>
                      </td>
                      <td>
                        <select class="select_box" v-model="mainType">
                          <option v-for="mainType in mainTypeList" v-bind:value="mainType.mainTypeCode">
                            {{mainType.mainTypeName}}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr v-if="mainType">
                      <td>
                        <em>*</em>
                        <p>类别标签</p>
                      </td>
                      <td>
                        <select class="select_box">
                          <option v-for="subType in subTypeList" v-bind:value="subType.subTypeCode">
                            {{subType.subType}}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>上传视频</p>
                      </td>
                      <td>
                        <input id="uploadMP4" type="file" class="upimg">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>数量</p>
                      </td>
                      <td style="text-align: left">
                        <button @click="changeNum" class="fafalala"><i class="fa fa-minus fafasoso"></i></button>
                        <input type="text" style="width: 25%; text-align: center; padding-left: 0;" v-model="count">
                        <button @click="changeNum" class="fafalala"><i class="fa fa-plus fafasoso"></i></button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>产地</p>
                      </td>
                      <td>
                        <select class="select_box">
                          <option></option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>宣传图片</p>
                      </td>
                      <td>
                        <input id="uploadPlug" type="file">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>产品图片</p>
                      </td>
                      <td>
                        <input type="file">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>价格</p>
                      </td>
                      <td>
                        <input name="" autocomplete="off" type="text" style="color:#999" value="">
                      </td>
                    </tr>
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
            <!--服务-->
            <li style="display:none;">
              <div class="module_peoject">
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
                <input type="button" value="发布" class="module_btn" @click="moduletanchu"/>
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
            <!--租赁-->
            <li style="display:none;">
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
                        <input type="text">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>价格</p>
                      </td>
                      <td>
                        <input type="text"/>平米
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>租赁方式</p>
                      </td>
                      <td>
                        <select class="select_box">
                          <option value="0">请选择</option>
                          <option value="1">店铺</option>
                          <option value="2">库房</option>
                          <option value="3">写字间</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>房屋面积</p>
                      </td>
                      <td>
                        <select class="select_box">
                          <option value="0">请选择</option>
                          <option value="1">5平以下</option>
                          <option value="2">5-10平</option>
                          <option value="3">10-50平</option>
                          <option value="4">50-100平</option>
                          <option value="5">100平以上</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>所在区域</p>
                      </td>
                      <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>档口编号</p>
                      </td>
                      <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>租赁详情</p>
                      </td>
                      <td>
                        <textarea class="textarea_box"></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>档口描述</p>
                      </td>
                      <td>
                        <textarea class="textarea_box"></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em>*</em>
                        <p>多张照片</p>
                      </td>
                      <td>
                        <textarea class="textarea_box"></textarea>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <input type="button" value="发布" class="module_btn" @click="moduletanchu"/>
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
            <!--招聘-->
            <!--<li style="display:none;">-->
            <!--<div class="module_peoject">-->
            <!--<div class="module_box">-->
            <!--<p class="module_box_p">职位发布</p>-->
            <!--<table width="0" border="0" cellspacing="0" cellpadding="0">-->
            <!--<tbody>-->
            <!--&lt;!&ndash;招聘标题&ndash;&gt;-->
            <!--<tr>-->
            <!--<td>-->
            <!--<em>*</em>-->
            <!--<p>招聘标题</p>-->
            <!--</td>-->
            <!--<td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>-->
            <!--</tr>-->
            <!--&lt;!&ndash;商家地址&ndash;&gt;-->
            <!--<tr>-->
            <!--<td><em>*</em>-->
            <!--<p>商家地址</p></td>-->
            <!--<td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>-->
            <!--</tr>-->
            <!--&lt;!&ndash;岗位职责&ndash;&gt;-->
            <!--<tr>-->
            <!--<td><em>*</em>-->
            <!--<p>岗位职责</p></td>-->
            <!--<td>-->
            <!--<select class="select_box">-->
            <!--<option>销售</option>-->
            <!--</select>-->
            <!--</td>-->
            <!--</tr>-->
            <!--&lt;!&ndash;薪资范围（5000-10000）（下拉框）&ndash;&gt;-->
            <!--<tr>-->
            <!--<td>-->
            <!--<em>*</em>-->
            <!--<p>工资</p>-->
            <!--</td>-->
            <!--<td>-->
            <!--<select class="select_box">-->
            <!--<option>5000</option>-->
            <!--<option>5001-6000</option>-->
            <!--<option>6001-7000</option>-->
            <!--<option>7001-8000</option>-->
            <!--<option>8001-9000</option>-->
            <!--<option>9001-10000</option>-->
            <!--</select>-->
            <!--</td>-->
            <!--</tr>-->
            <!--&lt;!&ndash;任职要求&ndash;&gt;-->
            <!--<tr>-->
            <!--<td>-->
            <!--<em>*</em>-->
            <!--<p>任职要求</p>-->
            <!--</td>-->
            <!--<td>-->
            <!--<textarea class="textarea_box"></textarea>-->
            <!--</td>-->
            <!--</tr>-->
            <!--&lt;!&ndash;待遇&ndash;&gt;-->
            <!--<tr>-->
            <!--<td>-->
            <!--<em>*</em>-->
            <!--<p>待遇</p>-->
            <!--</td>-->
            <!--<td>-->
            <!--<input type="text" name="">-->
            <!--</td>-->
            <!--</tr>-->
            <!--&lt;!&ndash;人数范围（100-500人）（下拉框）&ndash;&gt;-->
            <!--<tr>-->
            <!--<td>-->
            <!--<em>*</em>-->
            <!--<p>任职要求</p>-->
            <!--</td>-->
            <!--<td>-->
            <!--<select class="select_box">-->
            <!--<option>0-100</option>-->
            <!--<option>100-200</option>-->
            <!--<option>200-300</option>-->
            <!--<option>300-400</option>-->
            <!--<option>400-500</option>-->
            <!--</select>-->
            <!--</td>-->
            <!--</tr>-->
            <!--</tbody>-->
            <!--</table>-->
            <!--</div>-->
            <!--<input type="button" value="发布" class="module_btn" @click="moduletanchu"/>-->
            <!--</div>-->
            <!--<div class="module_tanchu">-->
            <!--<div class="module_tanchu_img">-->
            <!--<img src="../../assets/images/icon06.png"/>-->
            <!--<span>产品发布成功</span>-->
            <!--</div>-->
            <!--<p style="text-align: center;">-->
            <!--<router-link to='/ProductManagement'>如需查看发布成功的产品，请点击此链接</router-link>-->
            <!--</p>-->
            <!--</div>-->
            <!--</li>-->
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
        mainTypeList: [],
        subTypeList: [],
        backCode: '',
        mainType: '',
        count: 0,
      }
    },
    watch: {
      mainType: function (n, o) {
        let _this = this
        this.$axios({
          url: _this.HOME + '/goodsType/getGoodsType?main_goods_type=' + n,
          method: 'post'
        }).then(res => {
          _this.subTypeList = res.data.data;
        })
      },
    },
    mounted: function () {
      let _this = this;
      this.$axios({
        url: _this.HOME + '/goodsType/getAllMainType'
      }).then(res => {
        _this.mainTypeList = res.data.data;
      });
      this.$('.details_right input[type="file"]').fileinput({
        language: 'zh', //设置语言
        // uploadUrl:"http://127.0.0.1/testDemo/fileupload/upload.do", //上传的地址
        allowedFileExtensions: ['jpg', 'gif', 'png'],//接收的文件后缀
        //uploadExtraData:{"id": 1, "fileName":'123.mp3'},
        uploadAsync: true, //默认异步上传
        showUpload: true, //是否显示上传按钮
        showRemove: true, //显示移除按钮
        showPreview: true, //是否显示预览
        showCaption: false,//是否显示标题
        browseClass: "btn btn-primary", //按钮样式    
        dropZoneEnabled: false,//是否显示拖拽区域
        //minImageWidth: 50, //图片的最小宽度
        //minImageHeight: 50,//图片的最小高度
        //maxImageWidth: 1000,//图片的最大宽度
        //maxImageHeight: 1000,//图片的最大高度
        //maxFileSize:0,//单位为kb，如果为0表示不限制文件大小
        //minFileCount: 0,
        maxFileCount: 10, //表示允许同时上传的最大文件个数
        enctype: 'multipart/form-data',
        validateInitialCount: true,
        previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
        msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
      })
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
        let aes = $('.details_left a');
        let params = [];
        let aIndex = '';
        for (let i = 0; i < trs.length; i++) {
          params[i] = ($(trs[i]).children().eq(1).children().val());
        }
        for (let i = 0; i < aes.length; i++) {
          if ($(aes[i]).hasClass('li_active')) {
            aIndex = i;
            break;
          }
        }
        switch (aIndex) {
          case 1:
            // 发布服务
            _this.pushService(params, e);
            break;
          case 2:
            // 发布租赁
            _this.pushLease(params, e);
            break;
          case 3:
            // 发布招聘
            _this.pushRecruit(params, e);
            break;
          default:
            // 发布产品
            _this.pushGood(params, e);
            break;
        }
      },
      pushGood: function (list, event) {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/goods/add?name=' + list[0] +
            '&describe=' + list[1] +
            '&brand=' + list[2] +
            '&mainTypeCode=' + list[3] +
            '&subTypeCode=' + list[4] +
            '&videoUrl=' + list[5] +
            '&quantity=' + list[6] +
            '&productPlace=' + list[7] +
            '&goodsImagesList=' + list[8] +
            '&goodsPic=' + list[9] +
            '&price=' + list[10] +
            '&userCode=' + sessionStorage.getItem("userCode"),
          method: 'POST'
        }).then(res => {
          if (Math.ceil(res.data.code) === 200) {
            let parent = $(event.target).parent().parent().children();
            $(parent).eq(0).hide();
            $(parent).eq(1).show();
          } else {
            alert(res.data.message)
          }
        })
      },
      pushLease: function (list, event) {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/lease/add?title=' + list[0] +
            '&price=' + list[1] +
            '&leaseType=' + list[2] +
            '&acreageTypeCode=' + list[3] +
            '&stallPosition=' + list[4] +
            '&stallCode=' + list[5] +
            '&descript=' + list[6] + "\n" + list[7],
          // '&leaseImageSet=' + list[8],
          method: 'POST'
        }).then(res => {
          if (Math.ceil(res.data.code) === 200) {
            let parent = $(event.target).parent().parent().children();
            $(parent).eq(0).hide();
            $(parent).eq(1).show();
          }
        })
      },
      pushService: function (list, event) {
        let _this = this;

      },
      pushRecruit: function (list, event) {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/recruit/add?title=' + list[0] +
            '&sellerAddress=' + list[1] +
            '&positionRequirement=' + list[2] +
            '&startSalary=' + list[3].split('-')[0] +
            '&endSalary=' + list[3].split('-')[1] +
            '&takeOfficeRequirement=' + list[4] +
            //待遇                 =' + list[5] +
            '&companyPropleNum=' + list[6],
          method: 'POST'
        }).then(res => {
          if (Math.ceil(res.data.code) === 200) {
            let parent = $(event.target).parent().parent().children();
            $(parent).eq(0).hide();
            $(parent).eq(1).show();
          } else {
            alert(res.data.message)
          }
        })
      },
      changeNum: function (e) {
        if ($(e.target).hasClass("fa-plus")) {
          this.count++;
        } else {
          if (this.count > 0) {
            this.count--;
          } else {
            this.count = 0;
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
