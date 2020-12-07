import {Navbar} from './Styled'
import Menu from './Menu'
import CartWidget from './CartWidget';
import Modal from '../Modal/Modal';
import { useState } from 'react';


const NavBar = () => {
    const [openCart, setOpenCart] = useState(false);
    const openClosedCart = () => {
        setOpenCart(!openCart)
    }

    return (
        <Navbar>
            <h1>--Crespo Musica--</h1> 
            <Menu/>      
            <CartWidget  openClosedCart={openClosedCart} />
            {
                openCart && 
                <Modal >
                    <ul>
                        <li>Guitarra</li>
                        <li>Bajo</li>
                        <li>Afinador</li>
                    </ul>
                </Modal>
            }

        </Navbar>
    )

}
export default NavBar;