import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_ERROR, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_ERROR } from '../constants/usersConstants'
import * as api from '../api/index.js'

export const getUsers = () => async ( dispatch ) => {
    
    try {

        dispatch({
            type: GET_USERS_REQUEST
        })

        const { data } = await api.fetchUsers()

        dispatch({
            type: GET_USERS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_USERS_ERROR,
            payload: error.message
        })
    }
}

export const getUserDetail = ( id ) => async ( dispatch ) => {
    
    try {

        dispatch({
            type: GET_USER_REQUEST
        })

        const { data } = await api.fetchUser(id)

        dispatch({
            type: GET_USER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_USER_ERROR,
            payload: error.message
        })
    }
}