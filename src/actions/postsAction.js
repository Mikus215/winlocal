import * as api from '../api/index.js'
import { ADD_POST, DELETE_POST } from '../constants/postsConstants'

export const addPost = ( id, formData, unique_id ) => async ( dispatch ) => {

    try {
        const { data } = await api.sendPost(id, formData.title, formData.description)

        dispatch({
            type: ADD_POST,
            payload: {
                data,
                postId: unique_id
            }
        }) 
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = ( userId, postId ) => async ( dispatch ) => {

    dispatch({
        type: DELETE_POST,
        payload: {
            userId,
            postId
        }
    })

    try {
        await api.deletePost(postId)
    } catch (error) {
        console.log(error)
    }
}