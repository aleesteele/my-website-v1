import React, {Component} from 'react';
import {Link} from 'react-router';

import '../App/App.css';
import './Home.css';

class Home extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div className="Home">
                <h1 className="Home-main-text">
                  Hello, world. Anne here.<br/>
                </h1>
                <h1 className="Home-main-text">
                  I'm an MA candidate at the Graduate Institute of International and Development Studies. I'm interested in how technology and the environment affect people (and their politics).
                </h1>
                <h1 className="Home-main-text">
                  Before moving to Geneva, I was <a href="https://consiliencejournal.org/article/investing-the-global-and-local-in-wangchuck-centennial-national-park-a-case-for-the-bhutanese-conservation-actors-in-between/" className="Home-link link anim-middleout">researching conservation</a> and leading student expeditions in the Himalayas. I also coded data visualizations for a DC think tank and <a href="https://youtu.be/9NuDewSvVbA" className="Home-link link anim-middleout">shot a lot of video</a> along the way.
                </h1>
                <h1 className="Home-main-text">
                  When I'm not thinking about digital ethnography or human-centered design, I'm in the mountains or writing. Take a look at my <a href="http://linkedin.com/in/anneleesteele" className="Home-link link anim-middleout">LinkedIn</a> or social media to learn more about me. And of course, feel free to <a href="mailto:aleesteele@gmail.com" className="Home-link link anim-middleout">get in touch. ✉</a>
                </h1><br/>
                <h3 className="Home-main-text">
                  Recent Projects & Publications:
                </h3>
                <h3 className="Home-main-text">
                  <ul>
                    <li>Stephenson Ocean Security Project, Center for Strategic and International Studies. Assisted with web development. (2019) – <a href="http://ocean.csis.org" className="Home-link link anim-middleout">ocean.csis.org</a></li>
                    <li>“Investigating the Global and Local in Wangchuck Centennial National Park: A Case for the Bhutanese Conservation Actors In-Between”. Published online in “Consilience”, Issue XVIIII (2018) – <a href="https://www.goo.gl/GFSuTi" className="Home-link link anim-middleout">goo.gl/GFSuTi</a></li>
                    <li>Global Cities, a three.js visualization (2017) – <a href="https://www.goo.gl/F4E3nS" className="Home-link link anim-middleout">goo.gl/F4E3nS</a></li>
                    <li><a href="https://www.columbiaspectator.com/contributors/Anne-Steele/" className="Home-link link anim-middleout">Journalism</a>, <Link to="/video" className="Home-link link anim-middleout">Video</Link>, and <Link to="/other" className="Home-link link anim-middleout">Graphic Design</Link> student projects (2011 - 2018)</li>
                  </ul>
                </h3>
                <div className="App-sidebar-nav-div">
                  <ol>
                      <li className="sidebar-icon"><a className="icon-github social-button color" href="http://github.com/aleesteele"></a></li>
                      <li className="sidebar-icon"><a className="icon-twitter social-button color" href="http://twitter.com/anneleesteele"></a></li>
                      <li className="sidebar-icon"><a className="icon-instagram social-button color" href="http://instagram.com/mmntsbyanne"></a></li>
                      <li className="sidebar-icon"><a className="icon-linkedin social-button color" href="http://linkedin.com/in/anneleesteele"></a></li>
                      <li className="sidebar-icon"><a className="icon-tumblr social-button color" href="https://aleesteele.tumblr.com/"></a></li>
                  </ol>
                </div>
            </div>
        );
    }
}

export default Home;
