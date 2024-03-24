// const TMDB_API_KEY = "aa6183f141a1b74135e8cb114f93ba6c";

// export const getPopularMovies = async () => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=ru-RU`
//   ).catch((err) => console.error(err));

//   const data = await response.json();

//   return data.results;
// };

// export const movieData = async (movieId) => {
//   console.log(
//     `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=ru-RU`
//   );

//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=ru-RU`
//   ).catch((err) => console.error(err));

//   const data = await response.json();

//   return data;
// };
