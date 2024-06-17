import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    users {
      id
      login
      email
    }
  }
`;

export const GET_USER = gql`
  query ($email: String!) {
    user(email: $email) {
      id
    }
  }
`;

export const LOGIN = gql`
  query ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      login
    }
  }
`;

export const MOVIE = gql`
  query ($userId: ID!, $movieId: ID!) {
    movie(userId: $userId, movieId: $movieId) {
      rating
    }
  }
`;
