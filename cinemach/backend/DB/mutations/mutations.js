import pool from "../DB.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

export async function addUser(login, password, email) {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const [result] = await pool.query(
      "INSERT INTO Users (login, password, email) VALUES (?, ?, ?)",
      [login, hashedPassword, email]
    );

    const id = result.insertId;
    return { id, login, email };
  } catch (error) {
    throw error;
  }
}
