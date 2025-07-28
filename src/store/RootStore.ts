import { QueryClient } from '@tanstack/react-query';
import { IAuthenticationModel } from '../model/IAuthenticationModel';
import UserStore from './UserStore';

export class RootStore {
  userStore: UserStore;
  queryClient: QueryClient;

  private lifecycleStores: IAuthenticationModel[];

  constructor() {
    this.userStore = new UserStore(this);
    this.queryClient = new QueryClient();

    this.lifecycleStores = [this.userStore];
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
