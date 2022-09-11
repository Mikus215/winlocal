import { ModalButton } from "../Form/Form.styled";
import { WarningText, ButtonContainer } from "./DeletePostBody.styled";

const DeletePostBody = ({  onClose, onDeletePost }) => {
    return ( 
        <>
            <WarningText>Are you sure you want to delete this post?</WarningText>
            <ButtonContainer>
                <ModalButton onClick={ onClose }>Cancel</ModalButton>
                <ModalButton isCancel onClick={ onDeletePost }>Remove</ModalButton>
            </ButtonContainer>
        </>
     );
}
 
export default DeletePostBody;