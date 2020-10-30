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

export interface SendMessage extends UserRet {
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
   *  第一条消息对应的下标，起始为 1
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
