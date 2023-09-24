import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import { DotLoader } from "react-spinners";
import {
  CloseIcon, Infor, StarIcon, Text1, Text2, Titlezin, TitlezinP, TextD, Video, Resp, Line, Text, TimeIcon, Shadow, LeftColumn, RightColumn, Loading
} from "./style";


function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const apiKey = process.env.REACT_APP_KEY;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar detalhes do filme.");
        }
        const data = await response.json();

        const videosResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=pt-BR`
        );
        if (!videosResponse.ok) {
          throw new Error("Erro ao buscar informações sobre o vídeo.");
        }
        const videosData = await videosResponse.json();

        data.videos = videosData;

        setMovieDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id, apiKey]);

  useEffect(() => {
    const fetchCastDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar informações do elenco.");
        }
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCastDetails();
  }, [id, apiKey]);

  if (!movieDetails) {
    return (
      <Loading>
        <p className="carregando">Carregando detalhes do filme</p>
        <DotLoader color="#ff0000" loading={true} size={50}  />
      </Loading>
    );
  }

  const videoOptions = {

    playerVars: {
      autoplay: 1,
    },
  };

  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <Link to="/"><CloseIcon></CloseIcon></Link>
      <Shadow><div className="sombrinha2">

      </div>
        <img style={{ height: "800px", width: "100%", objectFit: "cover", overflow: "hidden", objectPosition: "50% 60%" }}
          src={`${imagePath}${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />

      </Shadow>




      <Infor>



        <Resp>
          <LeftColumn>
            <TitlezinP>{movieDetails.title}</TitlezinP>

            <Text>{movieDetails.genres.map((genre) => genre.name).join(", ")}</Text>


          </LeftColumn>
          <RightColumn>
            <div className="div">
              <TimeIcon /> <Text2>
                {movieDetails.runtime} m
              </Text2> <StarIcon /> <Text1>
                {movieDetails.vote_average.toFixed(1)}
              </Text1>

            </div>

            <TextD>{movieDetails.release_date}</TextD>
          </RightColumn>
        </Resp>
        <Line></Line>
        <br></br>
        <Titlezin>DESCRIÇÃO</Titlezin>
        <br></br>
        <Text>{movieDetails.overview}</Text>
        <br></br>
        <br></br>
        <Titlezin>Produtora</Titlezin>
        <br></br>
        <Text>
          {movieDetails.production_companies
            .map((company) => company.name)
            .join(", ")}
        </Text>
        <br></br> <br></br>

        <Titlezin>Elenco</Titlezin>
        <br></br>
        {cast.slice(0, 5).map((actor) => (
          <Text key={actor.id}>
            {actor.name} como {actor.character}
          </Text>
        ))}<br></br> <br></br>
      </Infor>  <Video> {movieDetails.videos && movieDetails.videos.results.length > 0 && (
        <div>

          <YouTube
            videoId={movieDetails.videos.results[0].key}
            opts={videoOptions}
          />
        </div>
      )}</Video>
      <br></br><br></br><br></br>
    </div>
  );
}

export default MovieDetails;
