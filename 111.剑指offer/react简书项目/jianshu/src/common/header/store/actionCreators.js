import * as constans from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
    type: constans.CHANGE_LIST,
    data: fromJS(data),
})

export const searchFocus = () => ({
    type: constans.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constans.SEARCH_BLUR
})



export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
}