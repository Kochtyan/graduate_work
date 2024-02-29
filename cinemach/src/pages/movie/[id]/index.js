"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { fetchMovieById } from "../../../app/api/kinopoisk";

import Header from "../../../app/components/header";
import Grid from "@mui/material/Grid";

import "../../../app/css/movie.css";

import kpLogo from "../../../../src/assets/icon-kp.png";

function Movie() {
  const [movie, setMovie] = useState([]);

  const { query } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (query.id) {
        const movieDetails = await fetchMovieById(query.id);
        setMovie(movieDetails);
        console.log(movieDetails);
      }
    };

    fetchData();
  }, [query.id]);

  const handleMinutesToHours = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    let hoursLabel;
    let minutesLabel;

    if (hours % 10 === 1) {
      hoursLabel = "час";
    } else if (hours % 10 >= 2 && hours % 10 <= 4) {
      hoursLabel = "часа";
    } else if (hours % 10 >= 5 && hours % 10) {
      hoursLabel = "часов";
    }

    if (remainingMinutes % 10 === 1 || remainingMinutes % 10 === 21) {
      minutesLabel = "минута";
    } else if (remainingMinutes % 10 >= 2 && remainingMinutes % 10 <= 4) {
      minutesLabel = "минуты";
    } else if (remainingMinutes % 10 >= 5 && remainingMinutes % 10 <= 20) {
      minutesLabel = "минут";
    }

    if (hours === 0) {
      return `${remainingMinutes} минут`;
    } else {
      return `${hours} ${hoursLabel} ${remainingMinutes} ${minutesLabel}`;
    }
  };

  const handleFormattedValue = (value) => {
    const formattedValue = value?.toLocaleString("en-US");
    return formattedValue;
  };

  const handleformattedDate = (inputDate) => {
    const date = new Date(inputDate);

    const day = date.getDate();
    const monthNames = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  return (
    <>
      <Header />
      <div className="movie__container container">
        <Grid container spacing={1}>
          <Grid item xs={4}>
            {movie?.poster && (
              <img
                src={movie.poster.url}
                alt={`Постер ${movie.name}`}
                style={{ maxWidth: "320px" }}
              />
            )}
            <div>
              {movie.videos.trailers
                .filter((trailer) => trailer.name === "Official Trailer")
                .map((vid, index) => (
                  <span key={index}>{vid.url}</span>
                ))}
            </div>
          </Grid>
          <Grid item xs={6}>
            <h1>{`${movie.name} ${movie.year ? `(${movie.year})` : ""}`}</h1>
            <div className="movie__fast-info">
              <span>{movie?.alternativeName}</span>
              <span>{movie.ageRating ? `+${movie.ageRating}` : ``}</span>
              <span>{handleMinutesToHours(movie.movieLength)}</span>
            </div>
            <div>
              {movie.genres.map((genre) => (
                <span>{genre.name} </span>
              ))}
            </div>
            <div className="movie__ratings">
              <span>
                <img src={kpLogo} alt="" style={{ width: "10px" }} />
                {movie.rating?.kp}
              </span>
              <span>{movie.rating?.imdb}</span>
              <span>{movie.rating?.filmCritics}</span>
            </div>
            <div>
              <p>{movie.description}</p>
            </div>
            <div>
              Режиссер:
              {movie &&
                movie.persons &&
                movie.persons
                  .filter((person) => person.enProfession === "director")
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((director) => (
                    <span key={director.id}> {director.name}</span>
                  ))}
            </div>
            <div>{`Бюджет: ${movie.budget?.currency}${handleFormattedValue(
              movie.budget?.value
            )}`}</div>
            <div>{`Сборы: ${movie.fees?.world.currency}${handleFormattedValue(
              movie.fees?.world.value
            )}`}</div>
            <div>
              Продюсерские компании:
              {movie.productionCompanies.map((company, index) => (
                <span key={index}> {company.name}</span>
              ))}
            </div>
            <div>
              <span>{`Мировая премьера: ${handleformattedDate(
                movie.premiere.world
              )}`}</span>
              <span>{` Российская премьера: ${handleformattedDate(
                movie.premiere.russia
              )}`}</span>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Movie;
