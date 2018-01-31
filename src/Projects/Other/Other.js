import React, {Component} from 'react';
import {Link} from 'react-router';
import './Other.css';

class Other extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        console.log('inside Other component');
        return (
            <div className="Other">
                <img src="/projects/climbing.jpg" className="Other-photo" alt="NMA-Mountaineering"/><br/>
                <p>
                    Climbing in the Himalayas with the Nepal Mountaineering Association.<br/>
                </p>
                <img src="/projects/other-design.png" className="Other-photo" alt="other-design"/><br/>
                <p>
                    I designed content for different clubs at CU.
                </p>
                <a href="https://www.youtube.com/watch?v=LMiI4dLdook"><img src="/projects/wgtn-lux.gif" className="Other-photo" alt="wgtn-lux"/></a><br/>
                <p>
                    <a href="https://www.lux.org.nz/" className="Other-link">I was a Production Assistant for the technology-arts festival, WGTN LUX in Wellington, New Zealand.<br/> I also made a promotional video, which is linked in the gif above.</a>
                </p>
            </div>
        );
    }
}

export default Other;
