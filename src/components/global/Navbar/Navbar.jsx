import {useState} from 'react';
import {Navbar} from './Style';
import Menu from './Menu';
import ButtonMenu from './ButtonMenu';

import {Link} from 'react-router-dom';

const NavBar = () => {

    const [openCart, setOpenCart] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    
    const openClosedCart = () => {
        setOpenCart(!openCart)
    }
    const openClosedMenu = () => {
        setOpenMenu(!openMenu)
    }
    
    return (
        <Navbar>
            <Link className="link-route" to="/">
                <h1>--Crespo Musica--</h1> 
            </Link>

            <ButtonMenu openMenu={openMenu} openClosedMenu={openClosedMenu}/>

            
            <Menu openMenu={openMenu} openCart={openCart} openClosedCart={openClosedCart} /> 
            
        </Navbar>
    )

}
export default NavBar;