import styled from "styled-components";
import Slider from "react-slick";
import { FaHeart, FaStar } from "react-icons/fa";
import { MdFavoriteBorder, MdOutlineFavoriteBorder } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import { BiTime } from "react-icons/bi";

import { LiaTimesSolid } from "react-icons/lia";

export const CloseIcon = styled(LiaTimesSolid)`
  position: fixed;
  top: 0;
  right: 0;
  color: #ffff;
  font-size: 40px;
  margin: 22px;
  z-index: 999;
`;
export const RecIcon = styled(BiTime)`
  color: #ffff;
  font-size: 23px;
  margin: 0 15px;
`;
export const TimeIcon = styled(BiTime)`
  color: #ff0000;
  font-size: 23px;
  margin: 0 2px 0 0;
`;
export const PopIcon = styled(BsGraphUpArrow)`
  color: #ffff;
  font-size: 23px;
  margin: 0 15px;
`;

export const FavIcon = styled(MdOutlineFavoriteBorder)`
  color: #ffff;
  font-size: 23px;
  margin: 0 15px;
`;

export const FilmIcon = styled(RiMovie2Line)`
  color: #ffff;
  font-size: 23px;
  margin: 0 15px;
`;

export const HeartIcon = styled(FaHeart)`
  color: #FF0000; 
  font-size: 19px; 
  transition: transform 0.3s ease-in-out; 

  &:hover {
    transform: scale(1.2); 
`;
export const HeartIcon2 = styled(MdFavoriteBorder)`
  color: #ff0000;
  font-size: 19px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const StarIcon = styled(FaStar)`
  color: #ffc700;
  font-size: 21px;
  transition: transform 0.3s ease-in-out;
  margin: 0 5px 0 10px;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Infor = styled.div`
  margin: 60px;
  .Avaliation {
    color: #ffc700;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
export const Video = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  iframe {
    width: 560px;

    @media (max-width: 700px) {
      width: auto;
    }
  }
`;
export const Text = styled.h3`

font-size::17px;
font-family: 'Inter', sans-serif;
font-weight:300;
max-width:900px;
`;
export const TextD = styled.h3`

font-size::17px;
font-family: 'Inter', sans-serif;
font-weight:300;
max-width:900px;
padding-left:30px;
padding-top: 10px;
@media (max-width: 768px) {
  padding-left:0;
}
`;
export const Text1 = styled.h3`
  font-family: "Inter", sans-serif;
  color: #ffc700;
`;

export const Text2 = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 300;
  color: #ff0000;
`;
export const LeftColumn = styled.div`
  flex: 1;
`;

export const RightColumn = styled.div`
  flex: -3;
  .div {
    display: flex;
    @media (max-width: 768px) {
      padding-top: 10px;
    }
  }
  @media (min-width: 768px) {
    margin-left: 10px;
  }
`;
export const Resp = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TitlezinP = styled.h2`
  color: #fff;
  font-size: 38px;
  font-weight: 400;
  font-family: "Staatliches";
`;
export const Titlezin = styled.h2`
  color: #fff;
  font-size: 28px;
  font-weight: 400;
  font-family: "Staatliches";
`;

export const Stylez = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const columne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Divzin = styled.div`
  margin: 120px 0;
  @media (max-width: 600px) {
    margin: 160px 0;
  }
`;
export const Titles = styled.h1`
  color: #fff;
  font-size: 22px;
  font-weight: 400;
  margin: 0 0 -25px 20px;
`;
export const CategoryName = styled.h1`
  color: #fff;
  font-size: 22px;
  font-weight: 400;
  margin: 0 0 0 40px;
`;
export const Titles2 = styled.h1`
  color: #fff;
  font-size: 22px;
  font-weight: 400;
  text-align: start;
`;
export const Line = styled.hr`
  height: 0.2px;
  background-color: #d9d9d9;
  opacity: 40%;
  border: none;
  margin: 30px 0;
  width: 100%;
`;
export const Navzin = styled.nav`
  width: 100%;

  align-items: center;

  img {
    z-index: 6;
    width: 50px;
    margin: 9px;
    @media (max-width: 768px) {
      display: none;
    }
  }

  #buttonzin {
    margin: 20px 42px;
    background-color: transparent;
    color: #ffff;
    border: none;
    font-size: 17px;
    font-weight: 400;
    cursor: pointer;
    @media (max-width: 768px) {
      margin: 30px 4vw;
    }
  }
  a {
    text-decoration: none;
  }
`;
export const CustomPrevArro = styled.div`
  position: absolute;
  top: 40%;
  left: -25px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;
`;
export const CustomNextArro = styled.div`
  position: absolute;
  top: 40%;
  right: -25px;
  transform: translateY(-50%);
  cursor: pointer;

  z-index: 2;
`;
export const Container2 = styled.div`
  padding: 2rem;
  display: grid;
  width: 100%;
  padding: 0;
  ul {
    margin: 0 100px;
  }
  h1 {
    text-align: center;
    margin: 4rem 0;
  }
  .VerMais {
    background-color: #ff0000;
    border: none;
    width: 100%;
    height: 50px;
    color: #ffff;
    font-weight: bold;
    font-size: 18px;
    margin-top: 50px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: scale(1.3);
      box-shadow: -2px -22px 49px 0px rgba(255, 0, 0, 0.41),
        -9px -88px 88px 0px rgba(255, 0, 0, 0.36),
        -21px -197px 119px 0px rgba(255, 0, 0, 0.21),
        -38px -351px 141px 0px rgba(255, 0, 0, 0.06),
        -59px -548px 154px 0px rgba(255, 0, 0, 0.01);
    }
  }

  .center-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.div`
  padding: 2rem;
  z-index: 1;
  width: 100%;
`;
export const isdragging = styled.div`
  opacity: 0.7;
  transition: opacity 0.3s ease-in-out;
`;
export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
  z-index: 1;
