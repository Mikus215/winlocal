import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { primaryColor } from "../../utils/StylesVariables";

export const Card = styled.div`
    width: 300px;
    height: 100%;
    background-color: rgb(40, 40, 40);
    display: flex;
    align-content: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem;
`

export const Avatar = styled.img`
    width: 100px;
    align-self: center;
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 1.5rem;
    color: ${primaryColor};
`

export const StyledFontAwesomeContainer = styled.p`
    display: flex;
    align-content: center;
`

export const StyledSpan = styled.span`
    margin-left: 1rem;
`

export const HighOrderName = styled.p`
    font-size: 1.6rem;
`