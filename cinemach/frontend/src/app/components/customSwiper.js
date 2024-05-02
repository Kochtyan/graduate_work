import { useEffect, useState } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function CustomSwiper({ list, type, style }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (list?.length !== 0 && list !== undefined) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [list]);

  return (
    <>
      {isVisible && (
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ marginBottom: "20px" }}>
            {type === "sequelsAndPrequels"
              ? "Сиквелы и приквелы"
              : type === "similarMovies"
              ? "Похожие фильмы"
              : ""}
          </h3>

          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination]}
            className="movie__swiper"
            style={style}
          >
            {list &&
              list.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <div className="movie__swiper-slide">
                    <Link href={`/film/[id]`} as={`/film/${movie.id}`}>
                      <img
                        src={movie.poster.url}
                        alt={movie.name}
                        style={{ width: "150px", borderRadius: "5px" }}
                      />
                    </Link>
                    <Link
                      className="movie__swiper-slide-name"
                      href={`/film/[id]`}
                      as={`/film/${movie.id}`}
                    >
                      <span style={{ fontSize: "15px" }}>
                        {movie.name ?? movie.enName}
                      </span>
                    </Link>
                    <Link href={`/film/[id]`} as={`/film/${movie.id}`}>
                      <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                        {movie.year}
                      </span>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
