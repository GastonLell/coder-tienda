import ItemListContainer from "../../global/ItemListContainer/ItemListContainer";
import Banner from "../../global/Banner/Banner";
import CardsInfo from "../../global/CardInfo/CardsInfo";

const Home = () => {
  return (
    <>
      <Banner bannerBoolean={true} />

      <ItemListContainer />

      <Banner bannerBoolean={false} />

      <CardsInfo />
    </>
  );
};

export default Home;
