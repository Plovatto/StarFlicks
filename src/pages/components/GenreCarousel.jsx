import React, { } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CustomNextArrow, CustomPrevArrow } from "./CustomPrevArrow ";
import {
  Container,
  HeartIcon2,
  Movie,
  MovieList,
  HeartIcon,
  StarIcon,
  Icons,
  Break,
  Space,
  IconsFormat,

} from "./style";


function GenreCarousel({
  movies,
  imagePath,
  mediaType,
  favoriteMovies,
  toggleFavorite,
}) {


  const settings = {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 6,
    speed: 1400,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <Container>
      <MovieList>
        <Slider
          {...settings}
          CustomNextArrow={<CustomNextArrow />}
          CustomPrevArrow={<CustomPrevArrow />}
        >
          {movies.map((movie) => (
            <Movie key={movie.id} >
              <div className="desgraca">
                <Link to={`/${mediaType}/${movie.id}`}>
                  <img
                    src={`${imagePath}${movie.poster_path}`}
                    alt={movie.title}
                  /> <span>{movie.title || movie.name}</span>
                </Link>
                <Icons>
                  <Break>
                    {" "}
                    <span className="date">{new Date(movie.release_date || movie.first_air_date).getFullYear()}</span>{" "}
                  </Break>
                  <Space></Space>
                  <Break>
                    <IconsFormat>
                      <btn onClick={() => toggleFavorite(movie)}>
                        {favoriteMovies.some((favMovie) => favMovie.id === movie.id) ? (
                          <HeartIcon fill="#FF5733" />
                        ) : (
                          <HeartIcon2 className="heart-outline" />
                        )}
                      </btn>
                      <StarIcon />

                      <span className="Avaliation">{movie.vote_average.toFixed(1)}</span>
                    </IconsFormat>
                  </Break>
                </Icons>

              </div>
            </Movie>
          ))}
        </Slider>
      </MovieList>
    </Container>
  );
}

export default GenreCarousel;
