import React, { } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Categorys,
  Categorys2


} from "./style";

function CategoryButtons({
  genres,
  handleCategoryClick,
  selectedCategory,
  clearGenreFilter,
}) {


  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    centerMode: false,
    focusOnSelect: false,
    dots: false,
    speed: 1000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };



  const handleShowAllClick = () => {
    clearGenreFilter();
    window.location.reload();
  };

  return (

    <Slider
      {...settings}

    >
      {genres.map((genre) => (

        <div key={genre.id}>
          <Categorys
            onClick={() => handleCategoryClick(genre.id)}
            className={`category-button ${selectedCategory === genre.id ? "active" : ""
              }`}
          >
            {genre.name}
          </Categorys>
        </div>
      ))}
      {selectedCategory && (
        <div>
          <Categorys2 onClick={handleShowAllClick} className="show-all-button">
            Mostrar todos
          </Categorys2>
        </div>
      )}
    </Slider>
  );
}

export default CategoryButtons;
