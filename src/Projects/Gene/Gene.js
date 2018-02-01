import React, {Component} from 'react';
import {Link} from 'react-router';
import './Gene.css';

class Gene extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        console.log('inside Recent component');
        return (
            <div className="Recent">
                <a href="http://www.genecolemanphotography.com/"><img src="/projects/gene.gif" className="Recent-photo hover" alt="gene-coleman"/></a><br/>
                <a href="http://www.genecolemanphotography.com/"><img src="/projects/gene3.png" className="Recent-photo hover" alt="gene-coleman"/></a><br/>
                <a href="http://www.genecolemanphotography.com/"><img src="/projects/gene2.gif" className="Recent-photo hover" alt="gene-coleman"/></a>
                <p>
                    <a href="http://www.genecolemanphotography.com/" className="Recent-link link anim-middleout"><h2>www.genecolemanphotography.com</h2></a><br/>
                    A multimedia website for the portfolio and street art project of NYC-based photographer Gene Coleman.
                    <br/><br/>
                    <a href="http://www.genecolemanphotography.com/" className="Recent-link link anim-middleout">Website</a> | <a href="https://github.com/aleesteele/gene-coleman" className="Recent-link link anim-middleout">Source Code</a>
                </p>
            </div>
        );
    }
}

export default Gene;
