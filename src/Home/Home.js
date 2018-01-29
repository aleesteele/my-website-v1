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

                    I recently graduated from Columbia University, where I <Link to="/academics">avidly studied people</Link>, <Link to="">designed gear for a 24-hour dance marathon</Link>, <Link to="">shot a lot of video</Link>, and <Link to="">interviewed foresters in the last Himalayan Kingdom</Link>, amongst other things. I <Link to="">most recently learned how to program</Link>.


                </h1>
            </div>
        );
    }
}

export default Home;
