import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ContainerPostDetails, StyledFontAwesomeIconArrowLeft, TitleName, TitlePost, DescriptionPost } from "./PostDetails.styled";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons"
import { LoadingSpinner } from "../../utils/LoadingSpinner";
import { Link } from "react-router-dom";
import Comments from "../../components/Comments/Comments";

const PostDetails = () => {

    const { id: userId, post_id: postId } = useParams()

    const user = useSelector(state => state.user)
    const posts = useSelector(state => state.posts)

    const { title, description } = posts.posts.filter(el => el.id === userId)[0].userPosts.filter(el => el.postId === postId)[0]

    return ( 
        <ContainerPostDetails>

            <Link to={`/user/${userId}`}><StyledFontAwesomeIconArrowLeft icon={ faLongArrowAltLeft }/></Link>

                { user.loading && <LoadingSpinner /> }

                    { user.data !== "" && user.error === null ?

                        <TitleName>{user.data.name}</TitleName>
                        :
                        <p>Something gone wrong...</p>
                    }
                    <TitlePost>Title: { title }</TitlePost>
                    <DescriptionPost>Description: { description } </DescriptionPost>
                    <Comments />
        </ContainerPostDetails>
     );
}
 
export default PostDetails;