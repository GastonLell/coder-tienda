import styled from "styled-components";
import { Colores } from "../../utils/Constants";

export const CardInfoStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 50px;
  background-color: ${Colores.colorCinco};
  max-height: 400px;
`;
export const CardStyle = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 1px 2px 3px 0.3px;
  padding: 15px 30px;
  width: 25%;
  background-color: #fff;

  img {
    display: block;
    margin: 0 auto;
  }

  h2 {
    font-size: 20px;
    margin: 10px;
    color: ${Colores.colorUno};
  }

  h3 {
    font-size: 10px;
    color: ${Colores.colorTres};
  }
`;
