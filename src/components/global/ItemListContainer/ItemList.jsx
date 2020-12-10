import React from 'react';
import {Item} from './ItemListStyle';

const ItemList = ({producto, precio, descripcion, imagenProducto}) => {
    return (
        <Item>
            <img src={imagenProducto || "https://placehold.it/200x215" } alt="imagen producto"/>
            <div className="info">
                <h2 className="detalle-producto" >${precio}</h2>
                <h3 className="detalle-producto" >{producto}</h3>
                <h6 className="detalle-producto" >{descripcion}</h6>
            </div>
        </Item>
    )
}

export default ItemList;