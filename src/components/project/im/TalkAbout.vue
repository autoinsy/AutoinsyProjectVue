<template>
  <div class="chatQ">
    <div class="chatbg">
      <Row class="chatbai">
        <div class="chatclose" data-dismiss="modal" @click="closeTalk">
          <img src="../../../assets/images/close.png" height="36" width="36"/>
        </div>
        <Col span="6" class="bg-white m-r-20 left">
          <Menu v-if="menuOpen" mode="horizontal" theme="light" active-name="1">
            <Menu-item name="1" @click.native="goToLink('/talk/session')">
              <Icon type="ios-paper"></Icon>
              最近联系
            </Menu-item>
            <Menu-item name="2" @click.native="goToLink('/talk/contacts')">
              <Icon type="ios-people"></Icon>
              联系人
            </Menu-item>
            <Menu-item name="3" @click.native="searchFriend">
              <Icon type="ios-search"></Icon>
              搜索好友
            </Menu-item>
          </Menu>
          <Input v-if="searchOpen"
                 v-model="searchText"
                 icon="search"
                 placeholder="请输入好友名称..."
                 @keyup.enter.native="enterSearch"
                 @keyup.esc.native="enterEsc"
                 style="width:385px"
                 onblur="upperCase()"
          ></Input>
          <div>
            <router-view name="tabsWrapper"></router-view>
          </div>
        </Col>
        <Col span="16" class="right">
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
              <!--</div>-->
              <chat-editor
                style="position: absolute;bottom: 0px"
                type="session"
                :to="to"
              ></chat-editor>
            </div>
          </div>
        </Col>
      </Row>
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
      goToLink(link) {
        this.$router.push(`${link}`)
      },
      closeTalk: function () {
        this.$emit("showTalkAbout")
      },
      enterSysMsgs() {
        if (this.hideDelBtn())
          return
        this.$router.push({path: '/im_web/sysMsgs'})

      },
      enterChat(session) {
        if (this.hideDelBtn())
          return;
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
      },
      searchFriend() {
        this.menuOpen = !this.menuOpen
        this.searchOpen = !this.searchOpen
      },
    },
    data() {
      return {
        token: sessionStorage.getItem("token"),
        menuOpen: true,
        searchOpen: false,
        searchText: '',
        query: '',
      }
    },
    mounted: function () {
      let _this = this;
      if (!this.token) {
        this.$router.push({path: '/login'});
        alert("您尚未登录！")
      }
      this.query = this.$route.query
    },
    computed: {
      sessionList() {
        console.log(this.$store);
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
      },
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
      to() {
        return this.$route.query.seller;
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
    },
  }
</script>

<style scoped>

</style>
