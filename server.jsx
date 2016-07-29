import express from 'express';
import JSData from 'js-data';
import DSRethinkDBAdapter from 'js-data-rethinkdb';
import React from 'react';
import {renderToString} from 'react-dom/server'
import {RoutingContext, match} from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from './shared/routes'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware   from './shared/lib/promiseMiddleware';
import {Provider} from 'react-redux';
import * as reducers from './shared/reducers';
import fetchComponentData from './shared/lib/fetchComponentData';
import RetroItemController from './server/controllers/RetroItemController'

const app = express();

const adapter = new DSRethinkDBAdapter({
  host: 'localhost',
  db: 'test'
});

const store = new JSData.DS();
store.registerAdapter('rethinkdb', adapter, { default: true });

// var Item = store.defineResource('retroItem');

// adapter.create(Item, { id: '001', type: 'good', description: 'This is a test' }).then( item => {
//   console.log(item);
// });

app.use((req, res) => {
    console.log(req.url);
    const location = createLocation(req.url);
    
    const reducer = combineReducers(reducers);
    const store = applyMiddleware(promiseMiddleware)(createStore)(reducer);
    
    if(location.pathname === '/retroItem') {
        new RetroItemController().createRetroItem(req, res);
    }
    
    match({ routes, location }, (err, redirectLocation, renderProps) => {
        if (err) {
            console.error(err);
            return res.status(500).end('Internal server error');
        }
        
        if (!renderProps) {
            return res.status(404).end('Not found.');
        }
        
        function renderView() {
            const InitialComponent = (
                <Provider store={store}>
                    <RoutingContext {...renderProps} />
                </Provider>
            );
            
            const initialState = store.getState();
            const componentHTML = renderToString(InitialComponent);

            const HTML = `
                <!DOCTYPE html>
                <html>
                    <head>
                        <meta charset="utf-8">
                        <title>Isomorphic Redux Demo</title>
                        
                        <link rel="stylesheet" href="https://bootswatch.com/yeti/bootstrap.min.css">
                        
                        <script type="application/javascript">
                            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
                        </script>
                    </head>
                    <body>
                        <div id="react-view">${componentHTML}</div>
                        <script type="application/javascript" src="/bundle.js"></script>
                    </body>
                </html>    
            `;
            
            return HTML;
        };
        
        fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
            .then(renderView)
            .then(html => res.end(html))
            .catch(err => res.status(500).end(err.stack));
    });
});

export default app;