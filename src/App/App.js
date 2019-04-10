import React, {Component} from 'react';
import {Link} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';

import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';

import './App.css';
import './App.linkAnimations.css';
import './App.mixins.css';
import './App.textStyles.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log('app mounted');
    }
    render() {
        console.log('inside App component')
        const children = React.cloneElement(this.props.children, {})
        return (
            <div className="App">
                <div className="App-content">
                    { children }
                </div>
            </div>
        );
    }
}

export default App;
