"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

import { fetchPopularMovies, fetchMovieById } from "./api/kinopoisk";

import Header from "./components/header";
import Grid from "@mui/material/Grid";

import { popular } from "../app/query_data/queryData";

import "../app/css/main.css";

const MovieApp = () => {
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const popularMovies = await fetchPopularMovies();
    //   setRecentMovies(popularMovies?.docs);
    //   console.log(popularMovies?.docs);
    // };
    // fetchData();
    console.log(popular);
    setRecentMovies(popular);
  }, []);

  return (
    <>
      <Header />
      <div className="container" style={{ overflowY: "hidden" }}>
        <h1 style={{ marginBottom: "20px" }}>Популярные фильмы</h1>
        <Grid
          container
          spacing={{ xs: 2, md: 7 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ padding: "20px", marginBottom: "50px" }}
        >
          {recentMovies?.map((movie) => (
            <Grid item xs={2} sm={4} md={4} key={movie.id}>
              <div className="main__movie-wrapper">
                {movie.poster && (
                  <Link href={`/film/[id]`} as={`/film/${movie.id}`}>
                    <img
                      src={movie.poster.previewUrl}
                      alt={`Постер ${movie.name}`}
                      className="main__poster"
                    />
                  </Link>
                )}
                <Link href={`/film/[id]`} as={`/film/${movie.id}`}>
                  <h3 className="main__name">{movie.name}</h3>
                  <span
                    style={{ color: "rgba(255, 255, 255, 0.6)" }}
                    ref={(spanRef) => {
                      if (spanRef) {
                        const text = spanRef.innerText || spanRef.textContent;
                        if (text.length > 20) {
                          spanRef.textContent = text.slice(0, 24) + "...";
                        }
                      }
                    }}
                  >
                    {movie.year}
                    {", "}
                    {movie?.genres?.map((genre, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && ", "}
                        {genre.name}
                      </React.Fragment>
                    ))}
                  </span>
                </Link>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default MovieApp;
