import { FooterStyle } from "./FooterStyle";
import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <FooterStyle>
      <h3>Siguenos tambien en nuestras redes</h3>

      <div className="networking-icons">
        <a target="_blank" href="https://google.com">
          <IoLogoTwitter />
        </a>
        <a target="_blank" href="https://google.com">
          <IoLogoFacebook />
        </a>
        <a target="_blank" href="https://google.com">
          <IoLogoInstagram />
        </a>
      </div>

      <div className="info">
        <h4>Desarrollado por Gastón Lell en curso de CoderHouse</h4>
      </div>
    </FooterStyle>
  );
};
export default Footer;
