import { CardStyle } from "./CardStyle";

const Card = ({ imgCard, altCard, title, detail }) => {
  return (
    <CardStyle>
      <img src={imgCard} alt={altCard} />
      <h2>{title}</h2>
      <h3>{detail}</h3>
    </CardStyle>
  );
};

export default Card;
