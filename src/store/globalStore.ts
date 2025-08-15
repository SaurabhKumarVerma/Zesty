import { action, makeAutoObservable, observable } from "mobx";
import { RootStore } from "./RootStore";


export default class GlobalStore {
    @observable isVisible: boolean = true

    constructor(private rootStore: RootStore) {
        makeAutoObservable(this);
      }

      @action
      showContent(status: boolean){
        this.isVisible = status
      }
    
}