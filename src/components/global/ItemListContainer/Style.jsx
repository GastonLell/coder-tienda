import styled from "styled-components";
import { Colores, Fuentes } from "../../utils/Constants";

export const Subtitle = styled.h2`
  font-size: 30px;
  margin-top: 20px;
  text-align: left;
  margin-left: 25px;
  font-family: ${Fuentes.fuenteDos};
  padding: 20px;
  color: ${Colores.colorUno};
`;

export const ItemStyle = styled.article`
  max-height: 400px;
  width: 18%;
  background-color: #fff;
  border-radius: 8px;
  text-align: left;
  margin: 10px 25px 40px;
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${Colores.colorUno} !important;
  font-family: ${Fuentes.fuenteDos};
  .link-route {
    text-decoration: none;
    text-align: center;
  }
  .detalle-producto {
    margin: 5px;
    padding: 0 8px;
    text-align: left;
    color: ${Colores.colorUno};
    display: none;
  }
  h5 {
    color: ${Colores.colorTres} !important;
  }
  img {
    width: 100%;
    max-width: 100%;
    object-fit: scale-down;
    max-height: 200px;
  }
  &:hover {
    box-shadow: 2px 2px 5px #999;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    .detalle-producto {
      display: block;
    }
  }
`;

export const ItemListStyle = styled.section`
  .productos {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
