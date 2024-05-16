"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Header from "@/app/components/header";
import CustomList from "@/app/components/customList";
import Grid from "@mui/material/Grid";

import { fetchPersonById } from "../../../app/api/kinopoisk";

import "../../../app/css/person.css";

import { name1, name2, name3 } from "../../../app/query_data/queryData";

function Person() {
  const [person, setPerson] = useState([]);
  const uniqueMovies = [];

  const { query } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (query.id) {
        // const movieDetails = await fetchPersonById(query.id);
        const personDetails = name2;

        setPerson(personDetails);
        console.log(personDetails);
      }
    };

    fetchData();
  }, [query.id, person?.movies]);

  function formatDate(dateString) {
    const date = new Date(dateString);

    const months = [
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

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const formattedDate = `${day} ${month}, ${year}`;

    return formattedDate;
  }

  function convertHeightToMeters(heightInCentimeters) {
    return heightInCentimeters / 100;
  }

  person?.movies
    ?.filter(
      (movie) =>
        movie.enProfession === "actor" ||
        movie.enProfession === "director" ||
        movie.enProfession === "writer" ||
        movie.enProfession === "composer"
    )
    ?.forEach((movie) => {
      const movieName = movie.name ?? movie.alternativeName;
      const existingMovie = uniqueMovies.find((m) => m.name === movieName);

      if (existingMovie) {
        if (movie.rating > existingMovie.rating) {
          existingMovie.rating = movie.rating;
        }
      } else {
        uniqueMovies.push({
          name: movieName,
          rating: movie.rating,
          id: movie.id,
        });
      }
    });

  uniqueMovies.sort((a, b) => b.rating - a.rating);

  const top5Movies = uniqueMovies.slice(0, 5);

  return (
    <>
      <Header />
      <div
        className="movie__container container"
        style={{ margin: "30px 0 20px 0" }}
      >
        <Grid container spacing={3}>
          <Grid item xs={4}>
            {person?.photo && (
              <img
                src={person?.photo}
                alt={`Постер ${person.name ?? person.enName}`}
                className="person__photo"
              />
            )}
          </Grid>
          <Grid item xs={8}>
            {person?.name ? (
              <>
                <h1 className="person__name">{person.name}</h1>
                <div>
                  <span className="person__enname">{person?.enName}</span>
                </div>
              </>
            ) : (
              <h1>{person.enName}</h1>
            )}

            <Grid style={{ margin: "30px 0" }} container spacing={1}>
              <Grid item xs={4}>
                <span>
                  <b>Дата рождения:</b>
                </span>
              </Grid>
              <Grid item xs={8}>
                <span>
                  {person?.birthday ? (
                    <span>{formatDate(person?.birthday)}</span>
                  ) : (
                    "—"
                  )}
                </span>
              </Grid>

              {person.death ? (
                <>
                  <Grid item xs={4}>
                    <span>
                      <b>Дата смерти:</b>
                    </span>
                  </Grid>
                  <Grid item xs={8}>
                    <span>{formatDate(person?.death)}</span>
                  </Grid>
                </>
              ) : null}

              <Grid item xs={4}>
                <span>
                  <b>Возраст:</b>
                </span>
              </Grid>
              <Grid item xs={8}>
                <span>{person?.age ? <span>{person?.age}</span> : "—"}</span>
              </Grid>

              <Grid item xs={4}>
                <span>
                  <b>Место рождения:</b>
                </span>
              </Grid>
              <Grid item xs={8}>
                {person && person.birthPlace ? (
                  person.birthPlace.map((place, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && ", "}
                      {place.value}
                    </React.Fragment>
                  ))
                ) : (
                  <span>—</span>
                )}
              </Grid>

              <Grid item xs={4}>
                <span>
                  <b>Рост:</b>
                </span>
              </Grid>
              <Grid item xs={8}>
                <span>
                  {person?.growth ? (
                    <span>{`${convertHeightToMeters(person?.growth)} м`}</span>
                  ) : (
                    "—"
                  )}
                </span>
              </Grid>
            </Grid>

            {top5Movies.length > 0 && (
              <>
                <h3 style={{ marginBottom: "10px" }}>Лучшие фильмы</h3>
                {top5Movies.map((movie, index) => (
                  <div style={{ marginBottom: "10px" }} key={index}>
                    <Link href={`/film/[id]`} as={`/film/${movie.id}`}>
                      {movie.name}
                    </Link>
                  </div>
                ))}
              </>
            )}
          </Grid>
          <CustomList list={person?.facts} />
        </Grid>
      </div>
    </>
  );
}

export default Person;
