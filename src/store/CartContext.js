import {createContext, useState} from 'react';

export const Store = createContext();

const CartContext = ({children}) => {
    const [data, setData] = useState({
        items: [],
        cantidad: 0,
        countGlobal: 0,
        cantidadItem: [],
        totalVenta: NaN
    })
    return(
        <>
            <Store.Provider value={[data, setData]}>
                {children}
            </Store.Provider>
        </>
    )
}

export default CartContext;
