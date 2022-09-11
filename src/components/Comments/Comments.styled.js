import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 1rem 2rem;
    background-color: white;
    border: none;
    border-radius: .3rem;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    transition: background-color .3s, color .3s;

    &:hover{
        background-color: rgb(6,121,193);
        color: white;
    }
`