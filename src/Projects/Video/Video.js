import React, {Component} from 'react';
import {Link} from 'react-router';
import './Video.css';

class Video extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        console.log('inside Video component');
        return (
            <div className="Video">
                <h1 className="Video-header">Select previews. GIFs are linked except for the first, due to permissions.</h1>
                <img src="/projects/cu-video.gif" className="Video-preview hover" alt="cu-admissions"/><br/>
                <a href="https://www.youtube.com/watch?v=Asm2Ad49cyI&t=12s"><img src="/projects/tedxcc.gif" className="Video-preview hover" alt="TEDxCC"/></a><br/>
                <a href="http://www.slowdakota.com/videos/"><img src="/projects/slow-dakota.gif" className="Video-preview hover" alt="slow-dakota"/></a><br/>
                <a href="https://vimeo.com/52035382"><img src="/projects/dance-marathon2.gif" className="Video-preview hover" alt="CUDM"/></a><br/>
                <a href="https://www.youtube.com/watch?v=LMiI4dLdook"><img src="/projects/wgtn-lux.gif" className="Video-preview hover" alt="wgtn-lux"/></a><br/>

            </div>
        );
    }
}

export default Video;
