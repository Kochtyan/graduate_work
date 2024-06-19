import pool from "../DB.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

export async function addUser(login, password, email) {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const [result] = await pool.query(
      "INSERT INTO users (login, password, email) VALUES (?, ?, ?)",
      [login, hashedPassword, email]
    );

    const id = result.insertId;

    await pool.query(
      "INSERT INTO user_movie_list (user_id, list_name) VALUES (?, ?)",
      [id, "Посмотреть позже"]
    );

    return { id, login, email };
  } catch (error) {
    throw error;
  }
}

export async function setRating(
  userId,
  movieId,
  isSeries,
  title,
  poster,
  rating
) {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM movies WHERE user_id = ? AND movie_id = ?",
      [userId, movieId]
    );

    if (rows.length > 0) {
      await pool.query(
        "UPDATE movies SET rating = ? WHERE user_id = ? AND movie_id = ?",
        [rating, userId, movieId]
      );
    } else {
      await pool.query(
        "INSERT INTO movies (user_id, movie_id, is_series, title, poster, rating) VALUES (?, ?, ?, ?, ?, ?)",
        [userId, movieId, isSeries, title, poster, rating]
      );
    }

    return { success: true, message: "Rating set successfully", rating };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error setting rating", rating: null };
  }
}

export async function addToWatchlist(userId, movieId, isSeries, title, poster) {
  try {
    const [userMovieListRows] = await pool.query(
      "SELECT id FROM user_movie_list WHERE user_id = ?",
      [userId]
    );

    if (userMovieListRows.length === 0) {
      return { success: false, message: "User list not found." };
    }

    const listId = userMovieListRows[0].id;

    const [movieListRows] = await pool.query(
      "SELECT * FROM movie_list WHERE list_id = ? AND movie_id = ?",
      [listId, movieId]
    );

    if (movieListRows.length > 0) {
      await pool.query(
        "DELETE FROM movie_list WHERE list_id = ? AND movie_id = ?",
        [listId, movieId]
      );
      return { success: true, message: "Movie removed from watchlist." };
    } else {
      await pool.query(
        "INSERT INTO movie_list (list_id, movie_id) VALUES (?, ?)",
        [listId, movieId]
      );

      const [movieRows] = await pool.query(
        "SELECT * FROM movies WHERE user_id = ? AND movie_id = ?",
        [userId, movieId]
      );

      if (movieRows.length === 0) {
        await pool.query(
          "INSERT INTO movies (user_id, movie_id, is_series, title, poster) VALUES (?, ?, ?, ?, ?)",
          [userId, movieId, isSeries, title, poster]
        );
      }

      return { success: true, message: "Movie added to watchlist." };
    }
  } catch (error) {
    throw error;
  }
}
