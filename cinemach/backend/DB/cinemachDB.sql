--
-- File generated with SQLiteStudio v3.4.4 on Чт май 30 23:37:07 2024
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: MovieList
CREATE TABLE IF NOT EXISTS MovieList ("List ID" INT REFERENCES UserMovieList (ID) NOT NULL, "Movie ID" INT REFERENCES Movies ("Movie ID") NOT NULL);
INSERT INTO MovieList ("List ID", "Movie ID") VALUES (1, 342);

-- Table: Movies
CREATE TABLE IF NOT EXISTS Movies (ID INTEGER NOT NULL, "Movie ID" INT NOT NULL PRIMARY KEY, Title VARCHAR NOT NULL, Year INT, Poster VARCHAR, Rating REAL);
INSERT INTO Movies (ID, "Movie ID", Title, Year, Poster, Rating) VALUES (1, 342, 'Криминальное чтиво', 1999, 'https://image.openmoviedb.com/kinopoisk-images/1900788/87b5659d-a159-4224-9bff-d5a5d109a53b/orig', '8,5');

-- Table: UserMovieList
CREATE TABLE IF NOT EXISTS UserMovieList (ID INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL, "User ID" INT REFERENCES Users (ID) NOT NULL, "List Name" VARCHAR UNIQUE NOT NULL);
INSERT INTO UserMovieList (ID, "User ID", "List Name") VALUES (1, 1, 'Fav');

-- Table: Users
CREATE TABLE IF NOT EXISTS Users (ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, Name VARCHAR NOT NULL, Surname VARCHAR NOT NULL, Patronymic VARCHAR, Login VARCHAR NOT NULL UNIQUE, Password VARCHAR NOT NULL, Email VARCHAR UNIQUE NOT NULL);
INSERT INTO Users (ID, Name, Surname, Patronymic, Login, Password, Email) VALUES (1, 'Kons', 'San', 'Vit', 'kochtyan', 'beats', 'koch@gmail.com');

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
