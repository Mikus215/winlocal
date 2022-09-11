import { useState } from "react";
import { StyledButton } from "./Comments.styled";
import { getComments } from "../../actions/commentsAction";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment/Comment";

const Comments = () => {

    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments)
    const [showComments, setShowComments] = useState(false)
    const { id } = useParams()
    let displayComments

    const handleShowComments = () => {
        setShowComments(true)
        dispatch(getComments(id))
    }

    const handleHideComments = () => setShowComments(false)
    
    if(comments.length > 0) {
        displayComments = comments.map(comment => (
            <Comment key={ comment.id } mail = { comment.email } name = { comment.name } body = { comment.body }/>
        ))
    }

    return ( 
        <>
            { showComments ? <StyledButton onClick={ handleHideComments }>Hide Comments</StyledButton> : <StyledButton onClick={ handleShowComments }>Show Comments</StyledButton>}
            { showComments && displayComments }
        </>
     );
}
 
export default Comments;