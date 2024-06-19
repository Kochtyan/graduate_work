"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]";
import Link from "next/link";

import { useQuery, useMutation } from "@apollo/client";
import { MOVIE, IS_IN_WATCHLIST } from "@/app/apollo/queries";
import { SET_RATING, ADD_TO_WATCHLIST } from "@/app/apollo/mutations";

import { fetchMovieById } from "../../../app/api/kinopoisk";

import Header from "@/app/components/header";
import Loader from "@/app/components/loader";
import CustomButton from "@/app/components/customButton";
import CustomList from "@/app/components/customList";
import CustomSwiper from "@/app/components/customSwiper";
import ModalRating from "@/app/components/modalRating";
import Grid from "@mui/material/Grid";
import Bookmark from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlined from "@mui/icons-material/BookmarkAddedOutlined";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "../../../app/css/film.css";
import "swiper/css";
import "swiper/css/pagination";

import kpLogo from "../../../../src/assets/icon-kp.png";
import imdbLogo from "../../../../src/assets/icon-imdb.png";
import metacriticLogo from "../../../../src/assets/icon-metacritic.png";

import { film1, film2 } from "../../../app/query_data/queryData";

function Movie({ session }) {
  const [movie, setMovie] = useState([]);
  const [trailerUrls, setTrailerUrls] = useState([]);
  const [userRating, setUserRating] = useState(null);
  const [userRatingModal, setUserRatingModal] = useState(null);
  const [watchlistState, setWatchlistState] = useState(false);

  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [isSeries, setIsSeries] = useState(false);

  const [showVideos, setShowVideos] = useState(false);
  const [showRoles, setShowRoles] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorQuery, setErrorQuery] = useState("");

  const { query } = useRouter();

  const { loading, error, data } = useQuery(MOVIE, {
    variables: {
      userId: parseInt(session?.user?.id),
      movieId: parseInt(query.id),
    },
  });

  const {
    loading: loadingWatchlist,
    error: errorWatchlist,
    data: dataWatchlist,
  } = useQuery(IS_IN_WATCHLIST, {
    variables: {
      userId: parseInt(session?.user?.id),
      movieId: parseInt(query.id),
    },
  });

  const [setRating] = useMutation(SET_RATING);
  const [addToWatchlist] = useMutation(ADD_TO_WATCHLIST);

  const getYouTubeVideoId = (url) => {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    const match = url.toString().match(regExp);

    if (match) {
      return match[1];
    }

    return null;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (query.id) {
        //const movieDetails = await fetchMovieById(query.id);
        const movieDetails = film2;

        setMovie(movieDetails);
        setTitle(movieDetails?.name ?? movieDetails?.alternativeName);
        setPoster(movieDetails?.poster?.url);
        setIsSeries(movieDetails?.isSeries);

        console.log(movieDetails);

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

    if (data && data.movie?.rating) {
      setUserRating(data.movie.rating);
      setUserRatingModal(data.movie.rating);
    }

    if (dataWatchlist && dataWatchlist.watchlist.exists) {
      setWatchlistState(dataWatchlist.watchlist.exists);
    }

    if (error || errorWatchlist) {
      setErrorQuery(`Ошибка: ${error.message ?? errorWatchlist.message}`);
    }

    fetchData();
  }, [query.id, data, dataWatchlist]);

  if (loading || loadingWatchlist) {
    return <Loader />;
  }

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

  const handleRatingChange = (event, newValue) => {
    setUserRatingModal(newValue);
  };

  const removeRating = async () => {
    setUserRatingModal(null);
    setUserRating(null);

    try {
      const result = await setRating({
        variables: {
          userId: parseInt(session?.user?.id),
          movieId: parseInt(query.id),
          isSeries: isSeries,
          title: title,
          poster: poster,
          rating: null,
        },
      });

      console.log("Оценка успешно изменена:", result);
    } catch (error) {
      console.log(error);
    }

    handleClose();
  };

  const handleApplyRating = async () => {
    setUserRating(userRatingModal);

    try {
      const result = await setRating({
        variables: {
          userId: parseInt(session?.user?.id),
          movieId: parseInt(query.id),
          isSeries: isSeries,
          title: title,
          poster: poster,
          rating: userRatingModal,
        },
      });

      console.log("Оценка успешно изменена:", result);
    } catch (error) {
      console.log(error);
    }

    handleClose();
  };

  const handleAddToWatchlist = async () => {
    try {
      const result = await addToWatchlist({
        variables: {
          userId: parseInt(session?.user?.id),
          movieId: parseInt(query.id),
          isSeries: isSeries,
          title: title,
          poster: poster,
        },
      });

      console.log("Состояние вотчлиста изменено:", result);
      setWatchlistState((prevState) => !prevState);
    } catch (error) {
      console.log(error);
    }
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
            {movie?.poster && (
              <img
                src={movie?.poster?.url}
                alt={`Постер ${movie?.name}`}
                className="movie__poster"
              />
            )}
            {movie?.logo && (
              <div style={{ marginTop: "10px" }}>
                <img
                  style={{ width: "320px", maxWidth: "100%" }}
                  src={movie?.logo?.url}
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
            <h1 className="movie__name">{`${
              movie?.name ?? movie?.enName ?? movie?.alternativeName
            } ${movie?.year ? `(${movie?.year})` : ""}`}</h1>

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
              {session?.user?.id && (
                <span
                  className="movie__rating-column movie__user-rating"
                  style={{ cursor: "pointer" }}
                  onClick={handleOpen}
                >
                  <p>Моя оценка:</p>
                  <span>{userRating ? userRating : "—"}</span>
                </span>
              )}
              <span className="movie__rating-column">
                <img src={kpLogo.src} alt="" style={{ width: "25px" }} />
                <span>{movie?.rating?.kp.toFixed(1)}</span>
              </span>
              <span className="movie__rating-column">
                <img src={imdbLogo.src} alt="" style={{ width: "50px" }} />
                <span>{movie?.rating?.imdb}</span>
              </span>
              <span className="movie__rating-column">
                <img
                  src={metacriticLogo.src}
                  alt=""
                  style={{ width: "25px" }}
                />
                <span>{movie?.rating?.filmCritics}</span>
              </span>
              {session?.user?.id && (
                <div className="movie__add-to-watchlist">
                  {watchlistState ? (
                    <BookmarkOutlined
                      className="movie__add-to-watchlist-icon icon"
                      sx={{ fontSize: 40 }}
                      onClick={handleAddToWatchlist}
                    />
                  ) : (
                    <Bookmark
                      className="movie__add-to-watchlist-icon icon"
                      sx={{ fontSize: 40 }}
                      onClick={handleAddToWatchlist}
                    />
                  )}
                </div>
              )}
            </div>
            {errorQuery && <span>{errorQuery}</span>}

            <div className="movie__description">
              <p>
                <i>{movie?.description}</i>
              </p>
            </div>

            <Grid style={{ margin: "30px 0" }} container spacing={1}>
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
              list={movie?.sequelsAndPrequels}
              type="sequelsAndPrequels"
            />
            <CustomSwiper
              list={movie?.similarMovies}
              type="similarMovies"
              style={{ minHeight: "335px" }}
            />
          </Grid>

          <CustomList list={movie?.facts} type={"FACT"} />
          <CustomList list={movie?.facts} type={"BLOOPER"} />
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

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session,
    },
  };
}

export default Movie;
