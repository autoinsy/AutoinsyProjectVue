<template>
  <div>
    <header class="header">
      <a class="back" href="javascript:history.back()"></a>
      <h5 class="tit">和谁聊天就是谁的名字</h5>
      <!--<div class="right">资料</div>-->
    </header>
    <div class="message">
      <div class="send">
        <div class="time">01/18 11:30</div>
        <div class="msg">
          <img src="../../assets/images/touxiang.png" alt=""/>
          <p><i class="msg_input"></i>你好在不在呀！</p>
        </div>
      </div>
      <div class="show">
        <div class="time">01/18 11:30</div>
        <div class="msg">
          <img src="../../assets/images/touxiangm.png" alt=""/>
          <p class="msg-p"><i class="msg_inputs"></i>你好，我不在</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <img src="../../assets/images/hua.png" alt=""/>
      <img src="../../assets/images/xiaolian.png" alt=""/>
      <input type="text"/>
      <p><a href="javascript:">发送</a></p>
    </div>
  </div>
</template>

<script>
  import '../../assets/js/chat.js'

  require('../../assets/js/flexible.js');

  export default {
    name: "Talk",
    mounted() {

    }
  }
</script>

<style scoped src="../../assets/css/chat.css"></style>
