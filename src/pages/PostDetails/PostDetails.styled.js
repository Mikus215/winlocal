import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { primaryColor } from "../../utils/StylesVariables";

export const ContainerPostDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledFontAwesomeIconArrowLeft = styled(FontAwesomeIcon)`
    font-size: 4rem;
    cursor: pointer;
    color: ${primaryColor};
    margin: 2rem;
    position: absolute;
    left: 5%;
`
export const TitleName = styled.p`
    width: 100%;
    text-align: center;
    font-size: 1.6rem;
    @media(min-width: 576px){
        font-size: 2rem;
    }
`

export const TitlePost = styled.h1`
    width: 100%;
    text-align: center;
    align-self: center;
    font-size: 1.6rem;
    @media(min-width: 576px){
        font-size: 2rem;
    }
`

export const DescriptionPost = styled.p`
    width: 100%;
    text-align: center;
    align-self: center;
    font-size: 1.2rem;
    color: white;
    @media(min-width: 576px){
        font-size: 1.4rem;
    }
`