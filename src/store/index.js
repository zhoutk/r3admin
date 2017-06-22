let configureStore;

if (process.env.NODE_ENV !== '__DEV__' || process.env.PLATFORM_ENV !== '__WEB__') {
    configureStore = require('./configureStore.prod');
} else {
    configureStore = require('./configureStore.dev');
}
var {store,history} = configureStore;
export {store,history};
