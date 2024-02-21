"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { movieData } from "../../../app/api/tmdb";

import Header from "../../../app/components/header";

function Movie() {
  const [movie, setMovie] = useState([]);

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  const { query } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (query.id) {
        const movieDetails = await movieData(query.id);
        setMovie(movieDetails);
      }
    };

    fetchData();
  }, [query.id]);

  return (
    <>
      <Header />
      <div className="movie__container container">
        <h1>{`${movie.title} ${
          movie.release_date ? `(${movie.release_date.slice(0, 4)})` : ""
        }`}</h1>
        {movie.poster_path && (
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={`Постер ${movie.title}`}
            style={{ maxWidth: "100%" }}
          />
        )}
      </div>
    </>
  );
}

export default Movie;
