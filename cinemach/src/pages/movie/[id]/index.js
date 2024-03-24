"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { fetchMovieById } from "../../../app/api/kinopoisk";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Header from "../../../app/components/header";
import Grid from "@mui/material/Grid";

import "../../../app/css/movie.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import kpLogo from "../../../../src/assets/icon-kp.png";
import imdbLogo from "../../../../src/assets/icon-imdb.png";

function Movie() {
  const [movie, setMovie] = useState([]);
  const [trailerUrls, setTrailerUrls] = useState([]);

  const [showVideos, setShowVideos] = useState(false);

  const { query } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (query.id) {
        const movieDetails = await fetchMovieById(query.id);
        setMovie(movieDetails);
        console.log(movieDetails);

        const _trailerUrls = [
          ...new Set(
            movieDetails?.videos?.trailers.map((vid) => ({
              type: "video",
              title: vid.type,
              width: 1280,
              height: 720,
              poster: `https://img.youtube.com/vi/${getYouTubeVideoId(
                vid.url
              )}/0.jpg`,
              sources: [
                {
                  src: vid.url,
                  type: "video/mp4",
                },
              ],
            }))
          ),
        ];
        setTrailerUrls(_trailerUrls);
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

  const getYouTubeVideoId = (url) => {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    const match = url.match(regExp);

    if (match) {
      return match[1];
    }

    return null;
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
              {trailerUrls.length > 0 && (
                <div>
                  <img
                    src={`https://img.youtube.com/vi/${getYouTubeVideoId(
                      trailerUrls[0]
                    )}/0.jpg`}
                    alt="Video Preview"
                    onClick={() => setShowVideos(true)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              )}
              <Lightbox
                open={showVideos}
                close={() => setShowVideos(false)}
                slides={trailerUrls}
                plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video]}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <h1>{`${movie?.name} ${movie?.year ? `(${movie?.year})` : ""}`}</h1>
            <div className="movie__fast-info">
              <span>{movie?.alternativeName}</span>
              <span>{movie?.ageRating ? `+${movie?.ageRating}` : ``}</span>
              <span>{handleMinutesToHours(movie?.movieLength)}</span>
            </div>
            <div>
              {movie?.genres?.map((genre, index) => (
                <span key={index}>{genre.name} </span>
              ))}
            </div>
            <div className="movie__ratings">
              <span>
                <img src={kpLogo.src} alt="" style={{ width: "20px" }} />
                {movie?.rating?.kp}
              </span>
              <span>
                <img src={imdbLogo.src} alt="" style={{ width: "40px" }} />
                {movie?.rating?.imdb}
              </span>
              <span>{movie?.rating?.filmCritics}</span>
            </div>
            <div>
              <p>{movie?.description}</p>
            </div>
            <div>
              <span>
                Режиссер:
                {movie &&
                  movie?.persons &&
                  movie?.persons
                    .filter((person) => person.enProfession === "director")
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((director, index, array) => (
                      <React.Fragment key={director.id}>
                        {" "}
                        {index > 0 && ", "}
                        {director.name}
                        {index === array.length - 1 ? "" : " и "}
                      </React.Fragment>
                    ))}
              </span>
            </div>
            <div>
              <span>{`Бюджет: ${movie?.budget?.currency}${handleFormattedValue(
                movie?.budget?.value
              )}`}</span>
            </div>
            <div>
              <span>{`Сборы: ${
                movie?.fees?.world.currency
              }${handleFormattedValue(movie?.fees?.world.value)}`}</span>
            </div>
            {movie?.productionCompanies?.length !== 0 && (
              <div>
                <span>
                  Продюсерские компании:
                  {movie?.productionCompanies?.map((company, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && ", "}
                      {company.name}
                    </React.Fragment>
                  ))}
                </span>
              </div>
            )}
            <div>
              <span>{`Мировая премьера: ${handleformattedDate(
                movie?.premiere?.world
              )}`}</span>
              <span>{` Российская премьера: ${handleformattedDate(
                movie?.premiere?.russia
              )}`}</span>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Movie;
