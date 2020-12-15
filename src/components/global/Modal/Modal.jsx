import React from 'react';
import {ModalStyled} from './StyledModal';

const Modal = ({children, ClassStyle}) => {
    
    return(
        <ModalStyled className={ClassStyle}>
            {children}
        </ModalStyled>
    )
}
export default Modal;