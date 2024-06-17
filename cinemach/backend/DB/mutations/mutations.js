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

export async function setRating(userId, movieId, rating) {
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
        "INSERT INTO movies (user_id, movie_id, rating) VALUES (?, ?, ?)",
        [userId, movieId, rating]
      );
    }

    return { success: true, message: "Rating set successfully", rating };
  } catch (error) {
    throw error;
  }
}
