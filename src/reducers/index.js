import { combineReducers } from 'redux-immutable'
import todos from './todos'
import routerReducer from './router-reducer'

const rootReducer = combineReducers({
    todos:todos,
    routing: routerReducer
});

export default rootReducer
