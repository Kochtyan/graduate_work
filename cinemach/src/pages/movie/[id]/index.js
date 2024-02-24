"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { fetchMovieById } from "../../../app/api/kinopoisk";

import Header from "../../../app/components/header";
import Grid from "@mui/material/Grid";

import "../../../app/css/movie.css";

function Movie() {
  const [movie, setMovie] = useState([]);

  // const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

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

  return (
    <>
      <Header />
      <div className="movie__container container">
        <Grid container spacing={3}>
          <Grid item xs>
            {movie.poster && (
              <img
                src={movie.poster.url}
                alt={`Постер ${movie.name}`}
                style={{ maxWidth: "320px" }}
              />
            )}
          </Grid>
          <Grid item xs={6}>
            <h1>{`${movie.name} ${movie.year ? `(${movie.year})` : ""}`}</h1>
            <div className="movie__ratings">
              <span>{movie.rating.kp}</span>
              <span>{movie.rating.imdb}</span>
              <span>{movie.rating.filmCritics}</span>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Movie;
