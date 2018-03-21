import React, {Component} from 'react';
import {Link} from 'react-router';
import './Sidebar.css';
import './SocialMedia.css';

class Sidebar extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        console.log('inside Sidebar component');
        return (
            <div className="Sidebar">
                <div className="Sidebar-photo-div">
                        <Link to="/"><img src="my-photo.png" className="hover Sidebar-photo" alt="my-photo"/></Link>
                </div>
                <div className="Sidebar-name-div">
                    <h1 className="App-sidebar-name">Anne Lee Steele</h1>
                </div>
                {/* <div className="Sidebar-tagline">
                    Sidebar-tagline-div
                    <p className="Sidebar-tagline">
                        Research-driven.
                        Communication-minded.
                        Multidisciplinary skills.
                    </p>
                </div> */}
                <div className="App-sidebar-nav">
                    <div className="App-sidebar-nav-div">
                        <Link to="/" className="App-nav-link link anim-middleout">Home</Link>
                    </div>
                    {/* <div className="App-sidebar-nav-div">
                        <Link to="/portfolio" className="App-nav-link link anim-middleout">Portfolio</Link>
                    </div> */}
                    <div className="App-sidebar-nav-div">
                        <Link to="/about" className="App-nav-link link anim-middleout">Resume</Link>
                    </div>
                    {/* <div className="App-sidebar-nav-div">
                        <Link to="/contact" className="App-nav-link link anim-middleout">Contact</Link>
                    </div> */}
                </div>
                    <div className="App-sidebar-nav-div">
                        <ol>
                            <li className="sidebar-icon"><a class="icon-github social-button color" href="http://github.com/aleesteele"></a></li>
                            <li className="sidebar-icon"><a class="icon-twitter social-button color" href="http://twitter.com/anneleesteele"></a></li>
                            <li className="sidebar-icon"><a class="icon-instagram social-button color" href="http://instagram.com/anneleesteele"></a></li>
                            <li className="sidebar-icon"><a class="icon-linkedin social-button color" href="http://linkedin.com/in/anneleesteele"></a></li>

                        </ol>
                    <p className="Sidebar-copyright">© ANNE LEE STEELE 2018</p>
                    </div>
            </div>
        );
    }
}

export default Sidebar;
