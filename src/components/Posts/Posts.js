import { useSelector } from "react-redux";
import Post from "./Post/Post";

const Posts = ({ userId }) => {

    const posts = useSelector(state => state.posts)

    const userPosts = posts.posts.filter(post => post.id === userId)
    let displayPosts

    if(userPosts.length !== 0){
        displayPosts = userPosts[0].userPosts.map(( post, index ) => (
            <Post { ...post } key={ index } userId = { userId }/>
        ))
    }   

    return ( 
        <>
            { userPosts.length === 0 ? <p>No posts by this user</p> : displayPosts }
        </>
     );
}
 
export default Posts;