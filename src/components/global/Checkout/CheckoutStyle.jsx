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
    width: 67%;
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

export const SaleConfirmedStyle = styled.div`
  width: 100%;
  height: 395px;
  padding: 100px;
  font-size: 25px;
  color: ${Colores.colorUno};
  background-color: #afd699;
`;
