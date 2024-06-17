import {
  getUsers,
  getUser,
  Login,
  getMovie,
} from "../../DB/queries/queries.js";
import { addUser, setRating } from "../../DB/mutations/mutations.js";

export const resolvers = {
  Query: {
    users: async () => await getUsers(),
    user: async (_, { email }) => await getUser(email),
    login: async (_, { email, password }) => await Login(email, password),
    movie: async (_, { userId, movieId }) => await getMovie(userId, movieId),
  },
  Mutation: {
    addUser: async (_, { login, password, email }) =>
      await addUser(login, password, email),
    setRating: async (_, { userId, movieId, rating }) => {
      const response = await setRating(userId, movieId, rating);
      return {
        success: response.success,
        message: response.message,
        rating: response.rating,
      };
    },
  },
};
