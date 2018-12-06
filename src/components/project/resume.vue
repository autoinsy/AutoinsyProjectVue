<template>
  <!--招聘-->
 <div class="">
     <div class="module_peoject" style="width: 1200px; margin: 0 auto;">
       <div class="module_box">
         <p class="module_box_p">职位发布</p>
         <table width="0" border="0" cellspacing="0" cellpadding="0">
           <tbody>
           <!--招聘标题-->
           <tr>
             <td>
               <em>*</em>
               <p>招聘标题</p>
             </td>
             <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
           </tr>
           <!--商家地址-->
           <tr>
             <td><em>*</em>
               <p>商家地址</p></td>
             <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
           </tr>
           <!--岗位职责-->
           <tr>
             <td><em>*</em>
               <p>岗位职责</p></td>
             <td>
               <select class="select_box">
                 <option>销售</option>
               </select>
             </td>
           </tr>
           <!--薪资范围（5000-10000）（下拉框）-->
           <tr>
             <td>
               <em>*</em>
               <p>工资</p>
             </td>
             <td>
               <select class="select_box">
                 <option>5000</option>
                 <option>5001-6000</option>
                 <option>6001-7000</option>
                 <option>7001-8000</option>
                 <option>8001-9000</option>
                 <option>9001-10000</option>
               </select>
             </td>
           </tr>
           <!--任职要求-->
           <tr>
             <td>
               <em>*</em>
               <p>任职要求</p>
             </td>
             <td>
               <textarea class="textarea_box"></textarea>
             </td>
           </tr>
           <!--待遇-->
           <tr>
             <td>
               <em>*</em>
               <p>待遇</p>
             </td>
             <td>
               <input type="text" name="">
             </td>
           </tr>
           <!--人数范围（100-500人）（下拉框）-->
           <tr>
             <td>
               <em>*</em>
               <p>任职要求</p>
             </td>
             <td>
               <select class="select_box">
                 <option>0-100</option>
                 <option>100-200</option>
                 <option>200-300</option>
                 <option>300-400</option>
                 <option>400-500</option>
               </select>
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
 </div>
</template>

<script>
    export default {
        name: "resume",
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
              '&price=' + list[10],
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
