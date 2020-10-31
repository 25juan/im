export interface MessageOption {
  /**
   * 管理端申请的appKey
   */
  appKey: string,
  /**
   * 是否处于开发模式
   */
  isDebug: boolean,
  /**
   * 是否开启漫游，漫游将会同步拉取各个端的历史消息
   */
  remote: boolean,
}

export interface LoginUser {
  /**
   * 用户名也是登录账号
   */
  username: string,
  /**
   * 密码
   */
  password: string,
};

export interface RegisterUser {
  /**
   * 用户登录用户名
   */
  username: string,
  /**
   * 用户密码
   */
  password: string,
  /**
   * 附加的额外参数
   */
  extra: string,
};

export interface User {
  /**
   * 昵称
   */
  nickname: string,
  /**
   * {@link Gender}
   * 性别
   */
  gender: string,
  /**
   * 头像的缩略图地址
   */
  avatar: string,
  /**
   * 日期的毫秒数
   */
  birthday: number,
  /**
   * 地区
   */
  region: string,
  /**
   * 个性签名
   */
  signature: string,
  /**
   * 具体地址
   */
  address: string,
  /**
   * 备注名
   */
  noteName: string,
  /**
   * 备注信息
   */
  noteText: string,
}

export interface UserInfo extends User {
  /**
   * {@link UserType}
   * 用户类型
   */
  type: string,
  /**
   * 用户名
   */
  username: string,
  /**
   * 用户所属应用的 appKey，可与 username 共同作为用户的唯一标识
   */
  appKey: string,

  /**
   * 是否免打扰
   */
  isNoDisturb: boolean,
  /**
   * 是否在黑名单中
   */
  isInBlackList: boolean,
  /**
   * 是否为好友
   */
  isFriend: boolean,
  /**
   * 是否在线
   */
  isOnline: boolean,
  /**
   * {@link Device}
   * 在线设备 可能存在多端在线
   */
  devices: Array<String>,
}

export interface Password {
  /**
   * 旧密码
   */
  oldPwd: string,
  /**
   * 新密码
   */
  newPwd: string
}

export interface ErrorRet {
  /**
   * 错误码
   */
  code: number,
  /**
   * 错误消息
   */
  msg: string
}

export interface Location {
  /**
   * 纬度
   */
  latitude: string,
  /**
   * 经度
   */
  longitude: string,
  /**
   * 地图缩放比例
   */
  scale: number,
  /**
   * 详细地址
   */
  address: string,
}

export interface UserRet {
  /**
   * 用户名也是登录账号
   */
  username: string,
  /**
   * appKey 后台申请的唯一appkey
   */
  appKey: string
}

export interface SendMessage {
  /**
   * 用户名也是登录账号
   */
  username: string,
  /**
   * appKey 后台申请的唯一appkey
   */
  appKey: string
  /**
   * {@link ChatType}
   * 聊天类型
   */
  chatType: string,
  /**
   * 对象群组 id。当 type 为 'group' 时，groupId 为必填。
   */
  groupId: string,

  /**
   * 对象聊天室 id。当 type 为 'chatRoom' 时，roomId 为必填。
   */
  roomId: string,

  /**
   * { @link MessageType }
   * 消息类型
   */
  messageType: string,

  /**
   * 文本消息内容
   * 当messageType为body此属性必填
   * 最大长度不超过250个字符
   */
  body: string,

  /**
   * 文件资源id,发送图片、视频、语音
   * 当messageType为image、voice、video此属性必填
   * 调用该接口前需要先调用 uploadResource接口上传资源到服务器
   */
  mediaId: string,

  /**
   * 自定义消息
   * 当messageType为custom此属性必填
   */
  custom: string,
  /**
   * 地理位置消息
   * 当messageType为location此属性必填
   */
  location: Location,
  /**
   * 消息附加的额外参数可以是json字符串
   */
  extra: string,
  /**
   * 消息创建时间
   */
  date: null,
  /**
   * {@link EventType}
   * 消息对象
   */
  eventType: string
}

