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
