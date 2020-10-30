import Socket from "./Socket" ;
import {
  ErrorRet,
  LoginUser,
  SendMessage,
  Message,
  MessageOption,
  Password,
  RegisterUser, RetractMessage,
  User,
  UserInfo,
  UserRet, MessagePagination
} from "./interface" ;



/**
 * 实时聊天对象
 * ```javascript
 * var option = { appKey: "", isDebug: true, remote: true } ;
 * var im = new AIM(option);
 * ```
 */
class AIM {
  private option: MessageOption ;
  private _isInit: boolean ;
  private socket: Socket ;

  /**
   * @param option 初始化message参数
   */
  constructor(option: MessageOption){
    this.option = option ;
    this.init();
  }

  /**
   * @returns 当前message是否已经初始化
   */
  public isInit():boolean {
    return this._isInit ;
  }

  /**
   * @ignore
   */
  private init():void{
    this._isInit = true ;
    this.socket = new Socket();
  }

  /**
   * 用户登录
   * @param user 用户账号和密码
   * @return 返回promise对象,null 表示登录成功，
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
   */
  public register(user: RegisterUser): Promise<null | ErrorRet> {
    return new Promise<null | ErrorRet>((resolve, reject) => {
      resolve(null)
    });
  }

  /**
   * 退出登录
   * @returns 无返回,执行即表示退出登录成功
   */
  public logout():void {

  }

  /**
   * 获取当前登录的用户信息
   * @returns 返回一个携带用户信息的promise对象，
   */
  public getMyInfo():Promise<UserInfo> {
    return new Promise<UserInfo>((resolve, reject) => {
      resolve(null);
    })
  }

  /**
   * 更新IM的密码
   * @param password 当前用户的密码
   * @returns 返回一个promise对象 true表示修改成功,false表示修改失败
   */
  public updateMyPassword(password: Password):Promise<boolean>{
    return new Promise<boolean>((resolve, reject) => {
      resolve(null)
    })
  }
  /**
   * 获取当前登录的用户信息
   * @returns 返回一个携带用户信息的promise对象，
   */
  public getUserInfo(userRet: UserRet ):Promise<UserInfo>{
    return new Promise<UserInfo>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 更新用户头像
   * @param base64 头像的base64字符串编码
   * @returns 返回一个promise对象 true表示更新成功,false表示更新失败
   */
  public updateMyAvatar(base64:string):Promise<boolean>{
    return new Promise<boolean>((resolve, reject) => {
      resolve(null)
    })
  }

  /**
   * 更新用户信息
   * @param base64 头像的base64字符串编码
   * @returns 返回一个promise对象 true表示更新成功,false表示更新失败
   */
  public updateMyInfo(user:User):Promise<boolean>{
    return new Promise<boolean>((resolve, reject) => {
      resolve(null)
    })
  }
  /**
   * 发送消息
   * @param message 发送的消息对象
   * @returns 返回一个promise对象 true表示更新成功,false表示更新失败
   */
  public sendMessage(message:SendMessage):Promise<null>{
    return new Promise<null>((resolve, reject) => {
      resolve(null)
    })
  }
  /**
   * 测回消息
   * @param message 测回的消息对象为空表示测回成功
   */
  public retractMessage(message:RetractMessage):Promise<null | ErrorRet>{
    return new Promise<null | ErrorRet>((resolve, reject) => {
      resolve(null)
    })
  }
  /**
   * 上传资源文件到服务器
   * @param formData 上传到服务器的formData 对象
   * @returns 返回文件对应的服务器端的文件id
   */
  public uploadResource(formData: any):Promise<string | ErrorRet>{
    return new Promise<null | ErrorRet>((resolve, reject) => {
      resolve(null)
    });
  }

  /**
   * 获取历史消息记录
   * @returns 返回历史消息的数组
   */
  public getHistoryMessages(pagination: MessagePagination):Promise<[Message]>{
    return new Promise<[Message]>((resolve, reject) => {
      resolve(null)
    });
  }

}
export default AIM ;