export interface RetractMessage extends UserRet {
  /**
   * 消息id
   */
  messageId: string,
}

export interface Message extends SendMessage {
  /**
   * 消息id
   */
  messageId: string,

  /**
   * 消息接收者
   */
  targetUserName: string,
  /**
   * 消息接收者昵称
   */
  targetNickName: string,

  /**
   * 消息发送者
   */
  formUserName: string,
  /**
   * 消息发送者昵称
   */
  formNickName: string,

}

export interface MessagePagination {
  /**
   * {@link ChatType}
   * 会话类型。
   */
  type: string,
  /**
   * {@link ChatType}
   * type 为group时必填。讨论组的id
   */
  groupId: string,
  /**
   * {@link ChatType}
   * type 为room时必填。群聊的id
   */
  roomId: string,
  /**
   * {@link ChatType}
   * type 为single时必填。对方的用户名
   */
  username: string,
  /**
   * appkey 管理端申请的appkey账号
   */
  appKey: string,
  /**
   *  第一条消息对应的下标，起始为 0
   */
  from: number,
  /**
   *  消息数。当 from = 0 并且 limit = -1 时，返回所有的历史消息。
   */
  limit: null,
  /**
   * 是否降序（消息时间戳从大到小排序），默认为 false。
   */
  isDescend: boolean,
}
export interface DownloadFileMessage {
  /**
   * 用户名也是登录账号
   */
  username: string,
  /**
   * appKey 后台申请的唯一appkey
   */
  appKey: string

  /**
   * 消息id
   */
  messageId: string,
}
export interface CreateConversation {

  /**
   * appKey 后台申请的唯一appkey
   */
  appKey: string
  /**
   * {@link ChatType}
   * 聊天类型
   */
  chatType: string,
  /**
   * 对象群组 id。当 type 为 'group' 时，groupId 为必填。
   */
  groupId: string,

  /**
   * 对象聊天室 id。当 type 为 'chatRoom' 时，roomId 为必填。
   */
  roomId: string,
  /**
   * 用户名也是登录账号
   * 当 type 为 single 时，username 为必填。
   */
  username: string,
}

export interface Conversation {
  /**
   * 会话标题
   */
  title: string,

  latestMessage: Message,
  /**
   * 未读消息数
   */
  unreadCount: number,

  /**
   * {@link ChatType}
   * 聊天类型
   */
  chatType: string,
  /**
   * 聊天对象用户信息
   */
  target: UserInfo
}
export interface MessageHaveRead {
  /**
   * appKey 后台申请的唯一appkey
   */
  appKey: string
  /**
   * {@link ChatType}
   * 聊天类型
   */
  chatType: string,
  /**
   * 对象群组 id。当 type 为 'group' 时，groupId 为必填。
   */
  groupId: string,

  /**
   * 对象聊天室 id。当 type 为 'chatRoom' 时，roomId 为必填。
   */
  roomId: string,
  /**
   * 用户名也是登录账号
   * 当 type 为 single 时，username 为必填。
   */
  username: string,
  /**
   * 消息id
   */
  messageId: string,
}
 export interface ChatRoomInfo {
   /**
    * 聊天类型
    */
   chatType: string,
   /**
    * 群id
    */
   id: string,
   /**
    * @{link ChatRoomType}
    *  公共群和私有群
    */
   type: string,
   /**
    * 群头像的缩略图地址
    */
   avatar: string,
   /**
    * 群组名称
    */
   chatRoomNickname: string,
   /**
    * 群组描述
    */
   desc: string,
   /**
    * 群组等级，默认等级 4
    */
   level: number,
   /**
    * 群主的 username
    */
   owner: string,
   /**
    * 群主的 appKey
    */
   ownerAppKey: string,
   /**
    * 最大成员数
    */
   maxMemberCount: number,
   /**
    * 是否免打扰
    */
   isNoDisturb: boolean,
   /**
    * 是否屏蔽群消息
    */
   isBlocked: boolean,
   /**
    * 是否被禁言
    */
   isForbiddenWords: boolean

 }
