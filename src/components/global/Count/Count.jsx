import { CountStyle } from "./CountStyled";

const Count = ({
  handleClickSubst,
  handleClickAdd,
  count,
  max,
}) => {
  return (
    <CountStyle>
      <button disabled={count === 1} onClick={handleClickSubst}>-</button>
      <span>{count}</span>
      <button disabled={count === max || count === 0} onClick={handleClickAdd}>+</button>
    </CountStyle>
  );
};
export default Count;
