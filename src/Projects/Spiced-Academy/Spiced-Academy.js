import React, {Component} from 'react';
import {Link} from 'react-router';
import './Spiced-Academy.css';

class SpicedAcademy extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        console.log('inside SpicedAcademy component');
        return (
            <div className="Spiced-Academy">
                <h1>Select Spiced Academy Projects</h1>
                <h3 className="Spiced-Academy-text">
                    Spiced Academy is a coding academy based in Berlin, Germany. <br/>I attended a 12-week immersive & intensive web development bootcamp with a focus on Javascript. We learned cutting-edge frameworks and technologies to develop full-stack web applications.
                </h3>
                <a href="https://github.com/aleesteele/global-cities"><h2><u>Global Cities</u></h2></a>
                <h3 className="Spiced-Academy-text">
                    A 3d, interactive database of the world's major cities. This was my final project for Spiced Academy, and it's an ongoing labor of love. | Built with Express, Handlebars, three.js | <a href="https://github.com/aleesteele/global-cities" className="Spiced-Academy-links"><i>Source Code</i></a>
                </h3>
                <a href="https://github.com/aleesteele/social-network"><h2><u>Social Network:</u></h2></a>
                <h3 className="Spiced-Academy-text">
                    A mock-social network for holiday enthusiasts. | Built with React+Redux | <a href="https://github.com/aleesteele/social-network" className="Spiced-Academy-links"><i>Source Code</i></a>
                </h3>
                <a href="https://github.com/aleesteele/imageboard"><h2><u>Imageboard</u></h2></a>
                <h3 className="Spiced-Academy-text">
                    A instagram-style, single-page application for uploading photographs. | Built with React+Redux | <a href="https://github.com/aleesteele/imageboard" className="Spiced-Academy-links"><i>Source Code</i></a>
                </h3>
                <a href="https://github.com/aleesteele/petition"><h2><u>Petition</u></h2></a>
                <h3 className="Spiced-Academy-text">
                    A playful petition on politics in the Korean Peninsula. | Built with Express, Handlebars | <a href="https://github.com/aleesteele/petition" className="Spiced-Academy-links"><i>Source Code</i></a>
                </h3>
            </div>
        );
    }
}

export default SpicedAcademy;
