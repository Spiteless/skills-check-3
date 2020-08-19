import axios from 'axios';

const initialState = {
    isLoggedIn: false
}

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_USER = 'GET_USER';
const UPDATE_USER = 'UPADTE_USER';
const CLEAR_USER = 'CLEAR_USER';

console.log("initialized reducer")

export function loginUser(user){
    console.log("loginUser Payload:", user)
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: initialState
    }
}

export function getUser(){
    const user = axios.get('/auth/user')
    return {
        type: GET_USER,
        payload: user
    }
}



export default function(state = initialState, action){
    const {type, payload} = action
    switch(action.type){
        case LOGIN_USER:
            console.log("hit LOGIN_USER via reducer")
            return {...state, ...payload, isLoggedIn: true}
        case LOGOUT_USER:
            return {...state, ...payload}
        case GET_USER + "_PENDING":
            return state
        case GET_USER + "_FULFILLED":
            return {...state, user: action.payload.data, isLoggedIn: true}
        case GET_USER + "_REJECTED":
            return initialState
        default:
            return initialState
    }
}