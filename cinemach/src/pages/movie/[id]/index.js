"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { movieData } from "../../../app/api/tmdb";

function Movie() {
  const [movie, setMovie] = useState([]);

  const { query } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const popularMovies = await movieData(query.id);
      setMovie(popularMovies);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Фильм {query.id}</h1>
      <span>{movie?.genres?.map((genre) => genre.name)}</span>
    </>
  );
}

export default Movie;
