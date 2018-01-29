import React, {Component} from 'react';
import './About.css';

class About extends Component {
    render() {
        console.log('inside About component');
        return (
            <div className="About">
            <b><h2>
                TECHNICAL CAPACITY. <br/>
                RESEARCH BACKGROUND. <br/>
                MULTIMEDIA SKILLS.
            </h2></b>
            <b>ACADEMICS</b><br/>
            Class of 2017 - Columbia University in the City of New York<br/>
            B.A. Sociology, B.A. Anthropology
            <p>
                <i>Coursework focused on sustainable development, cultural studies and languages</i><br/>
                <u>Select Coursework:</u> Methods for Social Research, Global Urbanism, Literary Texts and Criticism, Science for Sustainable Development, Earth Resources, Social Theory, Political and Socioeconomic Dimensions of the Environment, Masterpieces of Western Literature and Philosophy, Anthropology of Art, Earth Institute Practicum
                <br/>
            </p>
            <p>
                <u>Select Organizations:</u> Undergraduate Committee on Global Thought, Columbia Photographers Association, EcoReps, Columbia Daily Spectator
            </p>
            <p>
                <u>Notable Projects:</u> <br/>
                • <i>"Investigating the Global and Local in Wangchuck Centennial National Park: A Case for the Bhutanese Conservation Actors In-Between"</i>. <a href="https://consiliencejournal.org/article/investing-the-global-and-local-in-wangchuck-centennial-national-park-a-case-for-the-bhutanese-conservation-actors-in-between/">
                Published in Consilience, the Journal of Sustainable Development, (2018).</a><br/>
                • <i>"Mobility as Multi-Dimensional: Forest Governance at Wangchuck Centennial National Park and Beyond"</i>, final directed research project from semester-long field research program in Bhutan, presented to Royal Government of Bhutan officials and scientists (2017).<br/>
                • <i>"Economic Empowerment or Environmental Impoverishment? Perspectives on the ‘War on Coal’: A Study on the Black Mesa mines of the Navajo and Hopi Nations"</i>. Analyzed relationship between energy industry and poverty levels on Native American reservations during semester-long project (2016). <br/>
                • <i>"Qualifying and Quantifying Media Bias: An Investigation into the Differences in Western Media Reportage of Officially-Claimed ISIL Terrorist Attacks From 2014-2016"</i>. Developed 'bias measures’ in reporting in major news outlets for semester long project (2016).<br/>
                • Investigated effects of mining on land and water bodies for "Expulsions" book by Sociologist Saskia Sassen (2016).<br/>
                • Tracked business growth and gentrification trends of Harlem using public records/Google Maps data (2015).<br/>
            </p>
            <p>
                <u>Skills:</u> qualitative & quantitative data analysis, interviewing, literature review, ethnography, field research, mapping<br/>
                <u>Languages:</u> native English speaker, working knowledge of Korean, Spanish and German
            </p>

            <b>WEB DEVELOPMENT</b><br/>
            <p>
                <i>My special interests are in data visualization, market research and digital storytelling.</i><br/>
                <u>Frontend:</u> HTML5, CSS4, React, Redux, Angular, Handlebars, Three.js, jQuery, Canvas<br/>
                <u>Backend:</u> Node, Express, RESTful APIs, Socket.io, Postgres (SQL), Redis (NoSQL)<br/>
                <u>Mapping:</u> ArcGIS, GoogleMaps<br/>
                <u>Hosting/CMS:</u> Heroku, Amazon Web Services (AWS), Wordpress, Weebly<br/>
                <u>Data-Types:</u> json, csv/tsv/dsv, txt, sql, xml<br/>
            </p>

            <b>MULTIMEDIA</b><br/>
            <p>
                <u>Design:</u> Adobe Creative Suite (Photoshop, Illustrator, Lightroom, InDesign)<br/>
                <u>Communication:</u> Editing, Copywriting (academic, journalism)<br/>
                <u>Video Production:</u> Premiere Pro, Final Cut Pro (X)<br/>
                <u>Marketing:</u> SEO keywords, social media<br/>
                <u>Other:</u> photography/video/audio equipment<br/>
            </p>

            <b>OTHER CERTIFICATIONS</b>
            <p>
                • SPICED ACADEMY OF CODE – Full-Stack Web Development – Berlin, Germany (2017)<br/>
                • NEPAL MOUNTAINEERING ASSOCIATION – Beginner Mountaineering Course – Manang Region, Nepal (2017)<br/>
                • AMERICAN RED CROSS – First Aid, CPR – New York, USA (2016)<br/>
                • N.O.L.S. WILDERNESS MEDICINE – Wilderness First Aid – New York, USA (2016)<br/>
                • P.A.D.I. ADVANCED WATER DIVING CERTIFICATION – Mancora, Peru (2015)<br/>
            </p>
        </div>);
    }
}

export default About;
