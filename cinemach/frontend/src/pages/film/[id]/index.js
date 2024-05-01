"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { fetchMovieById } from "../../../app/api/kinopoisk";

import Header from "../../../app/components/header";
import CustomButton from "@/app/components/customButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "../../../app/css/movie.css";
import "swiper/css";
import "swiper/css/pagination";

import kpLogo from "../../../../src/assets/icon-kp.png";
import imdbLogo from "../../../../src/assets/icon-imdb.png";
import metacriticLogo from "../../../../src/assets/icon-metacritic.png";

import { data1, data2 } from "../../../app/query_data/queryData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#5a5a5a",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const styleList = {
  py: 0,
  width: "100%",
  maxWidth: 900,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  padding: "10px",
};

function Movie() {
  const [movie, setMovie] = useState([]);
  const [trailerUrls, setTrailerUrls] = useState([]);
  const [userRating, setUserRating] = useState(null);
  const [userRatingModal, setUserRatingModal] = useState(null);
  const [displayedFacts, setDisplayedFacts] = useState(3);

  const [showVideos, setShowVideos] = useState(false);
  const [showRoles, setShowRoles] = useState(false);
  const [open, setOpen] = useState(false);
  const [isFranchise, setIsFranchise] = useState(null);
  const [isFacts, setIsFacts] = useState(null);

  const { query } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (query.id) {
        // const movieDetails = await fetchMovieById(query.id);
        const movieDetails = data2;

        setMovie(movieDetails);
        console.log(movieDetails);

        if (movieDetails.sequelsAndPrequels.length !== 0) {
          setIsFranchise(true);
        } else {
          setIsFranchise(false);
        }

        if (movieDetails.facts.length !== 0) {
          setIsFacts(true);
        } else {
          setIsFacts(false);
        }

        const _trailerUrls = movieDetails?.videos?.trailers
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
    console.log(userRatingModal);
  };

  const handleApplyRating = () => {
    setUserRating(userRatingModal);
    handleClose();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleShowMoreFacts = () => {
    setDisplayedFacts((prev) => prev + 10);
  };

  return (
    <>
      <Header />
      <div
        className="movie__container container"
        style={{ marginBottom: "30px" }}
      >
        <Grid container spacing={1}>
          <Grid item xs={4}>
            {movie?.poster && (
              <img
                src={movie?.poster?.url}
                alt={`Постер ${movie?.name}`}
                className="movie__poster"
              />
            )}
            <div style={{ marginTop: "10px" }}>
              <img style={{ maxWidth: "320px" }} src={movie?.logo?.url} />
            </div>
            <div style={{ marginTop: "10px" }}>
              {trailerUrls.length > 0 && (
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
              )}
            </div>
          </Grid>

          <Grid item xs={6}>
            <h1 className="movie__name">{`${movie?.name} ${
              movie?.year ? `(${movie?.year})` : ""
            }`}</h1>

            <div className="movie__fast-info">
              <span className="movie__alternative-name">
                {movie?.alternativeName}
              </span>
              <span>{movie?.ageRating ? `+${movie?.ageRating}` : ``}</span>
              <span>{handleMinutesToHours(movie?.movieLength)}</span>
            </div>

            <div className="movie__genres">
              {movie?.genres?.map((genre, index) => (
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
                className="movie__rating-column"
                style={{ cursor: "pointer" }}
                onClick={handleOpen}
              >
                <p>Моя оценка:</p>
                <span>{userRating ? userRating : "—"}</span>
              </span>
              <span className="movie__rating-column">
                <img src={kpLogo.src} alt="" style={{ width: "25px" }} />
                {movie?.rating?.kp.toFixed(1)}
              </span>
              <span className="movie__rating-column">
                <img src={imdbLogo.src} alt="" style={{ width: "40px" }} />
                {movie?.rating?.imdb}
              </span>
              <span className="movie__rating-column">
                <img
                  src={metacriticLogo.src}
                  alt=""
                  style={{ width: "25px" }}
                />
                {movie?.rating?.filmCritics}
              </span>
            </div>

            <div className="movie__description">
              <p>
                <i>{movie?.description}</i>
              </p>
            </div>

            <Grid style={{ marginTop: "30px" }} container spacing={1}>
              <Grid item xs={4}>
                <span>
                  <b>Слоган:</b>
                </span>
              </Grid>
              <Grid item xs={8}>
                <span>
                  {movie?.slogan ? (
                    <q className="movie__slogan">{movie.slogan}</q>
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
                {movie &&
                  movie.persons &&
                  (movie.persons.filter(
                    (person) => person.enProfession === "director"
                  ).length > 0 ? (
                    movie.persons
                      .filter((person) => person.enProfession === "director")
                      .map((director, index) => (
                        <React.Fragment key={director.id}>
                          {index > 0 && ", "}
                          {director.name ?? director.enName}
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
                {movie &&
                  movie.persons &&
                  (movie.persons.filter(
                    (person) => person.enProfession === "writer"
                  ).length > 0 ? (
                    movie.persons
                      .filter((person) => person.enProfession === "writer")
                      .map((writer, index) => (
                        <React.Fragment key={writer.id}>
                          {index > 0 && ", "}
                          {writer.name ?? writer.enName}
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
                {movie &&
                  movie.persons &&
                  (movie.persons.filter(
                    (person) => person.enProfession === "producer"
                  ).length > 0 ? (
                    movie.persons
                      .filter((person) => person.enProfession === "producer")
                      .map((producer, index) => (
                        <React.Fragment key={producer.id}>
                          {index > 0 && ", "}
                          {producer.name ?? producer.enName}
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
                {movie &&
                  movie.persons &&
                  (movie.persons.filter(
                    (person) => person.enProfession === "composer"
                  ).length > 0 ? (
                    movie.persons
                      .filter((person) => person.enProfession === "composer")
                      .map((composer, index) => (
                        <React.Fragment key={composer.id}>
                          {index > 0 && ", "}
                          {composer.name ?? composer.enName}
                        </React.Fragment>
                      ))
                  ) : (
                    <span>—</span>
                  ))}
              </Grid>

              <Grid item xs={4}>
                <span>
                  <b>Бюджет:</b>
                </span>
              </Grid>
              <Grid item xs={8}>
                <span>
                  {movie?.budget
                    ? `${movie?.budget?.currency}${handleFormattedValue(
                        movie?.budget?.value
                      )}`
                    : "—"}
                </span>
              </Grid>
              <Grid item xs={4}>
                <span>
                  <b>Сборы:</b>
                </span>
              </Grid>
              <Grid item xs={8}>
                <span>
                  {movie?.fees?.world
                    ? `${movie?.fees?.world?.currency}${handleFormattedValue(
                        movie?.fees?.world?.value
                      )}`
                    : "—"}
                </span>
              </Grid>
              <Grid item xs={4}>
                <span>
                  <b>Продюсерские компании:</b>
                </span>
              </Grid>
              <Grid item xs={8}>
                {movie?.productionCompanies?.length !== 0 ? (
                  <span>
                    {movie?.productionCompanies?.map((company, index) => (
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
                  {movie?.premiere?.world
                    ? `${handleformattedDate(movie?.premiere?.world)}`
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
                  {movie?.premiere?.russia
                    ? `${handleformattedDate(movie?.premiere?.russia)}`
                    : "—"}
                </span>
              </Grid>
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
                {movie &&
                  movie?.persons &&
                  movie?.persons
                    .filter((person) => person.enProfession === "actor")
                    .map((actor) => (
                      <SwiperSlide key={actor.id}>
                        <div className="movie__swiper-slide">
                          <img
                            src={actor.photo}
                            alt={actor.name}
                            className="movie__swiper-slide-photo"
                          />
                          <span className="movie__swiper-slide-name">
                            {actor.name}
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
                  title={showRoles ? "Показать роли" : "Скрыть роли"}
                />
              </div>
            </div>

            {isFranchise && (
              <div style={{ marginTop: "20px" }}>
                <h3 style={{ marginBottom: "20px" }}>Сиквелы и приквелы</h3>

                <div>
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination]}
                    className="mySwiper"
                    style={{ height: "250px" }}
                  >
                    {movie &&
                      movie?.sequelsAndPrequels &&
                      movie?.sequelsAndPrequels.map((movie) => (
                        <SwiperSlide key={movie.id}>
                          <div className="movie__swiper-slide">
                            <img
                              src={movie.poster.url}
                              alt={movie.name}
                              style={{ width: "150px", borderRadius: "5px" }}
                            />
                            <span
                              className="movie__swiper-slide-name"
                              style={{ fontSize: "15px" }}
                            >
                              {movie.name}
                            </span>
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              </div>
            )}
          </Grid>

          {isFacts && (
            <div style={{ margin: "20px auto 0 auto" }}>
              <h3>Факты</h3>
              <List sx={styleList}>
                {movie.facts
                  .filter((fact) => fact.type === "FACT")
                  .slice(0, displayedFacts)
                  .map((fact, index) => (
                    <React.Fragment key={index}>
                      <ListItem className="movie__list-item">
                        <p dangerouslySetInnerHTML={{ __html: fact.value }}></p>
                      </ListItem>
                      {index !== displayedFacts - 1 && (
                        <Divider
                          variant="middle"
                          component="li"
                          sx={{
                            borderBottom: "1px solid rgba(108, 41, 163, 0.5)",
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))}
              </List>
              {displayedFacts <
                movie.facts.filter((fact) => fact.type === "FACT").length && (
                <CustomButton
                  onClick={handleShowMoreFacts}
                  title="Показать еще"
                />
              )}
            </div>
          )}
        </Grid>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Оценка:
            {userRatingModal ? ` ${userRatingModal}/10` : ""}
          </Typography>
          <Typography sx={{ mt: 2 }} style={{ textAlign: "center" }}>
            <Rating
              value={userRatingModal}
              precision={0.5}
              max={10}
              sx={{ fontSize: 30 }}
              emptyIcon={<StarIcon sx={{ fontSize: 30 }} />}
              onChange={handleRatingChange}
            />
          </Typography>
          <Typography sx={{ mt: 2 }} style={{ textAlign: "right" }}>
            <CustomButton title="Убрать оценку" onClick={removeRating} />
            <CustomButton
              title="Оценить"
              disabled={userRatingModal ? false : true}
              style={{ marginLeft: "10px" }}
              onClick={handleApplyRating}
            />
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Movie;
