import rootStore from '@store/RootStore';
import { GraphQLClient } from 'graphql-request';

export const graphqlClient = new GraphQLClient('http://localhost:4000/graphql', {
  headers: () => ({
    Authorization: rootStore.userStore.user?.accessToken
      ? `Bearer ${rootStore.userStore.user.accessToken}`
      : '',
  }),
});
