import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from 'routes';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware   from 'lib/promiseMiddleware';
import {Provider} from 'react-redux';
import * as reducers from 'reducers';
import {fromJS} from 'immutable';

const history = createBrowserHistory();

let initialState = window.__INITIAL_STATE__;

// Transform into Immutable.js collections,
// but leave top level keys untouched for Redux
Object.keys(initialState).forEach(key => {
    initialState[key] = fromJS(initialState[key]);
});

const reducer = combineReducers(reducers);
const store = applyMiddleware(promiseMiddleware)(createStore)(reducer, initialState);

render(
    <Provider store={store}>
        <Router children={routes} history={history} />
    </Provider>,
    document.getElementById('react-view')
);