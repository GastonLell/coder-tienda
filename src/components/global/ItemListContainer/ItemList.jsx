import React, { useState } from 'react';
import {Item, Contador} from './ItemListStyle';

const ItemList = ({producto, precio, descripcion, imagenProducto}) => {
    const [cont, setCont] = useState(0);

    const subst = () =>  cont !== 0 ? setCont(cont - 1) : alert('No puede comporar -1 producto');

    const add = () => setCont(cont + 1);
    return (
        <Item>
            <img src={imagenProducto || "https://placehold.it/200x310" } alt="imagen producto"/>
            <div className="info">
                <h2 className="detalle-producto" >${precio}</h2>
                <h3 className="detalle-producto" >{producto}</h3>
                <h5 className="detalle-producto" >{descripcion}</h5>
            </div>
            <Contador>
                <button onClick={subst}>-</button>
                <span> {cont} </span>
                <button onClick={add}>+</button>
            </Contador>
        </Item>
    )
}

export default ItemList;