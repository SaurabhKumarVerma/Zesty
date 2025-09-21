import { graphqlClient } from "@services/Client/graphqlClient";
import { useMutation } from "@tanstack/react-query";
import { ResetPasswordDocument, ResetPasswordMutation, ResetPasswordMutationVariables } from "graphql/generated/graphql";

export const useResetPasswordMutation = () =>
  useMutation<ResetPasswordMutation, Error, ResetPasswordMutationVariables>({
    mutationFn: (variable) => graphqlClient.request(ResetPasswordDocument, variable),
  });
