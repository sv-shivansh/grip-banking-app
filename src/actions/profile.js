import axios from "axios";
import { setAlert } from './alert';
import { PROFILES_LOADED, PROFILES_ERROR, GET_PROFILE, PROFILE_ERROR, PROFILE_LOADING, SET_PROFILE, TRANSFER_ERROR, TRANSFER_SUCCESS } from "./types";

export const loadProfile = () => async dispatch => {
    try{
        dispatch({type: PROFILE_LOADING})
        const res = await axios.get('/api/account')
        dispatch({
            type: PROFILES_LOADED,
            payload: res.data
        })
    }catch(error){
        const errors = error.response.data.errors;
        if(errors){
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
        }
        dispatch({
            type: PROFILES_ERROR,
            payload: { msg: error, status: error.response.status }
        })
    }
}

export const getProfileById = accountNo => async dispatch =>{
    try{
        dispatch({type: GET_PROFILE})
        const res = await axios.get(`/api/history/${accountNo}`)
        dispatch({
            type: SET_PROFILE,
            payload: res.data
        })
    }catch(error){
        const errors = error.response.data.errors;
        if(errors){
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
} 

export const transfer = ({from, to, amount}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({from, to, amount})
    try{
        const res = await axios.put('/api/transfer', body, config)
        dispatch({
            type: TRANSFER_SUCCESS,
            payload: res.data
        })
        dispatch(setAlert("Transaction Successful", 'success'))

    }catch(error){
        const errors = error.response.data.errors;
        if(errors){
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
        }
        dispatch({
            type: TRANSFER_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
        dispatch(setAlert(error.response.statusText, 'danger'))
    }

}