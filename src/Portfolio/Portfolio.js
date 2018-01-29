import React, {Component} from 'react';
import './Portfolio.css';

class Portfolio extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        console.log('inside Portfolio component');
        return (
            <div className="Portfolio">
                Filter by: <button>Writing</button><button>Coding</button><button>Design</button><button>Video</button><button>Photography</button>
                <div className="Portfolio-carousel">
                    Work will go here.
                </div>

            </div>
        );
    }
}

export default Portfolio;
