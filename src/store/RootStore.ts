import { QueryClient } from '@tanstack/react-query';
import { IAuthenticationModel } from '../model/IAuthenticationModel';
import UserStore from './UserStore';
import RegistrationStore from './RegistrationStore';
import GlobalStore from './globalStore';

export class RootStore {
  userStore: UserStore;
  queryClient: QueryClient;
  registrationStore: RegistrationStore
  globalStore: GlobalStore

  private lifecycleStores: any[];

  constructor() {
    this.userStore = new UserStore(this);
    this.queryClient = new QueryClient();
    this.registrationStore = new RegistrationStore(this)
    this.globalStore = new GlobalStore(this)
    this.lifecycleStores = [this.userStore, this.registrationStore, this.globalStore];
  }

  onLogin(user: any) {
    this.lifecycleStores.forEach((store) => store.onLogin?.(user));
  }

  onLogout() {
    this.lifecycleStores.forEach((store) => store.onLogout?.());
    this.queryClient.clear();
  }
}

const rootStore = new RootStore();
export type RootStoreType = typeof rootStore;
export default rootStore;
