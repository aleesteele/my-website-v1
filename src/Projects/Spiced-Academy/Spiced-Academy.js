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
                <a href="https://github.com/aleesteele/global-cities" className="Spiced-Academy-project link anim-middleout"><h2><u>Global Cities</u></h2></a>
                <h3 className="Spiced-Academy-text">
                    A 3d, interactive database of the world's major cities. This was my final project for Spiced Academy, and it's an ongoing labor of love.
                    <br/>
                    <p className="Spiced-Academy-text-des">Built with Express, Handlebars, three.js | <a href="https://github.com/aleesteele/global-cities" className="Spiced-Academy-links link anim-middleout"><i>Source Code</i></a></p>
                </h3>
                <a href="https://github.com/aleesteele/social-network" className="Spiced-Academy-project link anim-middleout"><h2><u>Social Network:</u></h2></a>
                <h3 className="Spiced-Academy-text">
                    A mock-social network for holiday enthusiasts.
                    <br/>
                    <p className="Spiced-Academy-text-des">Built with React+Redux | <a href="https://github.com/aleesteele/social-network" className="Spiced-Academy-links link anim-middleout"><i>Source Code</i></a></p>
                </h3>
                <a href="https://github.com/aleesteele/imageboard" className="Spiced-Academy-project link anim-middleout"><h2><u>Imageboard</u></h2></a>
                <h3 className="Spiced-Academy-text">
                    A instagram-style, single-page application for uploading photographs.
                    <br/>
                    <p className="Spiced-Academy-text-des">Built with React+Redux | <a href="https://github.com/aleesteele/imageboard" className="Spiced-Academy-links link anim-middleout"><i>Source Code</i></a></p>
                </h3>
                <a href="https://github.com/aleesteele/petition" className="Spiced-Academy-project link anim-middleout"><h2><u>Petition</u></h2></a>
                <h3 className="Spiced-Academy-text">
                    A playful petition on politics in the Korean Peninsula.
                    <br/>
                    <p className="Spiced-Academy-text-des">Built with Express, Handlebars | <a href="https://github.com/aleesteele/petition" className="Spiced-Academy-links link anim-middleout"><i>Source Code</i></a></p>
                </h3>
            </div>
        );
    }
}

export default SpicedAcademy;
