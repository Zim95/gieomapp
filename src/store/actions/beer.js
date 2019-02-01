import * as actionTypes from './actionTypes';
import axios from '../../axios-beer';

export const getBeerStart = () => {
    return {
        type: actionTypes.GET_BEER_START
    };
}

export const getBeerSuccess = (data) => {
    return {
        type: actionTypes.GET_BEER_SUCCESS,
        data:data
    };
}

export const getBeerFailed = (error) => {
    return {
        type: actionTypes.GET_BEER_FAILED,
        error: error
    };
}

export const getBeer = () => {
    return dispatch => {
        dispatch(getBeerStart());
        axios.get('/beer.json')
        .then(response =>{
            dispatch(getBeerSuccess(response.data));
        })
        .catch(err=>{
            dispatch(getBeerFailed(err));
        })
    }
    
}