import { action, makeAutoObservable, observable } from 'mobx';
import { RootStore } from './RootStore';
import { ClientStorage } from '@services/storage/client_strorage';

export default class GlobalStore {
  @observable isVisible: boolean = true;
  @observable access_token: string | undefined | void | null = undefined;
  @observable refresh_token: string | undefined | void | null = undefined;
  @observable user_id: number | undefined | void | null = undefined;

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);
  }

  @action
  setUserDetails(
    access_token: string | undefined | null,
    refresh_token: string | undefined | null,
    user_id: number | undefined | null,
  ) {
    this.access_token = access_token;
    this.refresh_token = refresh_token;
    this.user_id = user_id;
  }

  @action
  async getUserDetailFromStorage() {
    if (!this.user_id) {
      this.access_token = await ClientStorage.getData(
        process.env.EXPO_PUBLIC_CLIENT_STORAGE_ACCESS_TOKEN,
      );
      this.refresh_token = await ClientStorage.getData(
        process.env.EXPO_PUBLIC_CLIENT_STORAGE_REFRESH_TOKEN,
      );
      this.user_id = Number(ClientStorage.getData(process.env.EXPO_PUBLIC_CLIENT_STORAGE_USER_ID));
    }
  }

  @action
  showContent(status: boolean) {
    this.isVisible = status;
  }
}
