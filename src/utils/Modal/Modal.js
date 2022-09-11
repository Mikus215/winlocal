import React from 'react'
import ReactDom from 'react-dom'
import { ModalStyle, OverlayStyles } from './Modal.styled';

const Modal = ({ open, children,  }) => {
    if (!open) return null

    return ReactDom.createPortal(
      <>
        <OverlayStyles />
        <ModalStyle>
            { children }
        </ModalStyle>
      </>,
      document.getElementById('modal')
    )
}
export default Modal;