import {BannerStyle} from './Style';
import {useState} from 'react';
const Banner = () => {
    // terminar slider de banner
    const [slide, setSlide] = useState(true);


    return(
        <>
            <BannerStyle>
            <button>&#10094;</button>

                {
                    !slide ? 
                    (<div id="slide-uno" className="slide-banner">
                        <h2>
                            <span className="spanUno">Todos los sonidos</span> <br/> 
                            <span className="spanDos">que estas buscando</span> <br/>
                            <span className="spanTres">en un solo lugar!</span>
                        </h2>
                    </div>) :
                    (<div id="slide-dos" className="slide-banner">
                        <h2>
                            <span className="spanDos">Compre desde casa</span> <br/> 
                            <span className="spanTres">Rápido... Facil...</span> 
                            <span className="spanUno"> Y Seguro</span>
                        </h2>
                    </div> )
                }
            <button>&#10095;</button>

            </BannerStyle>
        </>
    )
    
}
export default Banner;