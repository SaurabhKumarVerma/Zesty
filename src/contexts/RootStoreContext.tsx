import rootStore, { RootStore } from '@store/RootStore';
import React from 'react';

export const RootStoreContext = React.createContext<RootStore>(rootStore);

export const useRootStore = () => React.useContext(RootStoreContext);
