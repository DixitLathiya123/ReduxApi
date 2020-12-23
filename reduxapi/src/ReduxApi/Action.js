import axios from 'axios'
export const REQUEST = "REQUEST"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"

export const request = () => {
    return {
        type: REQUEST
    }
}
export const success = (user) => {
    return {
        type: SUCCESS,
        payload: user
    }
}
export const failure = (error) => {
    return {
        type: FAILURE,
        user: [],
        payload: error
    }
}
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(request)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(Response => {
                const user = Response.data
                dispatch(success(user))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(failure(errorMsg))
            })
    }
}