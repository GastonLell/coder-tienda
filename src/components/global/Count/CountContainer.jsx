import { useContext, useState, useEffect } from "react";
import Count from "./Count";
import { Store } from "../../../store/CartContext";
// componente con la logica de Count
const CountContainer = ({
  max,
  count,
  addCount,
  substCount,
}) => {
  return (
    <Count
      handleClickSubst={substCount}
      handleClickAdd={addCount}
      count={count}
      max={max}
    />
  );
};

export default CountContainer;
