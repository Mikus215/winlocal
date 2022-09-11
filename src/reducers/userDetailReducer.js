import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_ERROR } from '../constants/usersConstants'

const initialUserState = {
    loading: false,
    data: {},
    error: null
}

export const userDetailReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {...state, loading: true}
        case GET_USER_SUCCESS:
            return {...state, data: action.payload, loading: false}
        case GET_USER_ERROR:
            return {data: {}, loading: false, error: action.payload}
        default:
            return state
    }
}