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
                <p>
                    Spiced Academy is a coding academy based in Berlin, Germany. I attended a 12-week immersive & intensive web development bootcamp with a focus on Javascript. We learned cutting-edge frameworks and technologies to develop full-stack web applications.
                </p>

                Project Repository	Description	Tech Stack
Global Cities: A 3d, interactive database of the world's major cities. This was my final project for Spiced Academy, and it's an ongoing labor of love. (Built with Express/Handlebars/three.js)
Social Network	A mock-social network for holiday enthusiasts.	React, Redux
Imageboard	A instagram-style, single-page application for uploading photographs.	Angular
Petition	A playful petition on politics in the Korean Peninsula.	Express, Handlebars
Connect Four	A space-theme version of the classic game
            </div>
        );
    }
}

export default SpicedAcademy;
