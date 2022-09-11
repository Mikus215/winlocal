import { GET_COMMENTS } from "../constants/commentsConstants";

export const commentsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return [...action.payload]
        default:
            return state
    }
}