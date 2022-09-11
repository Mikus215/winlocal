import { Header, CommentContainer, Descritpion, Title } from "./Comment.styled";

const Comment = ({ mail, name, body }) => {
    return ( 
        <CommentContainer>
            <Header><span><Title>Name:</Title> { name }</span><span><Title>E-mail:</Title> { mail }</span></Header>
            <Descritpion>
                <Title>Comment: </Title>
                { body }
            </Descritpion>
        </CommentContainer>
     );
}
 
export default Comment;