import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { primaryColor } from "../../../utils/StylesVariables";

export const PostContainer = styled.div`
    display: flex;
    border: 5px solid ${primaryColor};
    padding: 1rem;
    width: 80%;
    margin: 1rem;
`

export const TitlePost = styled.p`
    font-size: 1.4rem;
    font-weight: bold;
    color: white;
    margin: .1rem 0;
`

export const DescriptionPost = styled.p`
    font-size: 1.2rem;
    margin: .3rem 0 2rem 0;
` 

export const DeleteIcon = styled(FontAwesomeIcon)`
    font-size: 2rem;
    color: tomato;
    margin-right: 1rem;
    cursor: pointer;
`

export const StyledLink = styled(Link)`
    font-weight: bold;
    color: white;
    margin-top: 2rem;
`