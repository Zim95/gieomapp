import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('beer reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            data: null,
            loading: false,
            error:null,
            title: "BEER APP",
            sortParam: "abv",
            sortTechnique: "asc"
        });
    });

});
