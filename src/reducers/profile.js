/* eslint-disable import/no-anonymous-default-export */
import { PROFILES_LOADED, PROFILES_ERROR, PROFILE_ERROR, GET_PROFILE, SET_PROFILE, PROFILE_LOADING, TRANSFER_SUCCESS, TRANSFER_ERROR } from "../actions/types"

const initialState = {
    loading: true,
    profiles: [],
    profile: null,
    error:{},
}

export default function (state = initialState, action){
    const { type, payload } = action
    switch(type){
        case PROFILES_LOADED:
            return {
                ...state,
                loading: false,
                profiles: payload
            }
        case PROFILE_LOADING:
        case GET_PROFILE:
            return {
                ...state,
                loading: true
            }
        case SET_PROFILE:
            return {
                ...state,
                loading: false,
                profile: payload
            }
        case TRANSFER_SUCCESS:
            return{
                ...state,
            }
        case TRANSFER_ERROR:
        case PROFILES_ERROR:
        case PROFILE_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}