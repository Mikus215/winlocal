import { useState } from "react";
import { TitlePost, DescriptionPost, PostContainer, DeleteIcon, StyledLink } from "./Post.styled";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { deletePost } from "../../../actions/postsAction";
import { useDispatch } from "react-redux";

import Modal from "../../../utils/Modal/Modal";
import DeletePostBody from "../../DeletePostBody/DeletePostBody";

const Post = ({ title, description, postId, userId }) => {

    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)

    const handleDeletePost = () => dispatch(deletePost(userId, postId))

    return ( 
        <>
        <PostContainer>
                <DeleteIcon icon={faXmark} onClick={() => setIsOpen(true)}/>
                <div>
                    <TitlePost>Title: { title.substring(0, 50) }</TitlePost>
                    <DescriptionPost>Description: { description.substring(0, 50) }</DescriptionPost>
                    <StyledLink to={`/user/${userId}/${postId}`}> Click For More </StyledLink>
                </div>
        </PostContainer>
            <Modal open={isOpen} >
                <DeletePostBody onClose={() => setIsOpen(false)} onDeletePost = { handleDeletePost } />
            </Modal>
        </>
     );
}
 
export default Post;