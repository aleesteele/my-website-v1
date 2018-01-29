import React, {Component} from 'react';
import {Link} from 'react-router';
import './Sidebar.css';

class Sidebar extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        console.log('inside Sidebar component');
        return (
            <div className="Sidebar">
                <div className="Sidebar-photo-div">
                    <img src="my-photo.png" className="Sidebar-photo" alt="my-photo"/>
                </div>
                <div className="Sidebar-name-div">
                    <h1 className="App-sidebar-name">Anne Lee Steele</h1>
                </div>
                <div className="App-sidebar-nav">
                    <div className="App-sidebar-nav-div">
                        <Link to="/" className="App-nav-link">Home</Link>
                    </div>
                    {/* <div className="App-sidebar-nav-div">
                        <Link to="/portfolio" className="App-nav-link">Portfolio</Link>
                    </div> */}
                    <div className="App-sidebar-nav-div">
                        <Link to="/about" className="App-nav-link">About</Link>
                    </div>
                    <div className="App-sidebar-nav-div">
                        <Link to="/contact" className="App-nav-link">Contact</Link>
                    </div>
                    <div className="App-sidebar-nav-div">
                        <a href="https://github.com/aleesteele/"><img src="/social-media/github.png" className="sidebar-icon" alt="github"/></a>
                        <a href="https://www.linkedin.com/in/anneleesteele"><img src="/social-media/linkedin.png" className="sidebar-icon" alt="linkedin"/></a>
                        <a href="https://twitter.com/a_lee_steele"><img src="/social-media/twitter.png" className="sidebar-icon" alt="twitter"/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
