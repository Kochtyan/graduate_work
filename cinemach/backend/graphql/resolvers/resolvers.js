import {
  getUsers,
  getUser,
  Login,
  getMovie,
  isInWatchlist,
  getWatchlist,
} from "../../DB/queries/queries.js";
import {
  addUser,
  setRating,
  addToWatchlist,
} from "../../DB/mutations/mutations.js";

export const resolvers = {
  Query: {
    users: async () => await getUsers(),
    user: async (_, { email }) => await getUser(email),
    login: async (_, { email, password }) => await Login(email, password),
    movie: async (_, { userId, movieId }) => await getMovie(userId, movieId),
    watchlist: async (_, { userId, movieId }) =>
      await isInWatchlist(userId, movieId),
    getWatchlist: async (_, { userId }) => await getWatchlist(userId),
  },
  Mutation: {
    addUser: async (_, { login, password, email }) =>
      await addUser(login, password, email),
    setRating: async (
      _,
      { userId, movieId, isSeries, title, poster, rating }
    ) => {
      const response = await setRating(
        userId,
        movieId,
        isSeries,
        title,
        poster,
        rating
      );
      return {
        success: response.success,
        message: response.message,
        rating: response.rating,
      };
    },
    addToWatchlist: async (_, { userId, movieId, isSeries, title, poster }) => {
      const response = await addToWatchlist(
        userId,
        movieId,
        isSeries,
        title,
        poster
      );
      return {
        success: response.success,
        message: response.message,
      };
    },
  },
};
