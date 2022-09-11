import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { primaryColor } from "../../utils/StylesVariables";

export const ContainerUserDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleName = styled.h1`
    width: 100%;
    text-align: center;
    align-self: center;
    font-size: 1.6rem;
    @media(min-width: 576px){
        font-size: 2rem;
    }
`

export const StyledFontAwesomeIconArrowLeft = styled(FontAwesomeIcon)`
    font-size: 4rem;
    cursor: pointer;
    color: ${primaryColor};
    margin: 2rem;
`

export const ContainerUserDetailsTop = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1440px;
`