export const typeDefs = `#graphql
  type User {
    id: ID!
    email: String
    login: String
  }

  type Movie {
    user_id: ID!
    movie_id: ID!
    is_series: Boolean!
    title: String!
    poster: String
    rating: Float
  }

  type RatingResponse {
  success: Boolean!
  message: String
  rating: Float
}

type Existence {
  exists: Boolean!
  message: String
}

type AddToWatchlistResponse {
  success: String
  message: String
}

  type Query {
    users: [User]
    user(email: String!): User
    login(email: String!, password: String!): User
    movie(userId: ID!, movieId: ID!): Movie
    watchlist(userId: ID!, movieId: ID!): Existence
    getWatchlist(userId: ID!): [Movie]
  }

  type Mutation {
    addUser(login: String!, password: String!, email: String!): User
    setRating(userId: ID!, movieId: ID!, isSeries: Boolean!, title: String!, poster: String, rating: Float): RatingResponse
    addToWatchlist(userId: ID!, movieId: ID!, isSeries: Boolean!, title: String!, poster: String): AddToWatchlistResponse
  }
`;
