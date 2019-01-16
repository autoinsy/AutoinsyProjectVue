<template>
  <div class="chatQ">
    <div class="chatbg">
      <div class="chatbai">
        <div class="chatclose" data-dismiss="modal" @click="closeTalk">
          <img src="../../../assets/images/close.png" height="36" width="36"/></div>
        <div class="left">
          <div class="chattitle">名字</div>
          <div class="chattab">
            <ul>
              <li class="chattabactive">
                <img src="../../../assets/images/message_press.png" height="32" width="32"/>
              </li>
              <li>
                <img src="../../../assets/images/btn2.png" height="32" width="32"/>
              </li>
            </ul>
          </div>
          <div class="chatleft">
            <ul>
              <li v-for="(session,index) in sessionList"
                  :key="session.id"
                  @click.native="enterChat(session)">
                <div class="left"><img src="../../../assets/images/touxiang.jpg" height="59" width="61"/></div>
                <div class="left"><span>{{session.name}}</span></div>
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
                <div class="chatboxnesHead"><img src="../../../assets/images/6.jpg" height="300" width="533"/></div>
                <div class="chatboxnews"><img class="jiao" src="../../../assets/images/talk.png">1
                </div>
              </li>
              <li>
                <div class="chatboxanswerHead"><img src="../../../assets/images/tou.jpg"></div>
                <div class="chatboxanswers">
                  <img class="jiao" src="../../../assets/images/TIM图片20170926103645_03_02 (1).png">
                  你好
                </div>
              </li>
            </ul>
          </div>
          <div class="chatfoot">
            <div class="biaoqing">
              <div class="footTop">
                <ul>
                  <li><img src="../../../assets/images/TIM图片20170926103645_31.png" height="19" width="20"/></li>
                  <li class="ExP"><img src="../../../assets/images/TIM图片20170926103645_33.png"></li>
                  <li><img src="../../../assets/images/TIM图片20170926103645_35.png"></li>
                  <li><img src="../../../assets/images/TIM图片20170926103645_37.png"></li>
                  <li><img src="../../../assets/images/TIM图片20170926103645_39.png"></li>
                </ul>
                <div class="clear"></div>
              </div>
            </div>
            <div class="m-chat-main" id="m-chat-main">
              <chat-list
                type="session"
                :msglist="msglist"
                :userInfos="userInfos"
                :myInfo="myInfo"
                @msgs-loaded="msgsLoaded"
              ></chat-list>
            </div>
            <chat-editor
              style="position: absolute;bottom: 0px"
              type="session"
              :scene="scene"
              :to="to"
            ></chat-editor>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import ChatEditor from './ChatEditor'
  import ChatList from './ChatList'
  import util from './utils'
  import './configs/methods'

  export default {
    name: "TalkAbout",
    components: {
      ChatEditor, ChatList
    },
    methods: {
      closeTalk: function () {
        this.$emit("showTalkAbout")
      },
      enterSysMsgs() {
        if (this.hideDelBtn())
          return
        this.$router.push({path: '/im_web/sysmsgs'})

      },
      enterChat(session) {
        if (this.hideDelBtn())
          return
        if (session && session.id)
          this.$router.push({path: `/im_web/chat/${session.id}`})
      },
      enterMyChat() {
        // 我的手机页面
        this.$router.push({path: `/im_web/chat/p2p-${this.myPhoneId}`})
      },
      deleteSession() {
        if (this.delSessionId !== null) {
          this.$store.dispatch('deleteSession', this.delSessionId)
        }
      },
      showDelBtn(vNode) {
        if (vNode && vNode.data && vNode.data.attrs) {
          this.delSessionId = vNode.data.attrs.sessionId
          this.stopBubble = true
          setTimeout(() => {
            this.stopBubble = false
          }, 20)
        }
      },
      hideDelBtn() {
        if (this.delSessionId !== null && !this.stopBubble) {
          // 用于判断是否前置状态是显示删除按钮
          this.delSessionId = null
          return true
        }
        return false
      }
    },
    data() {
      return {
        token: sessionStorage.getItem("token"),
      }
    },
    mounted: function () {
      let _this = this;
      if (!this.token) {
        this.$router.push({path: '/login'});
        alert("您尚未登录！")
      }
    },
    computed: {
      sessionId() {
        let sessionId = this.$route.params.sessionId;
        console.log('sessionId', sessionId);
        return sessionId;
      },
      sessionName() {
        let sessionId = this.sessionId;
        let user = null;
        if (/^p2p-/.test(sessionId)) {
          user = sessionId.replace(/^p2p-/, '');
          if (user === this.$store.state.userUID) {
            return '我的手机'
          }
          let userInfo = this.userInfos[user] || {};
          return util.getFriendAlias(userInfo)
        } else if (/^team-/.test(sessionId)) {
          return '群'
        }
      },
      scene() {
        console.log('scene', util.parseSession(this.sessionId).scene);
        return util.parseSession(this.sessionId).scene
      },
      to() {
        return util.parseSession(this.sessionId).to
      },
      myInfo() {
        return this.$store.state.myInfo
      },
      userInfos() {
        return this.$store.state.userInfos
      },
      msglist() {
        return this.$store.state.currSessionMsgs
      },
      sysMsgUnread() {
        let temp = this.$store.state.sysMsgUnread;
        let sysMsgUnread = temp.addFriend || 0;
        let customSysMsgUnread = this.$store.state.customSysMsgUnread;
        return sysMsgUnread + customSysMsgUnread
      },
      myPhoneId() {
        return `${this.$store.state.userUID}`
      },
      sessionList() {
        return this.$store.state.sessionList.filter(item => {
          item.name = '';
          item.avatar = '';
          if (item.scene === 'p2p') {
            let userInfo = null;
            if (item.to !== this.myPhoneId) {
              userInfo = this.userInfos[item.to]
            } else {
              return false
            }
            if (userInfo) {
              item.name = util.getFriendAlias(userInfo);
              item.avatar = userInfo.avatar
            }
          }
          let lastMsg = item.lastMsg || {};
          if (lastMsg.type === 'text') {
            item.lastMsgShow = lastMsg.text || ''
          } else if (lastMsg.type === 'custom') {
            item.lastMsgShow = util.parseCustomMsg(lastMsg)
          } else if (util.mapMsgType(lastMsg)) {
            item.lastMsgShow = `[${util.mapMsgType(lastMsg)}]`
          } else {
            item.lastMsgShow = ''
          }
          if (item.updateTime) {
            item.updateTimeShow = util.formatDate(item.updateTime, true)
          }
          return item
        });
      }
    },
  }
</script>

<style scoped>

</style>
