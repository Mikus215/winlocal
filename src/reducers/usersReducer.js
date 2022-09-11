import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_ERROR } from '../constants/usersConstants'

const initialUserState = {
    loading: false,
    data: [],
    error: null
}

export const usersReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {...state, loading: true}
        case GET_USERS_SUCCESS:
            return {...state, data: action.payload, loading: false}
        case GET_USERS_ERROR:
            return {data: [], loading: false, error: action.payload}
        default:
            return state
    }
}