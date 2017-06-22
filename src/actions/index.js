import * as types from '../constants/ActionTypes'
import {createAction} from 'redux-actions';
import ajax from 'axios';
import {getId} from '../utils'

// export const addTodo = createAction(types.ADD_TODO);
export const addTodo = (val) => async (dispatch, getState)=>{
    val.id = getId();
    let value = await ajax.post('http://nzsh.lifeonway.com/rs/users',{id:val.id, name:val.text});
    if(value.data.code === 200){
        dispatch(createAction(types.ADD_TODO)(val));
    }else{
        const error = new TypeError(JSON.stringify(value.data.err));
        dispatch(createAction(types.ADD_TODO)(error));
    }
};

    // createAction(types.ADD_TODO);
export const queryTodo = (val) => async (dispatch, getState)=>{
    let value = await ajax.get('http://nzsh.lifeonway.com/rs/users');
    dispatch(createAction(types.QUERY_TODO)(value));
};

export const delTodo = (val) => async (dispatch, getState)=>{
    let value = await ajax.delete('http://nzsh.lifeonway.com/rs/users/' + val.id);
    if(value.data.code === 200){
        dispatch(createAction(types.DEL_TODO)(val));
    }else{
        const error = new TypeError(JSON.stringify(value.data.err));
        dispatch(createAction(types.DEL_TODO)(error));
    }
};
