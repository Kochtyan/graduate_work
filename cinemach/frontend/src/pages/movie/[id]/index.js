"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { fetchMovieById } from "../../../app/api/kinopoisk";

import Header from "../../../app/components/header";
import Grid from "@mui/material/Grid";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "../../../app/css/movie.css";
import "swiper/css";
import "swiper/css/pagination";

import kpLogo from "../../../../src/assets/icon-kp.png";
import imdbLogo from "../../../../src/assets/icon-imdb.png";
import metacriticLogo from "../../../../src/assets/icon-metacritic.png";
import CustomButton from "@/app/components/customButton";

function Movie() {
  const [movie, setMovie] = useState([]);
  const [trailerUrls, setTrailerUrls] = useState([]);

  const [showVideos, setShowVideos] = useState(false);

  const { query } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (query.id) {
        // const movieDetails = await fetchMovieById(query.id);
        const movieDetails = {
          id: 4540126,
          alternativeName: "Dune: Part Two",
          collections: [],
          countries: [
            {
              name: "США",
            },
            {
              name: "Канада",
            },
            {
              name: "ОАЭ",
            },
            {
              name: "Венгрия",
            },
            {
              name: "Италия",
            },
            {
              name: "Новая Зеландия",
            },
            {
              name: "Иордания",
            },
            {
              name: "Гамбия",
            },
          ],
          createdAt: "2022-01-26T12:53:19.581Z",
          description:
            "Герцог Пол Атрейдес присоединяется к фременам, чтобы стать Муад Дибом, одновременно пытаясь остановить наступление войны.",
          enName: null,
          externalId: {
            tmdb: 693134,
            kpHD: null,
          },
          facts: [],
          genres: [
            {
              name: "фантастика",
            },
            {
              name: "боевик",
            },
            {
              name: "драма",
            },
            {
              name: "приключения",
            },
          ],
          movieLength: 166,
          name: "Дюна: Часть вторая",
          names: [
            {
              name: "Дюна 2",
            },
            {
              name: "Dune: Part Two",
            },
            {
              name: "Dune 2",
              language: "US",
              type: null,
            },
            {
              name: "Dune Two",
              language: "US",
              type: null,
            },
            {
              name: "듄 2",
              language: "KR",
              type: null,
            },
            {
              name: "Дюна: Часть вторая",
              language: null,
              type: null,
            },
            {
              name: "Dune: Part 2",
              language: "US",
              type: null,
            },
            {
              name: "デューン 砂の惑星PART2",
              language: "JP",
              type: null,
            },
            {
              name: "Duna 2",
              language: "MX",
              type: null,
            },
            {
              name: "Hành Tinh Cát 2",
              language: "VN",
              type: null,
            },
            {
              name: "Diuna: Część druga",
              language: "PL",
              type: null,
            },
            {
              name: "Duna: Parte Dois",
              language: "PT",
              type: null,
            },
            {
              name: "Kopa. II dalis",
              language: "LT",
              type: null,
            },
            {
              name: "Dune: Del 2",
              language: "DK",
              type: null,
            },
            {
              name: "Düün: teine osa",
              language: "EE",
              type: null,
            },
            {
              name: "Dune: Deuxième partie",
              language: "FR",
              type: null,
            },
            {
              name: "Dune: Teil 2",
              language: "DE",
              type: null,
            },
            {
              name: "Dűne: Második rész",
              language: "HU",
              type: null,
            },
            {
              name: "ड्यून पार्ट टू",
              language: "IN",
              type: null,
            },
            {
              name: "Kopa. Antra dalis",
              language: "LT",
              type: null,
            },
            {
              name: "Дюна: Часть 2",
              language: "RU",
              type: null,
            },
            {
              name: "Дина 2",
              language: "RS",
              type: null,
            },
            {
              name: "沙丘：第二部",
              language: "TW",
              type: null,
            },
          ],
          persons: [
            {
              id: 1665224,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1665224.jpg",
              name: "Тимоти Шаламе",
              enName: "Timothée Chalamet",
              description: "Paul Atreides",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 2317683,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2317683.jpg",
              name: "Зендея",
              enName: "Zendaya",
              description: "Chani",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 498650,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_498650.jpg",
              name: "Ребекка Фергюсон",
              enName: "Rebecca Ferguson",
              description: "Jessica",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 14799,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_14799.jpg",
              name: "Хавьер Бардем",
              enName: "Javier Bardem",
              description: "Stilgar",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 14668,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_14668.jpg",
              name: "Джош Бролин",
              enName: "Josh Brolin",
              description: "Gurney Halleck",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 1266761,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1266761.jpg",
              name: "Остин Батлер",
              enName: "Austin Butler",
              description: "Feyd-Rautha",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 3435612,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3435612.jpg",
              name: "Флоренс Пью",
              enName: "Florence Pugh",
              description: "Princess Irulan",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 1171284,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1171284.jpg",
              name: "Дэйв Батиста",
              enName: "Dave Bautista",
              description: "Beast Rabban",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 12635,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_12635.jpg",
              name: "Кристофер Уокен",
              enName: "Christopher Walken",
              description: "Emperor",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 1108971,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1108971.jpg",
              name: "Леа Сейду",
              enName: "Léa Seydoux",
              description: "Lady Margot Fenring",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 50590,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_50590.jpg",
              name: "Ханс Циммер",
              enName: "Hans Zimmer",
              description: null,
              profession: "композиторы",
              enProfession: "composer",
            },
            {
              id: 1986594,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1986594.jpg",
              name: "Эндрю Эклэнд-Сноу",
              enName: "Andrew Ackland-Snow",
              description: null,
              profession: "художники",
              enProfession: "designer",
            },
            {
              id: 640438,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_640438.jpg",
              name: "Фридерик Бертяюм",
              enName: "Frédéric Berthiaume-Gabbino",
              description: null,
              profession: "художники",
              enProfession: "designer",
            },
            {
              id: 1999703,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1999703.jpg",
              name: "Том Браун",
              enName: "Tom Brown",
              description: null,
              profession: "художники",
              enProfession: "designer",
            },
            {
              id: 6737755,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6737755.jpg",
              name: null,
              enName: "Miklós Hatvani-Deàk",
              description: null,
              profession: "художники",
              enProfession: "designer",
            },
            {
              id: 10165701,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10165701.jpg",
              name: null,
              enName: "Paula Jiménez",
              description: null,
              profession: "художники",
              enProfession: "designer",
            },
            {
              id: 3112792,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3112792.jpg",
              name: "Карим Хеир",
              enName: "Karim Kheir",
              description: null,
              profession: "художники",
              enProfession: "designer",
            },
            {
              id: 2629454,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2629454.jpg",
              name: "Феликс Ларивьер-Шаррон",
              enName: "Félix Larivière-Charron",
              description: null,
              profession: "художники",
              enProfession: "designer",
            },
            {
              id: 1987189,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1987189.jpg",
              name: "Филипп Лорд",
              enName: "Philippe Lord",
              description: null,
              profession: "художники",
              enProfession: "designer",
            },
            {
              id: 2001223,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2001223.jpg",
              name: "Тибор Лазар",
              enName: "Tibor Lázár",
              description: null,
              profession: "художники",
              enProfession: "designer",
            },
            {
              id: 6117091,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6117091.jpg",
              name: "Адориан Портик",
              enName: "Adorjan Portik",
              description: null,
              profession: "художники",
              enProfession: "designer",
            },
            {
              id: 5267076,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5267076.jpg",
              name: "Вероника Толди",
              enName: "Veronika Toldi",
              description: null,
              profession: "художники",
              enProfession: "designer",
            },
            {
              id: 1986366,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1986366.jpg",
              name: "Жаклин Уэст",
              enName: "Jacqueline West",
              description: null,
              profession: "художники",
              enProfession: "designer",
            },
            {
              id: 5501613,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5501613.jpg",
              name: "Жужанна Шипош",
              enName: "Zsuzsanna Sipos",
              description: null,
              profession: "художники",
              enProfession: "designer",
            },
            {
              id: 415350,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_415350.jpg",
              name: "Дени Вильнёв",
              enName: "Denis Villeneuve",
              description: null,
              profession: "режиссеры",
              enProfession: "director",
            },
            {
              id: 1280408,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1280408.jpg",
              name: "Джо Уокер",
              enName: "Joe Walker",
              description: null,
              profession: "монтажеры",
              enProfession: "editor",
            },
            {
              id: 735550,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_735550.jpg",
              name: "Грег Фрейзер",
              enName: "Greig Fraser",
              description: null,
              profession: "операторы",
              enProfession: "operator",
            },
            {
              id: 168,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_168.jpg",
              name: "Патрик МакКормик",
              enName: "Patrick McCormick",
              description: null,
              profession: "продюсеры",
              enProfession: "producer",
            },
            {
              id: 1291600,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1291600.jpg",
              name: null,
              enName: "Diala Al Raie",
              description: null,
              profession: "продюсеры",
              enProfession: "producer",
            },
            {
              id: 10165699,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10165699.jpg",
              name: null,
              enName: "Trevor Bagge",
              description: null,
              profession: "продюсеры",
              enProfession: "producer",
            },
            {
              id: 30187,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_30187.jpg",
              name: "Кейл Бойтер",
              enName: "Cale Boyter",
              description: null,
              profession: "продюсеры",
              enProfession: "producer",
            },
            {
              id: 7174023,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7174023.jpg",
              name: "Даниил Постников",
              enName: null,
              description: null,
              profession: "актеры дубляжа",
              enProfession: "voice_actor",
            },
            {
              id: 1706182,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1706182.jpg",
              name: "Ярослава Николаева",
              enName: null,
              description: null,
              profession: "актеры дубляжа",
              enProfession: "voice_actor",
            },
            {
              id: 6326775,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6326775.jpg",
              name: "Катя Хейфец",
              enName: null,
              description: null,
              profession: "актеры дубляжа",
              enProfession: "voice_actor",
            },
            {
              id: 5628426,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5628426.jpg",
              name: "Серго Кения",
              enName: null,
              description: null,
              profession: "актеры дубляжа",
              enProfession: "voice_actor",
            },
            {
              id: 3054219,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3054219.jpg",
              name: "Андрей Бибиков",
              enName: null,
              description: null,
              profession: "актеры дубляжа",
              enProfession: "voice_actor",
            },
            {
              id: 415350,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_415350.jpg",
              name: "Дени Вильнёв",
              enName: "Denis Villeneuve",
              description: null,
              profession: "редакторы",
              enProfession: "writer",
            },
            {
              id: 1824053,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1824053.jpg",
              name: "Джон Спэйтс",
              enName: "Jon Spaihts",
              description: null,
              profession: "редакторы",
              enProfession: "writer",
            },
            {
              id: 157200,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_157200.jpg",
              name: "Фрэнк Герберт",
              enName: "Frank Herbert",
              description: null,
              profession: "редакторы",
              enProfession: "writer",
            },
            {
              id: 1988043,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1988043.jpg",
              name: "Патрис Верметт",
              enName: "Patrice Vermette",
              description: null,
              profession: "художники",
              enProfession: "designer",
            },
          ],
          poster: {
            url: "https://image.openmoviedb.com/kinopoisk-images/9784475/0c67265b-6631-4e25-b89c-3ddf4e5a1ee7/orig",
            previewUrl:
              "https://image.openmoviedb.com/kinopoisk-images/9784475/0c67265b-6631-4e25-b89c-3ddf4e5a1ee7/x1000",
          },
          productionCompanies: [],
          rating: {
            kp: 8.398,
            imdb: 8.7,
            filmCritics: 8.4,
            russianFilmCritics: 0,
            await: null,
          },
          ratingMpaa: "pg13",
          seasonsInfo: [],
          sequelsAndPrequels: [
            {
              id: 409424,
              name: "Дюна",
              alternativeName: "Dune: Part One",
              enName: null,
              type: "movie",
              poster: {
                url: "https://image.openmoviedb.com/kinopoisk-images/4303601/9eb762d6-4cdd-464f-9937-aebf30067acc/orig",
                previewUrl:
                  "https://image.openmoviedb.com/kinopoisk-images/4303601/9eb762d6-4cdd-464f-9937-aebf30067acc/x1000",
              },
              rating: {
                kp: 7.678,
                imdb: 8,
                filmCritics: 7.6,
                russianFilmCritics: 70.8333,
                await: null,
              },
              year: 2021,
            },
          ],
          shortDescription: null,
          similarMovies: [],
          slogan: null,
          spokenLanguages: [],
          status: null,
          technology: {
            hasImax: false,
            has3D: false,
          },
          ticketsOnSale: false,
          type: "movie",
          typeNumber: 1,
          updatedAt: "2024-04-28T20:14:25.004Z",
          votes: {
            kp: 112463,
            imdb: 371318,
            filmCritics: 414,
            russianFilmCritics: 2,
            await: 107391,
          },
          year: 2024,
          budget: {
            value: 190000000,
            currency: "$",
          },
          fees: {
            world: null,
            usa: null,
          },
          imagesInfo: {
            framesCount: 0,
          },
          premiere: {
            world: "2024-02-06T00:00:00.000Z",
          },
          ageRating: null,
          backdrop: {
            url: null,
            previewUrl: null,
          },
          logo: {
            url: "https://imagetmdb.com/t/p/original/eYvF1LhPKuoBxOAmWjFTAK7EPWl.png",
          },
          watchability: {
            items: [],
          },
          top10: null,
          top250: null,
          isSeries: false,
          seriesLength: null,
          totalSeriesLength: null,
          deletedAt: null,
          lists: [
            "popular-films",
            "top500",
            "box-usa-all-time",
            "box-world-not-usa",
            "box-total",
          ],
          networks: null,
          videos: {
            trailers: [
              {
                url: "https://www.youtube.com/embed/U2Qp5pL3ovA",
                name: "Official Trailer 3",
                site: "youtube",
                type: "TRAILER",
              },
              {
                url: "https://www.youtube.com/embed/_YUzQa_1RCE",
                name: "Official Trailer 2",
                site: "youtube",
                type: "TRAILER",
              },
              {
                url: "https://www.youtube.com/embed/Way9Dexny3w",
                name: "Official Trailer",
                site: "youtube",
                type: "TRAILER",
              },
              {
                url: "https://www.youtube.com/embed/U2Qp5pL3ovA",
                name: "Official Trailer 3",
                site: "youtube",
                type: "TRAILER",
              },
              {
                url: "https://www.youtube.com/embed/_YUzQa_1RCE",
                name: "Official Trailer 2",
                site: "youtube",
                type: "TRAILER",
              },
              {
                url: "https://www.youtube.com/embed/Way9Dexny3w",
                name: "Official Trailer",
                site: "youtube",
                type: "TRAILER",
              },
            ],
          },
        };
        setMovie(movieDetails);
        console.log(movieDetails);

        const _trailerUrls = [
          ...new Set(
            movieDetails?.videos?.trailers.map((vid) => ({
              title: vid.type,
              poster: `https://img.youtube.com/vi/${getYouTubeVideoId(
                vid.url
              )}/0.jpg`,
              sources: [vid.url],
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

    const match = url.toString().match(regExp);

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
                      trailerUrls[0].sources
                    )}/0.jpg`}
                    alt="Video Preview"
                    onClick={() => setShowVideos(!showVideos)}
                    style={{ cursor: "pointer", maxWidth: "320px" }}
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
              <span>
                <img
                  src={metacriticLogo.src}
                  alt=""
                  style={{ width: "20px" }}
                />
                {movie?.rating?.filmCritics}
              </span>
            </div>
            <div>
              <p>{movie?.description}</p>
            </div>
            <div>
              <span>Слоган: {movie?.slogan}</span>
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
                movie?.fees?.world?.currency
              }${handleFormattedValue(movie?.fees?.world?.value)}`}</span>
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

            <div style={{ marginTop: "20px" }}>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination]}
                className="mySwiper"
                style={{ height: "200px" }}
              >
                {movie &&
                  movie?.persons &&
                  movie?.persons
                    .filter((person) => person.enProfession === "actor")
                    .map((actor) => (
                      <SwiperSlide>
                        <div>
                          <img
                            src={actor.photo}
                            alt={actor.name}
                            style={{ width: "100px" }}
                          />
                          <span>{actor.name}</span>
                        </div>
                      </SwiperSlide>
                    ))}
              </Swiper>
              <CustomButton title="Показать роли" />
            </div>

            <h3>Сиквелы и приквелы</h3>

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
                style={{ height: "200px" }}
              >
                {movie &&
                  movie?.sequelsAndPrequels &&
                  movie?.sequelsAndPrequels.map((movie) => (
                    <SwiperSlide>
                      <div>
                        <img
                          src={movie.poster.url}
                          alt={movie.name}
                          style={{ width: "100px" }}
                        />
                        <span>{movie.name}</span>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Movie;
