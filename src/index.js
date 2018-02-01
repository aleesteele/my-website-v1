import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, Redirect} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import reducer from './routes/reducers';
import App from './App/App.js';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact'
import Bhutan from './Projects/Bhutan/Bhutan';
import DanceMarathon from './Projects/Dance-Marathon/Dance-Marathon';
import Video from './Projects/Video/Video';
import SpicedAcademy from './Projects/Spiced-Academy/Spiced-Academy';
import Gene from './Projects/Gene/Gene';
import Other from './Projects/Other/Other';
// import Academics from './Academics/Academics';
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
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/gene" component={Gene}/>
                <Route path="/cudm" component={DanceMarathon}/>
                <Route path="/bhutan" component={Bhutan}/>
                <Route path="/spiced" component={SpicedAcademy}/>
                <Route path="/video" component={Video}/>
                <Route path="/other" component={Other}/>
                <Redirect from="*" to="/" />
            </Route>
        </Router>
    </Provider>
)

ReactDOM.render(
    router,
    document.getElementById('root')
);

registerServiceWorker();
