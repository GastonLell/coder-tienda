import Count from "./Count";
import { useParams } from "react-router-dom";
const CountContainer = ({ max, count, handleClickSubst, handleClickAdd }) => {
  return (
    <Count
      handleClickSubst={handleClickSubst}
      handleClickAdd={handleClickAdd}
      count={count}
      max={max}
    />
  );
};

export default CountContainer;
