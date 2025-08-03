import { action, makeAutoObservable, observable } from "mobx";
import { RootStore } from "./RootStore";


export default class RegistrationStore {

    @observable user_email: string | undefined = undefined
    @observable user_password: string | undefined = undefined

    constructor(private rootStore: RootStore){
        makeAutoObservable(this)
    }


    @action
    getUserEmail(email: string){
        this.user_email = email
    }

    @action
    getUserPassword(password: string){
        this.user_password = password
    }
}