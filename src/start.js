/*------------------COMPONENTS------------------/*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as io from 'socket.io-client';
import reduxPromise from 'redux-promise';


let router;

export const store = createStore(reducer, applyMiddleware(reduxPromise));


/*/------------------ROUTER------------------/*/


ReactDOM.render(
    router,
    document.querySelector('main')
)
