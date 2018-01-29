import React, {Component} from 'react';
import {Link} from 'react-router';
import Sidebar from './Sidebar/Sidebar'
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
        const children = React.cloneElement(this.props.children, {})
        return (
            <div className="App">
                {/* <header className="App-header">
                    <div className="App-nav">
                        <div className="App-nav-div">
                            <Link to="/" className="App-nav-link">Home</Link>
                        </div>
                        <div className="App-nav-div">
                            <Link to="/portfolio" className="App-nav-link">Portfolio</Link>
                        </div>
                        <div className="App-nav-div">
                            <Link to="/about" className="App-nav-link">About</Link>
                        </div>
                    </div>
                </header> */}
                <header className="App-sidebar">
                    <Sidebar />
                </header>
                <div className="App-content">
                    { children }
                </div>
                {/* <footer className="App-footer">
                    <div className="App-foot-div">
                        <a href="" className="App-footer-link">Facebook</a>
                    </div>
                    <div className="App-foot-div">
                        <a href="" className="App-footer-link">Instagram</a>
                    </div>
                    <div className="App-foot-div">
                        <a href="" className="App-footer-link">Linkedin</a>
                    </div>
                    <div className="App-foot-div">
                        <a href="" className="App-footer-link">Email</a>
                    </div>
                </footer> */}
            </div>
        );
    }
}

export default App;
