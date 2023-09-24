import React, { useState } from "react";
import {
  Container2,
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
import { Link } from "react-router-dom";

function MediaCards({
  mediaList,
  mediaType,
  imagePath,
  favoriteMovies,
  toggleFavorite,
}) {
  const [displayedResults, setDisplayedResults] = useState(10);
  const resultsPerPage = 10;

  const loadMoreResults = () => {
    const newDisplayedResults = displayedResults + resultsPerPage;
    setDisplayedResults(newDisplayedResults);
  };

  return (
    <Container2>
      <MovieList>
        {mediaList.slice(0, displayedResults).map((media) => (
          <Movie key={media.id}>
            <div className="desgraca">
              <Link to={`/${mediaType}/${media.id}`}>
                <div key={media.id} className="img">
                  <img
                    src={`${imagePath}${media.poster_path}`}
                    alt={media.title || media.name}
                  />
                </div>
                <span>{media.title || media.name}</span>

              </Link>

              <Icons>
                <Break>
                  {" "}
                  <span className="date">{new Date(media.release_date || media.first_air_date).getFullYear()}</span>{" "}
                </Break>
                <Space></Space>
                <Break>
                  <IconsFormat>
                    <btn onClick={() => toggleFavorite(media)}>
                      {favoriteMovies.some((favMovie) => favMovie.id === media.id) ? (
                        <HeartIcon fill="#FF5733" />
                      ) : (
                        <HeartIcon2 className="heart-outline" />
                      )}
                    </btn>
                    <StarIcon />

                    <span className="Avaliation">{media.vote_average.toFixed(1)}</span>
                  </IconsFormat>
                </Break>
              </Icons>
            </div>
          </Movie>
        ))}

      </MovieList>
      {displayedResults < mediaList.length && (

        <button className="VerMais" onClick={loadMoreResults}>Ver Mais</button>

      )} </Container2>
  );
}

export default MediaCards;
