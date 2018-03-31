import React, {Component} from 'react';
import {Link} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import './Link-Animations.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log('App Component Did Mount');
    }
    render() {
        console.log('inside App component')
        const children = React.cloneElement(this.props.children, {})
        return (
            <div className="App">
                {/* <header className="App-sidebar">
                    <Sidebar />
                </header> */}
                <div className="App-content">
                    { children }
                    {/* <Portfolio/> */}
                </div>
            </div>
        );
    }
}

export default App;
