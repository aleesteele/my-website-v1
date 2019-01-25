import React, {Component} from 'react';
import {Link} from 'react-router';
import Portfolio from '../Portfolio/Portfolio';
import ScrollableAnchor from 'react-scrollable-anchor'

import './Home.css';

class Home extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        console.log('inside Home component');
        return (
            <div className="Home">
                <h1 className="Home-main-text">
                  Hello, world.<br/>
                  I'm redoing this little corner of the internet.<br/>
                  Check back soon. :)
                </h1>
                <div className="App-sidebar-nav-div">
                  <ol>
                      <li className="sidebar-icon"><a class="icon-github social-button color" href="http://github.com/aleesteele"></a></li>
                      <li className="sidebar-icon"><a class="icon-twitter social-button color" href="http://twitter.com/anneleesteele"></a></li>
                      <li className="sidebar-icon"><a class="icon-instagram social-button color" href="http://instagram.com/mmntsbyanne"></a></li>
                      <li className="sidebar-icon"><a class="icon-linkedin social-button color" href="http://linkedin.com/in/anneleesteele"></a></li>
                  </ol>
                </div>
            </div>
        );
    }
}

export default Home;
