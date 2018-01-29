import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import reducer from './routes/reducers';
import App from './App';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Academics from './Academics/Academics';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let router;
export const store = createStore(reducer, applyMiddleware(reduxPromise));

router = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/Portfolio" component={Portfolio}/>
                <Route path="/academics" component={Academics}/>
            </Route>
        </Router>
    </Provider>
)

ReactDOM.render(
    router,
    document.getElementById('root')
);

registerServiceWorker();
