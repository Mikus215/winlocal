import { GET_COMMENTS } from "../constants/commentsConstants";
import * as api from '../api/index.js'

export const getComments = id => async ( dispatch ) => {
    try {
        const { data } = await api.fetchComments(id)

        dispatch({
            type: GET_COMMENTS,
            payload: data
        })

    } catch (error) {
        console.log(error);
    }
}