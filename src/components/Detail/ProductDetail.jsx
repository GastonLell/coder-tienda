import { useState, useEffect } from "react";
import { DetailStyle } from "./DetailStyle";
import CountContainer from "../global/Count/CountContainer";
import AddCartContainer from "../global/AddCart/AddCartContainer";
import { BsCreditCard } from "react-icons/bs";
import { SiVisa } from "react-icons/si";
import { RiMastercardLine } from "react-icons/ri";
import { BiCheckShield } from "react-icons/bi";

const ProductDetail = ({ producto, handleRedirect }) => {
  const [count, setCount] = useState(1);

  return (
    <DetailStyle>
      <div className="slide-img">
        <img src="https://placehold.it/400x400" alt="detalle-producto" />
      </div>
      <div className="detalle-producto">
        <h2>{producto.data.nombre}</h2>
        <h3>${producto.data.precio}</h3>
        <h6>{!!producto.data.stock ? "Stock disponible" : "No hay stock"}</h6>
        <div className="info-compra">
          <div>
            <BsCreditCard />
          </div>
          <div>
            <h5>Pagá en hasta 12 cuotas</h5>
            <div className="entidades">
              <SiVisa />
              <RiMastercardLine />
            </div>
          </div>
        </div>
        <div className="info-compra">
          <div>
            <BiCheckShield />
          </div>
          <h5>
            Compra Protegida{" "}
            <i>recibi el producto que esperabas o te devolvemos tu dinero</i>
          </h5>
        </div>
        <CountContainer
          max={producto.data.stock}
          count={count}
          addCount={() => setCount(count + 1)}
          substCount={() => setCount(count - 1)}
        />
        <AddCartContainer
          producto={producto}
          handleRedirect={handleRedirect}
          count={count}
        />
      </div>
    </DetailStyle>
  );
};
export default ProductDetail;

//esto iria en setCount
// producto !== {} ? producto.amount : 1
/*   useEffect(() => {
    setCount(item.amount);
  }, [item]); */
