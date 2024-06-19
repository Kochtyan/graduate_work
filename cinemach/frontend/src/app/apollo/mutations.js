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

export const SET_RATING = gql`
  mutation (
    $userId: ID!
    $movieId: ID!
    $isSeries: Boolean!
    $title: String!
    $poster: String
    $rating: Float
  ) {
    setRating(
      userId: $userId
      movieId: $movieId
      isSeries: $isSeries
      title: $title
      poster: $poster
      rating: $rating
    ) {
      message
    }
  }
`;

export const ADD_TO_WATCHLIST = gql`
  mutation ($userId: ID!, $movieId: ID!, $isSeries: Boolean!, $title: String!) {
    addToWatchlist(
      userId: $userId
      movieId: $movieId
      isSeries: $isSeries
      title: $title
    ) {
      success
      message
    }
  }
`;
