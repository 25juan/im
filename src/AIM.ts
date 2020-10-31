import Socket from "./Socket" ;
import {
  ProgressEvent,
  LoginEvent,
  ContactEvent,
  NoteUser,
  ErrorRet,
  LoginUser,
  SendMessage,
  Message,
  MessageOption,
  Password,
  RegisterUser,
  RetractMessage,
  User,
  CreateConversation,
  UserInfo,
  MessageHaveRead,
  UserRet,
  MessagePagination,
  DownloadFileMessage,
  Conversation,
  ChatRoomInfo,
  GroupInfo,
  InvitationUser,
  ReceiveChatRoomAdminApprovalEVent,
  ReceiveChatRoomAdminRejectEvent,
  ReceiveApplyJoinChatRoomApprovalEvent, PushEvent,
} from "./interface" ;


/**
 * 创建实时聊天对象
 * ```javascript
 * var option = { appKey: "", isDebug: true, remote: true } ;
 * var im = new AIM(option);
 * ```
 */
class AIM {
  private option: MessageOption;
  private _isInit: boolean;
  private socket: Socket;

  /**
   * @param option 初始化message参数
   * @category 构造函数
   */
  constructor(option: MessageOption) {
    this.option = option;
    this.init();
  }

  /**
   * @returns 当前message是否已经初始化
   * @category 初始化
   */
  public isInit(): boolean {
    return this._isInit;
  }

  /**
   * @ignore
   */
  private init(): void {
    this._isInit = true;
    this.socket = new Socket();
  }

  /**
   * 用户登录
   * @param user 用户账号和密码
   * @return 返回promise对象,null 表示登录成功，
   * @category 用户相关
   */
  public login(user: LoginUser): Promise<null | ErrorRet> {
    return new Promise<null | ErrorRet>((resolve, reject) => {
      resolve(null)
    });
  }

  /**
   * 用户注册
   * @param user 用户账号和密码以及额外参数
   * @return 返回promise对象,null 表示登录成功，
   * @category 用户相关
   */
  public register(user: RegisterUser): Promise<null | ErrorRet> {
    return new Promise<null | ErrorRet>((resolve, reject) => {
      resolve(null)
    });
  }

  /**
   * 退出登录
   * @returns 无返回,执行即表示退出登录成功
   * @category 用户相关
   */
  public logout(): void {

  }

  /**
   * 获取当前登录的用户信息
   * @returns 返回一个携带用户信息的promise对象，
   * @category 用户相关
   */
  public getMyInfo(): Promise<UserInfo> {
    return new Promise<UserInfo>((resolve, reject) => {
      resolve(null);
    })
  }

