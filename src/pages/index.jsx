import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./components/Search";
import CategoryButtons from "./components/Category";
import MediaCards from "./components/MediaCards";
import PopularMoviesCarousel from "./components/PopularMoviesCarousel";
import RecentMoviesCarousel from "./components/RecentMoviesCarousel";
import GenreCarousel from "./components/GenreCarousel";
import FavoriteMovies from "./components/FavoriteMovies";
import RandomImageCarousel from "./components/RandomImageCarousel";

import {
  Navzin,
  Stylez,
  Titles,
  Mover,
  FilmIcon,
  CategoryName,
  Divzin,
} from "./components/style";
function Home() {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const KEY = process.env.REACT_APP_KEY;
  const [recentMovies, setRecentMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const [mediaList, setMediaList] = useState([]);
  const [mediaType, setMediaType] = useState("movie");
  const [page, setPage] = useState(1);
  const [showAllGenres, setShowAllGenres] = useState(true);
  const [categoryMovies, setCategoryMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const getTitle = () => {
    return mediaType === "movie" ? "Filmes" : "Séries";
  };
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const toggleFavorite = (media) => {
    const isFavorite = favoriteMovies.some(
      (favMedia) => favMedia.id === media.id
    );
    let updatedFavorites = [];

    if (isFavorite) {
      updatedFavorites = favoriteMovies.filter(
        (favMedia) => favMedia.id !== media.id
      );
    } else {
      updatedFavorites = [...favoriteMovies, media];
    }

    setFavoriteMovies(updatedFavorites);

    localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteMovies");
    if (storedFavorites) {
      setFavoriteMovies(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    const fetchMedia = () => {
      if (isSearching) {
        fetchSearchResults();
      } else {
        const mediaEndpoint =
          mediaType === "movie" ? "movie/popular" : "tv/popular";
        fetch(
          `https://api.themoviedb.org/3/${mediaEndpoint}?api_key=${KEY}&language=pt-BR&page=${page}`
        )
          .then((response) => response.json())
          .then((data) => {
            setMediaList(data.results);
          });
      }
    };

    const fetchRecentMovies = () => {
      const recentMoviesEndpoint =
        mediaType === "movie" ? "movie/now_playing" : "tv/on_the_air";
      const totalPagesToFetch = 5;
      const fetchPromises = [];

      for (
        let pageToFetch = 1;
        pageToFetch <= totalPagesToFetch;
        pageToFetch++
      ) {
        const fetchPromise = fetch(
          `https://api.themoviedb.org/3/${recentMoviesEndpoint}?api_key=${KEY}&language=pt-BR&page=${pageToFetch}`
        )
          .then((response) => response.json())
          .then((data) => data.results);

        fetchPromises.push(fetchPromise);
      }

      Promise.all(fetchPromises).then((results) => {
        const allRecentMovies = results.flat();
        setRecentMovies(allRecentMovies);
      });
    };

    const fetchPopularMovies = () => {
      const popularMoviesEndpoint =
        mediaType === "movie" ? "movie/popular" : "tv/popular";
      const totalPagesToFetch = 5;

      for (
        let pageToFetch = 1;
        pageToFetch <= totalPagesToFetch;
        pageToFetch++
      ) {
        fetch(
          `https://api.themoviedb.org/3/${popularMoviesEndpoint}?api_key=${KEY}&language=pt-BR&page=${pageToFetch}`
        )
          .then((response) => response.json())
          .then((data) => {
            setPopularMovies(data.results);
          });
      }
    };

    const fetchGenres = () => {
      const genreEndpoint =
        mediaType === "movie" ? "genre/movie/list" : "genre/tv/list";
      fetch(
        `https://api.themoviedb.org/3/${genreEndpoint}?api_key=${KEY}&language=pt-BR`
      )
        .then((response) => response.json())
        .then((data) => {
          setGenres(data.genres);
        })
        .catch((error) => {
          console.error("Erro ao buscar gêneros:", error);
        });
    };

    const fetchSearchResults = () => {
      setIsSearching(true);
      const totalPagesToFetch = 8;

      for (let page = 1; page <= totalPagesToFetch; page++) {
        const mediaEndpoint =
          mediaType === "movie" ? "search/movie" : "search/tv";
        fetch(
          `https://api.themoviedb.org/3/${mediaEndpoint}?api_key=${KEY}&language=pt-BR&query=${searchQuery}&page=${page}`
        )
          .then((response) => response.json())
          .then((data) => {
            setSearchResults(data.results);
          });
      }
    };

    fetchMedia();
    fetchRecentMovies();
    fetchPopularMovies();
    fetchGenres();

    if (searchQuery.trim() !== "") {
      fetchSearchResults();
    }
  }, [mediaType, page, searchQuery, KEY]);

  const handleCategoryClick = (genreId) => {
    setSelectedCategory(genreId);
    setSelectedGenreId(genreId);
    setPage(1);

    if (!categoryMovies[genreId]) {
      const genreEndpoint =
        mediaType === "movie" ? "discover/movie" : "discover/tv";
      fetch(
        `https://api.themoviedb.org/3/${genreEndpoint}?api_key=${KEY}&language=pt-BR&with_genres=${genreId}&page=${page}`
      )
        .then((response) => response.json())
        .then((data) => {
          setCategoryMovies((prevCategoryMovies) => ({
            ...prevCategoryMovies,
            [genreId]: data.results,
          }));
        })
        .catch((error) => {
          console.error("Erro ao buscar filmes por gênero:", error);
        });
    }
  };
  const handleMovieDetails = (movie, mediaType) => {
    console.log("Detalhes do filme:", movie);
  };

  const handleUnfavorite = (movie) => {
    const updatedFavorites = favoriteMovies.filter(
      (favMovie) => favMovie.id !== movie.id
    );
    setFavoriteMovies(updatedFavorites);

    localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
  };
  const clearGenreFilter = () => {
    setSelectedCategory(null);
    setSelectedGenreId(null);
    setPage(1);
    setIsSearching(false);
  };
  const isSearchEmpty = searchQuery.trim() === "";
  const handleReloadPage = () => {
    window.location.reload();
  };
  return (
    <div>
      {" "}
      {searchQuery.trim() !== "" ? (
        <Divzin></Divzin>
      ) : (
        <>
          <RandomImageCarousel />{" "}
        </>
      )}
      <Navzin>
        <Stylez>
          <Mover className={isSearchEmpty ? "" : "scrolled"}>
            <columne>
              <img src="/image/icon.png" alt="Ícone" />
            </columne>

            <columne>
            <Link id="buttonzin" to="/" onClick={handleReloadPage}>
  Home
</Link>

              <button
                id="buttonzin"
                onClick={() => setMediaType("movie")}
                className={mediaType === "movie" ? "active" : ""}
              >
                Filmes
              </button>
              <button
                id="buttonzin"
                onClick={() => setMediaType("tv")}
                className={mediaType === "tv" ? "active" : ""}
              >
                Séries
              </button>
            </columne>
          </Mover>
        </Stylez>
      </Navzin>
      <Titles>
        <FilmIcon></FilmIcon>
        {getTitle()}
      </Titles>
      <SearchInput
        value={searchQuery}
        searchQuery={searchQuery}
        handleSearchQueryChange={handleSearchQueryChange}
      />
      {searchQuery.trim() !== "" ? (
        <MediaCards
          mediaList={searchResults}
          mediaType={mediaType}
          imagePath={imagePath}
          favoriteMovies={favoriteMovies}
          toggleFavorite={toggleFavorite}
        />
      ) : (
        <>
          <CategoryButtons
            genres={genres}
            handleCategoryClick={handleCategoryClick}
            selectedCategory={selectedCategory}
            clearGenreFilter={clearGenreFilter}
            showAllGenres={showAllGenres}
          />
          {genres.map((genre) => (
            <div key={genre.id}>
              {selectedCategory === genre.id && (
                <div>
                  <CategoryName>{genre.name}</CategoryName>
                  <GenreCarousel
                    movies={categoryMovies[genre.id] || []}
                    imagePath={imagePath}
                    mediaType={mediaType}
                    favoriteMovies={favoriteMovies}
                    toggleFavorite={toggleFavorite}
                  />
                </div>
              )}
            </div>
          ))}
          {favoriteMovies && favoriteMovies.length > 0 && (
            <FavoriteMovies
              imagePath={imagePath}
              mediaType={mediaType}
              favoriteMovies={favoriteMovies}
              onMovieDetails={handleMovieDetails}
              onUnfavorite={handleUnfavorite}
            />
          )}
          <RecentMoviesCarousel
            recentMovies={recentMovies}
            mediaType={mediaType}
            imagePath={imagePath}
            favoriteMovies={favoriteMovies}
            toggleFavorite={toggleFavorite}
          />
          <PopularMoviesCarousel
            popularMovies={popularMovies}
            mediaType={mediaType}
            imagePath={imagePath}
            favoriteMovies={favoriteMovies}
            toggleFavorite={toggleFavorite}
          />
        </>
      )}
    </div>
  );
}

export default Home;
