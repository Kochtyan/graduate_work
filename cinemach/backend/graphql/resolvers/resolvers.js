import { getUsers, getUser, Login } from "../../DB/queries/queries.js";
import { addUser } from "../../DB/mutations/mutations.js";

export const resolvers = {
  Query: {
    users: async () => await getUsers(),
    user: async (_, { email }) => await getUser(email),
    login: async (_, { email, password }) => await Login(email, password),
  },
  Mutation: {
    addUser: async (_, { login, password, email }) =>
      await addUser(login, password, email),
  },
};
