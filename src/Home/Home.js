import React, {Component} from 'react';
import {Link} from 'react-router';
import './Home.css';

class Home extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        console.log('inside Home component');
        return (
            <div className="Home">
                <h1 className="Home-main-text">
                    Hi, I'm Anne.
                </h1>
                <h1 className="Home-main-text">
                    I moved to New York City in 2011, where I <Link to="/about" className="Home-link link anim-middleout">studied people</Link>, designed gear for a <Link to="/cudm" className="Home-link link anim-middleout">24-hour dance marathon</Link>, <Link to="/video" className="Home-link link anim-middleout">shot a lot of video</Link>, and interviewed foresters in the <Link to="/bhutan" className="Home-link link anim-middleout">last Himalayan Kingdom</Link>, amongst <Link to="/other" className="Home-link link anim-middleout">other things</Link>.
                </h1>
                <h1 className="Home-main-text">
                    Most recently, I <Link to="/spiced" className="Home-link link anim-middleout">learned how to code</Link> in Berlin, which reminded me of technology's incredible <Link to="/recent" className="Home-link link anim-middleout">capacity to communicate</Link>. Ultimately, I'm interested in where tech meets the social world + sustainability, and how the <Link to="/about" className="Home-link link anim-middleout">'invisible hand'</Link> plays into it all.
                </h1>
                <h1 className="Home-main-text">
                    <b>I'm currently looking for opportunities to grow and improve my skills.</b> But ultimately, I just love to learn. Feel free to check out my <Link to="/about" className="Home-link link anim-middleout">resume</Link>, <a href="https://www.linkedin.com/in/anneleesteele" className="Home-link link anim-middleout">LinkedIn</a>, or <a href="https://github.com/aleesteele/" className="Home-link link anim-middleout">Github</a> to learn more about me, or <a href="mailto:aleesteele@gmail.com" className="Home-link link anim-middleout">get in touch</a>.
                </h1>
            </div>
        );
    }
}

export default Home;
