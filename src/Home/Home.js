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

                    I recently graduated from Columbia University, where I <Link to="/academics" className="Home-link">avidly studied people</Link>, <Link to="#" className="Home-link">designed gear for a 24-hour dance marathon</Link>, <Link to="#" className="Home-link">shot a lot of video</Link>, and <Link to="#" className="Home-link">interviewed foresters in the last Himalayan Kingdom</Link>, amongst <Link to="#" className="Home-link">other things</Link>. I <Link to="#" className="Home-link">most recently attended a full-stack programming bootcamp</Link>.


                </h1>
            </div>
        );
    }
}

export default Home;
