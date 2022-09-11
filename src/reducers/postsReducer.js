import { ADD_POST } from "../constants/postsConstants"
import { DELETE_POST } from "../constants/postsConstants"

const initialPostState = {
    posts: []
}

export const postsReducer = (state = initialPostState, action) => {
    switch (action.type) {
        case ADD_POST:
            const findExistingUserPosts = state.posts.findIndex(post => post.id === action.payload.data.userId)
            let existingPost = state.posts[findExistingUserPosts]

            if (existingPost) {
                let updatedPosts = state.posts
                const newPost = existingPost

                newPost.userPosts.push({
                    title: action.payload.data.title,
                    description: action.payload.data.body,
                    postId: action.payload.postId
                })

                updatedPosts[findExistingUserPosts] = newPost
                return { posts: updatedPosts }
            } else {
                const newPost = {
                    id: action.payload.data.userId,
                    userPosts: [{
                        title: action.payload.data.title,
                        description: action.payload.data.body,
                        postId: action.payload.postId
                    }]
                }

                const newPosts = [...state.posts, newPost]

                return { posts: newPosts }
            }
        case DELETE_POST:
            const userIndex = state.posts.findIndex(user => user.id === action.payload.userId)
            let updatedPosts = state.posts
            
            let correctPosts = {
                id: action.payload.userId,
                userPosts: state.posts[userIndex].userPosts.filter(post => post.postId !== action.payload.postId)
            }

            updatedPosts[userIndex].userPosts = []
            updatedPosts = updatedPosts[userIndex].userPosts.concat(correctPosts)

            return { posts: updatedPosts }
        default:
            return state
    }
}