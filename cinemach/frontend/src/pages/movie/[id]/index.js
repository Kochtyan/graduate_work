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
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "../../../app/css/movie.css";
import "swiper/css";
import "swiper/css/pagination";

import kpLogo from "../../../../src/assets/icon-kp.png";
import imdbLogo from "../../../../src/assets/icon-imdb.png";
import metacriticLogo from "../../../../src/assets/icon-metacritic.png";

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

function Movie() {
  const [movie, setMovie] = useState([]);
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
        // const movieDetails = await fetchMovieById(query.id);

        // const movieDetails = {
        //   id: 4540126,
        //   alternativeName: "Dune: Part Two",
        //   collections: [],
        //   countries: [
        //     {
        //       name: "США",
        //     },
        //     {
        //       name: "Канада",
        //     },
        //     {
        //       name: "ОАЭ",
        //     },
        //     {
        //       name: "Венгрия",
        //     },
        //     {
        //       name: "Италия",
        //     },
        //     {
        //       name: "Новая Зеландия",
        //     },
        //     {
        //       name: "Иордания",
        //     },
        //     {
        //       name: "Гамбия",
        //     },
        //   ],
        //   createdAt: "2022-01-26T12:53:19.581Z",
        //   description:
        //     "Герцог Пол Атрейдес присоединяется к фременам, чтобы стать Муад Дибом, одновременно пытаясь остановить наступление войны.",
        //   enName: null,
        //   externalId: {
        //     tmdb: 693134,
        //     kpHD: null,
        //   },
        //   facts: [],
        //   genres: [
        //     {
        //       name: "фантастика",
        //     },
        //     {
        //       name: "боевик",
        //     },
        //     {
        //       name: "драма",
        //     },
        //     {
        //       name: "приключения",
        //     },
        //   ],
        //   movieLength: 166,
        //   name: "Дюна: Часть вторая",
        //   names: [
        //     {
        //       name: "Дюна 2",
        //     },
        //     {
        //       name: "Dune: Part Two",
        //     },
        //     {
        //       name: "Dune 2",
        //       language: "US",
        //       type: null,
        //     },
        //     {
        //       name: "Dune Two",
        //       language: "US",
        //       type: null,
        //     },
        //     {
        //       name: "듄 2",
        //       language: "KR",
        //       type: null,
        //     },
        //     {
        //       name: "Дюна: Часть вторая",
        //       language: null,
        //       type: null,
        //     },
        //     {
        //       name: "Dune: Part 2",
        //       language: "US",
        //       type: null,
        //     },
        //     {
        //       name: "デューン 砂の惑星PART2",
        //       language: "JP",
        //       type: null,
        //     },
        //     {
        //       name: "Duna 2",
        //       language: "MX",
        //       type: null,
        //     },
        //     {
        //       name: "Hành Tinh Cát 2",
        //       language: "VN",
        //       type: null,
        //     },
        //     {
        //       name: "Diuna: Część druga",
        //       language: "PL",
        //       type: null,
        //     },
        //     {
        //       name: "Duna: Parte Dois",
        //       language: "PT",
        //       type: null,
        //     },
        //     {
        //       name: "Kopa. II dalis",
        //       language: "LT",
        //       type: null,
        //     },
        //     {
        //       name: "Dune: Del 2",
        //       language: "DK",
        //       type: null,
        //     },
        //     {
        //       name: "Düün: teine osa",
        //       language: "EE",
        //       type: null,
        //     },
        //     {
        //       name: "Dune: Deuxième partie",
        //       language: "FR",
        //       type: null,
        //     },
        //     {
        //       name: "Dune: Teil 2",
        //       language: "DE",
        //       type: null,
        //     },
        //     {
        //       name: "Dűne: Második rész",
        //       language: "HU",
        //       type: null,
        //     },
        //     {
        //       name: "ड्यून पार्ट टू",
        //       language: "IN",
        //       type: null,
        //     },
        //     {
        //       name: "Kopa. Antra dalis",
        //       language: "LT",
        //       type: null,
        //     },
        //     {
        //       name: "Дюна: Часть 2",
        //       language: "RU",
        //       type: null,
        //     },
        //     {
        //       name: "Дина 2",
        //       language: "RS",
        //       type: null,
        //     },
        //     {
        //       name: "沙丘：第二部",
        //       language: "TW",
        //       type: null,
        //     },
        //   ],
        //   persons: [
        //     {
        //       id: 1665224,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1665224.jpg",
        //       name: "Тимоти Шаламе",
        //       enName: "Timothée Chalamet",
        //       description: "Paul Atreides",
        //       profession: "актеры",
        //       enProfession: "actor",
        //     },
        //     {
        //       id: 2317683,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2317683.jpg",
        //       name: "Зендея",
        //       enName: "Zendaya",
        //       description: "Chani",
        //       profession: "актеры",
        //       enProfession: "actor",
        //     },
        //     {
        //       id: 498650,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_498650.jpg",
        //       name: "Ребекка Фергюсон",
        //       enName: "Rebecca Ferguson",
        //       description: "Jessica",
        //       profession: "актеры",
        //       enProfession: "actor",
        //     },
        //     {
        //       id: 14799,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_14799.jpg",
        //       name: "Хавьер Бардем",
        //       enName: "Javier Bardem",
        //       description: "Stilgar",
        //       profession: "актеры",
        //       enProfession: "actor",
        //     },
        //     {
        //       id: 14668,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_14668.jpg",
        //       name: "Джош Бролин",
        //       enName: "Josh Brolin",
        //       description: "Gurney Halleck",
        //       profession: "актеры",
        //       enProfession: "actor",
        //     },
        //     {
        //       id: 1266761,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1266761.jpg",
        //       name: "Остин Батлер",
        //       enName: "Austin Butler",
        //       description: "Feyd-Rautha",
        //       profession: "актеры",
        //       enProfession: "actor",
        //     },
        //     {
        //       id: 3435612,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3435612.jpg",
        //       name: "Флоренс Пью",
        //       enName: "Florence Pugh",
        //       description: "Princess Irulan",
        //       profession: "актеры",
        //       enProfession: "actor",
        //     },
        //     {
        //       id: 1171284,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1171284.jpg",
        //       name: "Дэйв Батиста",
        //       enName: "Dave Bautista",
        //       description: "Beast Rabban",
        //       profession: "актеры",
        //       enProfession: "actor",
        //     },
        //     {
        //       id: 12635,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_12635.jpg",
        //       name: "Кристофер Уокен",
        //       enName: "Christopher Walken",
        //       description: "Emperor",
        //       profession: "актеры",
        //       enProfession: "actor",
        //     },
        //     {
        //       id: 1108971,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1108971.jpg",
        //       name: "Леа Сейду",
        //       enName: "Léa Seydoux",
        //       description: "Lady Margot Fenring",
        //       profession: "актеры",
        //       enProfession: "actor",
        //     },
        //     {
        //       id: 50590,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_50590.jpg",
        //       name: "Ханс Циммер",
        //       enName: "Hans Zimmer",
        //       description: null,
        //       profession: "композиторы",
        //       enProfession: "composer",
        //     },
        //     {
        //       id: 1986594,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1986594.jpg",
        //       name: "Эндрю Эклэнд-Сноу",
        //       enName: "Andrew Ackland-Snow",
        //       description: null,
        //       profession: "художники",
        //       enProfession: "designer",
        //     },
        //     {
        //       id: 640438,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_640438.jpg",
        //       name: "Фридерик Бертяюм",
        //       enName: "Frédéric Berthiaume-Gabbino",
        //       description: null,
        //       profession: "художники",
        //       enProfession: "designer",
        //     },
        //     {
        //       id: 1999703,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1999703.jpg",
        //       name: "Том Браун",
        //       enName: "Tom Brown",
        //       description: null,
        //       profession: "художники",
        //       enProfession: "designer",
        //     },
        //     {
        //       id: 6737755,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6737755.jpg",
        //       name: null,
        //       enName: "Miklós Hatvani-Deàk",
        //       description: null,
        //       profession: "художники",
        //       enProfession: "designer",
        //     },
        //     {
        //       id: 10165701,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10165701.jpg",
        //       name: null,
        //       enName: "Paula Jiménez",
        //       description: null,
        //       profession: "художники",
        //       enProfession: "designer",
        //     },
        //     {
        //       id: 3112792,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3112792.jpg",
        //       name: "Карим Хеир",
        //       enName: "Karim Kheir",
        //       description: null,
        //       profession: "художники",
        //       enProfession: "designer",
        //     },
        //     {
        //       id: 2629454,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2629454.jpg",
        //       name: "Феликс Ларивьер-Шаррон",
        //       enName: "Félix Larivière-Charron",
        //       description: null,
        //       profession: "художники",
        //       enProfession: "designer",
        //     },
        //     {
        //       id: 1987189,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1987189.jpg",
        //       name: "Филипп Лорд",
        //       enName: "Philippe Lord",
        //       description: null,
        //       profession: "художники",
        //       enProfession: "designer",
        //     },
        //     {
        //       id: 2001223,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2001223.jpg",
        //       name: "Тибор Лазар",
        //       enName: "Tibor Lázár",
        //       description: null,
        //       profession: "художники",
        //       enProfession: "designer",
        //     },
        //     {
        //       id: 6117091,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6117091.jpg",
        //       name: "Адориан Портик",
        //       enName: "Adorjan Portik",
        //       description: null,
        //       profession: "художники",
        //       enProfession: "designer",
        //     },
        //     {
        //       id: 5267076,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5267076.jpg",
        //       name: "Вероника Толди",
        //       enName: "Veronika Toldi",
        //       description: null,
        //       profession: "художники",
        //       enProfession: "designer",
        //     },
        //     {
        //       id: 1986366,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1986366.jpg",
        //       name: "Жаклин Уэст",
        //       enName: "Jacqueline West",
        //       description: null,
        //       profession: "художники",
        //       enProfession: "designer",
        //     },
        //     {
        //       id: 5501613,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5501613.jpg",
        //       name: "Жужанна Шипош",
        //       enName: "Zsuzsanna Sipos",
        //       description: null,
        //       profession: "художники",
        //       enProfession: "designer",
        //     },
        //     {
        //       id: 415350,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_415350.jpg",
        //       name: "Дени Вильнёв",
        //       enName: "Denis Villeneuve",
        //       description: null,
        //       profession: "режиссеры",
        //       enProfession: "director",
        //     },
        //     {
        //       id: 1280408,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1280408.jpg",
        //       name: "Джо Уокер",
        //       enName: "Joe Walker",
        //       description: null,
        //       profession: "монтажеры",
        //       enProfession: "editor",
        //     },
        //     {
        //       id: 735550,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_735550.jpg",
        //       name: "Грег Фрейзер",
        //       enName: "Greig Fraser",
        //       description: null,
        //       profession: "операторы",
        //       enProfession: "operator",
        //     },
        //     {
        //       id: 168,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_168.jpg",
        //       name: "Патрик МакКормик",
        //       enName: "Patrick McCormick",
        //       description: null,
        //       profession: "продюсеры",
        //       enProfession: "producer",
        //     },
        //     {
        //       id: 1291600,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1291600.jpg",
        //       name: null,
        //       enName: "Diala Al Raie",
        //       description: null,
        //       profession: "продюсеры",
        //       enProfession: "producer",
        //     },
        //     {
        //       id: 10165699,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10165699.jpg",
        //       name: null,
        //       enName: "Trevor Bagge",
        //       description: null,
        //       profession: "продюсеры",
        //       enProfession: "producer",
        //     },
        //     {
        //       id: 30187,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_30187.jpg",
        //       name: "Кейл Бойтер",
        //       enName: "Cale Boyter",
        //       description: null,
        //       profession: "продюсеры",
        //       enProfession: "producer",
        //     },
        //     {
        //       id: 7174023,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7174023.jpg",
        //       name: "Даниил Постников",
        //       enName: null,
        //       description: null,
        //       profession: "актеры дубляжа",
        //       enProfession: "voice_actor",
        //     },
        //     {
        //       id: 1706182,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1706182.jpg",
        //       name: "Ярослава Николаева",
        //       enName: null,
        //       description: null,
        //       profession: "актеры дубляжа",
        //       enProfession: "voice_actor",
        //     },
        //     {
        //       id: 6326775,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6326775.jpg",
        //       name: "Катя Хейфец",
        //       enName: null,
        //       description: null,
        //       profession: "актеры дубляжа",
        //       enProfession: "voice_actor",
        //     },
        //     {
        //       id: 5628426,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5628426.jpg",
        //       name: "Серго Кения",
        //       enName: null,
        //       description: null,
        //       profession: "актеры дубляжа",
        //       enProfession: "voice_actor",
        //     },
        //     {
        //       id: 3054219,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3054219.jpg",
        //       name: "Андрей Бибиков",
        //       enName: null,
        //       description: null,
        //       profession: "актеры дубляжа",
        //       enProfession: "voice_actor",
        //     },
        //     {
        //       id: 415350,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_415350.jpg",
        //       name: "Дени Вильнёв",
        //       enName: "Denis Villeneuve",
        //       description: null,
        //       profession: "редакторы",
        //       enProfession: "writer",
        //     },
        //     {
        //       id: 1824053,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1824053.jpg",
        //       name: "Джон Спэйтс",
        //       enName: "Jon Spaihts",
        //       description: null,
        //       profession: "редакторы",
        //       enProfession: "writer",
        //     },
        //     {
        //       id: 157200,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_157200.jpg",
        //       name: "Фрэнк Герберт",
        //       enName: "Frank Herbert",
        //       description: null,
        //       profession: "редакторы",
        //       enProfession: "writer",
        //     },
        //     {
        //       id: 1988043,
        //       photo:
        //         "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1988043.jpg",
        //       name: "Патрис Верметт",
        //       enName: "Patrice Vermette",
        //       description: null,
        //       profession: "художники",
        //       enProfession: "designer",
        //     },
        //   ],
        //   poster: {
        //     url: "https://image.openmoviedb.com/kinopoisk-images/9784475/0c67265b-6631-4e25-b89c-3ddf4e5a1ee7/orig",
        //     previewUrl:
        //       "https://image.openmoviedb.com/kinopoisk-images/9784475/0c67265b-6631-4e25-b89c-3ddf4e5a1ee7/x1000",
        //   },
        //   productionCompanies: [],
        //   rating: {
        //     kp: 8.398,
        //     imdb: 8.7,
        //     filmCritics: 8.4,
        //     russianFilmCritics: 0,
        //     await: null,
        //   },
        //   ratingMpaa: "pg13",
        //   seasonsInfo: [],
        //   sequelsAndPrequels: [
        //     {
        //       id: 409424,
        //       name: "Дюна",
        //       alternativeName: "Dune: Part One",
        //       enName: null,
        //       type: "movie",
        //       poster: {
        //         url: "https://image.openmoviedb.com/kinopoisk-images/4303601/9eb762d6-4cdd-464f-9937-aebf30067acc/orig",
        //         previewUrl:
        //           "https://image.openmoviedb.com/kinopoisk-images/4303601/9eb762d6-4cdd-464f-9937-aebf30067acc/x1000",
        //       },
        //       rating: {
        //         kp: 7.678,
        //         imdb: 8,
        //         filmCritics: 7.6,
        //         russianFilmCritics: 70.8333,
        //         await: null,
        //       },
        //       year: 2021,
        //     },
        //   ],
        //   shortDescription: null,
        //   similarMovies: [],
        //   slogan: null,
        //   spokenLanguages: [],
        //   status: null,
        //   technology: {
        //     hasImax: false,
        //     has3D: false,
        //   },
        //   ticketsOnSale: false,
        //   type: "movie",
        //   typeNumber: 1,
        //   updatedAt: "2024-04-28T20:14:25.004Z",
        //   votes: {
        //     kp: 112463,
        //     imdb: 371318,
        //     filmCritics: 414,
        //     russianFilmCritics: 2,
        //     await: 107391,
        //   },
        //   year: 2024,
        //   budget: {
        //     value: 190000000,
        //     currency: "$",
        //   },
        //   fees: {
        //     world: null,
        //     usa: null,
        //   },
        //   imagesInfo: {
        //     framesCount: 0,
        //   },
        //   premiere: {
        //     world: "2024-02-06T00:00:00.000Z",
        //   },
        //   ageRating: null,
        //   backdrop: {
        //     url: null,
        //     previewUrl: null,
        //   },
        //   logo: {
        //     url: "https://imagetmdb.com/t/p/original/eYvF1LhPKuoBxOAmWjFTAK7EPWl.png",
        //   },
        //   watchability: {
        //     items: [],
        //   },
        //   top10: null,
        //   top250: null,
        //   isSeries: false,
        //   seriesLength: null,
        //   totalSeriesLength: null,
        //   deletedAt: null,
        //   lists: [
        //     "popular-films",
        //     "top500",
        //     "box-usa-all-time",
        //     "box-world-not-usa",
        //     "box-total",
        //   ],
        //   networks: null,
        //   videos: {
        //     trailers: [
        //       {
        //         url: "https://www.youtube.com/embed/U2Qp5pL3ovA",
        //         name: "Official Trailer 3",
        //         site: "youtube",
        //         type: "TRAILER",
        //       },
        //       {
        //         url: "https://www.youtube.com/embed/_YUzQa_1RCE",
        //         name: "Official Trailer 2",
        //         site: "youtube",
        //         type: "TRAILER",
        //       },
        //       {
        //         url: "https://www.youtube.com/embed/Way9Dexny3w",
        //         name: "Official Trailer",
        //         site: "youtube",
        //         type: "TRAILER",
        //       },
        //       {
        //         url: "https://www.youtube.com/embed/U2Qp5pL3ovA",
        //         name: "Official Trailer 3",
        //         site: "youtube",
        //         type: "TRAILER",
        //       },
        //       {
        //         url: "https://www.youtube.com/embed/_YUzQa_1RCE",
        //         name: "Official Trailer 2",
        //         site: "youtube",
        //         type: "TRAILER",
        //       },
        //       {
        //         url: "https://www.youtube.com/embed/Way9Dexny3w",
        //         name: "Official Trailer",
        //         site: "youtube",
        //         type: "TRAILER",
        //       },
        //     ],
        //   },
        // };

        const movieDetails = {
          fees: {
            world: {
              value: 213928762,
              currency: "$",
            },
            russia: {
              value: 83843,
              currency: "$",
            },
            usa: {
              value: 107928762,
              currency: "$",
            },
          },
          status: null,
          externalId: {
            imdb: "tt0110912",
            tmdb: 680,
            kpHD: "45e8f29f25fe31a59be88301baa5caa1",
          },
          rating: {
            kp: 8.65,
            imdb: 8.9,
            filmCritics: 9.3,
            russianFilmCritics: 100,
            await: null,
          },
          votes: {
            kp: 771592,
            imdb: 2202233,
            filmCritics: 181,
            russianFilmCritics: 7,
            await: 1,
          },
          backdrop: {
            url: "https://image.openmoviedb.com/tmdb-images/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
            previewUrl:
              "https://image.openmoviedb.com/tmdb-images/w500/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
          },
          movieLength: 154,
          images: {
            postersCount: 56,
            backdropsCount: 28,
            framesCount: 77,
          },
          productionCompanies: [
            {
              name: "Miramax",
              url: "https://www.themoviedb.org/t/p/original/m6AHu84oZQxvq7n1rsvMNJIAsMu.png",
              previewUrl:
                "https://www.themoviedb.org/t/p/w500/m6AHu84oZQxvq7n1rsvMNJIAsMu.png",
            },
            {
              name: "A Band Apart",
              url: "https://www.themoviedb.org/t/p/original/yH7OMeSxhfP0AVM6iT0rsF3F4ZC.png",
              previewUrl:
                "https://www.themoviedb.org/t/p/w500/yH7OMeSxhfP0AVM6iT0rsF3F4ZC.png",
            },
            {
              name: "Jersey Films",
              url: null,
              previewUrl: null,
            },
          ],
          spokenLanguages: [
            {
              name: "English",
              nameEn: "English",
            },
            {
              name: "Español",
              nameEn: "Spanish",
            },
            {
              name: "Français",
              nameEn: "French",
            },
          ],
          id: 342,
          type: "movie",
          name: "Криминальное чтиво",
          description:
            "Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.\nВ первой истории Винсент проводит незабываемый вечер с женой Марселласа Мией. Во второй рассказывается о боксёре Бутче Кулидже, купленном Уоллесом, чтобы сдать бой. В третьей истории Винсент и Джулс по нелепой случайности попадают в неприятности.",
          distributors: {
            distributor: "Каравелла DDC, Аргус-СВ",
            distributorRelease: "West Video, Кармен Видео",
          },
          premiere: {
            world: "1994-05-21T00:00:00.000Z",
            russia: "1995-09-29T00:00:00.000Z",
            bluray: "2013-09-11T00:00:00.000Z",
            dvd: "2002-01-31T00:00:00.000Z",
          },
          slogan:
            "Just because you are a character doesn't mean you have character",
          year: 1994,
          budget: {
            value: 8000000,
            currency: "$",
          },
          poster: {
            url: "https://image.openmoviedb.com/kinopoisk-images/1900788/87b5659d-a159-4224-9bff-d5a5d109a53b/orig",
            previewUrl:
              "https://image.openmoviedb.com/kinopoisk-images/1900788/87b5659d-a159-4224-9bff-d5a5d109a53b/x1000",
          },
          facts: [
            {
              value:
                '«Биг Кахуна» — вымышленное название бургера. Впервые его название можно услышать в «<a href="/film/394/" class="all">Бешеных псах</a>» (1991). Также данный бургер упоминается в фильме «<a href="/film/4815/" class="all">От заката до рассвета</a>» (1995).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                "Бюджет фильма составил 8 миллионов долларов, из них 5 млн ушло на зарплату актерам.",
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Винсент Вега (<a href="/name/6479/" class="all">Джон Траволта</a>) — брат Вика Веги, больше известного как Мистер Блондин (<a href="/name/7111/" class="all">Майкл Мэдсен</a> в «<a href="/film/394/" class="all">Бешеных псах</a>»).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Несмотря на то что <a href="/name/7640/" class="all">Тарантино</a> специально написал роль Джулса для <a href="/name/7164/" class="all">Сэмюэла Л. Джексона</a>, актер мог ее не сыграть, так как продюсерам очень понравилась проба <a href="/name/2321/" class="all">Пола Кэлдерона</a> на эту роль. Но в итоге Джексон сыграл Джулса, а Пол исполнил роль бармена в баре Марселласа.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Сцена в ресторане (Зайчишка и Тыковка) была специально написана для <a href="/name/2145/" class="all">Тима Рота</a> и <a href="/name/29519/" class="all">Аманды Пламмер</a>.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Две новеллы из трех были написаны еще до выхода «<a href="/film/394/" class="all">Бешеных псов</a>». После успеха «Бешеных псов» и «<a href="/film/4149/" class="all">Настоящей любви</a>» <a href="/name/7640/" class="all">Тарантино</a> решил дописать сценарий. Также он хотел, чтобы три новеллы были поставлены разными режиссерами.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Миа называет Винсента ковбоем, в ответ Винсент называет Мию девушкой-ковбоем. Примечательно то, что Джон Траволта сыграл в фильме «<a href="/film/9520/" class="all">Городской ковбой</a>» (1980), а Ума Турман — в фильме «<a href="/film/2841/" class="all">Даже девушки-ковбои иногда грустят</a>» (1993).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Роль Вульфа была специально написана для <a href="/name/1600/" class="all">Харви Кейтеля</a>.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Когда Бутч идет к своей квартире, на заднем фоне можно услышать рекламу «Джек Рэббит Слимс» по радио. Ту же самую рекламу можно услышать в сцене пытки в «<a href="/film/394/" class="all">Бешеных псах</a>» (1991).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Бутч курит сигареты Red Apple. Такой же марки сигареты курит персонаж <a href="/name/2145/" class="all">Тима Рота</a> в «<a href="/film/4250/" class="all">Четырех комнатах</a>» (1995).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Первоначально роль Марселласа должен был исполнить <a href="/name/31933/" class="all">Сид Хэйг</a>. Но в самый последний момент он отказался от роли.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Изначально предполагалось, что у Джулса будут дреды. Гримеры предложили <a href="/name/7164/" class="all">Сэмюэлу Л. Джексону</a> множество париков, среди которых также был и кудрявый парик. Джексон примерил этот парик, и <a href="/name/7640/" class="all">Тарантино</a> понравилась прическа Джексона.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Когда капитан Кунс отдает маленькому Бутчу часы его отца, он говорит о летчике под именем Виноки, который переправил часы в безопасное место. Виноки — имя персонажа <a href="/name/209515/" class="all">Джона Гарфилда</a> в фильме <a href="/name/160426/" class="all">Ховарда Хоукса</a> «<a href="/film/199467/" class="all">Военно-воздушные силы</a>» (1943). Хоукс является одним из любимых режиссеров <a href="/name/7640/" class="all">Квентина Тарантино</a>.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Уилсон — имя боксера, которому должен проиграть Бутч. Точно так же звали боксера, которому намеренно проиграл Терри Мэллой в картине «<a href="/film/398/" class="all">В порту</a>» (1954).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'На здании, в котором проходит боксерский матч Бутча, висят объявления следующих боев: Кулидж против Уилсона, Восслер против Мартинеза. Фамилии боксеров первого боя — намек на президентов США <a href="/name/367265/" class="all">Кэлвина Кулиджа</a> и <a href="/name/463472/" class="all">Вудро Вильсона</a>. Фамилии боксеров второго боя принадлежат Расселу Восслеру и Джерри Мартинезу, друзьям <a href="/name/7640/" class="all">Тарантино</a>, с которыми он вместе работал в видеопрокате.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Прадедушка Бутча купил часы в Ноксвилле, Теннесси. В этом же городе родился <a href="/name/7640/" class="all">Квентин Тарантино</a>.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Фабьен говорит: «Любое время подходит для пирога». Точно такую же фразу говорит Алабама в «<a href="/film/4149/" class="all">Настоящей любви</a>» (1993), сценарий которой написал <a href="/name/7640/" class="all">Квентин Тарантино</a>.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'У персонажа <a href="/name/1600/" class="all">Харви Кейтеля</a> в фильме точно такая же работа, как у его же персонажа в фильме «<a href="/film/9318/" class="all">Убийца</a>» (1993).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Внешний вид Мии Уоллес (<a href="/name/29595/" class="all">Ума Турман</a>) был создан на основе персонажа Анны Карины из «Банды аутсайдеров» (1964). «<a href="/film/38296/" class="all">Банда аутсайдеров</a>» — один из любимых фильмов <a href="/name/7640/" class="all">Квентина Тарантино</a>.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Фильм, который смотрит Лэнс по телевизору незадолго до появления Винсента и Мии, — «<a href="/film/200166/" class="all">Жених без невесты</a>» (1947).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Первоначально <a href="/name/29595/" class="all">Ума Турман</a> отклонила предложение сыграть Мию Уоллес. Но <a href="/name/7640/" class="all">Квентин Тарантино</a> настолько сильно желал, чтобы эта роль досталась Уме, что он начитывал ей сценарий по телефону. В конце концов Турман согласилась.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Фраза Мии Уоллес «Человеку, которому нравится Элвис, понравится это место» — заключительная фраза вырезанной сцены, в которой Миа объясняет, что всех людей можно разделить на людей, которым нравится Элвис, и людей, которым нравится <a href="/name/231295/" class="all">The Beatles</a>.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Джимми одет в футболку с логотипом детройтской газеты Orbit. <a href="/name/7640/" class="all">Квентин Тарантино</a> дал интервью этому изданию во время промокампании «<a href="/film/394/" class="all">Бешеных псов</a>» (1992).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Маленький Бутч смотрит по телевизору «<a href="/film/712773/" class="all">Клют Карго</a>» (1959).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                '&#171;Шевроле Малибу&#187; 1964&#160;года, на&#160;котором разъезжал Винсент Вега, принадлежал <a href="/name/7640/" class="all">Квентину Тарантино</a>. Автомобиль был угнан во&#160;время съемок фильма, затем найден и возвращен законному владельцу спустя 19 лет.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Эсмеральда Виллалобос (<a href="/name/20453/" class="all">Анджела Джонс</a>), водитель такси, также появляется в тридцатиминутной короткометражке «<a href="/film/196451/" class="all">Curdled</a>» (1991), только там Джонс сыграла чистильщика. <a href="/name/7640/" class="all">Квентин Тарантино</a> посмотрел данный фильм и решил включить в «Криминальное чтиво» Эсмеральду, только изменив ее профессию с чистильщика на водителя такси.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                '<a href="/name/2043/" class="all">Пэм Гриер</a> могла исполнить роль жены Лэнса. Ее кандидатуру отклонил <a href="/name/7640/" class="all">Квентин Тарантино</a>, так как он не мог представить ее в данной роли.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Изначально <a href="/name/7640/" class="all">Квентин Тарантино</a> планировал, что в сцене, где Гимп смеется над привязанным к стулу Бутчом, будет играть «My Sharona» группы <a href="/name/1614665/" class="all">The Knack</a>. Однако права на использование песни уже были проданы для другого фильма — картины «<a href="/film/5333/" class="all">Реальность кусается</a>» (1994).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Фильм, который смотрит Фабьен до того момента, как просыпается Бутч, — это «<a href="/film/34869/" class="all">Ангелы Вьетнама</a>» (1970).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Роль Бутча могла достаться <a href="/name/8816/" class="all">Сильвестору Сталлоне</a>, <a href="/name/9276/" class="all">Микки Рурку</a> и <a href="/name/40531/" class="all">Мэтту Диллону</a>.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Бумажник Джулса на самом деле принадлежит <a href="/name/7640/" class="all">Квентину Тарантино</a>. Надпись на бумажнике «Долбаный мудак» (Bad Motherfucker) — ссылка на музыкальную тему из «<a href="/film/13673/" class="all">Шафта</a>» (1971).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                '<a href="/name/7640/" class="all">Квентин Тарантино</a> хотел, чтобы в фильм вернулся персонаж <a href="/name/7111/" class="all">Майкла Мэдсена</a> (Вик Вега) из «<a href="/film/394/" class="all">Бешеных псов</a>» (1992), поэтому роль, впоследствии доставшаяся <a href="/name/6479/" class="all">Джону Траволте</a>, была написана специально для Майкла. Но он не смог принять участие в фильме из-за контрактных обязательств на других проектах. Тарантино пришлось изменить имя персонажа с Вика на Винсента. Спустя несколько лет после выхода «Криминального чтива» Тарантино хотел снять фильм о братьях Вега с участием Джона Траволты и Майкла Мэдсена, в котором действие происходило бы до событий, показанных в «Криминальном чтиве» и «Бешеных псах» (1992). Разработка проекта затянулась, и в конце концов Тарантино отказался от этой идеи.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Бутч, держа в руках самурайский меч, говорит Зеду: «Ты хочешь взять пушку, не так ли, Зед? Давай же, бери! Я хочу, чтобы ты ее взял». То же самое говорит шериф Чанс (<a href="/name/47581/" class="all">Джон Уэйн</a>) в «<a href="/film/545/" class="all">Рио Браво</a>» (1959). «Рио Браво» — один из любимых фильмов <a href="/name/7640/" class="all">Квентина Тарантино</a>.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                '<a href="/name/7640/" class="all">Квентин Тарантино</a> писал сценарий фильма в Амстердаме. В основном в номере отеля и кофейне Betty Boop. Он жил в Амстердаме несколько месяцев, а также оставил непогашенный долг на сумму в 150 долларов в одном из видеопрокатов. Скорее всего, столь долгим пребыванием в Амстердаме и объясняется то, почему данный город так часто упоминается в фильме.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Шрифт и цвет текста начальных титров точно такой же, как в сериале «<a href="/film/278034/" class="all">Женщина-полицейский</a>» (1974).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                '<a href="/name/41494/" class="all">Дэниэл Дэй-Льюис</a> хотел сыграть Винсента Вегу, но его кандидатуру отверг <a href="/name/7640/" class="all">Квентин Тарантино</a>.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Роль Мии Уоллес могла достаться <a href="/name/39883/" class="all">Изабелле Росселлини</a>, <a href="/name/9385/" class="all">Мег Райан</a>, <a href="/name/23263/" class="all">Дэрил Ханне</a>, <a href="/name/21823/" class="all">Джоан Кьюсак</a> и <a href="/name/21492/" class="all">Мишель Пфайффер</a>.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Труди (<a href="/name/12042/" class="all">Брона Галлахер</a>) одета в футболку, на которой изображена ирландская рок-группа The Frames. Брона сыграла в фильме «<a href="/film/7741/" class="all">Обязательства</a>» (1991) вместе с <a href="/name/124276/" class="all">Гленом Хансардом</a>, лидером данной группы. Они стали друзьями. Брона пообещала Глену, что если она получит роль в «Криминальном чтиве», то она появится в фильме в их футболке.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                "Стив Мартинез (брат главного художника-оформителя, Джеральда Мартинеза) в финальных титрах указан в списке «Особая благодарность». Дело в том, что он нарисовал портрет Мии, который висит в доме Марселласа.",
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                "Сцена в ресторане (в начале и конце фильма) была снята в реально существующем ресторане. Здание, где проходили съемки, вскоре после выхода фильма было разрушено.",
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Когда Миа идет в уборную, чтобы припудрить носик, она говорит: «Я сказала: черт! Черт». Это ссылка на песню «The Pusher» из фильма «<a href="/film/4220/" class="all">Беспечный ездок</a>» (1969).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                "Когда Винсент входит в дом Мии, то одна из задних дверей слегка приоткрыта. Это было сделано, чтобы не было видно отражения камеры.",
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Первоначально предполагалось, что <a href="/name/9271/" class="all">Стив Бушеми</a> исполнит роль Джимми, но из-за своих контрактных обязательств на других проектах он не смог этого сделать. Однако он все же появился в фильме в камео. Стив сыграл официанта, принимающего заказ у Мии и Винсента, в ресторане «Джек Рэббит Слимс».',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                "В самом начале фильма, когда разговаривают Тыковка и Зайчишка, можно заметить Винсента, входящего в туалет.",
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'По словам <a href="/name/6479/" class="all">Джона Траволты</a>, некоторые танцевальные па для сцены в «Джек Рэббит Слимс» он позаимствовал у персонажа <a href="/name/28641/" class="all">Адама Уэста</a>, Батуси, из «<a href="/film/18406/" class="all">Бэтмена</a>» (1966).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                '<a href="/name/29595/" class="all">Ума Турман</a> черпала вдохновение для танца в «Джек Рэббит Слимс» у герцогини из «<a href="/film/26656/" class="all">Котов-аристократов</a>»(1970).',
              type: "FACT",
              spoiler: false,
            },
            {
              value: "Слово «fuck» используется в фильме 271 раз.",
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Имя Винстона Вульфа заимствовано у частого посетителя видеомагазина в котором некогда работал <a href="/name/7640/" class="all">Квентин Тарантино</a>.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                "Фамилия водительницы такси Эсмеральды Виллалобос на самом деле принадлежат хорошим друзьям Квентина Тарантино — Дэнни и Мэнни Виллалобос.",
              type: "FACT",
              spoiler: false,
            },
            {
              value: "Специальный выпуск фильма имеет хронометраж 168 минут.",
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Бутч едет домой на белой «Хонде». У Винсента — красный «Шевроле Малибу». Эти машины также упоминаются в «<a href="/film/4250/" class="all">Четырех комнатах</a>» (1995) в последнем эпизоде («Шевроле» у героя <a href="/name/7640/" class="all">Квентина Тарантино</a>, а «Хонда» — у чернокожего, лишившегося пальца).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                '<a href="/name/1600/" class="all">Харви Кейтель</a> носит часы Gucci 3000.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                "Отрывок из Библии, который запомнил Джулс, был в основном придуман. Единственная часть схожая с Библией такова: «И совершу над ними великое мщение наказаниями яростными. И узнаешь ты, что имя мое Господь, когда мщение мое падет на тебя». Однако части о праведниках и пастыре вымышлены.",
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Изначально <a href="/name/7640/" class="all">Квентин Тарантино</a> хотел, чтобы роль Зеда исполнил <a href="/name/85668/" class="all">Кристофер Джонс</a>.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                "Когда фильм появился в прокате в Великобритании, некоторые видеомагазины раздавали ограниченным тиражом упаковки спичек «Криминальное чтиво», на обратной стороне которых была цитата из фильма: «Играя со спичками, надо помнить о том, что можно обжечься».",
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'В сценарии персонаж бармена Пола (<a href="/name/2321/" class="all">Пол Кэлдерон</a>) упоминается как Инглиш Боб (Джулс упоминает его, говоря о Вульфе: «Да, он такой же европеец, как и Инглиш Боб»), но к нему сильно прилипла фраза «My name\'s Paul, and this is between y\'all» («Меня зовут Пол, и это ваши дела»). И так же в титрах он указан как Пол.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                "Пистолет, который носит Винсент, — это 1911А1 Auto Ordnance.45 ACP. Только в фильме он хромированный и с перламутровой рукояткой. Пистолет Джулса — 9-миллиметровый пистолет Star Model B, который также был хромирован и оснащен перламутровой ручкой.",
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                "На футболке, которую Джимми дает Винсенту, когда их с Джулсом помыли, есть логотип UC Santa Cruz Banana Slugs (Калифорнийский университет в Санта-Крузе, банановый слизень). И это не шутка. Банановый слизень действительно является официальным талисманом этого университета.",
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Первоначально предполагалось, что Бутч будет подающим надежды боксером. И для этой роли велись переговоры с <a href="/name/40531/" class="all">Мэттом Диллоном</a>, которые так и не увенчались успехом. После чего <a href="/name/7640/" class="all">Квентин Тарантино</a> изменил роль и предложил ее <a href="/name/110/" class="all">Брюсу Уиллису</a>, который был разочарован, что ему не предложили роль Винсента.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                '<a href="/name/20419/" class="all">Кортни Лав</a> утверждала, что <a href="/name/7640/" class="all">Квентин Тарантино</a> изначально хотел, чтобы <a href="/name/72692/" class="all">Курт Кобейн</a> и она сыграли Лэнса и Джоди. Однако Тарантино сказал, что никогда даже не встречался с Куртом, не говоря уже о том, чтобы предлагать ему роль.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'В закусочной, когда Миа заказывает коктейль за 5 долларов, официант спрашивает ее: «Мартин и Льюис или Эймос и Энди?» Имеются в виду два комедийных дуэта — <a href="/name/59917/" class="all">Дин Мартин</a> и <a href="/name/54801/" class="all">Джерри Льюис</a> (двое белых мужчин), «<a href="/film/397393/" class="all">Шоу Эймоса и Энди</a>» (двое чернокожих). По правде говоря, он спрашивает ее, хочет она ванильный или шоколадный коктейль. Она выбирает ванильный.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Роль Фабьен изначально писалась для швейцарской актрисы <a href="/name/15313/" class="all">Ирен Жакоб</a>. Но она отказалась от роли ради съемок в фильме «<a href="/film/501/" class="all">Три цвета: Красный</a>» (1994).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Многие считают, что пластырь на шее <a href="/name/24355/" class="all">Винга Реймза</a> был специально задуман создателями фильма. На самом деле с Реймзом произошел несчастный случай, когда он брил свою голову. Когда <a href="/name/7640/" class="all">Квентин Тарантино</a> заметил шрам, это подало ему идею начать сцену «Винсент Вега и жена Марселласа Уоллеса» с крупного плана на пластыре. В конце концов Тарантино понравилось показывать в кадре этот пластырь больше, чем лицо Реймза, потому что это акцентировало внимание на персонаже и визуально выглядело более захватывающе, чем серия отдельных кадров Реймза и <a href="/name/110/" class="all">Брюса Уиллиса</a>.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Все сцены с <a href="/name/110/" class="all">Брюсом Уиллисом</a> были отсняты за 18 дней.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                "Машину Джулса (Chevy Nova 1974 года) никогда не видно целиком. Ее показывают либо изнутри, либо частично снаружи.",
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'В интервью <a href="/name/543709/" class="all">Джеймсу Липтону</a> в передаче «<a href="/film/401131/" class="all">В студии актерского мастерства</a>» (1994) <a href="/name/6479/" class="all">Джон Траволта</a> рассказал более подробно о своей роли Винсента Веги. Самым сложным было показать сущность своего персонажа как наркомана-героинщика. Сам никогда не употреблявший этот наркотик, режиссер <a href="/name/7640/" class="all">Квентин Тарантино</a> отправил Траволту исследовать пристрастия его персонажа путем общения с находящимся в периоде восстановления бывшим героинщиком, которого Квентин знал лично. Траволта попросил друга Тарантино объяснить ему, каково это сидеть на героине (естественно, без употребления самого наркотика). Друг Тарантино объяснил: «Если вы хотите получить мало-мальские представления об этом, напейтесь текилы и ложитесь в горячий бассейн. Так вы лишь едва-едва коснетесь тех ощущений, что вызывает героин». Затем Джон Траволта рассказал, как он был рад сообщить своей жене о том, что ему сказали, что в целях исследования аспектов характера предстоящей роли он должен напиться текилы и залечь в горячий бассейн. Его жена с радостью присоединилась к нему в горячей ванне в отеле, край которой был от начала до конца уставлен шотами с текилой, чтобы помочь ему в его «исследованиях».',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Позже в фильме, когда герои избавляются от машины с трупом, мистер Вульф шутливо называет Винсента как Лэш Ла Ру. <a href="/name/213018/" class="all">Лэш Ла Ру</a> был актером, который часто играл ковбоев в вестернах 1940-х и 1950-х годов. Он особо умело обращался с длинным кнутом и использовал его для борьбы с злодеями.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Ключевым элементом сценария <a href="/name/7640/" class="all">Квентина Тарантино</a> стал сценарий <a href="/name/17501/" class="all">Роджера Эвери</a>, написанный им для его короткометражки Pandemonium Reigns. Достаточно большое влияние Эвери можно увидеть в сценах Бутча и Фабьен.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                '<a href="/name/1600/" class="all">Харви Кейтель</a> убедил своего друга <a href="/name/110/" class="all">Брюса Уиллиса</a> принять участие в фильме, зная, что Уиллис был большим поклонником фильма «<a href="/film/394/" class="all">Бешеные псы</a>» (1991).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Книга, которую Винсент читает на протяжении всего фильма, когда ходит в туалет, — это «Модести Блэйз» <a href="/name/193749/" class="all">Питера О\'Доннелла</a>. Это произведение было популярным британским комиксом с участием женщины — секретного агента. <a href="/name/7640/" class="all">Квентин Тарантино</a> — большой поклонник этого персонажа, он даже думал снять фильм с участием героини.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                '<a href="/name/29595/" class="all">Уме Турман</a> на самом деле не нравилась песня, которая играла в заведении «Джек Рэббит Слимс», когда они танцевали, и она сказала <a href="/name/7640/" class="all">Квентину Тарантино</a> об этом, на что он ответил: «Поверьте мне, она идеальна».',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                "Когда Джулс и Винсент выходят из лифта, обсуждая массаж стопы, мы следуем за ними на протяжении всего пути через лабиринт коридоров к двери Бретта, затем к окну и, наконец, обратно к его двери. Все это снято без монтажа в один дубль.",
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Во время интервью <a href="/name/7640/" class="all">Квентин Тарантино</a> признался, что цитату пророка Иезекииля <a href="/name/7164/" class="all">Сэмюэла Л. Джексона</a> он запомнил из фильма &#171;<a href="/film/77501/" class="all">Да здравствует, Чиба! Телохранитель</a>&#187; (1976). Там ее произносил <a href="/name/30146/" class="all">Сонни Тиба</a>. Он также признался, что никогда не видел ее в Библии и что она была взята практически слово в слово из того фильма. Тарантино всегда был поклонником Тибы и даже включил в фильм &#171;<a href="/film/4149/" class="all">Настоящая любовь</a>&#187; (1993) упоминание о нем, а также дал ему эпизодическую роль в фильме &#171;<a href="/film/2717/" class="all">Убить Билла</a>&#187; (2003).',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Рейвен МакКой, персонаж Мии из пилота для сериала Fox Force Five, связан с тремя персонажами из сериала «<a href="/film/84960/" class="all">Люди Икс</a>» (1992—1997). Имя Рейвен могло быть получено от Рейвен Даркхолм (настоящее имя Мистик), а фамилия МакКой — от Хэнка МакКоя (настоящее имя Зверя). Кроме того, Миа описывает своего персонажа как выросшего среди циркачей. Это полная аналогия Курта Вагнера (Ночной Змей). По иронии судьбы все три этих персонажа синего цвета.',
              type: "FACT",
              spoiler: false,
            },
            {
              value:
                'Пытаясь убить Бутча (<a href="/name/110/" class="all">Брюс Уиллис</a>), Марселлас Уоллес (<a href="/name/24355/" class="all">Винг Реймз</a>) случайно застрелил рядом стоящую с Бутчем женщину. Ее роль исполнила та же актриса, героиню которой выкинул из машины Мистер Розовый в «<a href="/film/394/" class="all">Бешеных псах</a>» (1991).',
              type: "FACT",
              spoiler: true,
            },
            {
              value:
                'Долгое время <a href="/name/7640/" class="all">Квентин Тарантино</a> никак не мог решить, кого он сыграет в фильме — Джимми или Лэнса. В конце концов он выбрал Джимми, так как посчитал, что сцена с оживлением Мии слишком сложная и что при съемке этой сцены он должен находиться за камерой.',
              type: "FACT",
              spoiler: true,
            },
            {
              value:
                'В сцене укола адреналина <a href="/name/6479/" class="all">Джон Траволта</a> вытаскивает иглу из груди <a href="/name/29595/" class="all">Умы Турман</a>. При монтаже фильма сцена была проиграна в обратном направлении. Тем самым был достигнут необходимый эффект.',
              type: "FACT",
              spoiler: true,
            },
            {
              value:
                "Если расположить сцены фильма в хронологическом порядке, то первой будет сцена разговора в машине между Винсентом и Джулсом, последней — Бутч и Фабьен садятся на мотоцикл Зеда. Последняя фраза фильма — «Зед мертв, детка, Зед мертв». Если рассматривать хронологию событий относительно жизни персонажей, то первой сценой станет сцена, в которой капитан Кунс рассказывает маленькому Бутчу о золотых часах.",
              type: "FACT",
              spoiler: true,
            },
            {
              value:
                "Когда Винсент и Лэнс готовятся сделать укол адреналина Мии, на заднем плане можно заметить настольные игры «Операция» (Operation) и «Жизнь» (Life).",
              type: "FACT",
              spoiler: true,
            },
            {
              value:
                'Сюжет о передозировке Мии и ее оживлении с помощью укола адреналина в сердце — дословное воспроизведение истории, рассказанной в «<a href="/film/11080/" class="all">Американском парне</a>» (1978), документальном фильме, режиссером которого был <a href="/name/10988/" class="all">Мартин Скорсезе</a>.',
              type: "FACT",
              spoiler: true,
            },
            {
              value:
                "Из фильма была удалена сцена, в которой Джулс пытается решить, что ему нужно делать дальше, в то время как Тыковка и Зайчишка грабят ресторан. В этой сцене Джулс достает пистолет, делает два выстрела в Тыковку. Затем он разворачивается на 180 градусов и три раза стреляет в Зайчишку. После этого мы снова видим Джулса, разговаривающего с Тыковкой, и понимаем, что вся перестрелка происходила в голове у Джулса.",
              type: "FACT",
              spoiler: true,
            },
            {
              value:
                'Забрав свои золотые часы, Бутч едет в&#160;машине и&#160;слушает песню &#171;Flowers on&#160;the Wall&#187; в&#160;исполнении <a href="/name/585434/" class="all">The Statler Brothers</a>. В&#160;этой песне есть слова о&#160;капитане Кенгуру, что является намеком на&#160;статуэтку кенгуру в&#160;доме Бутча, на&#160;которой висели часы. Также в&#160;этой песне есть строчка &#171;Рад видеть тебя&#8230;&#187; (&#171;It\'s good to&#160;see you&#187;). Мы&#160;слышим ее&#160;именно тогда, когда Марселлас Уоллес переходит дорогу перед машиной Бутча.',
              type: "FACT",
              spoiler: true,
            },
            {
              value:
                'Момент, когда Марселлас переходит дорогу перед машиной Бутча, очень сильно напоминает сцену из «<a href="/film/344/" class="all">Психо</a>» (1960), в которой начальник Мэрион также переходит дорогу прямо перед ее машиной.',
              type: "FACT",
              spoiler: true,
            },
            {
              value:
                "В первом варианте сценария Винсент и Лэнс делают Мии укол не адреналином, а соленой водой. Это традиционный наркоманский трюк при передозировках.",
              type: "FACT",
              spoiler: true,
            },
            {
              value:
                'Первоначально режиссер иначе представлял себе сцену убийства Марвина. В исходном варианте сценария Винсент не убил его случайным выстрелом, а лишь прострелил глотку, после чего Джулс и Винсент решили не обрекать паренька на долгую и мучительную смерть и застрелили его прямо в машине. Но <a href="/name/38819/" class="all">Фил ЛаМарр</a>, исполнитель роли Марвина, подумал, что после этого Винсент и Джулс потеряют уважение в глазах зрителей, и поделился этим с режиссером. <a href="/name/7640/" class="all">Тарантино</a> согласился и сделал смерть от случайного выстрела мгновенной.',
              type: "FACT",
              spoiler: true,
            },
            {
              value:
                "В сцене в ломбарде показана первая сцена анального изнасилования за всю историю студии Disney, которой принадлежала студия Miramax films.",
              type: "FACT",
              spoiler: true,
            },
            {
              value:
                'В девяностых годах героин в Лос-Анджелесе продавали в шариках, а кокаин — в пакетиках. Наркоторговец Лэнс сообщил, что шарики у него закончились, а поэтому продал герою <a href="/name/6479/" class="all">Траволты</a> героин в пакетике. А Миа, вытащив из кармана Винсента пакетик, решила, что это кокаин. Почему, собственно, так отчаянно его и занюхала.',
              type: "FACT",
              spoiler: true,
            },
            {
              value:
                "Пистолет-пулемет, которым убивают Винсента, — это Military Armament Corporation M10, также известный как Mac-10. Он стреляет со скоростью около 1000 выстрелов в минуту и заряжается магазинами по тридцать 9-миллиметровых патронов. Учитывая длительность времени, за которое расстреляли Винсента, Бутч вероятно истратил весь магазин.",
              type: "FACT",
              spoiler: true,
            },
            {
              value:
                "На 125-й минуте (33-я секунда) можно заметить киноляп. В этот момент в багажнике на мгновение показывают тело случайно убитого негра, как известно, с простреленной головой. Что примечательно, голова у него оказалась целой, несмотря на мозги, обрызгавшие весь салон автомобиля.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Винсент расстегивает футляр со шприцем в квартире Лэнса, хорошо видно, что шприц стеклянный. А когда показывают инъекцию крупным планом, он уже почему-то пластмассовый.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                'В первой сцене героиня <a href="/name/29519/" class="all">Аманды Пламмер</a> кричит: &#171;Any of you fucking pricks move, and I\'ll execute every motherfucking last one of ya&#187;. А в конце фильма в той же самой сцене она кричит уже слегка иначе: &#171;Any of you fucking pricks move and I\'ll execute every one of ya motherfuckers!&#187;',
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Винстон Вульф отъезжает от конторы «Монстр Джо» в своей Acura, он делает крутой поворот, но звук при этом идет такой, как если бы было непрерывное ускорение по прямой линии.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "В «Джек Рэббит Слимс» карлик, который подвел Мию и Винсента к их столику в машине, уходя, говорит: «Call for Phillip Morris». При этом движения его губ не синхронизированы со звуком.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "На заднем сиденье такси Бутч снимает свои боксерские перчатки, а затем бросает их в окно. При этом отлично слышно их удар о землю, как если бы машина не ехала, а стояла.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Миа находит пакет с героином в пальто Винсента, она говорит &#171;привет&#187; (&#171;hello&#187;). Второе &#171;hello&#187; можно четко услышать идущим в дубль с первым.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "В отражении окна мотеля можно заметить одного из членов съемочной команды, когда Бутч забирает свою девушку на чоппере.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Бутч читает имя водителя такси с карточки: «Эсмарельда Виллалобос». Затем она ему рассказывает, что она колумбийка. По-испански правильнее будет «Эсмеральда» («изумруд»).",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Винстон Вульф ездит на Acura NSX, двухместном спортивном автомобиле, но не без сарказма предлагает подвезти сразу троих.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "На стоянке «Джек Рэббит Слимс» Миа говорит: «Не будь...» («Don't be a square» — «Не будь старомодным»). После чего она должна нарисовать квадрат, а вместо этого рисует прямоугольник.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Хотя Винс утверждает, что во Франции четвертьфунтовый чизбургер называют Royale with Cheese, на самом деле его называют просто Royale Cheese (Королевский чизбургер).",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Во время сцены обсуждения бургера «Биг Кахуна» слышно, что Джулс произносит имя Бретта как Брэд.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "В закусочной Джулс упоминает свой пистолет как 9-миллиметровый, на самом деле он 11-миллиметровый. Это видно, когда он держит его под столом.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Джулс берет бургер Бретта, он почти целый, в следующем кадре, когда герой подносит его ко рту, там только половина бургера. Так же меняется и сам бургер: в начале он выглядит как обычный чизбургер, а в конце сцены в нем появляется еще и лист салата.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Положение рук Хани Банни меняется (после того как она спрашивает: &#171;Ну и что теперь? Устроимся на работу?&#187;), когда камера переходит от фронтального вида к виду сбоку.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Во время сцены с бургером &#171;Биг Кахуна&#187; бумажный стаканчик на столе меняет положение (судя по этикетке).",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Джулс и Винсент сидят в закусочной в конце фильма, лед в их стаканах меняется. В какой-то момент он полностью тает, а через несколько секунд появляется снова.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Во время сцены с бургером «Биг Кахуна» Джулс ставит на стол напиток, и рядом с ним видно бумажный пакет. Затем этот пакет то появляется, то исчезает несколько раз.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Во время сцены с бургером &#171;Биг Кахуна&#187;, после того, как Джулс стреляет Бретту в плечо, тот хватается за плечо рукой. Когда Джулс поднимает пистолет еще раз, чтобы убить его, он на мгновение поднимает руки от страха, и можно заметить, что нет никакого следа от пулевого ранения.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Количество молочного коктейля в «Джек Рэббит Слимс» постоянно меняется.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Миа достает сигарету из пачки, в следующем кадре та исчезает вместе с недокуренной сигаретой, которую она держала между пальцев.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Бутч и Фабьен ругаются из-за забытых часов, вешалки на другом плане отбрасывают тени в разные стороны в разных кадрах.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Джулс убивает Бретта, патроны в пистолете заканчиваются, а его затвор остается в заднем положении. Когда эта сцена повторяется ближе к концу фильма, с затвором все в порядке, как будто пистолет не разряжался.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Цвет сыра в бургере «Биг Кахуна» отличается во время крупного плана.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Винстон Вульф открывает дверь машины, чтобы проверить очистительные работы. Когда, однако, камера смотрит внутрь машины через окно, все двери закрыты.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "В &#171;Джек Рэббит Слимс&#187; помада Мии меняется: она то темно-красная, то бледно-розовая.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "По возвращении из «Джек Рэббит Слимс» на Мии пальто Винсента. Когда она собирается закурить сигарету, оно исчезает, но, когда она тянется за зажигалкой, оно снова на ней.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Мие делают укол адреналина, можно заметить, как Труди дважды подпрыгивает на диване.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "В то время как Бутч направляет пистолет на Марселласа и собирается пристрелить его в магазине, его правая рука меняет положение при быстрой смене кадров (это видно по направлению пальцев).",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Челка Мии во время разговора с Эдом Салливаном и после него ощутимо отличается.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Винсент и Миа сидят в «Джек Рэббит Слимс», изображение на видеостене за ними скачет каждый раз, когда камера переходит от  Винсента к Мии.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Фабьен начинает говорить о завтраке, она сидит на кровати, и ее правая рука лежит на ее ноге. Когда мы видим ее со спины, ее рука внезапно упирается ей в голову.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Хани Банни направляет пистолет на Винсента, она держит ствол в одном кадре обеими руками, а в другом — только одной.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Мию с передозировкой привозят в квартиру Лэнса, на ее груди рисуют точку, чтобы Винсент понимал, куда делать укол. После того как она приходит в себя, точка исчезает.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Положение рук Винсента, когда он беседует с Мией на дорожке возле ее дома (после сцены с передозировкой), меняется, когда камера показывает из-за спины Винсента, а потом показывает его спереди.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Винс и Мия возвращаются домой после посещения «Джек Рэббит Слимс», за дверями виден дневной свет. Однако во всей остальной части сцены на улице все еще ночь.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Положение рук Бутча меняется при смене кадра, когда он держит бензопилу.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Мия делает заказ в «Джек Рэббит Слимс», сигарета постоянно скачет из ее левой руки в правую и обратно.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "После того как Миа приходит в сознание после укола адреналина, ее рука меняет положение: сначала она у шприца, затем на полу, затем снова у шприца.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Бутч паркует Honda и выходит из машины, небо серое и пасмурное. Однако в следующем кадре, когда он идет к своей квартире, небо абсолютно чистое.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "В начале сцены с золотыми часами время на них изменяется при смене кадра.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "В конце беседы с Винсентом по телефону (когда Лэнс дважды восклицает: «Телефонный хулиган!») у Лэнса сигарета в правой руке. В следующем кадре, когда он смотрит на подъезжающую машину, он вскидывает руки, но сигареты уже нет.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "В начале сцены «Ситуация с Бонни» у парня с пистолетом не застегнуты штаны, но, когда он выходит из ванной комнаты, они уже застегнуты.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "В сцене у «Монстра Джо», когда Вульф идет к своей машине, слева припаркованы четыре машины: грузовик, желтый VW, второй грузовик и еще один автомобиль. Но, когда Вульф трогается, две машины за VW уже другие и припаркованы дальше.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "В сцене «Золотые часы», когда Бутч платит за такси, а затем камера снова показывает всю кабину целиком, можно заметить, что машина отъехала немного назад от места первоначальной парковки.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "В сцене «Золотые часы» Бутч засыпает в номере мотеля, на прикроватном столике лежит лицом вниз открытая книга. Когда он просыпается книга закрыта.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Джулс моет руки в ванной комнате Джимми, по всему краю раковины заметна кровь. В следующем кадре, снятом со спины, крови нет.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Винсент и Джулс готовятся к водным процедурам на заднем дворе, Джулс снимает свои штаны дважды.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "В сцене, когда произошло чудо, а стрелявший парень не попал в Джулса и Винсента, следы от пуль видны на стене до того, как он в них стрелял.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "В то время как Хани Банни направляет пистолет на Джулса (сцена в закусочной), слюна на ее подбородке то появляется, то исчезает.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Бутч садится на чоппер Зеда перед магазином, видно сдвоенный карбюратор. Когда он подъезжает к мотелю, чтобы забрать Фабьен, этого карбюратора уже нет.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Бутч стреляет в Винсента из автомата, он попадает ему в грудь. В следующей сцене показывают Винсента в туалете, и пулевые ранения не соответствуют предыдущей сцене.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Джоди выходит из комнаты, в которой Лэнс ищет медицинскую инструкцию, у нее нет никакого пирсинга на лице. Несколько минут спустя, когда они собираются сделать Мии укол адреналина, пирсинг снова появляется у нее на лице.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Бутч забирает свою подругу на чоппере, его передняя фара то горит, то нет.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Джулс и Винсент едут в машине, то в отражении витрин можно заметить буксирующий их трейлер.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Винсент заходит в дом Мии, съемочную команду видно в отражении окон.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Лэнс выходит на улицу, чтобы наорать на Винсента за то, что он врезался в его дом, в отражении открытой входной двери заметна съемочная команда.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Бонни идет через гостиную в кухню (эпизод &#171;Ситуация с Бонни&#187;), видна тень оператора, следующего за ней.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Винсент идет по коридорам, чтобы найти Марселласа, разговаривающего с тренером Бутча (после боя Бутча), через дверной проем справа можно заметить съемочное оборудование и одного из членов съемочной команды.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Во время ограбления закусочной, когда Тыковка прижимает менеджера головой к прилавку, одного из членов съемочной команды видно в отражении кассового аппарата.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Джулс открывает чемодан, оранжевые лампочки внутри него можно заметить по отражению в верхней внутренней части чемодана.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Во время сцены «Ситуация с Бонни», когда парень выскакивает из ванной и стреляет по Джулсу и Винсенту, хорошо заметны две петарды на его груди под рубашкой, в тех местах, куда потом выстрелят Джулс и Винсент.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "В сцене с бургером «Биг Кахуна» пулевые отверстия в стене перпендикулярны ей, а должны быть под углом.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Бутч едет в такси, он курит сигарету, но при этом дым медленно плывет по автомобилю, как будто он стоит. Хотя черно-белый фон за окнами ясно дает понять, что режиссер в этой сцене не стремился к реалистичности.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Винсент подъезжает к Лэнсу с Мией, следы от шин на траве не совпадают с положением его машины.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Винсент собирается делать Мие укол адреналина, можно заметить, что шприц пуст (это заметно по положению поршня).",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда парень в квартире Бретта стреляет в Джулса и Винсента, барабан его револьвера не вращается.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "В сцене с бургером «Биг Кахуна», когда Джулс стреляет в парня, лежащего на диване, не было видно никакой вспышки от пистолета. Когда же он и Винсент стреляют в Бретта, очень четко видно пламя, вырывающееся из дула пистолета.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "После того как Винсент убивает Марвина, в следующих кадрах, когда они разговаривают с Джулсом, видно, что в пистолете нет обоймы.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Джулс пьет из бутылки в баре, жидкость внутри нее не двигается.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Ляпы в сцене, где Марселлас и Бутч оказались в ловушке в подвале магазина: <ul><li> Когда их обрызгивают водой, чтобы разбудить, видно, что Бутч сильнее наклонен вперед, когда камера переходит ему за спину.</li> <li> Затем их поливают водой снизу, а в следующем кадре видно, что струя направлена сверху.</li> <li> Когда Мейнард заканчивает поливать их водой, Бутч поворачивается к Марселласу, и в следующем кадре он сидит, отвернувшись от него.</li> <li> Когда Мейнард уходит наверх, чтобы открыть дверь Зеду, рубашка Марселласа одета навыпуск, а пятно крови на футболке Бутча выглядит более темным. В следующем кадре положение рубашки меняется, а пятно на футболке Бутча выглядит светлее. После того как спускается Зед, все меняется обратно.</li></ul>",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "После того как Марселлас подстрелил Зеда, положение затвора на дробовике меняется.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Бутч выходит из магазина и останавливается перед чоппером Зеда, он держит ключи в левой руке. Когда ключи показывают крупным планом, очевидно, что они в правой руке.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "Когда Винсент стреляет в Марвина, а заднее стекло машины забрызгивает кровью, можно заметить, что голова Винса повернута вперед, а не лицом к Марвину, как было в предыдущем кадре.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "В сцене «Золотые часы», когда Бутч забирает свои часы, он поворачивает налево из комнаты, чтобы попасть на кухню. Когда он стреляет в Винсента, можно заметить, что его комната находится по правую руку (видно кенгуру, на котором висели его часы), но затем, осмотрев тело Винса, он идет налево в свою комнату, но нам показывают гостиную, где он выходит из квартиры.",
              type: "BLOOPER",
              spoiler: true,
            },
            {
              value:
                "В сцене, где Винсент стреляет в Марвина, пуля проходит через его голову, в результате чего все заднее стекло покрывается мозгами. С такого расстояния пуля прошла бы насквозь и разбила стекло.",
              type: "BLOOPER",
              spoiler: true,
            },
          ],
          genres: [
            {
              name: "криминал",
            },
            {
              name: "драма",
            },
          ],
          countries: [
            {
              name: "США",
            },
          ],
          seasonsInfo: [],
          persons: [
            {
              id: 6479,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6479.jpg",
              name: "Джон Траволта",
              enName: "John Travolta",
              description: "Vincent Vega",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 7164,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7164.jpg",
              name: "Сэмюэл Л. Джексон",
              enName: "Samuel L. Jackson",
              description: "Jules Winnfield",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 110,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_110.jpg",
              name: "Брюс Уиллис",
              enName: "Bruce Willis",
              description: "Butch Coolidge",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 29595,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_29595.jpg",
              name: "Ума Турман",
              enName: "Uma Thurman",
              description: "Mia Wallace",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 24355,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_24355.jpg",
              name: "Винг Реймз",
              enName: "Ving Rhames",
              description: "Marsellus Wallace",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 2145,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2145.jpg",
              name: "Тим Рот",
              enName: "Tim Roth",
              description: "Pumpkin",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 1600,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1600.jpg",
              name: "Харви Кейтель",
              enName: "Harvey Keitel",
              description: "The Wolf",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 7640,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7640.jpg",
              name: "Квентин Тарантино",
              enName: "Quentin Tarantino",
              description: "Jimmie",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 25640,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25640.jpg",
              name: "Питер Грин",
              enName: "Peter Greene",
              description: "Zed",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 29519,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_29519.jpg",
              name: "Аманда Пламмер",
              enName: "Amanda Plummer",
              description: "Honey Bunny",
              profession: "актеры",
              enProfession: "actor",
            },
            {
              id: 415503,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_415503.jpg",
              name: "Дэвид Уоско",
              enName: "David Wasco",
              description: null,
              profession: "художники",
              enProfession: "designer",
            },
            {
              id: 354076,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_354076.jpg",
              name: "Чарльз Коллам",
              enName: "Charles Collum",
              description: null,
              profession: "художники",
              enProfession: "designer",
            },
            {
              id: 1985480,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1985480.jpg",
              name: "Бетси Хайман",
              enName: "Betsy Heimann",
              description: null,
              profession: "художники",
              enProfession: "designer",
            },
            {
              id: 1230982,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1230982.jpg",
              name: "Сэнди Рейнольдс-Уоско",
              enName: "Sandy Reynolds-Wasco",
              description: null,
              profession: "художники",
              enProfession: "designer",
            },
            {
              id: 7640,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7640.jpg",
              name: "Квентин Тарантино",
              enName: "Quentin Tarantino",
              description: null,
              profession: "режиссеры",
              enProfession: "director",
            },
            {
              id: 55970,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_55970.jpg",
              name: "Салли Менке",
              enName: "Sally Menke",
              description: null,
              profession: "монтажеры",
              enProfession: "editor",
            },
            {
              id: 44288,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_44288.jpg",
              name: "Анджей Секула",
              enName: "Andrzej Sekuła",
              description: null,
              profession: "операторы",
              enProfession: "operator",
            },
            {
              id: 26107,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_26107.jpg",
              name: "Лоуренс Бендер",
              enName: "Lawrence Bender",
              description: null,
              profession: "продюсеры",
              enProfession: "producer",
            },
            {
              id: 1983,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1983.jpg",
              name: "Дэнни ДеВито",
              enName: "Danny DeVito",
              description: null,
              profession: "продюсеры",
              enProfession: "producer",
            },
            {
              id: 22331,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_22331.jpg",
              name: "Ричард Н. Гладштейн",
              enName: "Richard N. Gladstein",
              description: null,
              profession: "продюсеры",
              enProfession: "producer",
            },
            {
              id: 1987,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1987.jpg",
              name: "Майкл Шамберг",
              enName: "Michael Shamberg",
              description: null,
              profession: "продюсеры",
              enProfession: "producer",
            },
            {
              id: 1230514,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1230514.jpg",
              name: "Артемий Веселов",
              enName: null,
              description: null,
              profession: "актеры дубляжа",
              enProfession: "voice_actor",
            },
            {
              id: 594302,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_594302.jpg",
              name: "Сергей Козик",
              enName: null,
              description: null,
              profession: "актеры дубляжа",
              enProfession: "voice_actor",
            },
            {
              id: 910838,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_910838.jpg",
              name: "Олег Алмазов",
              enName: null,
              description: null,
              profession: "актеры дубляжа",
              enProfession: "voice_actor",
            },
            {
              id: 1608084,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1608084.jpg",
              name: "Наталия Тарыничева",
              enName: null,
              description: null,
              profession: "актеры дубляжа",
              enProfession: "voice_actor",
            },
            {
              id: 37392,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_37392.jpg",
              name: "Максим Сергеев",
              enName: null,
              description: null,
              profession: "актеры дубляжа",
              enProfession: "voice_actor",
            },
            {
              id: 7640,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7640.jpg",
              name: "Квентин Тарантино",
              enName: "Quentin Tarantino",
              description: null,
              profession: "редакторы",
              enProfession: "writer",
            },
            {
              id: 17501,
              photo:
                "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_17501.jpg",
              name: "Роджер Эвери",
              enName: "Roger Avary",
              description: null,
              profession: "редакторы",
              enProfession: "writer",
            },
          ],
          lists: [
            "top250",
            "popular-films",
            "top500",
            "hd-revise",
            "box-usa-all-time",
            "box-world-not-usa",
            "box-total",
            "oscar-best-film-nominees",
            "oscar-writing-original-screenplay",
            "cannes-golden-palm",
          ],
          typeNumber: 1,
          alternativeName: "Pulp Fiction",
          enName: null,
          names: [
            {
              name: "Криминальное чтиво",
            },
            {
              name: "Pulp Fiction",
            },
            {
              name: "Makulatura",
              language: "GE",
              type: null,
            },
            {
              name: "Pulp Fiction: Historky z podsvetia",
              language: "SK",
              type: null,
            },
            {
              name: "Кримiнальне чтиво",
              language: "UA",
              type: null,
            },
            {
              name: "Pulp Fiction - Chronological Cut",
              language: "US",
              type: null,
            },
            {
              name: "Sund",
              language: "SI",
              type: null,
            },
            {
              name: "parup fikusyon",
              language: "JP",
              type: "Romaji",
            },
            {
              name: "पल्प फिक्शन",
              language: "IN",
              type: null,
            },
            {
              name: "Евтини приказни",
              language: "MK",
              type: null,
            },
            {
              name: "μυθοπλασία πολτού",
              language: "GR",
              type: null,
            },
            {
              name: "Sifrut Zolla",
              language: "IL",
              type: null,
            },
            {
              name: "Pulp Fiction - Tarinoita väkivallasta",
              language: "FI",
              type: null,
            },
            {
              name: "Lubene",
              language: "LV",
              type: null,
            },
            {
              name: "Fiction pulpeuse",
              language: "CA",
              type: null,
            },
            {
              name: "黑色追緝令",
              language: "TW",
              type: null,
            },
            {
              name: "危險人物",
              language: "HK",
              type: null,
            },
            {
              name: "Петпарачке приче",
              language: "RS",
              type: null,
            },
            {
              name: "펄프 픽션",
              language: "KR",
              type: null,
            },
            {
              name: "低俗小说",
              language: "CN",
              type: null,
            },
            {
              name: "Tiempos Violentos",
              language: "AR",
              type: null,
            },
          ],
          ratingMpaa: "r",
          shortDescription:
            "Несколько связанных историй из жизни бандитов. Шедевр Квентина Тарантино, который изменил мировое кино",
          technology: {
            hasImax: false,
            has3D: false,
          },
          ticketsOnSale: false,
          updatedAt: "2024-04-21T00:04:44.398Z",
          imagesInfo: {
            framesCount: 77,
          },
          similarMovies: [
            {
              id: 522,
              name: "Карты, деньги, два ствола",
              enName: null,
              alternativeName: "Lock, Stock and Two Smoking Barrels",
              type: "movie",
              poster: {
                url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/6492653f-11d5-4087-a1d2-ec7a74f161d3/orig",
                previewUrl:
                  "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/6492653f-11d5-4087-a1d2-ec7a74f161d3/x1000",
              },
              year: 1998,
              rating: {
                kp: 8.558,
                imdb: 8.1,
                filmCritics: 6.7,
                russianFilmCritics: 0,
                await: null,
              },
            },
            {
              id: 526,
              name: "Большой куш",
              enName: null,
              alternativeName: "Snatch",
              type: "movie",
              poster: {
                url: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/47fe48f6-ff17-4411-a12f-d337bea2639d/orig",
                previewUrl:
                  "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/47fe48f6-ff17-4411-a12f-d337bea2639d/x1000",
              },
              year: 2000,
              rating: {
                kp: 8.551,
                imdb: 8.2,
                filmCritics: 6.4,
                russianFilmCritics: 100,
                await: null,
              },
            },
            {
              id: 394,
              name: "Бешеные псы",
              enName: null,
              alternativeName: "Reservoir Dogs",
              type: "movie",
              poster: {
                url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/b1add366-9e49-4ad8-905a-46ca23da8adc/orig",
                previewUrl:
                  "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/b1add366-9e49-4ad8-905a-46ca23da8adc/x1000",
              },
              year: 1991,
              rating: {
                kp: 8.115,
                imdb: 8.3,
                filmCritics: 8.9,
                russianFilmCritics: 0,
                await: null,
              },
            },
            {
              id: 378140,
              name: "Рок-н-рольщик",
              enName: null,
              alternativeName: "RocknRolla",
              type: "movie",
              poster: {
                url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/ec91f3d0-70ec-4292-917d-5b170d7663f6/orig",
                previewUrl:
                  "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/ec91f3d0-70ec-4292-917d-5b170d7663f6/x1000",
              },
              year: 2008,
              rating: {
                kp: 7.833,
                imdb: 7.2,
                filmCritics: 6,
                russianFilmCritics: 40,
                await: null,
              },
            },
            {
              id: 9691,
              name: "Бесславные ублюдки",
              enName: null,
              alternativeName: "Inglourious Basterds",
              type: "movie",
              poster: {
                url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/5e6dde98-74a8-4c02-b003-01d48e091025/orig",
                previewUrl:
                  "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/5e6dde98-74a8-4c02-b003-01d48e091025/x1000",
              },
              year: 2009,
              rating: {
                kp: 7.989,
                imdb: 8.4,
                filmCritics: 7.8,
                russianFilmCritics: 80,
                await: null,
              },
            },
            {
              id: 586584,
              name: "Семь психопатов",
              enName: null,
              alternativeName: "Seven Psychopaths",
              type: "movie",
              poster: {
                url: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/58c54778-cb77-486f-a584-fbea76bb098a/orig",
                previewUrl:
                  "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/58c54778-cb77-486f-a584-fbea76bb098a/x1000",
              },
              year: 2012,
              rating: {
                kp: 7.345,
                imdb: 7.1,
                filmCritics: 7.1,
                russianFilmCritics: 93.3333,
                await: null,
              },
            },
            {
              id: 15641,
              name: "Кровавый четверг",
              enName: null,
              alternativeName: "Thursday",
              type: "movie",
              poster: {
                url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/416f4c7a-bfcb-4ac5-b03b-0c6803804678/orig",
                previewUrl:
                  "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/416f4c7a-bfcb-4ac5-b03b-0c6803804678/x1000",
              },
              year: 1998,
              rating: {
                kp: 7.858,
                imdb: 7.1,
                filmCritics: 5.1,
                russianFilmCritics: 0,
                await: null,
              },
            },
            {
              id: 276295,
              name: "Залечь на дно в Брюгге",
              enName: null,
              alternativeName: "In Bruges",
              type: "movie",
              poster: {
                url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/dcc7b24e-43b9-47fe-9839-8bc04996fa1c/orig",
                previewUrl:
                  "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/dcc7b24e-43b9-47fe-9839-8bc04996fa1c/x1000",
              },
              year: 2007,
              rating: {
                kp: 7.776,
                imdb: 7.9,
                filmCritics: 7.4,
                russianFilmCritics: 0,
                await: null,
              },
            },
            {
              id: 4917,
              name: "Святые из Бундока",
              enName: null,
              alternativeName: "The Boondock Saints",
              type: "movie",
              poster: {
                url: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/51988714-4bd5-4d26-ad6c-0361bd3a9145/orig",
                previewUrl:
                  "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/51988714-4bd5-4d26-ad6c-0361bd3a9145/x1000",
              },
              year: 1999,
              rating: {
                kp: 7.944,
                imdb: 7.7,
                filmCritics: 4.7,
                russianFilmCritics: 0,
                await: null,
              },
            },
            {
              id: 86326,
              name: "Счастливое число Слевина",
              enName: null,
              alternativeName: "Lucky Number Slevin",
              type: "movie",
              poster: {
                url: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/b902fcb3-ca6f-4247-8e70-69f84e67087e/orig",
                previewUrl:
                  "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/b902fcb3-ca6f-4247-8e70-69f84e67087e/x1000",
              },
              year: 2005,
              rating: {
                kp: 8.127,
                imdb: 7.7,
                filmCritics: 5.9,
                russianFilmCritics: 80,
                await: null,
              },
            },
          ],
          sequelsAndPrequels: [],
          ageRating: 18,
          logo: {
            url: "https://imagetmdb.com/t/p/original/inuYhCBbTof4gw7f9Ized0SQQuW.png",
          },
          watchability: {
            items: [],
          },
          top10: null,
          top250: 10,
          audience: [
            {
              count: 25386700,
              country: "США",
            },
            {
              count: 2864640,
              country: "Франция",
            },
            {
              count: 2156143,
              country: "Испания",
            },
          ],
          deletedAt: null,
          isSeries: false,
          seriesLength: null,
          totalSeriesLength: null,
          networks: null,
          videos: {
            trailers: [
              {
                url: "https://www.youtube.com/embed/2fUuQsLcJVw",
                name: "Криминальное чтиво / Pulp Fiction 1994 Русский трейлер HD",
                site: "youtube",
                type: "TRAILER",
              },
              {
                url: "https://www.youtube.com/embed/VHDmVv8fg1k",
                name: "Криминальное Чтиво - Трейлер",
                site: "youtube",
                type: "TRAILER",
              },
              {
                url: "https://www.youtube.com/embed/2fUuQsLcJVw",
                name: "Криминальное чтиво / Pulp Fiction 1994 Русский трейлер HD",
                site: "youtube",
                type: "TRAILER",
              },
              {
                url: "https://www.youtube.com/embed/VHDmVv8fg1k",
                name: "Криминальное Чтиво - Трейлер",
                site: "youtube",
                type: "TRAILER",
              },
              {
                url: "https://www.youtube.com/embed/tGpTpVyI_OQ",
                name: "Official Trailer",
                site: "youtube",
                type: "TRAILER",
              },
            ],
          },
        };

        setMovie(movieDetails);
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header />
      <div className="movie__container container">
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
                      <SwiperSlide key={actor.id}>
                        <div>
                          <img
                            src={actor.photo}
                            alt={actor.name}
                            style={{ width: "100px" }}
                          />
                          <span>{`${actor.name} ${
                            showRoles ? `(${actor.description})` : ""
                          }`}</span>
                        </div>
                      </SwiperSlide>
                    ))}
              </Swiper>
              <CustomButton
                onClick={() => setShowRoles(!showRoles)}
                title={showRoles ? "Показать роли" : "Скрыть роли"}
              />
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
                    <SwiperSlide key={movie.id}>
                      <div>
                        <img
                          src={movie.poster.url}
                          alt={movie.name}
                          style={{ width: "150px" }}
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
          <Typography sx={{ mt: 2 }}>
            <Rating
              value={userRatingModal}
              precision={0.5}
              max={10}
              emptyIcon={<StarIcon />}
              onChange={handleRatingChange}
            />
          </Typography>
          <Typography sx={{ mt: 2 }} style={{ textAlign: "right" }}>
            <CustomButton title="Убрать оценку" onClick={removeRating} />
            <CustomButton
              title="Оценить"
              disabled={userRatingModal ? false : true}
            />
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Movie;
