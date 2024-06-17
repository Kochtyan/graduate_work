"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

import { fetchPopularMovies, fetchMovieById } from "./api/kinopoisk";

import Header from "./components/header";
import Loader from "./components/loader";
import Grid from "@mui/material/Grid";
import Bookmark from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlined from "@mui/icons-material/BookmarkAddedOutlined";

import { popular } from "../app/query_data/queryData";

import "../app/css/main.css";

import kpLogo from "../assets/icon-kp.svg";
import imdbLogo from "../assets/icon-imdb.svg";

const MovieApp = () => {
  const [recentMovies, setRecentMovies] = useState([]);
  const [watchlistState, setWatchlistState] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const popularMovies = await fetchPopularMovies();
    //     setRecentMovies(popularMovies?.docs);
    //     console.log(popularMovies?.docs);
    //   } catch (error) {
    //     console.error("Ошибка при загрузке популярных фильмов:", error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchData();
    console.log(popular);
    setRecentMovies(popular);
    setLoading(false);
  }, []);

  const handleAddToWatchlist = (e, movieId) => {
    e.preventDefault();

    setWatchlistState((prevState) => ({
      ...prevState,
      [movieId]: !prevState[movieId],
    }));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <div className="container">
        <h1 style={{ marginBottom: "20px" }}>Сейчас популярно</h1>
        <Grid
          container
          spacing={{ xs: 2, md: 7 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ padding: "20px", marginBottom: "50px" }}
        >
          {recentMovies?.map((movie) => (
            <Grid item xs={2} sm={4} md={4} key={movie?.id}>
              <div className="main__movie-wrapper">
                {movie?.poster && (
                  <div className="main__movie-poster-wrapper">
                    <Link
                      href={
                        movie.type == "movie" ? `/film/[id]` : `/series/[id]`
                      }
                      as={
                        movie.type == "movie"
                          ? `/film/${movie.id}`
                          : `/series/${movie.id}`
                      }
                    >
                      <img
                        src={movie?.poster?.previewUrl}
                        alt={`Постер ${movie?.name}`}
                        className="main__poster"
                      />

                      <div className="main__poster-overlay">
                        <div className="main__add-to-watchlist">
                          {watchlistState[movie.id] ? (
                            <BookmarkOutlined
                              className="main__add-to-watchlist-icon icon"
                              sx={{ fontSize: 40 }}
                              onClick={(e) => handleAddToWatchlist(e, movie.id)}
                            />
                          ) : (
                            <Bookmark
                              className="main__add-to-watchlist-icon icon"
                              sx={{ fontSize: 40 }}
                              onClick={(e) => handleAddToWatchlist(e, movie.id)}
                            />
                          )}
                        </div>
                        <div className="main__rating-wrapper">
                          <div className="main__rating">
                            <span className="main__rating-container">
                              <img
                                src={kpLogo.src}
                                alt=""
                                style={{ width: "30px" }}
                              />
                              {movie?.rating?.kp.toFixed(1)}
                            </span>
                            {movie?.rating?.imdb !== 0 && (
                              <span className="main__rating-container">
                                <img
                                  src={imdbLogo.src}
                                  alt=""
                                  style={{ width: "30px" }}
                                />
                                {movie?.rating?.imdb}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
                <Link
                  href={movie.type == "movie" ? `/film/[id]` : `/series/[id]`}
                  as={
                    movie.type == "movie"
                      ? `/film/${movie.id}`
                      : `/series/${movie.id}`
                  }
                >
                  <h3 className="main__name">{movie?.name}</h3>
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
                    {movie?.year}
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
