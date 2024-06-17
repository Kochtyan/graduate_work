"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { fetchMovieById } from "@/app/api/kinopoisk";

import Header from "@/app/components/header";
import CustomButton from "@/app/components/customButton";
import CustomList from "@/app/components/customList";
import CustomSwiper from "@/app/components/customSwiper";
import ModalRating from "@/app/components/modalRating";
import Grid from "@mui/material/Grid";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "../../../app/css/film.css";
import "swiper/css";
import "swiper/css/pagination";

import kpLogo from "../../../../src/assets/icon-kp.png";
import imdbLogo from "../../../../src/assets/icon-imdb.png";
import metacriticLogo from "../../../../src/assets/icon-metacritic.png";

import { series1, series2, series3 } from "../../../app/query_data/queryData";

function Series() {
  const [series, setSeries] = useState([]);
  const [trailerUrls, setTrailerUrls] = useState([]);
  const [userRating, setUserRating] = useState(null);
  const [userRatingModal, setUserRatingModal] = useState(null);

  const [showVideos, setShowVideos] = useState(false);
  const [showRoles, setShowRoles] = useState(false);
  const [open, setOpen] = useState(false);

  const { query } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (query.id) {
        // const seriesDetails = await fetchMovieById(query.id);
        const seriesDetails = series3;

        setSeries(seriesDetails);
        console.log(seriesDetails);

        const _trailerUrls = seriesDetails?.videos?.trailers
          .map((vid) => ({
            title: vid.type,
            poster: `https://img.youtube.com/vi/${getYouTubeVideoId(
              vid.url
            )}/0.jpg`,
            sources: [vid.url],
          }))
          .reduce((acc, curr) => {
            const existingTrailer = acc.find((trailer) =>
              trailer.sources.every((src) => curr.sources.includes(src))
            );

            if (!existingTrailer) {
              acc.push(curr);
            }

            return acc;
          }, []);
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
    } else {
      minutesLabel = "минут";
    }

    if (hours === 0) {
      return `${remainingMinutes} ${minutesLabel}`;
    } else if (hours === 1 && remainingMinutes === 0) {
      return "60 минут";
    } else {
      return `${hours} ${hoursLabel} ${remainingMinutes} ${minutesLabel}`;
    }
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

    const match = url.toString().match(regExp);

    if (match) {
      return match[1];
    }

    return null;
  };

  const handleRatingChange = (event, newValue) => {
    setUserRatingModal(newValue);
  };

  const removeRating = () => {
    setUserRatingModal(null);
    setUserRating(null);
    handleClose();
  };

  const handleApplyRating = () => {
    setUserRating(userRatingModal);
    handleClose();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header />
      <div
        className="movie__container container"
        style={{ margin: "30px 0 20px 0" }}
      >
        <Grid container spacing={3}>
          <Grid item xs={4}>
            {series?.poster && (
              <img
                src={series?.poster?.url}
                alt={`Постер ${series?.name}`}
                className="movie__poster"
              />
            )}
            {series?.logo && (
              <div style={{ marginTop: "10px" }}>
                <img
                  style={{ width: "320px", maxWidth: "100%" }}
                  src={series?.logo?.url}
                />
              </div>
            )}

            {trailerUrls && trailerUrls.length > 0 && (
              <div style={{ marginTop: "10px" }}>
                <div>
                  <img
                    src={`https://img.youtube.com/vi/${getYouTubeVideoId(
                      trailerUrls[0].sources
                    )}/0.jpg`}
                    alt="Video Preview"
                    onClick={() => setShowVideos(!showVideos)}
                    className="movie__trailer-img"
                  />
                  <FsLightbox
                    toggler={showVideos}
                    sources={trailerUrls.flatMap((url) => url.sources)}
                  />
                </div>
              </div>
            )}
          </Grid>

          <Grid item xs={8}>
            <h1 className="movie__name">
              {`${series?.name ?? series?.enName} ${
                series?.releaseYears?.length > 0
                  ? `(сериал ${series.releaseYears
                      .map(
                        (year) =>
                          `${year.start}${year.end ? ` - ${year.end}` : ""}`
                      )
                      .join(", ")})`
                  : "(сериал)"
              }`}
            </h1>

            <div className="movie__fast-info">
              <span className="movie__alternative-name">
                {series?.alternativeName}
              </span>
              <span>{series?.ageRating ? `+${series?.ageRating}` : ``}</span>
              <span>{handleMinutesToHours(series?.seriesLength)}</span>
            </div>

            <div className="movie__genres">
              {series?.genres?.map((genre, index) => (
                <span key={index}>
                  <React.Fragment key={index}>
                    {index > 0 && ", "}
                    {genre.name}
                  </React.Fragment>
                </span>
              ))}
            </div>

            <div className="movie__ratings">
              <span
                className="movie__rating-column movie__user-rating"
                style={{ cursor: "pointer" }}
                onClick={handleOpen}
              >
                <p>Моя оценка:</p>
                <span>{userRating ? userRating : "—"}</span>
              </span>
              <span className="movie__rating-column">
                <img src={kpLogo.src} alt="" style={{ width: "25px" }} />
                <span>
                  {series?.rating?.kp !== null && series?.rating?.kp !== 0
                    ? series?.rating?.kp.toFixed(1)
                    : "—"}
                </span>
              </span>
              <span className="movie__rating-column">
                <img src={imdbLogo.src} alt="" style={{ width: "50px" }} />
                <span>
                  {series?.rating?.imdb !== null && series?.rating?.imdb !== 0
                    ? series?.rating?.imdb
                    : "—"}
                </span>
              </span>
              <span className="movie__rating-column">
                <img
                  src={metacriticLogo.src}
                  alt=""
                  style={{ width: "25px" }}
                />
                <span>
                  {series?.rating?.filmCritics !== null &&
                  series?.rating?.filmCritics !== 0
                    ? series?.rating?.filmCritics
                    : "—"}
                </span>
              </span>
            </div>

            <div className="movie__description">
              <p>
                <i>{series?.description}</i>
              </p>
            </div>

            <Grid style={{ margin: "30px 0" }} container spacing={1}>
              <Grid item xs={4}>
                <span>
                  <b>Сезоны:</b>
                </span>
              </Grid>
              <Grid item xs={8}>
                <span>
                  {series?.seasonsInfo ? (
                    <span>{series.seasonsInfo.length}</span>
                  ) : (
                    <span>1</span>
                  )}
                </span>
              </Grid>

              {series?.networks?.items.length > 0 && (
                <>
                  <Grid item xs={4}>
                    <span>
                      <b>Платформа:</b>
                    </span>
                  </Grid>
                  <Grid item xs={8}>
                    {series?.networks?.items &&
                      series.networks.items.map((network, index) => (
                        <React.Fragment key={network.name}>
                          {index > 0 && ", "}
                          {network.name}
                        </React.Fragment>
                      ))}
                  </Grid>
                </>
              )}

              <Grid item xs={4}>
                <span>
                  <b>Слоган:</b>
                </span>
              </Grid>
              <Grid item xs={8}>
                <span>
                  {series?.slogan ? (
                    <q className="movie__slogan">{series.slogan}</q>
                  ) : (
                    "—"
                  )}
                </span>
              </Grid>

              <Grid item xs={4}>
                <span>
                  <b>Режиссер:</b>
                </span>
              </Grid>
              <Grid item xs={8}>
                {series &&
                  series.persons &&
                  (series.persons.filter(
                    (person) => person.enProfession === "director"
                  ).length > 0 ? (
                    series.persons
                      .filter((person) => person.enProfession === "director")
                      .map((director, index) => (
                        <React.Fragment key={director.id}>
                          {index > 0 && ", "}
                          <Link href={`/name/[id]`} as={`/name/${director.id}`}>
                            {director.name ?? director.enName}
                          </Link>
                        </React.Fragment>
                      ))
                  ) : (
                    <span>—</span>
                  ))}
              </Grid>

              <Grid item xs={4}>
                <span>
                  <b>Сценарий:</b>
                </span>
              </Grid>
              <Grid item xs={8}>
                {series &&
                  series.persons &&
                  (series.persons.filter(
                    (person) => person.enProfession === "writer"
                  ).length > 0 ? (
                    series.persons
                      .filter((person) => person.enProfession === "writer")
                      .map((writer, index) => (
                        <React.Fragment key={writer.id}>
                          {index > 0 && ", "}
                          <Link href={`/name/[id]`} as={`/name/${writer.id}`}>
                            {writer.name ?? writer.enName}
                          </Link>
                        </React.Fragment>
                      ))
                  ) : (
                    <span>—</span>
                  ))}
              </Grid>

              <Grid item xs={4}>
                <span>
                  <b>Продюсер:</b>
                </span>
              </Grid>
              <Grid item xs={8}>
                {series &&
                  series.persons &&
                  (series.persons.filter(
                    (person) => person.enProfession === "producer"
                  ).length > 0 ? (
                    series.persons
                      .filter((person) => person.enProfession === "producer")
                      .map((producer, index) => (
                        <React.Fragment key={producer.id}>
                          {index > 0 && ", "}
                          <Link href={`/name/[id]`} as={`/name/${producer.id}`}>
                            {producer.name ?? producer.enName}
                          </Link>
                        </React.Fragment>
                      ))
                  ) : (
                    <span>—</span>
                  ))}
              </Grid>

              <Grid item xs={4}>
                <span>
                  <b>Композитор:</b>
                </span>
              </Grid>
              <Grid item xs={8}>
                {series &&
                  series.persons &&
                  (series.persons.filter(
                    (person) => person.enProfession === "composer"
                  ).length > 0 ? (
                    series.persons
                      .filter((person) => person.enProfession === "composer")
                      .map((composer, index) => (
                        <React.Fragment key={composer.id}>
                          {index > 0 && ", "}
                          <Link href={`/name/[id]`} as={`/name/${composer.id}`}>
                            {composer.name ?? composer.enName}
                          </Link>
                        </React.Fragment>
                      ))
                  ) : (
                    <span>—</span>
                  ))}
              </Grid>

              <Grid item xs={4}>
                <span>
                  <b>Продюсерские компании:</b>
                </span>
              </Grid>
              <Grid item xs={8}>
                {series?.productionCompanies?.length !== 0 ? (
                  <span>
                    {series?.productionCompanies?.map((company, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && ", "}
                        {company.name}
                      </React.Fragment>
                    ))}
                  </span>
                ) : (
                  "—"
                )}
              </Grid>

              <Grid item xs={4}>
                <span>
                  <b>Мировая премьера:</b>
                </span>
              </Grid>
              <Grid item xs={8}>
                <span>
                  {series?.premiere?.world
                    ? `${handleformattedDate(series?.premiere?.world)}`
                    : "—"}
                </span>
              </Grid>

              <Grid item xs={4}>
                <span>
                  <b>Российская премьера:</b>
                </span>
              </Grid>
              <Grid item xs={8}>
                <span>
                  {series?.premiere?.russia
                    ? `${handleformattedDate(series?.premiere?.russia)}`
                    : "—"}
                </span>
              </Grid>

              {series?.premiere?.dvd && (
                <>
                  <Grid item xs={4}>
                    <span>
                      <b>Релиз на DVD:</b>
                    </span>
                  </Grid>
                  <Grid item xs={8}>
                    <span>{handleformattedDate(series?.premiere?.dvd)}</span>
                  </Grid>
                </>
              )}
            </Grid>

            <div style={{ marginTop: "20px" }}>
              <Swiper
                slidesPerView={5}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination]}
                className="movie__swiper"
              >
                {series &&
                  series?.persons &&
                  series?.persons
                    .filter((person) => person.enProfession === "actor")
                    .map((actor) => (
                      <SwiperSlide key={actor.id}>
                        <div className="movie__swiper-slide">
                          <Link href={`/name/[id]`} as={`/name/${actor.id}`}>
                            <img
                              src={actor.photo}
                              alt={actor.name}
                              className="movie__swiper-slide-photo"
                            />
                          </Link>
                          <span className="movie__swiper-slide-name">
                            <Link href={`/name/[id]`} as={`/name/${actor.id}`}>
                              {actor.name}
                            </Link>
                            {showRoles ? <br /> : ""}
                            {showRoles && (
                              <span className="movie__swiper-slide-role">
                                ({actor.description})
                              </span>
                            )}
                          </span>
                        </div>
                      </SwiperSlide>
                    ))}
              </Swiper>
              <div style={{ textAlign: "center" }}>
                <CustomButton
                  onClick={() => setShowRoles(!showRoles)}
                  title={showRoles ? "Скрыть роли" : "Показать роли"}
                />
              </div>
            </div>

            <CustomSwiper
              list={series?.sequelsAndPrequels}
              type="sequelsAndPrequels"
            />
            <CustomSwiper
              list={series?.similarMovies}
              type="similarMovies"
              style={{ minHeight: "335px" }}
            />
          </Grid>

          <CustomList list={series?.facts} type={"FACT"} />
          <CustomList list={series?.facts} type={"BLOOPER"} />
        </Grid>
      </div>

      <ModalRating
        open={open}
        handleClose={handleClose}
        userRatingModal={userRatingModal}
        handleRatingChange={handleRatingChange}
        removeRating={removeRating}
        handleApplyRating={handleApplyRating}
      />
    </>
  );
}

export default Series;
