import React, {Component} from 'react';
import './About.css';

class About extends Component {
    render() {
        console.log('inside About component');
        return (
            <div className="About">
            <b><h2 className="About-tagline">
                TECHNICAL CAPACITY. <br/>
                RESEARCH BACKGROUND. <br/>
                MULTIMEDIA SKILLS.
            </h2></b>
            <b>ACADEMICS</b><br/>
            Class of 2017 – Columbia University<br/>
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
                • <i>"Mobility as Multi-Dimensional: Forest Governance at Wangchuck Centennial National Park and Beyond"</i>, final directed research project from semester-long field research program in Bhutan, presented to Royal Government of Bhutan officials, researchers and scientists (2017).<br/>
                • <i>"Economic Empowerment or Environmental Impoverishment? Perspectives on the ‘War on Coal’: A Study on the Black Mesa mines of the Navajo and Hopi Nations"</i>. Analyzed relationship between energy industry and poverty levels on Native American reservations during semester-long project (2016). <br/>
                • <i>"Qualifying and Quantifying Media Bias: An Investigation into the Differences in Western Media Reportage of Officially-Claimed ISIL Terrorist Attacks From 2014-2016"</i>. Developed 'bias measures’ in reporting in major news outlets for semester long project (2016).<br/>
                • Investigated effects of mining on land and water bodies for "Expulsions" book by Sociologist Saskia Sassen (2016).<br/>
                • Tracked business growth and gentrification trends of Harlem using public records/Google Maps data (2015).<br/>
            </p>
            <p>
                <u>Select Publications</u><br/>
                • <i>"Investigating the Global and Local in Wangchuck Centennial National Park: A Case for the Bhutanese Conservation Actors In-Between"</i>. <a href="https://consiliencejournal.org/article/investing-the-global-and-local-in-wangchuck-centennial-national-park-a-case-for-the-bhutanese-conservation-actors-in-between/" className="About-link">Published online in Consilience, the Journal of Sustainable Development, (2018)</a>.<br/>
                • <i>"Acknowledging the South and Ourselves"</i>. <a href="http://spc.columbiaspectator.com/2013/02/03/acknowledging-south%E2%80%94and-ourselves" className="About-link">Published the Columbia Daily Spectator, (2013)</a>.<br/>
                • <i>"Moving Pictures"</i>. <a href="http://www.columbiaspectator.com/eye/2013/02/06/moving-pictures/" className="About-link">Published in "The Eye" Magazine, (2013)</a>.<br/>
                • <i>"On the Venus of Willendorf and My Neighbor"</i>. Published in the print edition of art mag "The Point", Christchurch, NZ (2013).<br/>
                • <i>Anne Lee Steele Photography</i>. <a href="https://issuu.com/racingminds/docs/may2011/73" className="About-link">Featured in Racing Minds Mag, (2011)</a>.
            </p>
            <p>
                <u>Skills:</u> qualitative & quantitative data analysis, interviewing, literature review, ethnography, field research, mapping<br/>
                <u>Languages:</u> native English speaker, working knowledge of Korean, Spanish and German<br/>
            </p>

            <u><i className="About-italic">Currently pursuing a Graduate Diploma in Economics through the London School of Economics, University of London International Programme, Independent Study</i></u>
            <p>
                <a href="http://www.londoninternational.ac.uk/courses/diploma-graduates/lse/diploma-graduates-economics" className="About-link"><i>"Developed by academics at LSE, this diploma provides a strong grounding in economics and helps you to develop critical skills for a wide range of real world professional situations. It is designed for graduates looking for either a standalone qualification in economics or a foundation for postgraduate study."</i></a><br/>
                <u>Modules</u>: Macroeconomics, Microeconomics, International Economics, Elements of Econometrics<br/>
            </p>

            <b>WEB DEVELOPMENT</b><br/>
            <p>
                <i>My special interests are in data visualization, market research and digital storytelling.</i><br/>
                <u>Frontend:</u> HTML5, CSS4, React, Redux, Angular, Handlebars, Three.js, jQuery, Canvas, Media queries<br/>
                <u>Backend:</u> Node, Express, RESTful APIs, Socket.io, Postgres (SQL), Redis (NoSQL)<br/>
                <u>Mapping:</u> ArcGIS, GoogleMaps<br/>
                <u>Hosting/CMS:</u> Heroku, Amazon Web Services (AWS), Wordpress, Weebly<br/>
                <u>Data-Types:</u> json, csv/tsv/dsv, txt, sql, xml<br/>
            </p>

            <b>MULTIMEDIA</b><br/>
            <p>
                <u>Design:</u> Adobe Creative Suite (Photoshop, Illustrator, Lightroom, InDesign)<br/>
                <u>Communication:</u> Editing, Copywriting (academic, journalism)<br/>
                <u>Video Production:</u> Premiere Pro, Final Cut Pro (X), cinematography<br/>
                <u>Marketing:</u> SEO keywords, social media<br/>
                <u>Other:</u> photography/video/audio equipment<br/>
            </p>

            <b>WORK EXPERIENCE</b>
            <p>
                • <u>STAFF INTERN</u> – <i>ACNHUR España/UN High Commissioner for Refugees</i> – Madrid, Spain (2016)<br/>
                • <u>RESEARCH ASSISTANT</u> – <i>Dr. Saskia Sassen, Sociology Department, Columbia University</i> – New York, USA (2015 - 2016)<br/>
                • <u>MEDIA INTERN</u> – <i>Undergraduate Recruitment Committee, Columbia University</i> – New York, USA (2014 - 2015)<br/>
                • <u>SEASONAL VOLUNTEER</u> – <i>Rooftop Films</i> – New York, USA (2014-16)<br/>
                • <u>SENIOR MENTOR PHOTOGRAPHER</u> – <i>Columbia Photographers Association</i> – New York, USA (2011 - 2014)<br/>
                • <u>PRODUCTION ASSISTANT</u> – <i>WGTN LUX Festival</i> – Wellington, New Zealand (2013)<br/>
                • <u>CONSERVATION VOLUNTEER</u> – <i>Elephant Valley Project</i> – Mondulkiri, Cambodia (2013)<br/>
                • <u>ASSOCIATE EDITOR</u> – <i>Halcyon Photography Magazine</i> – New York, USA (2011 - 2012)<br/>
                • <u>FREELANCER</u> – <i>Self-Employed</i> – Hired for portraits, events, branding (2009-Current)
            </p>

            <b>OTHER CERTIFICATIONS / COURSES</b>
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
