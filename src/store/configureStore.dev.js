
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { logger } from '../middleware'
import rootReducer from '../reducers'
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

// const nextReducer = require('../reducers')
const store = (function configureStore(initialState) {
    const create = window.devToolsExtension
        ? window.devToolsExtension()(createStore)
        : createStore

    const createStoreWithMiddleware = applyMiddleware(
        thunkMiddleware,
        logger,
    )(create)

    const localStore = createStoreWithMiddleware(rootReducer, initialState)

    // if (module.hot) {
    //     module.hot.accept('../reducers', () => {
    //         store.replaceReducer(nextReducer)
    //     })
    // }

    return localStore
})()

// const rootReducer = combineReducers({
//     app: appReducer,
//     routing: routerReducer
// })
// const initialState = Immutable.Map();
//
// const store = createStore(rootReducer, initialState,
//     Enable redux dev tools
    // window.devToolsExtension && window.devToolsExtension()
// );

const createSelectLocationState = () => {
    let prevRoutingState, prevRoutingStateJS;
    return (state) => {
        const routingState = state.get('routing'); // or state.routing
        if ((!routingState || !routingState.get('locationBeforeTransitions') ||
            routingState.get('locationBeforeTransitions').get('action') === 'PUSH') &&
            (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState)) {
            prevRoutingState = routingState;
            prevRoutingStateJS = routingState.toJS();
        }
        return prevRoutingStateJS;
    };
};

const history = syncHistoryWithStore(hashHistory, store, {
    selectLocationState: createSelectLocationState()
});

export { store, history }
