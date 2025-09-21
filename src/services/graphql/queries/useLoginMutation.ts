import { graphqlClient } from "@services/Client/graphqlClient";
import { useMutation } from "@tanstack/react-query";
import { LoginDocument, LoginMutation, LoginMutationVariables } from "graphql/generated/graphql";

export const useLoginMutation = () =>
  useMutation<LoginMutation, Error, LoginMutationVariables>({
    mutationFn: (variable) => graphqlClient.request(LoginDocument, variable),
  });