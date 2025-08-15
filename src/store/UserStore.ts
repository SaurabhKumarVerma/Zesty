import { IAuthenticationModel } from '@model/IAuthenticationModel';
import { action, makeAutoObservable, observable } from 'mobx';
import { RootStore } from './RootStore';
import { LoginMutation } from 'graphql/generated/graphql';
import { WithoutTypename } from '@utils/__typenameOmit';
import { navigate } from '@navigation/RootNavigation';

export default class UserStore implements IAuthenticationModel {
  @observable user: WithoutTypename<LoginMutation['login']> | undefined = undefined
  @observable isForgotModelVisible: boolean = false

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);
  }


  @action
  getUserData(data: WithoutTypename<LoginMutation['login']>) {
    if(data.ok){
    this.user = data
    navigate('Home')
    }
  }

  @action
  openForgotModel(){
    this.isForgotModelVisible = true
  }

  @action
  closeForgotModel(){
    this.isForgotModelVisible = false
  }

  onLogin(user: any) {
    this.user = user;
  }

  onLogout() {
    this.user = undefined;
  }
}
