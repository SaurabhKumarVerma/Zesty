import { SpecialKey } from '@utils/utils';
import * as SecureStore from 'expo-secure-store';
import Toast from 'react-native-toast-message';

class AppStorage {
  public async saveData(
    key: SpecialKey,
    value: string,
    options?: SecureStore.SecureStoreOptions,
  ): Promise<void> {
    await SecureStore.setItemAsync(key, value);
  }

  public async deleteData(key: string): Promise<void> {
    let result = await SecureStore.getItemAsync(key);
    if (!result) {
      Toast.show({
        position: 'bottom',
        type: 'error',
        props: 'Invalid key or No key Found',
      });
    } else {
      await SecureStore.deleteItemAsync(key);
    }
  }

  public async getData(key: string): Promise<void | string> {
    let result = await SecureStore.getItemAsync(key);
    
    if (!result) {
      Toast.show({
        position: 'bottom',
        type: 'error',
        props: 'Invalid key or No key Found',
      });
    }

    return result ?? undefined;
  }
}
export const ClientStorage = new AppStorage()