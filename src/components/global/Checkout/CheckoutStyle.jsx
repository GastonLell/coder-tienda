import styled from "styled-components";
import { Colores } from "../../utils/Constants";

export const CheckoutStyle = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #d8d2d2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FormStyle = styled.div`
  width: 100%;

  input,
  textarea {
    width: 90%;
    display: block;
    margin: 20px;
    border: none;
    border-radius: 8px;
    font-size: 20px;
    padding: 8px;
  }

  button {
    padding: 10px;
    font-size: 20px;
    border: none;
    border-radius: 8px;
    color: #fff;
    background-color: ${Colores.colorDos};
    cursor: pointer;
  }
`;

export const DetailProductsCartStyle = styled.div`
  margin: 20px auto;
  padding: 10px;
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  background-color: ${Colores.colorCinco};
  h4 {
    align-items: center;
  }
  img {
    max-width: 150px;
    max-height: 100px;
  }
`;
export const SaleConfirmedStyle = styled.div`
  width: 100%;
  height: 395px;
  padding: 100px;
  font-size: 25px;
  color: ${Colores.colorUno};
  background-color: #afd699;
`;
