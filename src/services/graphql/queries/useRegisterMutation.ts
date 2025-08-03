import { graphqlClient } from '@services/Client/graphqlClient';
import { useMutation } from '@tanstack/react-query';
import {
  CreateAccountDocument,
  CreateAccountMutation,
  CreateAccountMutationVariables,
} from 'graphql/generated/graphql';

export const useRegisterMutation = () =>
  useMutation<CreateAccountMutation, Error, CreateAccountMutationVariables>({
    mutationFn: (variable) => graphqlClient.request(CreateAccountDocument, variable),
  });
