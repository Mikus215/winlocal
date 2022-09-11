import { v4 as uuid } from 'uuid';
import { useState } from "react";
import { ButtonContainer, ModalButton, StyledForm, StyledLabel, StyledInput, StyledTextarea } from "./Form.styled";
import { addPost } from '../../actions/postsAction';
import { useDispatch } from "react-redux";

const Form = ({ onClose, userId }) => {

    const unique_id = uuid();
    const dispatch = useDispatch()
    const [ formData, setFormData ] = useState({
        title: "",
        description: ""
    })

    const handleFormData = e => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleResetState = () => {
        setFormData({
            title: "",
            description: ""
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        dispatch(addPost(userId, formData, unique_id))
        onClose()
        handleResetState()
    }

    return ( 
        <StyledForm onSubmit={handleOnSubmit}>
            <StyledLabel htmlFor="title">Title:</StyledLabel>
            <StyledInput type="text" id="title" name="title" onChange={ handleFormData } required value={ formData.title } />
            <StyledLabel htmlFor="description">Description:</StyledLabel>
            <StyledTextarea name="description" id="description" onChange={ handleFormData } required value={ formData.description }></StyledTextarea>
            <ButtonContainer>
                <ModalButton onClick={onClose} isCancel> Cancel </ModalButton>
                <ModalButton type='submit'> Add </ModalButton>
            </ButtonContainer>
        </StyledForm>
     );
}
 
export default Form;