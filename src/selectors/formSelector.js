import {createSelector} from 'reselect';

export const formDataSelector = createSelector(
    state =>state.get('formDataReducer'),
    formDetail=> {
        return formDetail;
    });