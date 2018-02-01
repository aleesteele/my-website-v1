import React, {Component} from 'react';
import {Link} from 'react-router';
import './Dance-Marathon.css';

class DanceMarathon extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        console.log('inside DanceMarathon component');
        return (
            <div className="DanceMarathon">
                <img src="/projects/dance-marathon.png" className="DanceMarathon-photo hover" alt="CUDM"/><br/>
                <p className="Bhutan-text">
                    "CUDM is an annual 28-hour dance marathon benefiting the Elizabeth Glaser Pediatric AIDS Foundation. It is dedicated to raising money for the Foundation, but also to raising awareness about HIV/AIDS and the Foundation's work through a dynamic and culturally diverse celebration of life."
                    <br/><br/>
                    I designed gear and promotional material/media for the organization. I also represented the CU campus at the annual Elizabeth Glaser Pediatric AIDS Foundation (EGPAF) Student Conference in Washington D.C. during the summer of 2012, where I advocated on Capitol Hill for Governor Andrew Cuomo’s support of EGPAF and CUDM.
                </p>
                <img src="/projects/dance-marathon2.gif" className="DanceMarathon-photo hover" alt="CUDM"/><br/>
            </div>
        );
    }
}

export default DanceMarathon;
