import Reactotron, { networking } from 'reactotron-react-native';

const queryClientManager = new QueryClientManager({
  // @ts-ignore
  queryClient,
});

Reactotron.configure({
  onDisconnect: () => {
    queryClientManager.unsubscribe();
  },
  name: 'Zesty',
})
  .use(reactotronReactQuery(queryClientManager), networking())
  .useReactNative({
    log: true,
    errors: true,
  }) // add all built-in react native plugins
  .connect();
