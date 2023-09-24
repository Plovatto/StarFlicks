import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import {
  Shadow
} from "./style";

function RandomImageCarousel() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fetchRandomImages = async () => {
    try {
      const apiKey = process.env.REACT_APP_KEY;
      const randomPage = Math.floor(Math.random() * 10) + 1;
      const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomPage}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      const posterImages = data.results.map(
        (movie) =>
          `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      );

      setImages(posterImages);
    } catch (error) {
      console.error("Erro ao buscar imagens aleatórias:", error);
    }
  };

  useEffect(() => {
    fetchRandomImages();
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
  };

  return (
    <Shadow>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Image ${index}`}
                style={{
                  width: "100%",
                  overflow: "hidden",
                  height: "58vh",
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                }}
              />
            </div>
          ))}
          <div className="sombrinha"></div>
        </Slider>
      </div>
    </Shadow>
  );
}

export default RandomImageCarousel;
 