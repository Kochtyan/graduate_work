export const typeDefs = `#graphql
  type User {
    id: ID!
    email: String
    login: String
  }

  type Movie {
    userId: ID!
    movieId: ID!
    rating: Float
  }

  type RatingResponse {
  success: Boolean!
  message: String
  rating: Float
}

  type Query {
    users: [User]
    user(email: String!): User
    login(email: String!, password: String!): User
    movie(userId: ID!, movieId: ID!): Movie
  }

  type Mutation {
    addUser(login: String!, password: String!, email: String!): User
    setRating(userId: ID!, movieId: ID!, rating: Float): RatingResponse
  }
`;
