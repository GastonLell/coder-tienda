import ItemListContainer from "../../global/ItemListContainer/ItemListContainer";

import { useParams } from "react-router-dom";

const Category = () => {
  const { categoria } = useParams();

  return (
    <>
      <ItemListContainer categoria={categoria} />
    </>
  );
};
export default Category;
