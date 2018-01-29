import React, {Component} from 'react';
import './About.css';

class About extends Component {
    render() {
        console.log('inside About component');
        return (<div className="About">
            <b>TECHNICAL CAPACITY. RESEARCH BACKGROUND. COMMUNICATION SKILLS. </b><br/>
            <br/>
            My special interests are in data visualization, market research and digital storytelling.<br/><br/>

            Web Development<br/>
            <p>
                Frontend: HTML5, CSS4, React, Redux, Angular, Handlebars, Three.js, jQuery, Canvas<br/>
                Backend: Node, Express, RESTful APIs, Socket.io, Postgres (SQL), Redis (NoSQL)<br/>
                Mapping: ArcGIS, GoogleMaps<br/>
                Hosting/CMS: Heroku, Amazon Web Services (AWS), Wordpress, Weebly<br/>
                Data-Types: json, csv/tsv/dsv, txt, sql, xml, Microsoft Excel<br/>
            </p>
            <br/>
            Media<br/>
            <p>
                Design: Adobe Creative Suite (Photoshop, Illustrator, InDesign)<br/>
                Writing: Editing, Copywriting (academic, journalism)<br/>
                Video Production: Premiere Pro, Final Cut Pro (X)<br/>
                Marketing: SEO keywords, social media<br/>
                Other: photography/video/audio equipment, interviewing, literature review, ethnography<br/>
            </p>

            <p>
                Certifications<br/>
                - AMERICAN RED CROSS – First Aid, CPR – New York, USA (2016)<br/>
                - N.O.L.S. WILDERNESS MEDICINE – Wilderness First Aid – New York, USA (2016)<br/>
                - NEPAL MOUNTAINEERING ASSOCIATION – Beginner Mountaineering Course – Nepal (2017)<br/>
                - P.A.D.I. ADVANCED WATER DIVING CERTIFICATION – Mancora, Peru (2015)<br/>
                - S.S.I. OPEN WATER DIVING CERTIFICATION – Auckland, NZ (2013)<br/>
                - THE YOGA INSTITUTE – 300 Teaching Hours through YogaAlliance – Houston, USA (2011 - 2016)<br/>
                - CAFÉ L’AFFARE BARISTA TRAINING – Wellington, New Zealand (winter 2013)<br/>
                - COLUMBIA SCHOOL OF MIXOLOGY – New York, New York (spring 2012) – Scored over 95% on qualifying test, T.I.P.S. Certified<br/>

            </p>
        </div>);
    }
}

export default About;
