import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        console.log('inside Home component');
        return (
            <div className="Home">
                Hi
            </div>
        );
    }
}

export default Home;
