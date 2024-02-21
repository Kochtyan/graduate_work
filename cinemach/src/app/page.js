"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getPopularMovies } from "./api/tmdb";

import Header from "./components/header";
import Grid from "@mui/material/Grid";

const MovieApp = () => {
  const [movies, setMovies] = useState([]);

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    };

    fetchData();
  }, []);

  // ?

  return (
    <>
      <Header />
      <div className="container">
        <h1>Популярные фильмы</h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {movies.map((movie) => (
            <Grid item xs={2} sm={4} md={4} key={movie.id}>
              <h3>{movie.title}</h3>
              {movie.poster_path && (
                <Link href={`/movie/[id]`} as={`/movie/${movie.id}`}>
                  <img
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={`Постер ${movie.title}`}
                    style={{ maxWidth: "100%" }}
                  />
                </Link>
              )}
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default MovieApp;
