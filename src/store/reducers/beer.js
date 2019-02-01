import * as actionTypes from '../actions/actionTypes';
import {updateObject, sortData} from '../../shared/utility';

const initialState = {
    data: null,
    loading: false,
    error:null,
    title: "BEER APP",
    sortParam: "abv",
    sortTechnique: "asc"
}

const getBeerStart = (state) => {
    return updateObject(state,{loading:true});
}

const getBeerSuccess = (state,action) => {
    let tempArray = [...action.data];
    let sortedData = sortData(tempArray,state.sortParam,state.sortTechnique);
    return updateObject(state,{data:sortedData,loading:false});
}

const getBeerFailed = (state,action)=>{
    return updateObject(state,{loading:false,error:action.error});
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_BEER_START: return getBeerStart(state);
        case actionTypes.GET_BEER_SUCCESS: return getBeerSuccess(state, action);
        case actionTypes.GET_BEER_FAILED: return getBeerFailed(state, action);
        default: return state;
    }
}

export default reducer;