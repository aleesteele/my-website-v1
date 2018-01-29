import React, {Component} from 'react';
import {Link} from 'react-router';
import './Recent.css';

class Recent extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        console.log('inside Recent component');
        return (
            <div className="Recent">
                <a href="http://www.genecolemanphotography.com/"><img src="/projects/gene.gif" className="Recent-photo" alt="gene-coleman"/></a><br/>
                <a href="http://www.genecolemanphotography.com/"><img src="/projects/gene3.png" className="Recent-photo" alt="gene-coleman"/></a><br/>
                <a href="http://www.genecolemanphotography.com/"><img src="/projects/gene2.gif" className="Recent-photo" alt="gene-coleman"/></a>
                <p>
                    <h2>www.genecolemanphotography.com</h2>
                    A multimedia website for the portfolio and street art project of NYC-based photographer Gene Coleman.
                    <br/><br/>
                    <a href="http://www.genecolemanphotography.com/">Website</a> | <a href="https://github.com/aleesteele/gene-coleman">Source Code</a>
                </p>
            </div>
        );
    }
}

export default Recent;
