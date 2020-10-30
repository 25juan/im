import Socket from "./Socket" ;
import {LoginUser, Password, RegisterUser, UserInfo} from "./interface" ;

interface Option {
  appKey: string,
  isDebug: boolean,
  remote: boolean,
}
class Message {
  private option: Option ;
  private _isInit: boolean ;
  private socket: Socket ;

  /**
   * @param option 初始化message参数
   */
  constructor(option: Option){
    this.option = option ;
    this.init();
  }

  /**
   * @returns 当前message是否已经初始化
   */
  public isInit():boolean {
    return this._isInit ;
  }

  private init():void{
    this._isInit = true ;
    this.socket = new Socket();
  }

  /**
   * 用户登录
   * @param user 用户账号和密码
   */
  public login(user: LoginUser): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {

    });
  }

  public register(user: RegisterUser): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      resolve(true)
    });
  }

  public logout():void {

  }

  public getMyInfo():Promise<UserInfo> {
    return new Promise<UserInfo>((resolve, reject) => {
      resolve(null);
    })
  }
  public updateMyPassword(password: Password):Promise<boolean>{
    return new Promise<boolean>((resolve, reject) => {
      resolve(true)
    })
  }





}
