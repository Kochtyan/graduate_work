import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation ($login: String!, $password: String!, $email: String!) {
    addUser(login: $login, password: $password, email: $email) {
      id
      email
      login
    }
  }
`;