  /**
   * 更新IM的密码
   * @param password 当前用户的密码
   * @returns 返回一个promise对象 true表示修改成功,false表示修改失败
   * @category 用户相关
   */
  public updateMyPassword(password: Password): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 获取当前登录的用户信息
   * @returns 返回一个携带用户信息的promise对象，
   * @category 用户相关
   */
  public getUserInfo(userRet: UserRet): Promise<UserInfo> {
    return new Promise<UserInfo>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 更新用户头像
   * @param base64 头像的base64字符串编码
   * @returns 返回一个promise对象 true表示更新成功,false表示更新失败
   * @category 用户相关
   */
  public updateMyAvatar(base64: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 更新用户信息
   * @param base64 头像的base64字符串编码
   * @returns 返回一个promise对象 true表示更新成功,false表示更新失败
   * @category 用户相关
   */
  public updateMyInfo(user: User): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 发送消息
   * @param message 发送的消息对象
   * @returns 返回一个promise对象 true表示更新成功,false表示更新失败
   * @category 消息相关
   */
  public sendMessage(message: SendMessage): Promise<null> {
    return new Promise<null>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 撤回消息
   * @param message 撤回的消息对象为空表示测回成功
   * @category 消息相关
   */
  public retractMessage(message: RetractMessage): Promise<null | ErrorRet> {
    return new Promise<null | ErrorRet>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 上传资源文件到服务器
   * @param formData 上传到服务器的formData 对象
   * @returns 返回文件对应的服务器端的文件id
   * @category 工具方法
   */
  public uploadResource(formData: any): Promise<string | ErrorRet> {
    return new Promise<null | ErrorRet>((resolve, reject) => {
      resolve(null)
    });
  }

  /**
   * 获取历史消息记录
   * @returns 返回历史消息的数组
   * @category 消息相关
   */
  public getHistoryMessages(pagination: MessagePagination): Promise<[Message]> {
    return new Promise<[Message]>((resolve, reject) => {
      resolve(null)
    });
  }

  /**
   * 下载文件 暂时只支持 h5
   * @category 工具方法
   */
  public downloadFile(message: DownloadFileMessage): void {

  }

  /**
   * 创建会话
   * @param conversation 会话参数
   * @returns 返回null则表示创建会话成功。否则创建会话失败
   * @category 会话相关
   */
  public createConversation(conversation: CreateConversation): Promise<null | ErrorRet> {
    return new Promise<ErrorRet | null>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 删除会话
   * @param conversation 会话参数
   * @returns 返回null则表示创删除会话成功。否则删除会话失败
   * @category 会话相关
   */
  public deleteConversation(conversation: CreateConversation): Promise<null | ErrorRet> {
    return new Promise<ErrorRet | null>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 进入会话
   * @param conversation 会话参数
   * @returns 返回null则表示进入会话成功。否则进入会话失败
   * @category 会话相关
   */
  public enterConversation(conversation: CreateConversation): Promise<null | ErrorRet> {
    return new Promise<ErrorRet | null>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 获取会话
   * @param conversation 会话参数
   * @returns 返回当前会话
   * @category 会话相关
   */
  public getConversation(conversation: CreateConversation): Promise<Conversation> {
    return new Promise<Conversation>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 获取会话列表
   * @param conversation 会话参数
   * @returns 会话列表
   * @category 会话相关
   */
  public getConversations(conversation: CreateConversation): Promise<[Conversation]> {
    return new Promise<[Conversation]>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 设置消息已读
   * @param conversation 会话参数
   * @returns null则表示设置已读成功
   * @category 消息相关
   */
  public setMsgHaveRead(message: MessageHaveRead): Promise<null | ErrorRet> {
    return new Promise<null | ErrorRet>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 获取当前登录用户所加入或者创建的所有群聊
   * @returns 群聊列表
   * @category 群聊相关
   */
  public getChatRoomListByUser(): Promise<[ChatRoomInfo]> {
    return new Promise<[ChatRoomInfo]>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 获取当前登录用户所加入或者创建的所有讨论组
   * @returns 讨论组列表
   * @category 讨论组
   */
  public getGroupListByUser(): Promise<[GroupInfo]> {
    return new Promise<[GroupInfo]>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 获取指定群聊的信息
   * @param roomId 群聊id
   * @returns 群聊信息
   * @category 群聊相关
   */
  public getChatRoomInfo(roomId: string): Promise<ChatRoomInfo> {
    return new Promise<ChatRoomInfo>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 获取指定讨论组的信息
   * @param groupId 讨论组id
   * @returns 讨论组信息
   * @category 讨论组
   */
  public getGroupInfo(groupId: string): Promise<GroupInfo> {
    return new Promise<GroupInfo>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 加入群聊 会自动创建并返回该聊天室会话信息。
   * @param roomId 讨论组id
   * @returns 获取指定讨论组的信息
   * @category 讨论组
   */
  public enterChatRoom(roomId: string): Promise<Conversation> {
    return new Promise<Conversation>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 退出群聊
   * @param roomId 群聊id
   * @returns 返回null表示退出群聊成功
   * @category 群聊相关
   */
  public leaveChatRoom(roomId: string): Promise<null | ErrorRet> {
    return new Promise<null | ErrorRet>((resolve, reject) => {
      resolve(null)
    })
  }
  /**
   * 退出讨论组
   * @param groupId 讨论组id
   * @returns 返回null表示退出讨论组成功
   * @category 讨论组
   */
  public leaveGroup(groupId: string): Promise<null | ErrorRet> {
    return new Promise<null | ErrorRet>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 发送添加好友请求，调用后对方会收到 好友事件 事件。
   * @param user 添加目标用户信息
   * @returns 返回null表示发送添加好友请求成功
   * @category 好友相关
   */
  public sendInvitationRequest(user: InvitationUser): Promise<null | ErrorRet> {
    return new Promise<null | ErrorRet>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 接受申请好友请求，调用后对方会收到 好友事件 事件。
   * @param user 申请发送用户
   * @returns 返回null表示接受申请好友请求成功
   * @category 好友相关
   */
  public acceptInvitation(user: UserRet): Promise<null | ErrorRet> {
    return new Promise<null | ErrorRet>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 拒绝申请好友请求，调用成功后对方会收到 好友事件 事件。
   * @param user 申请发送用户
   * @returns 返回null表示拒绝申请好友请求成功
   * @category 好友相关
   */
  public declineInvitation(user: InvitationUser): Promise<null | ErrorRet> {
    return new Promise<null | ErrorRet>((resolve, reject) => {
      resolve(null)
    })
  }
  /**
   * 获取好友列表
   * @returns 返回用户好友列表
   * @category 好友相关
   */
  public getFriends(): Promise<[UserInfo]> {
    return new Promise<[UserInfo]>((resolve, reject) => {
      resolve(null)
    })
  }
  /**
   * 删除好友，调用成功后对方会收到 好友事件 事件
   * @returns 返回null 表示从好友列表里面删除好友成功
   * @category 好友相关
   */
  public removeFromFriendList(user: UserRet): Promise<[UserInfo]> {
    return new Promise<[UserInfo]>((resolve, reject) => {
      resolve(null)
    })
  }
  /**
   * 更新好友备注名。
   * @returns 返回null 表示更新用户名成功
   * @category 好友相关
   */
  public updateFriendNoteName(user: NoteUser): Promise<[UserInfo]> {
    return new Promise<[UserInfo]>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 添加接收到消息事件的监听。
   * @category 消息事件
   */
  public addReceiveMessageListener(listener: (message: Message)=>void):void{

  }
  /**
   * 添加聊天室消息事件的监听。
   * @category 消息事件
   */
  public addReceiveChatRoomMsgListener(listener: (message: Message[])=>void):void{

  }
  /**
   * 已读消息回执事件监听。
   * @category 消息事件
   */
  public addReceiptMessageListener(listener: (message: Message)=>void):void{

  }
  /**
   * 消息撤回事件监听。
   * @category 消息事件
   */
  public addMessageRetractListener(listener: (message: Message)=>void):void{

  }

  /**
   * 好友相关通知事件。
   * @param listener 事件触发的回调函数
   * @category 好友事件
   */
  public addContactNotifyListener(listener: (event: ContactEvent)=>void):void{

  }

  /**
   * 登录状态变更事件，例如在其他设备登录把当前设备挤出，会触发这个事件。
   * @param listener 事件触发的回调函数
   * @category 用户事件
   */
  public addLoginStateChangedListener(listener:(event: LoginEvent)=>void):void{

  }
  /**
   * 发送文件（图片、文件）进度回调，该回调会回调多次。
   * @param listener 事件触发的回调函数
   * @category 加群事件
   */
  public addUploadProgressListener(listener:(event: ProgressEvent)=>void):void{

  }
  /**
   * 监听接收入群申请事件
   * @param listener 事件触发的回调函数
   * @category 加群事件
   */
  public addReceiveApplyJoinChatRoomApprovalListener(listener:(event: ReceiveApplyJoinChatRoomApprovalEvent)=>void):void{

  }
  /**
   * 监听管理员拒绝入群申请事件
   * @param listener 事件触发的回调函数
   * @category 加群事件
   */
  public addReceiveChatRoomAdminRejectListener(listener:(event: ReceiveChatRoomAdminRejectEvent)=>void):void{

  }
  /**
   * 监听管理员拒绝入群申请事件
   * @param listener 事件触发的回调函数
   * @category 加群事件
   */
  public addReceiveChatRoomAdminApprovalListener(listener:(event: ReceiveChatRoomAdminApprovalEVent)=>void):void{

  }
  /**
   * 监听推送事件
   * @param listener 事件触发的回调函数
   * @category 推送事件
   */
  public addPushListener(listener:(event: PushEvent)=>void):void{

  }
  /**
   * 注册设备别名
   * @param alias 事件触发的回调函数
   * @category 推送相关
   */
  public setAlias (alias: string):void {

  }

  /**
   * 获取当前注册设备的id
   * @category 推送相关
   */
  public getRegistrationID():Promise<string> {
    return new Promise<string>((resolve, reject) => {
      resolve()
    })
  }


}


export default AIM;
