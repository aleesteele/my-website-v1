import React from 'react';
import axios from '../routes/axios';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { Router, Route, hashHistory, Link } from 'react-router';


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {

        return(
            <div className="main-app">
                <div className="app-header">
                </div>

                <div className="app-content">
                    { children }
                </div>

                <div className="app-footer">

                </div>
            </div>

        )
    }
}
