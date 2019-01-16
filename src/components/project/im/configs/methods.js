export default {
  /**
   * 连接建立后的回调, 会传入一个对象, 包含登录的信息, 有以下字段
   *      lastLoginDeviceId: 上次登录的设备的设备号
   *      customTag: 客户端自定义tag,登录时多端同步改字段，最大32个字符
   *      connectionId: 本次登录的连接号
   *      ip: 客户端IP
   *      port: 客户端端口
   *      country: 本次登录的国家
   */
  onConnect: function () {

  },
  /**
   * 发生错误的回调, 会传入错误对象
   */
  onError: function () {

  },
  /**
   * 即将重连的回调, 此时说明 SDK 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接, 此回调会收到一个对象, 包含额外的信息, 有以下字段
   *      duration: 距离下次重连的时间
   *      retryCount: 重连尝试的次数
   */
  onWillReconnect: function () {

  },
  /**
   * 断开连接后的回调, 此时说明 SDK 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面, 此回调会收到一个对象, 包含错误的信息, 有以下字段
   *      code: 出错时的错误码, 可能为空
   *      302: 账号或者密码错误, 请跳转到登录页面并提示错误
   *      417: 重复登录, 已经在其它端登录了, 请跳转到登录页面并提示错误
   *      'kicked': 被踢: 当code为'kicked'的时候, 此对象会有以下字段
   *            reason: 被踢的原因
   *            samePlatformKick: 不允许同一个帐号在多个地方同时登录
   *            serverKick: 被服务器踢了
   *            otherPlatformKick: 被其它端踢了
   *            message: 文字描述的被踢的原因
   */
  onDisconnect: function () {

  },
  /**
   * 多端登录状态变化的回调, 会收到登录端列表, 以下情况会收到此回调
   *      登录时其它端在线
   *      登录后其它端上线或者下线
   */
  onLoginPortsChange: function () {

  },
  /**
   * 同步黑名单的回调, 会传入黑名单列表blacklist
   *    blacklist的属性invalid包含被删除的黑名单列表
   *    此回调是增量回调, 可以调用nim.mergeRelations和nim.cutRelations来合并数据
   */
  onBlacklist: function () {

  },
  /**
   * 当前登录用户在其它端加入黑名单/从黑名单移除后的回调, 会传入一个参数, 包含两个字段
   *        account: 要加入黑名单/从黑名单移除的账号
   *        isAdd: true表示加入黑名单, false表示从黑名单移除
   */
  onMarkInBlacklist: function () {

  },
  /**
   * 同步静音列表的回调, 会传入静音列表mutelist
   *        mutelist的属性invalid包含被删除的静音列表
   *        此回调是增量回调, 可以调用nim.mergeRelations和nim.cutRelations来合并数据
   */
  onMutelist: function () {

  },
  /**
   * 当前登录用户在其它端加入静音列表/从静音列表移除后的回调, 会传入一个参数, 包含两个字段
   *        account: 要加入黑名单/从黑名单移除的账号
   *        isAdd: true表示加入静音列表, false表示从静音列表移除
   */
  onMarkInMutelist: function () {

  },
  /**
   * 同步好友列表的回调, 会传入好友列表
   */
  onFriends: function () {

  },
  /**
   * 当前登录用户在其它端进行好友相关的操作后的回调
   *        操作包括
   *                直接加为好友
   *                申请加为好友
   *                通过好友申请
   *                拒绝好友申请
   *                删除好友
   *                更新好友
   *        此回调会收到一个参数obj, 它有一个字段type的值为操作的类型, 具体类型如下：
   *                'addFriend' (直接加为好友), 此时obj的字段如下:
   *                account的值为被直接加为好友的账号
   *                friend为被直接加为好友的好友对象
   *                ps为附言
   *                       'applyFriend' (申请加为好友), 此时obj的字段如下:
   *                       account的值为被申请加为好友的账号
   *                ps为附言
   *                       'passFriendApply' (通过好友申请), 此时obj的字段如下:
   *                       account的值为被通过好友申请的账号
   *                       friend为被通过好友申请的好友对象
   *                ps为附言
   *                       'rejectFriendApply' (拒绝好友申请), 此时obj的字段如下:
   *                       account的值为被拒绝好友申请的账号
   *                ps为附言
   *                       'deleteFriend' (删除好友), 此时obj的字段如下:
   *                       account的值为被删除好友的账号
   *                       'updateFriend' (更新好友), 此时obj的字段如下:
   *                       friend的值为被更新的好友对象
   */
  onSyncFriendAction: function () {

  },
  /**
   * 同步登录用户名片的回调, 会传入用户名片
   */
  onMyInfo: function () {

  },
  /**
   * 当前登录用户在其它端修改自己的个人名片之后的回调, 会传入用户名片
   */
  onUpdateMyInfo: function () {

  },
  /**
   * 同步好友用户名片的回调, 会传入用户名片数组
   */
  onUsers: function () {

  },
  /**
   * 用户名片更新后的回调, 会传入用户名片
   */
  onUpdateUser: function () {

  },
  /**
   * 同步最近会话列表回调, 会传入会话列表, 按时间正序排列, 即最近聊过天的放在列表的最后面。
   */
  onSessions: function () {

  },
  /**
   * 更新会话的回调, 会传入会话, 以下情况会收到此回调
   *    收到消息
   *    发送消息
   *    设置当前会话
   *    重置会话未读数
   */
  onUpdateSession: function () {

  },
  /**
   * 同步漫游消息的回调, 每个会话对应一个回调, 会传入消息数组
   */
  onRoamingMsgs: function () {

  },
  /**
   * 同步离线消息的回调, 每个会话对应一个回调, 会传入消息数组
   */
  onOfflineMsgs: function () {

  },
  /**
   * 收到消息的回调, 会传入消息对象
   * 当前登录帐号在其它端发送消息之后也会收到此回调, 注意此时消息对象的from字段就是当前登录的帐号
   */
  onMsg: function () {

  },
  /**
   * 同步离线系统通知的回调, 会传入系统通知数组
   */
  onOfflineSysMsgs: function () {

  },
  /**
   * 收到系统通知的回调, 会传入系统通知
   */
  onSysMsg: function () {

  },
  /**
   * 更新系统通知后的回调, 会传入系统通知
   * 以下情况会收到此回调
   *    通过好友申请
   *    拒绝好友申请
   *    接受入群邀请
   *    拒绝入群邀请
   *    通过入群申请
   *    拒绝入群申请
   *    这些操作的发起方会收到此回调, 接收被更新的系统通知, 根据操作的类型系统通知会被更新为下面两种状态
   *        'passed': 已通过
   *        'rejected': 已拒绝
   */
  onUpdateSysMsg: function () {

  },
  /**
   * 收到系统通知未读数的回调
   *    SDK 会管理内建系统通知的未读数, 此回调接收的对象包括以下字段
   *    total: 总共的未读数
   *    friend: 所有跟好友相关的系统通知的未读数
   *    addFriend: 直接加为好友的未读数
   *    applyFriend: 申请加为好友的未读数
   *    passFriendApply: 通过好友申请的未读数
   *    rejectFriendApply: 拒绝好友申请的未读数
   *    deleteFriend: 删除好友的未读数
   *    team: 所有跟群相关的系统通知的未读数
   *    teamInvite: 入群邀请的未读数
   *    rejectTeamInvite: 接受入群邀请的未读数
   *    applyTeam: 入群申请的未读数
   *    rejectTeamApply: 拒绝入群申请的未读数
   */
  onSysMsgUnread: function () {

  },
  /**
   * 更新系统通知未读数的回调
   */
  onUpdateSysMsgUnread: function () {

  },
  /**
   * 同步离线自定义系统通知的回调, 会传入系统通知数组
   */
  onOfflineCustomSysMsgs: function () {

  },
  /**
   * 收到自定义系统通知的回调, 会传入系统通知
   */
  onCustomSysMsg: function () {

  },
  /**
   * 当上面各个同步（不包括下面的同步群成员）完成后, 会调用此回调；注意, SDK保证在onsyncdone调用的时候上面的同步肯定完成了, 但是不保证各个同步回调的顺序。
   */
  onSyncDone: function () {

  },
  enterHistory () {
    this.$router.push({
      path: `/im_web/chatHistory/${this.sessionId}`
    })
  },
  onClickBack () {
    // location.href = '#/contacts'
    window.history.go(-1)
  },
  msgsLoaded () {
    pageUtil.scrollChatListDown()
  },
  enterNameCard () {
    if (/^p2p-/.test(this.sessionId)) {
      let account = this.sessionId.replace(/^p2p-/, '')
      if (account === this.$store.state.userUID) {
        this.$router.push({
          path: `/im_web/general`
        })
        return
      }
      this.$router.push({path: `/im_web/namecard/${account}`})
    }
  },
  enterTeamInfo(){
    let account = this.sessionId.replace(/^team-/, '')
    console.log(account)
    this.$router.push({path: `/im_web/teamInfo/${account}`})
  },
}
