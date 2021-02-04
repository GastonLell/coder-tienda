//componets
import CardView from "./CardView";
//style
import { CardInfoStyle } from "./CardStyle";
// images
import cardImg from "../../../assets/imagenes/paga-con-tarjeta.svg";
import homeImg from "../../../assets/imagenes/recibi-en-casa.svg";
import protectImg from "../../../assets/imagenes/compra-protegida.svg";

const CardsInfo = () => {
  return (
    <CardInfoStyle>
      <CardView
        imgCard={cardImg}
        altCard="tarjeta o ejectivo"
        title="Tarjeta o efectivo"
        detail="Con Mercado Pago, tenés cuotas sin interés con tarjeta o efectivo en puntos de pago. ¡Y siempre es seguro!"
      />

      <CardView
        imgCard={homeImg}
        altCard="Recibí tu producto en casa"
        title="Recibí tu producto"
        detail="Elegí Mercado Envíos y seguí tu compra hasta que llegue a tus manos. Tenés envíos gratis en productos seleccionados."
      />

      <CardView
        imgCard={protectImg}
        altCard="Compra protegida"
        title="Compra protegida"
        detail="Te acompañamos hasta que recibas lo que compraste. Y si no es lo que esperabas, te devolvemos el dinero."
      />
    </CardInfoStyle>
  );
};

export default CardsInfo;
