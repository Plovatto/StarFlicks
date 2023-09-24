import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import {
  Container,
  CustomCarousel,
  Movie,
  CustomSlide,

  HeartIcon,
  StarIcon,
  Icons,
  Break,
  Space,
  IconsFormat,
  Titles2,
  FavIcon,
  Line
} from "./style";

import { CustomNextArrow, CustomPrevArrow } from "./CustomPrevArrow ";
function FavoriteMovies({
  imagePath,
  favoriteMovies,
  onMovieDetails,
  onUnfavorite,
  mediaType,
}) {

  const [carouselKey, setCarouselKey] = useState(0);

  const settings = {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: favoriteMovies.length > 6 ? 6 : favoriteMovies.length,
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


  useEffect(() => {
    setCarouselKey((prevKey) => prevKey + 1);
  }, [favoriteMovies]);

  return (
    <Container>
      <Titles2><FavIcon></FavIcon>Favoritos</Titles2><Line></Line>
      <CustomCarousel
        key={carouselKey}
        CustomNextArrow={<CustomNextArrow />}
        CustomPrevArrow={<CustomPrevArrow />}
        {...settings}
      >
        {favoriteMovies.map((movie) => (
          <CustomSlide key={movie.id}>
            <Movie>
              <div key={movie.id} className="desgraca">
                <Link to={`/${mediaType}/${movie.id}`}>
                  <img
                    src={`${imagePath}${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <span >{movie.title || movie.name}</span>

                </Link>{" "}
                <Icons>
                  <Break>
                    {" "}
                    <span className="date">{new Date(movie.release_date || movie.first_air_date).getFullYear()}</span>{" "}
                  </Break>
                  <Space></Space>
                  <Break>
                    <IconsFormat>
                      <btn onClick={() => onUnfavorite(movie)}>
                        <HeartIcon fill="#FF5733" />
                      </btn>
                      <StarIcon />

                      <span className="Avaliation">{movie.vote_average.toFixed(1)}</span>
                    </IconsFormat>
                  </Break>
                </Icons>
              </div>{" "}
            </Movie>
          </CustomSlide>
        ))}
      </CustomCarousel>
    </Container>
  );
}

export default FavoriteMovies;
