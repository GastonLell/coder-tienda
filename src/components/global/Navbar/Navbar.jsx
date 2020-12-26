import {Navbar} from './Style'
import Menu from './Menu'
import {Link} from 'react-router-dom';
const NavBar = () => {

    return (
        <Navbar>
            <Link className="link-route" to="/">
                <h1>--Crespo Musica--</h1> 
            </Link>
            <Menu/>      
        </Navbar>
    )

}
export default NavBar;