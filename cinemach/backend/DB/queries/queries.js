import pool from "../DB.js";
import bcrypt from "bcrypt";

export async function getUsers() {
  const [rows] = await pool.query("SELECT * FROM Users");

  return rows;
}

export async function getUser(email) {
  const [row] = await pool.query("SELECT * FROM Users WHERE email = ?", [
    email,
  ]);

  return row.length > 0 ? row[0] : null;
}

export async function Login(email, password) {
  const user = await getUser(email);

  if (!user) {
    return null;
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password);

  if (!isPasswordValid) {
    return null;
  }

  return {
    id: user.id,
    login: user.login,
    email: user.email,
  };
}

export async function getMovie(userId, movieId) {
  const [row] = await pool.query(
    "SELECT * FROM movies WHERE user_id = ? AND movie_id = ?",
    [userId, movieId]
  );

  return row.length > 0 ? row[0] : null;
}

export async function isInWatchlist(userId, movieId) {
  try {
    const [rows] = await pool.query(
      "SELECT list_id FROM movie_list WHERE movie_id = ?",
      [movieId]
    );

    if (rows.length === 0) {
      return {
        exists: false,
        message: "No movie lists found for the given movie ID.",
      };
    }

    const listIds = rows.map((row) => row.list_id);
    const [userRows] = await pool.query(
      "SELECT * FROM user_movie_list WHERE user_id = ? AND id IN (?)",
      [userId, listIds]
    );

    if (userRows.length > 0) {
      return {
        exists: true,
        message: "User has this movie in one of their lists.",
      };
    } else {
      return {
        exists: false,
        message: "User does not have this movie in any of their lists.",
      };
    }
  } catch (error) {
    throw error;
  }
}

export async function getWatchlist(userId) {
  try {
    const [userList] = await pool.query(
      "SELECT id FROM user_movie_list WHERE user_id = ?",
      [userId]
    );

    if (userList.length === 0) {
      throw new Error("No list found for this user");
    }

    const listId = userList[0].id;

    const [movieList] = await pool.query(
      "SELECT movie_id FROM movie_list WHERE list_id = ?",
      [listId]
    );

    if (movieList.length === 0) {
      return [];
    }

    const movieIds = movieList.map((movie) => movie.movie_id);

    const [movies] = await pool.query(
      `SELECT movie_id, is_series, title, poster FROM movies WHERE movie_id IN (?)`,
      [movieIds]
    );

    return movies;
  } catch (error) {
    throw error;
  }
}
