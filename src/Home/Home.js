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
                    I studied <a href="http://sociology.columbia.edu/" className="Home-link link anim-middleout">people</a> and the <a href="https://consiliencejournal.org/article/investing-the-global-and-local-in-wangchuck-centennial-national-park-a-case-for-the-bhutanese-conservation-actors-in-between/" className="Home-link link anim-middleout">environment</a> @ <a href="https://www.columbia.edu/" className="Home-link link anim-middleout">CU</a>, where I designed gear for a <Link to="/cudm" className="Home-link link anim-middleout">24-hour dance marathon</Link>, <Link to="/video" className="Home-link link anim-middleout">shot a lot of video</Link>, and interviewed foresters in the <Link to="/bhutan" className="Home-link link anim-middleout">last Himalayan Kingdom</Link>, amongst <Link to="/other" className="Home-link link anim-middleout">other things</Link>.
                </h1>
                <h1 className="Home-main-text">
                    Most recently, I learned <Link to="/spiced" className="Home-link link anim-middleout">how to code</Link>, which has made me a better researcher, storyteller, and <Link to="/gene" className="Home-link link anim-middleout">designer</Link>. Check out my <a href="http://www.aleesteele.com/Anne-Lee-Steele-CV.pdf" className="Home-link link anim-middleout" download="Anne-Lee-Steele-CV-2018.pdf">resume/CV</a>, <a href="http://linkedin.com/in/anneleesteele" className="Home-link link anim-middleout">LinkedIn</a>, or social media to learn more about me, or <a href="mailto:aleesteele@gmail.com" className="Home-link link anim-middleout">get in touch ✉</a>.
                </h1>
                <h1 className="Home-main-text">
                    Currently: Making visualizations for <a href="http://pscore.org/" className="Home-link link anim-middleout">PSCORE</a>.
                </h1>
                <div className="App-sidebar-nav-div">
                    <ol>
                        <li className="sidebar-icon"><a class="icon-github social-button color" href="http://github.com/aleesteele"></a></li>
                        <li className="sidebar-icon"><a class="icon-twitter social-button color" href="http://twitter.com/anneleesteele"></a></li>
                        <li className="sidebar-icon"><a class="icon-instagram social-button color" href="http://instagram.com/anneleesteele"></a></li>
                        <li className="sidebar-icon"><a class="icon-linkedin social-button color" href="http://linkedin.com/in/anneleesteele"></a></li><br/><br/>
                    </ol>
                </div>
            </div>
        );
    }
}

export default Home;
