import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { userDetailReducer } from './userDetailReducer'
import { postsReducer } from "./postsReducer";
import { commentsReducer } from "./commentsReducer";

export const reducers = combineReducers({
    users: usersReducer,
    user: userDetailReducer,
    posts: postsReducer,
    comments: commentsReducer
})