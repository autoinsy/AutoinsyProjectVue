<template>
  <!--招聘-->
 <div class="">
     <div class="module_peoject" style="width: 1200px; margin: 0 auto;">
       <div class="module_box">
         <p class="module_box_p" style="text-align: center;">创建简历</p>
         <table width="0" border="0" cellspacing="0" cellpadding="0">
           <tbody>
           <!--招聘标题-->
           <tr>
             <td><em>*</em>
               <p>求职职位类别</p></td>
             <td>
               <select class="select_box">
                 <option>销售</option>
               </select>
             </td>
           </tr>
           <!--商家地址-->
           <tr>
             <td><em>*</em>
               <p>期望薪资</p></td>
             <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
           </tr>
           <!--岗位职责-->
           <tr>
             <td>
               <em>*</em>
               <p>求职者姓名</p>
             </td>
             <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
           </tr>
           <!--薪资范围（5000-10000）（下拉框）-->
           <tr>
             <td>
               <em>*</em>
               <p>性别</p>
             </td>
             <td>
               <div class="sex-classdiv"><input type="radio" name="sex" value="男" class="sex-class" checked><span>男</span></div>
               <div class="sex-classdiv"><input type="radio" name="sex" value="女" class="sex-class"><span>女</span></div>
             </td>
           </tr>
           <!--薪资范围（5000-10000）（下拉框）-->
           <tr>
             <td>
               <em>*</em>
               <p>出生年月</p>
             </td>
             <td><input name="" autocomplete="off" type="date" style="color:#999;width: 157px;" value=""></td>
           </tr>
           <!--任职要求-->
           <tr>
             <td>
               <em>*</em>
               <p>工作年限</p>
             </td>
             <td>
               <!--<textarea class="textarea_box"></textarea>-->
               <select class="select_box">
                 <option>1年以下</option>
                 <option>1-3年</option>
                 <option>3-5年</option>
                 <option>5年以上</option>
               </select>
             </td>
           </tr>
           <!--待遇-->
           <tr>
             <td>
               <em>*</em>
               <p>学历</p>
             </td>
             <td>
               <select class="select_box">
                 <option>初中及初中以下</option>
                 <option>高中及高中以下</option>
                 <option>专科</option>
                 <option>本科</option>
                 <option>本科以上</option>
               </select>
             </td>
           </tr>
           <!--人数范围（100-500人）（下拉框）-->
           <tr>
             <td>
               <em>*</em>
               <p>手机号</p>
             </td>
             <td><input name="" autocomplete="off" type="text" style="color:#999" value=""></td>
           </tr>
           </tbody>
         </table>
       </div>
       <input type="button" value="发布" class="module_btn" @click="moduletanchu"/>
     </div>
 </div>
</template>

<script>
    export default {
        name: "resume",
    }
</script>

<style scoped>

</style>
