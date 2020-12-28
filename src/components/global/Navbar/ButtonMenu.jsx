import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {BtnMenu} from './Style'

const ButtonMenu = ({openMenu, openClosedMenu}) => {

    return (
        <>
        {
            !openMenu ? 
                <BtnMenu onClick={openClosedMenu} >
                    <GiHamburgerMenu/>
                </BtnMenu> :
                <BtnMenu onClick={openClosedMenu} >
                    <AiOutlineCloseCircle/>
                </BtnMenu>  
        }
        </>
    )

}
export default ButtonMenu;