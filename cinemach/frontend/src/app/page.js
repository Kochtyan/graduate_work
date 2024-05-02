"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { fetchPopularMovies, fetchMovieById } from "./api/kinopoisk";

import Header from "./components/header";
import Grid from "@mui/material/Grid";

import { popular } from "../app/query_data/queryData";

const MovieApp = () => {
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const popularMovies = await fetchPopularMovies();
    //   setRecentMovies(popularMovies?.docs);
    //   console.log(popularMovies?.docs);
    // };
    // fetchData();
    const popularMovies = popular;
  }, []);

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
          {recentMovies?.map((movie) => (
            <Grid item xs={2} sm={4} md={4} key={movie.id}>
              <Link href={`/film/[id]`} as={`/film/${movie.id}`}>
                <h3>{movie.name}</h3>
              </Link>
              {movie.poster && (
                <Link href={`/film/[id]`} as={`/film/${movie.id}`}>
                  <img
                    src={movie.poster.previewUrl}
                    alt={`Постер ${movie.name}`}
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
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