`;
export const CustomCarousel = styled(Slider)`
  flex-wrap: nowrap;

  list-style: none;
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
  z-index: 1;
`;

export const CustomSlide = styled.div`
  flex: 0 0 auto;
  margin: 5px;
  z-index: 1;
`;

export const btn = styled.button`
  backgroud-color: transparent;
`;

export const Categorys = styled.button`
  height: 45px;
  min-width: 160px;
  width: auto;
  border-radius: 1.875rem;
  background: #f00;
  border: none;
  color: #fff;
  font-size: 15px;
  margin: 40px 0;
  @media (max-width: 400px) {
    min-width: 120px;
  }
`;
export const Mover = styled.div`
  line-height: 10px;
  width: 90vw;
  z-index: 4;
  position: fixed;
  top: 0;
  left: 70vw;
  right: 0;
  img {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  transition: all 0.4s ease-in-out;

  &.scrolled {
    width: 100%;
    z-index: 4;
    position: fixed;
    top: 0;

    right: 0;  
  }
  }



  @media (max-width: 900px) {
    position: fixed;
left:0; text-align: center;
&.scrolled {
  position: fixed;
  left:120px; 
}
  }
  
  @media (max-width: 600px) {
    &.scrolled {
      text-align: center;
      position: fixed;
      left:0;
    }
    text-align: center;
  }
  @media (max-width: 500px) {
    text-align: center;
    position: fixed;
    z-index: 5;
    left: 0;
    width: 100%;
    &.scrolled {
      text-align: center;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: -40px 3% 0 0;

  input {
    transition: all 0.9s ease-in-out;
    padding-left: 2%;
    height: 45px;
    border: none;
    width: auto;
    min-width: 25vw;
    color: #fff;
    border-radius: 3.125rem;
    background: #242424;

    @media (max-width: 610px) {
      margin: 60px 5px 0 5px;
      width: 93%;
      &.scrolled {
        transition: all 0.9s ease-in-out;
        margin: 60px 5px 0 5px;
        width: 100%;
      }
    }
  }

  input::placeholder {
    color: #fff;
    font-size: 14px;
    font-weight: 400;
  }

  input:focus {
    border: 1px solid #f00;
    outline: none;
    box-shadow: -2px 1px 6px 0px rgba(255, 0, 0, 0.29),
      -9px 5px 10px 0px rgba(255, 0, 0, 0.26),
      -20px 11px 14px 0px rgba(255, 0, 0, 0.15),
      -36px 20px 16px 0px rgba(255, 0, 0, 0.04),
      -56px 31px 18px 0px rgba(255, 0, 0, 0.01);
  }

  &.scrolled {
    position: fixed;
    top: 55px;
    left: 90px;

    z-index: 4;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;
export const Categorys2 = styled.button`
  height: 40px;
  min-width: 150px;
  width: auto;
  border-radius: 1.875rem;
  background: #fff;
  border: none;
  color: #f00;
  font-size: 15px;
  margin: 40px 0;
`;
export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .carregando {
    margin-bottom: 30px;
  }
`;

export const Break = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  height: 20px;
  line-height: 17px;
`;

export const Icons = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin-bottom: 0;
  height: auto;
  btn {
    display: flex;
    align-items: flex-end;
  }
`;

export const Space = styled.div`
  margin-left: 100px;
`;

export const imge = styled.div`
  width: 220px;
  height: 320px;
`;

export const Shadow = styled.div`

  .sombrinha{
    width:100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(180deg, #000 3.22%, rgba(15, 15, 15, 0.56) 49.45%, rgba(25, 25, 25, 0.26) 72.56%, rgba(30, 30, 30, 0.13) 89.17%, rgba(34, 34, 34, 0.00) 92.79%, rgba(34, 34, 34, 0.00) 92.92%); !important;
  }
  .sombrinha2{
    width:100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(180deg, #000 0%, rgba(34, 34, 34, 0.00) 58.14%, rgba(34, 34, 34, 0.00) 68.77%); !important;
  }
  margin: 0 0 40px 0;
`;

export const IconsFormat = styled.div`
  grid-column: 3;
  display: flex;
  align-items: flex-end;
  span {
    line-height: 17px;
  }
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  max-width: 200px;
  transition: 0.4s;
  overflow: visible;
  z-index: 1;
  padding: 22px 0;
  margin: 0 20px;
  &:hover {
    scale: 110%;
  }
  img {
    width: 220px;
    height: 320px;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .date {
    opacity: 60%;
  }
  .Avaliation {
    font-family: "Kosugi", sans-serif;
    color: #ffc700;
  }
  span {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 88%;
    text-align: center;
  }
  a {
    transition: all 0.3s;
    text-decoration: none;
    color: #ffff;
  }
  :not(.slick-center) {
    img {
      width: 220px;
    }
  }

  &.slick-center {
    img {
      transform: scale(1.1);
    }
  }
  .slick-center img {
    transition: transform 0.3s ease-in-out;
  }
  .desgraca {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 395px;
  }
`;
