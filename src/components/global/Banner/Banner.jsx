import { BannerStyle } from "./Style";
import { useState } from "react";
const Banner = ({ bannerBoolean }) => {
  const [slide, setSlide] = useState(bannerBoolean);

  return (
    <>
      <BannerStyle>
        {!slide ? (
          <div id="slide-uno" className="slide-banner">
            <h2>
              <span className="spanUno">Todos los sonidos</span> <br />
              <span className="spanDos">que estas buscando</span> <br />
              <span className="spanTres">en un solo lugar!</span>
            </h2>
          </div>
        ) : (
          <div id="slide-dos" className="slide-banner">
            <h2>
              <span className="spanDos">Compre desde casa</span> <br />
              <span className="spanTres">Rápido... Facil...</span> <br />
              <span className="spanUno"> Y Seguro</span>
            </h2>
          </div>
        )}
      </BannerStyle>
    </>
  );
};
export default Banner;
