import Scoket from "./scoket" ;


interface IMessage {
  appKey: string,
  isDebug: boolean,
  remote: boolean,
}
class Message {
  private option: IMessage ;
  private _isInit: boolean ;
  private scoket: Scoket ;


  constructor(option: IMessage){
    this.option = option ;
    this.init();
  }

  public init():void{
    this._isInit = true ;
    // this.scoket = new Scoket();
  }

  public login():void {

  }

  public isInit():boolean {
    return this._isInit ;
  }

}
