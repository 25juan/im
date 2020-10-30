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
  username: string,
  password: string,
  extra: string,
};

export interface UserInfo {
  type: string,
  username: string,           // 用户名
  appKey: string,             // 用户所属应用的 appKey，可与 username 共同作为用户的唯一标识
  nickname: string,           // 昵称
  gender: string,             // 'male' / 'female' / 'unknown'
  avatar: string,    // 头像的缩略图地址
  birthday: number,           // 日期的毫秒数
  region: string,             // 地区
  signature: string,          // 个性签名
  address: string,            // 具体地址
  noteName: string,           // 备注名
  noteText: string,           // 备注信息
  isNoDisturb: boolean,       // 是否免打扰
  isInBlackList: boolean,     // 是否在黑名单中
  isFriend: boolean,            // 是否为好友
  isOnline: boolean,            // 是否在线
  devices: Array<String>,   // 在线设备 可能存在多端在线
}
export interface Password {
  oldPwd: string,
  newPwd: string
}
