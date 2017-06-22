import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import {store, history} from './store';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/store';
import App from './containers';
import Home from './components/Home';
import Stuff from './components/Stuff';
import Contact from './components/Contact';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

const history = createHistory();
const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState, history);

render(
    <Provider store={store}>
      <Router history={history}>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </App>
      </Router>
    </Provider>,
    document.getElementById('root')
);
