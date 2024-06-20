import { gql } from "@apollo/client";

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

export const IS_IN_WATCHLIST = gql`
  query ($userId: ID!, $movieId: ID!) {
    watchlist(userId: $userId, movieId: $movieId) {
      exists
    }
  }
`;

export const GET_WATCHLIST = gql`
  query ($userId: ID!) {
    getWatchlist(userId: $userId) {
      movie_id
      is_series
      title
      poster
    }
  }
`;
