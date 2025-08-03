import rootStore from '@store/RootStore';
import { GraphQLClient } from 'graphql-request';

export const graphqlClient = new GraphQLClient('http://localhost:4000/graphql', {
  headers: () => ({
    Authorization: rootStore.userStore.access_token
      ? `Bearer ${rootStore.userStore.access_token}`
      : '',
  }),
});
