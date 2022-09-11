import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
`
export const StyledLabel = styled.label`
    font-weight: bold;
    font-size: 1.2rem;
    margin: .5rem 0;
`

export const ModalButton = styled.button`
    background-color: ${props => props.isCancel ? "red" : "green"};
    color: white;
    padding: 1rem 2rem;
    font-weight: bold;
    cursor: pointer;
    border: none;
    margin: 1rem;
    border-radius: .3rem;
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`

export const StyledInput = styled.input`
    font-size: 1.2rem;
    padding: .3rem;
    width: 250px;
    @media(min-width: 576px){
        width: 400px;
    }
`

export const StyledTextarea = styled.textarea`
    font-size: 1.2rem;
    padding: .3rem;
    max-width: 250px;
    min-width: 250px;
    max-height: 350px;
    @media(min-width: 576px){
        max-width: 400px;
        min-width: 400px;
        max-height: 600px;
    }
`