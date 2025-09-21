import { IAuthenticationModel } from '@model/IAuthenticationModel';
import { action, makeAutoObservable, observable } from 'mobx';
import { RootStore } from './RootStore';
import { LoginMutation } from 'graphql/generated/graphql';
import { WithoutTypename } from '@utils/__typenameOmit';
import { navigate } from '@navigation/RootNavigation';
import * as Location from 'expo-location';
import { LocationData } from '@app_types/type';


 const regex = /^\d+$/;

export default class UserStore implements IAuthenticationModel {
  @observable user: WithoutTypename<LoginMutation['login']> | undefined = undefined
  @observable isForgotModelVisible: boolean = false
  @observable otpInput: string | null = null
  @observable isPasswordChangeSuccessFull: boolean = false
  @observable userCurrentLocation:Location.LocationObject | null = null
  @observable userCurrentPosition:LocationData | null = null
  @observable userEmail: string | undefined = undefined 
  @observable userPassword: string | undefined = undefined

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);
  }

  @action
  passwordChangeStatusTrue(){
    this.isPasswordChangeSuccessFull = true
  }

  @action
  passwordChangeStatusFalse(){
    this.isPasswordChangeSuccessFull = false
  }

  @action
  getUserData(data: WithoutTypename<LoginMutation['login']>) {
    if(data.ok){
    this.user = data
    navigate('Home')
    }
  }

  @action
  getUserLocation(locationData: Location.LocationObject){
    this.userCurrentLocation = locationData
  }

  @action
  openForgotModel(){
    this.isForgotModelVisible = true
  }

  @action
  closeForgotModel(){
    this.isForgotModelVisible = false
  }

  @action
  getUserCurrentLocation(locationData: LocationData){
    this.userCurrentPosition = locationData
  }
  
  @action
  setUserEmail(email: string) {
    this.userEmail = email
  }

  @action
  setUserPassword(password: string){
    this.userPassword = password
  }

  @action
  setUserOtp(otpValue: string){
    if(regex.test(otpValue)){
      this.otpInput = otpValue
    }
  }

  onLogin(user: any) {
    this.user = user;
  }

  onLogout() {
    this.user = undefined;
  }
}
