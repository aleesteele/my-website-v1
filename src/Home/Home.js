import React, {Component} from 'react';
import {Link} from 'react-router';
import Portfolio from '../Portfolio/Portfolio';
import ScrollableAnchor from 'react-scrollable-anchor'

import './Home.css';

class Home extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        console.log('inside Home component');
        return (
            <div>
            <div className="Home">
                {/* <h1 className="Home-main-text">
                    live in Washington, DC.
                </h1> */}
                <h1 className="Home-main-text">
                    I studied <a href="https://anthropology.columbia.edu/" className="Home-link link anim-middleout">culture</a> and <a href="http://sociology.columbia.edu/" className="Home-link link anim-middleout">society</a> @ <a href="https://www.columbia.edu/" className="Home-link link anim-middleout">CU</a>, where I focused on <a href="http://www.hup.harvard.edu/catalog.php?isbn=9780674599222" className="Home-link link anim-middleout">sustainable development</a> and <a href="https://eacnur.org/es" className="Home-link link anim-middleout">forced migration</a>. I also <a href="https://consiliencejournal.org/article/investing-the-global-and-local-in-wangchuck-centennial-national-park-a-case-for-the-bhutanese-conservation-actors-in-between/" className="Home-link link anim-middleout">interviewed foresters</a> in the <Link to="/bhutan" className="Home-link link anim-middleout">last Himalayan Kingdom</Link> and <a href="https://youtu.be/9NuDewSvVbA" className="Home-link link anim-middleout">shot a lot of video</a>, amongst <Link to="/other" className="Home-link link anim-middleout">other things</Link>.
                </h1>
                <h1 className="Home-main-text">
                    Most recently, I learned <Link to="/spiced" className="Home-link link anim-middleout">how to code</Link>, which has made me a better researcher, storyteller, and <Link to="/gene" className="Home-link link anim-middleout">designer</Link>. Check out my <a href="http://www.aleesteele.com/Anne-Lee-Steele-CV.pdf" className="Home-link link anim-middleout" download="Anne-Lee-Steele-CV-2018.pdf">CV</a>, <a href="http://linkedin.com/in/anneleesteele" className="Home-link link anim-middleout">LinkedIn</a>, or social media to learn more about me, or <a href="mailto:aleesteele@gmail.com" className="Home-link link anim-middleout">get in touch ✉</a>.
                </h1>
                <h1 className="Home-main-text">
                  - Anne Lee Steele
               </h1>
                {/* <h1 className="Home-main-text">
                    Currently: Mul for the <a href="">CSIS iDeas Lab</a>.
                </h1> */}
                <div className="App-sidebar-nav-div">
                    <ol>
                        <li className="sidebar-icon"><a class="icon-github social-button color" href="http://github.com/aleesteele"></a></li>
                        <li className="sidebar-icon"><a class="icon-twitter social-button color" href="http://twitter.com/anneleesteele"></a></li>
                        <li className="sidebar-icon"><a class="icon-instagram social-button color" href="http://instagram.com/mmntsbyanne"></a></li>
                        <li className="sidebar-icon"><a class="icon-linkedin social-button color" href="http://linkedin.com/in/anneleesteele"></a></li><br/><br/>
                    </ol>
                </div>
                {/* <div>
                <Link to="/video" className="Home-link link anim-middleout"></Link>
                ↓ <a href='#section1'> See my portfolio </a> ↓
                </div> */}
            </div>
        {/* <ScrollableAnchor className="#section1">
        <Portfolio/>
        </ScrollableAnchor> */}
        {/* <ScrollableAnchor className="#section2">
        hello
        </ScrollableAnchor> */}
        </div>
        );
    }
}

export default Home;
