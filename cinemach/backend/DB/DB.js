import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getUsers() {
  const [rows] = await pool.query("SELECT * FROM Users");
  return rows;
}

export async function getUser(id) {
  const [row] = await pool.query(`SELECT * FROM Users WHERE id = ?`, [id]);
  return row[0];
}

export async function addUser(
  name,
  surname,
  patronymic,
  login,
  password,
  email
) {
  const [result] = await pool.query(
    `INSERT INTO Users (Name, Surname, Patronymic, Login, Password, Email) VALUES (?, ?, ?, ?, ?, ?)`,
    [name, surname, patronymic, login, password, email]
  );

  const id = result.insertId;

  return getUser(id);
}
