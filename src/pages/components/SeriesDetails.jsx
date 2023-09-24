import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import { DotLoader } from "react-spinners";
import {
  CloseIcon, Infor, StarIcon, Text1, Text2, Titlezin, TitlezinP, TextD, Video, Resp, Line, Text, TimeIcon, Shadow, LeftColumn, RightColumn, Loading
} from "./style";

function SeriesDetails() {
  const { id } = useParams();
  const [seriesDetails, setSeriesDetails] = useState(null);
  const apiKey = process.env.REACT_APP_KEY;

  useEffect(() => {
    const fetchSeriesDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=pt-BR`
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar detalhes da série.");
        }
        const data = await response.json();

        const videosResponse = await fetch(
          `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}&language=pt-BR`
        );
        if (!videosResponse.ok) {
          throw new Error("Erro ao buscar informações sobre o vídeo da série.");
        }
        const videosData = await videosResponse.json();

        data.videos = videosData;

        setSeriesDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSeriesDetails();
  }, [id, apiKey]);

  if (!seriesDetails) {
    return (
      <Loading>
        <p className="carregando">Carregando detalhes da série...</p>
        <DotLoader color="#ff0000" loading={true} size={50} />
      </Loading>
    );
  }

  const videoOptions = {
    height: "315",
    playerVars: {
      autoplay: 1,
    },
  };

  const imagePath = "https://image.tmdb.org/t/p/original";
  const episodeRunTime = seriesDetails.episode_run_time;
  const episodeRunTimeString = Array.isArray(episodeRunTime)
    ? episodeRunTime.join(" min, ") + " min"
    : "Não disponível";

  return (
    <div>
      <Link to="/"><CloseIcon></CloseIcon></Link>
      <Shadow><div className="sombrinha2">

      </div>
        <img style={{ height: "800px", width: "100%", objectFit: "cover", overflow: "hidden", objectPosition: "50% 60%" }}
          src={`${imagePath}${seriesDetails.poster_path}`}
          alt={seriesDetails.title}
        />

      </Shadow>

      <Infor>



        <Resp>
          <LeftColumn>
            <TitlezinP>{seriesDetails.name}</TitlezinP>

            <Text>{seriesDetails.genres.map((genre) => genre.name).join(", ")}</Text>


          </LeftColumn>
          <RightColumn>
            <div className="div">
              <TimeIcon /> <Text2>
                {seriesDetails.number_of_seasons} temp
              </Text2> <StarIcon /> <Text1>
                {seriesDetails.vote_average.toFixed(1)}
              </Text1>

            </div>

            <TextD>{seriesDetails.first_air_date}</TextD>
          </RightColumn>
        </Resp>
        <Line></Line>
        <br></br>
        <Titlezin>DESCRIÇÃO</Titlezin>
        <br></br>
        <Text>{seriesDetails.overview}</Text>
        <br></br>
        <br></br>
        <Titlezin>Produtora</Titlezin>
        <br></br>
        <Text>
          {seriesDetails.production_companies
            .map((company) => company.name)
            .join(", ")}
        </Text>

        <br></br> <br></br>
        <Titlezin>Duração Média dos Episódios</Titlezin>
        <br></br>
        <Text> {episodeRunTimeString}</Text>
        <br></br>
        <br></br>
        <Titlezin>Redes</Titlezin>
        <br></br>
        <Text> {seriesDetails.networks.map((network) => network.name).join(", ")} </Text>
        <br></br> <br></br>


      </Infor>  <Video>   {seriesDetails.videos && seriesDetails.videos.results.length > 0 && (
        <div>

          <YouTube
            videoId={seriesDetails.videos.results[0].key}
            opts={videoOptions}
          />
        </div>
      )}</Video>
      <br></br><br></br><br></br>
    </div>
  );
}


export default SeriesDetails;
