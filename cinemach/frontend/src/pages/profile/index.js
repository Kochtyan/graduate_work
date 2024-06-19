import { useState, useEffect } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import Link from "next/link";

import { useQuery } from "@apollo/client";
import { GET_WATCHLIST } from "@/app/apollo/queries";

import Header from "@/app/components/header";
import Loader from "@/app/components/loader";
import Grid from "@mui/material/Grid";

import "../../app/css/main.css";

const Profile = ({ session }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [errorQuery, setErrorQuery] = useState("");

  const { loading, error, data } = useQuery(GET_WATCHLIST, {
    variables: {
      userId: parseInt(session?.user?.id),
    },
  });

  useEffect(() => {
    if (data && data.getWatchlist) {
      setWatchlist(data.getWatchlist);
    }

    if (error) {
      setErrorQuery(`Ошибка: ${error.message}`);
    }
  }, [error, data]);

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      <h1>Watchlist</h1>
      <Grid
        container
        spacing={{ xs: 2, md: 7 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ padding: "20px", marginBottom: "50px" }}
      >
        {watchlist?.map((movie) => (
          <Grid item xs={2} sm={4} md={4} key={movie?.movie_id}>
            <div className="main__movie-wrapper">
              {movie?.poster && (
                <div className="main__movie-poster-wrapper">
                  <Link
                    href={movie.is_series ? `/series/[id]` : `/film/[id]`}
                    as={
                      movie.is_series
                        ? `/series/${movie.movie_id}`
                        : `/film/${movie.movie_id}`
                    }
                  >
                    <img
                      src={movie?.poster}
                      alt={`Постер ${movie?.title}`}
                      className="main__poster"
                    />
                  </Link>
                </div>
              )}
              <Link
                href={movie.is_series ? `/series/[id]` : `/film/[id]`}
                as={
                  movie.is_series
                    ? `/series/${movie.movie_id}`
                    : `/film/${movie.movie_id}`
                }
              >
                <h3 className="main__name">{movie?.title}</h3>
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>

      {errorQuery && <span>{errorQuery}</span>}
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session,
    },
  };
}

export default Profile;
