import { IAuthenticationModel } from '@model/IAuthenticationModel';
import { makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';

export default class UserStore implements IAuthenticationModel {
  user: any = null;

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
