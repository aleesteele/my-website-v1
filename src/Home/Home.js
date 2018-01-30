import React, {Component} from 'react';
import {Link} from 'react-router';
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
                    Hi, I'm Anne.<br/><br/>
                    I graduated from Columbia University in 2017, where I <Link to="/about" className="Home-link">avidly studied people</Link>, <Link to="/cudm" className="Home-link">designed gear for a 24-hour dance marathon</Link>, <Link to="/video" className="Home-link">shot a lot of video</Link>, and <Link to="/bhutan" className="Home-link">interviewed foresters in the last Himalayan Kingdom</Link>, amongst <Link to="/other" className="Home-link">other things</Link>.
                    <br/><br/>
                    Most recently, I <Link to="/spiced" className="Home-link">attended a full-stack programming bootcamp in Berlin</Link>, which is really starting to <Link to="/recent" className="Home-link">tie a lot of these experiences and skills together</Link>.
                    <br/><br/>
                    This website is a work-in-progress (as am I), but feel free to check out my <Link to="/about" className="Home-link">resume</Link>, <a href="https://www.linkedin.com/in/anneleesteele" className="Home-link">LinkedIn</a>, or <a href="https://github.com/aleesteele/" className="Home-link">Github</a> for more about me.


                </h1>
            </div>
        );
    }
}

export default Home;
