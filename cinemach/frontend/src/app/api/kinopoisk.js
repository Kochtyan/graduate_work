const KP_API_KEY = "5ATH9DF-N7J45EJ-N4Y0EWJ-V51T6XV";

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(
      "https://api.kinopoisk.dev/v1.4/movie?year=2024",
      {
        method: "GET",
        headers: {
          "X-API-KEY": KP_API_KEY,
        },
      }
    );

    if (!response.ok) {
      console.error(`Error fetching popular movies: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return null;
  }
};

export const fetchMovieById = async (movieId) => {
  try {
    const response = await fetch(
      `https://api.kinopoisk.dev/v1.4/movie/${movieId}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": KP_API_KEY,
        },
      }
    );

    if (!response.ok) {
      console.error(`Error fetching movie by ID: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie by ID:", error);
    return null;
  }
};

export const fetchPersonById = async (personId) => {
  try {
    const response = await fetch(
      `https://api.kinopoisk.dev/v1.4/person/${personId}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": KP_API_KEY,
        },
      }
    );

    if (!response.ok) {
      console.error(`Error fetching person by ID: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching person by ID:", error);
    return null;
  }
};
