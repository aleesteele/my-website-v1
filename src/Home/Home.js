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
                    I moved to New York City in 2011, where I studied <Link to="/about" className="Home-link link anim-middleout">people</Link> and the <a href="https://consiliencejournal.org/article/investing-the-global-and-local-in-wangchuck-centennial-national-park-a-case-for-the-bhutanese-conservation-actors-in-between/" className="Home-link link anim-middleout">environment</a> @ CU, designed gear for a <Link to="/cudm" className="Home-link link anim-middleout">24-hour dance marathon</Link>, <Link to="/video" className="Home-link link anim-middleout">shot a lot of video</Link>, and interviewed foresters in the <Link to="/bhutan" className="Home-link link anim-middleout">last Himalayan Kingdom</Link>, amongst <Link to="/other" className="Home-link link anim-middleout">other things</Link>.
                </h1>
                <h1 className="Home-main-text">
                    Most recently, I <Link to="/spiced" className="Home-link link anim-middleout">learned how to code</Link> in Berlin, which has made me a better researcher, <Link to="/spiced" className="Home-link link anim-middleout">data wonk</Link> and <Link to="/gene" className="Home-link link anim-middleout">designer</Link>. <i className="Home-main-italic">I'm passionate about where technology meets the social world, especially when it comes to sustainability and understanding our global economy</i>.
                </h1>
                <h1 className="Home-main-text">
                    I'm always looking for opportunities to grow and improve my skills. Check out my <Link to="/about" className="Home-link link anim-middleout">resume</Link>, <a href="https://www.linkedin.com/in/anneleesteele" className="Home-link link anim-middleout">LinkedIn</a>, and feel free to <a href="https://github.com/aleesteele/" className="Home-link link anim-middleout">Github</a> to learn more about me, or <a href="mailto:aleesteele@gmail.com" className="Home-link link anim-middleout">get in touch ✉ </a>.
                    {/* <img src="/email.svg" className="Home-email-icon" alt="Created by Leonides Delgado from the Noun Project"/> */}
                </h1>
            </div>
        );
    }
}

export default Home;
