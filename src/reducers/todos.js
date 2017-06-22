import * as types from '../constants/ActionTypes'
import {Map, List} from 'immutable';
import { handleActions } from 'redux-actions';

let initialState = Map({
        items: List([])
    });

export default handleActions({
        [types.ADD_TODO]: {
            next(state,action){
                return state.update('items', value => value.push({
                    key: action.payload.id,
                    id: action.payload.id,
                    text: action.payload.text
                }));
            },
            throw(state,action){
                console.log(`ERROR[${new Date().toLocaleString()}] REDUCER:${types.ADD_TODO}, MESSAGE: ${action.payload.message}`);
                return state;
            }
        },
        [types.QUERY_TODO]: {
            next(state,action){
                let names = [];
                action.payload.data.rows.forEach((al)=>{
                    names.push({key:al.id,id:al.id,text:al.name});
                });
                return state.update('items', value => value.concat(state.get('items').concat(names)));
            },
            throw(state,action){
                return state;
            }
        },
        [types.DEL_TODO]: {
            next(state,action){
                let index = state.get('items').findIndex(function(item) {
                    return item.id === action.payload.id;
                });
                return state.update('items', value => value.delete(index));
            },
            throw(state,action){
                console.log(`ERROR[${new Date().toLocaleString()}] REDUCER:${types.ADD_TODO}, MESSAGE: ${action.payload.message}`);
                return state;
            }
        }
    },
    initialState
)

// export default function todos(state = initialState, action) {
//   switch (action.type) {
//       case ADD_TODO:
//           return state.update('items', value => value.push({key:new Date().getTime(),text:action.payload.text}));
//     default:
//       return state
//   }
// }
//