export interface ChatRoomMemberInfo{
  /**
   * 群成员用户信息
   */
  user: UserInfo,
  /**
   * 群昵称
   */
  chatRoomNickname: string,
  /**
   * @{link UserType}
   * 用户在群里面的角色（分别对应：  群主 | 管理员 | 普通）
   */
  memberType: string,
  /**
   * 进群时间戳（毫秒）
   */
  joinChatRoomTime: number,
}
export interface GroupInfo {

  /**
   * 聊天类型
   */
  chatType: string,
  /**
   * 讨论组id
   */
  groupId: string,
  /**
   * 讨论组昵称
   */
  groupNickName: string,
  /**
   * 讨论组所属 AppKey
   */
  appKey: string,
  /**
   * 讨论组创建者
   */
  owner: UserInfo,
  /**
   * 讨论组最大成员数量
   */
  maxMemberCount: number,
  /**
   * 讨论组描述
   */
  description: string,
  /**
   * 讨论组当前成员数量
   */
  memberCount: number,
  /**
   * 讨论组创建时间戳
   */
  createTime: number
}
export interface InvitationUser {
  /**
   * 对方用户名也是登录账号
   */
  username: string,
  /**
   * appKey 后台申请的唯一appkey
   */
  appKey: string,
  /**
   * 申请理由或者拒绝理由
   */
  reason: string,
}
export interface NoteUser {
  /**
   * 对方用户名也是登录账号
   */
  username: string,
  /**
   * appKey 后台申请的唯一appkey
   */
  appKey: string,
  /**
   * 备注名。不支持 "\n" 和 "\r" 字符，长度要求为 0 ~ 64 Byte。
   */
  noteName: string,
}
export interface ContactEvent {
  /**
   * {@link ContactEventType}
   * 事件类型
   */
  type:string,
  /**
   * 事件发生的理由，该字段由对方发起请求时所填，对方如果未填则返回默认字符串。
   */
  reason:string,
  /**
   * 事件发送者的 username
   */
  fromUsername:string,
  /**
   * 事件发送者的 AppKey。
   */
  fromUserAppKey:string
}

export interface LoginEvent {
  /**
   * {@link LoginEventType}
   * 事件类型
   */
  type: string
}
export interface ProgressEvent {
  /**
   * 消息id
   */
  messageId: string,
  /**
   * 上传进度，从 0-1 float 类型
   */
  progress:number
}
export interface ReceiveApplyJoinChatRoomApprovalEvent {
  /**
   * 事件id
   */
  eventId:string,
  /**
   * 申请入群的群聊id
   */
  roomId:string,

  /**
   * 是否是用户主动申请入群，true：主动申请加入，false：被邀请加入
   */
  isInitiativeApply: boolean
  /**
   * 发送申请的用户
   */
  sendApplyUser:[UserInfo]
  /**
   * 入群原因
   */
  reason: string
}
export interface ReceiveChatRoomAdminRejectEvent {
  /**
   * 事件id
   */
  eventId:string,
  /**
   * 事件原因
   */
  rejectReason:string,
  /**
   * 操作的管理员
   */
  chatRoomManager:UserInfo
}
export interface ReceiveChatRoomAdminApprovalEVent {
  /**
   * 管理员是否同意申请，true：同意，false：拒绝.
   */
  isAgreeApply:boolean,
  /**
   * 申请入群事件的事件 id.
   */
  applyEventID:string,

  /**
   * 群 id.
   */
  chatRoomId:string,
  /**
   * 操作的管理员
   */
  chatRoomAdmin:UserInfo
  /**
   * 申请或被邀请加入群的用户，即：实际入群的用户
   */
  users:[UserInfo]
}
export interface PushEvent {
  /**
   * 推送消息的id
   */
  pushId: string
  /**
   * 推送的时间戳
   */
  date: number ,
  /**
   * 推送的内容
   */
  content: string ,

  /**
   * 推送的额外参数
   */
  extra: string
}
