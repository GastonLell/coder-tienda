import React from 'react'
import {ModalStyled} from './StyledModal'

const Modal = ({children}) => {
    
    return(
        <ModalStyled>
            {children}
        </ModalStyled>
    )
}
export default Modal;