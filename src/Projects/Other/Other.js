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
                <img src="/projects/dance-marathon.png" className="DanceMarathon-photo hover" alt="CUDM"/><br/>
                <p className="Bhutan-text">
                    "CUDM is an annual 28-hour dance marathon benefiting the Elizabeth Glaser Pediatric AIDS Foundation. It is dedicated to raising money for the Foundation, but also to raising awareness about HIV/AIDS and the Foundation's work through a dynamic and culturally diverse celebration of life."
                    <br/><br/>
                    I designed gear and promotional material/media for the organization. I also represented the CU campus at the annual Elizabeth Glaser Pediatric AIDS Foundation (EGPAF) Student Conference in Washington D.C. during the summer of 2012, where I advocated on Capitol Hill for Governor Andrew Cuomo’s support of EGPAF and CUDM.
                </p>
                <img src="/projects/other-design.png" className="Other-photo hover" alt="other-design"/><br/>
                <img src="/projects/dance-marathon2.gif" className="DanceMarathon-photo hover" alt="CUDM"/><br/>
                <p>
                    I also designed content for different clubs at CU.
                </p>
                <a href="https://www.youtube.com/watch?v=LMiI4dLdook"><img src="/projects/wgtn-lux.gif" className="Other-photo hover" alt="wgtn-lux"/></a><br/>
                <p>
                    <a href="https://www.lux.org.nz/" className="Other-link link anim-middleout">I was a Production Assistant for the technology-arts festival, WGTN LUX in Wellington, New Zealand.<br/> I also made a promotional video, which is linked in the gif above.</a>
                </p>
            </div>
        );
    }
}

export default Other;
