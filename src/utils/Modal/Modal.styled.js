import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: hsla(0,0%,60.8%,1);
  padding: 50px;
  z-index: 1000;
  max-width: 300px;
  @media(min-width: 576px){
    max-width: 500px;
  }
`

export const OverlayStyles = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .7);
    z-index: 1000;    
`