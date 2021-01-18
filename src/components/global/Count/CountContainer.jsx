import Count from "./Count";

const CountContainer = ({ max, count, addCount, substCount }) => {
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
