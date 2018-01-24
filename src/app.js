import React, {Component} from 'react';
import {Link} from 'react-router';
import logo from './logo.svg';
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
        return (
            <div className="App">
                <header className="App-header">
                    <div className="App-title">
                        <Link to="/">
                            <h1 className="App-title-name">Gene Coleman</h1>
                        </Link>
                    </div>
                    <div className="App-nav">
                        {/* <div className="App-nav-link"><Link to="/about"><h2>About</h2></Link></div>
                        <div className="App-nav-link"><Link to="/b&w"><h2>Black & White</h2></Link></div>
                        <div className="App-nav-link"><Link to="/color"><h2>Color</h2></Link></div>
                        <div className="App-nav-link"><Link to="/dearnyc"><h2>Dear New York</h2></Link></div> */}
                    </div>
                </header>
                <div className="App-content">
                    Hey.
                </div>
                <footer className="App-footer">
                    Built by <a href="http://aleesteele.com">Anne Lee Steele</a>
                </footer>
            </div>
        );
    }
}

export default App;
