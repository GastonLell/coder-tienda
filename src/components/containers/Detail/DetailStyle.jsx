import styled from "styled-components";
import { Colores, Fuentes } from "../../utils/Constants";

export const DetailStyle = styled.article`
  display: grid;
  grid-template-rows: 1fr;
  padding-bottom: 40px;
  padding-top: 30px;
  margin: 0 auto;
  font-family: ${Fuentes.fuenteDos};
  color: ${Colores.colorUno};

  & > div {
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #fff;
  }

  .slide-img {
    text-align: center;
  }
  img {
    max-width: 200px;
    object-fit: scale-down;
  }
  .detalle-producto {
    text-align: left;
  }
  h2 {
    margin-bottom: 15px;
  }
  h3 {
    font-size: 40px;
    font-weight: 300;
  }
  h6 {
    margin-bottom: 35px;
  }
  .info-compra {
    display: flex;
    margin-bottom: 20px;
  }
  .info-compra > div {
    margin-right: 10px;
  }
  .info-compra i {
    font-weight: 300;
  }
  .info-compra .entidades {
    font-size: 25px;
    color: #174a5a;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .slide-img {
      width: 50%;
    }
    .detalle-producto {
      width: 30%;
    }
  }
`;
