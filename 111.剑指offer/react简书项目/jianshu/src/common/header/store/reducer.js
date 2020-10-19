import * as constans from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: [],
});
export default (state = defaultState, action) => {
    switch(action.type) {
        case constans.SEARCH_FOCUS:
            return state.set('focused', true);
        case constans.SEARCH_BLUR:
            return state.set('focused', false);
        case constans.CHANGE_LIST:
            return state.set('list', action.data);
        default:
            return state;
    }
}