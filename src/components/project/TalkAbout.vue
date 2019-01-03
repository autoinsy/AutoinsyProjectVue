<template>
  <div class="chatQ">
    <div class="chatbg">
      <div class="chatbai">
        <div class="chatclose" data-dismiss="modal" @click="closeTalk"><img src="../../assets/images/close.png" height="36" width="36"/></div>
        <div class="left">
          <div class="chattitle">名字</div>
          <div class="chattab">
            <ul>
              <li class="chattabactive"><img src="../../assets/images/message_press.png" height="32" width="32"/>
              </li>
              <li><img src="../../assets/images/btn2.png" height="32" width="32"/></li>
            </ul>
          </div>
          <div class="chatleft">
            <ul>
              <li>
                <div class="left"><img src="../../assets/images/touxiang.jpg" height="59" width="61"/></div>
                <div class="left"><span>人名</span></div>
                <div class="right"><span>2019-1-3</span></div>
              </li>
              <li>
                <div class="left"><img src="../../assets/images/touxiang.jpg" height="59" width="61"/></div>
                <div class="left"><span>人名</span></div>
                <div class="right"><span>2019-1-3</span></div>
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <div class="chattitles">名字</div>
          <div class="chatbox">
            <ul class="chatboxnewsList">
              <li>
                <div class="chatboxnesHead"><img src="../../assets/images/6.jpg" height="300" width="533"/></div>
                <div class="chatboxnews"><img class="jiao" src="../../assets/images/talk.png">1
                </div>
              </li>
              <li>
                <div class="chatboxanswerHead"><img src="../../assets/images/tou.jpg"></div>
                <div class="chatboxanswers"><img class="jiao"
                                                 src="../../assets/images/TIM图片20170926103645_03_02 (1).png">你好
                </div>
              </li>
            </ul>
          </div>
          <div class="chatfoot">
            <div class="biaoqing">
              <div class="footTop">
                <ul>
                  <li><img src="../../assets/images/TIM图片20170926103645_31.png" height="19" width="20"/></li>
                  <li class="ExP"><img src="../../assets/images/TIM图片20170926103645_33.png"></li>
                  <li><img src="../../assets/images/TIM图片20170926103645_35.png"></li>
                  <li><img src="../../assets/images/TIM图片20170926103645_37.png"></li>
                  <li><img src="../../assets/images/TIM图片20170926103645_39.png"></li>
                </ul>
                <div class="clear"></div>
              </div>
            </div>
            <textarea class="chatinput"></textarea>
            <input type="submit" class="chatbtn"/>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TalkAbout",
    methods:{
      closeTalk: function () {
        this.$emit("showTalkAbout")
      }
    }
  }
</script>

<style scoped>

</style>
