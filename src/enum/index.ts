export enum UserType {
  /**
   * 普通用户
   */
  USER = "user",
  /**
   * 管理员
   */
  ADMIN = "admin"
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
  MESSAGE = "message",
  PUSH = "PUSH" ,
}
