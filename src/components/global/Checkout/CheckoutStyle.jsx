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

  h3 {
    margin: 20px auto;
    font-size: 30px;
  }

  form {
    width: 40%;
    margin: 0 auto;
    background-color: #afadaf;
    padding: 20px;
    border-radius: 8px;
  }

  input,
  textarea,
  select {
    width: 100%;
    margin-bottom: 30px;
    border: none;
    border-radius: 8px;
    font-size: 20px;
    padding: 8px;
  }

  label {
    display: block;
    text-align: left;
    font-size: 20px;
    width: 100%;
    margin-bottom: 10px;
  }

  select option {
    font-size: 15px;
  }

  #cardExpirationMonth,
  #cardExpirationYear {
    width: calc((100% / 2) - 4px) !important;
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
