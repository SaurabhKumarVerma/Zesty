import { graphqlClient } from '@services/Client/graphqlClient';
import { useMutation } from '@tanstack/react-query';
import {
  ForgotPasswordDocument,
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables,
} from 'graphql/generated/graphql';

export const useForgotMutation = () =>
  useMutation<ForgotPasswordMutation, Error, ForgotPasswordMutationVariables>({
    mutationFn: (variable) => graphqlClient.request(ForgotPasswordDocument, variable),
  });
