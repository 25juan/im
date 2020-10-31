export enum UserType {
  /**
   * 普通用户
   */
  USER = "user",
  /**
   * 管理员
   */
  ADMIN = "admin",
  /**
   * 群主
   */
  OWNER = "owner"
};
export enum Gender {
  /**
   * 男性
   */
  MALE = "male" ,
  /**
   * 女性
   */
  FEMALE = "female",
  /**
   * 未知
   */
  UNKNOWN = "unknown",
}
export enum Device {
  /**
   * web平台
   */
  WEB = "web" ,
  /**
   * Android平台
   */
  ANDROID = "android",
  /**
   * ios平台
   */
  IOS = "ios",
  /**
   * RN平台
   */
  RN = "ReactNative" ,
  /**
   *
   * 微信小程序
   */
  WXMINI = "wxMini",
}
export enum MessageType {
  /**
   * 文本消息
   */
  TEXT = "text" ,
  /**
   * 图片消息
   */
  IMAGE = "image",
  /**
   * 语音消息
   */
  VOICE = "voice",
  /**
   * 语音消息
   */
  LOCATION = "location",
  /**
   * 语音消息
   */
  VIDEO = "video",
  /**
   * 红包
   */
  ENVELOPE = "envelope",
  /**
   * 自定义消息
   */
  CUSTOM = "custom",
}
export enum ChatType {
  /**
   * 单聊
   */
  SINGLE = "single" ,
  /**
   * 讨论组
   */
  GROUP = "group",
  /**
   * 群聊
   */
  ROOM = "room",
}
export enum EventType {
  /**
   * 当前消息是im消息
   */
  MESSAGE = "message",
  /**
   * 当前消息是推送消息
   */
  PUSH = "PUSH" ,
}
export enum ChatRoomType {
  /**
   * 公共群
   */
  PRIVATE = "private",
  /**
   * 私有群
   */
  PUBLIC = "public"
}

export enum ContactEventType{
  /**
   * 收到添加好友请求事件
   */
  RECEIVED = "received",
  /**
   * 同意添加好友
   */
  ACCEPTED = "accepted",
  /**
   * 拒绝添加好友
   */
  DECLINED = "declined",
  /**
   * 删除好友
   */
  DELETE = "deleted",
}
export enum LoginEventType{
  /**
   * 用户密码变更
   */
  PASSWORDCHANGE = "password_change",
  /**
   * 用户退出登录
   */
  LOGOUT = "logout",
  /**
   * 用户被删除
   */
  DELETE = "deleted",
  /**
   * 用户账户异常
   */
  UNEXPECTED = "unexpected",
}

