import {DetailStyle} from './DetailStyle';
import CountContainer from '../global/CountAndCart/CountContainer';
import {BsCreditCard} from 'react-icons/bs';
import {SiVisa} from 'react-icons/si';
import {RiMastercardLine} from 'react-icons/ri';

const ProductDetail = () => {
    return (
        <DetailStyle>
            <div className="slide-img">
                <img src="https://placehold.it/400x400" alt=""/>
            </div>
            <div className="detalle-producto">
                <h2>Ukelele Soprano Bambo Rojo 
                    Con funda
                    Pua Regalo
                </h2>
                <h3>$3140</h3>
                <h6>Stock disponible</h6>
                <div className="credit-card">
                    <div>
                        <BsCreditCard/> 
                    </div>
                    <div>
                        <h5>Pagá en hasta 12 cuotas</h5>
                        <div className="entidades">
                            <SiVisa/>
                            <RiMastercardLine/> 
                        </div>
                    </div> 
                </div>
                
                <CountContainer/>{/* pasar stock como props */}
            </div>
        </DetailStyle>
    )
}
export default ProductDetail;