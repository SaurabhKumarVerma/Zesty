import { IAuthenticationModel } from '@model/IAuthenticationModel';
import { makeAutoObservable, observable } from 'mobx';
import { RootStore } from './RootStore';

export default class UserStore implements IAuthenticationModel {
  user: any = null;
  @observable user_email: string|undefined = undefined 
  @observable user_password: string|undefined = undefined 
  @observable access_token: string|undefined = undefined 
  @observable refresh_token: string|undefined = undefined

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);
  }

  onLogin(user: any) {
    this.user = user;
  }

  onLogout() {
    this.user = null;
  }
}
