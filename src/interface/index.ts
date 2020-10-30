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
   * 用户名
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

export interface UserInfo {
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
