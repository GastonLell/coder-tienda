import {DetailStyle} from './DetailStyle';
import CountContainer from '../global/CountAndCart/CountContainer';
import {BsCreditCard} from 'react-icons/bs';
import {SiVisa} from 'react-icons/si';
import {RiMastercardLine} from 'react-icons/ri';
import {BiCheckShield} from 'react-icons/bi';


const ProductDetail = ({item, handleRedirect}) => {
    return (
        <DetailStyle>
            <div className="slide-img">
                <img src="https://placehold.it/400x400" alt="detalle-producto"/>
            </div>
            <div className="detalle-producto">
                <h2>{item.nombreProducto}</h2>
                <h3>${item.precioProducto}</h3>
                <h6>{!!item.stock ? 'Stock disponible' : 'No hay stock'}</h6>
                <div className="info-compra">
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
                <div className="info-compra">
                    <div>
                        <BiCheckShield/>
                    </div>
                    <h5>Compra Protegida <i>recibi el producto que esperabas o te devolvemos tu dinero</i></h5>
                </div> 
                
                <CountContainer 
                stock={item.stock}
                handleRedirect={handleRedirect}
                />
            </div>
        </DetailStyle>
    )
}
export default ProductDetail;