export const typeDefs = `#graphql
  type User {
    id: ID!
    email: String
    login: String
  }

  type Query {
    users: [User]
    user(email: String!): User
    login(email: String!, password: String!): User
  }

  type Mutation {
    addUser(login: String!, password: String!, email: String!): User
  }
`;
