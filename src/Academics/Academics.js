import React, {Component} from 'react';
import './Academics.css';

class Academics extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('inside Academics component');
        return (<div className="Home">
            <h1 className="Academics-main-text">
                Select Coursework: Methods for Social Research, Global Urbanism, Literary Texts and Criticism, Science for Sustainable Development, Earth Resources and Sustainable Development, Social Theory, Political and Socioeconomic Dimensions of the Environment, Masterpieces of Western Literature and Philosophy, Anthropology of Art, Earth Institute Practicum
                <br/><br/>
                Select Organizations: Columbia Daily Spectator, Undergraduate Committee on Global Thought, Columbia Photographers Association, EcoReps
                <br/><br/>
                Notable Research Projects: <br/>
            	• "Investigating the Global and Local in Wangchuck Centennial National Park: A Case for the Bhutanese Conservation Actors In-Between". <a href="https://consiliencejournal.org/article/investing-the-global-and-local-in-wangchuck-centennial-national-park-a-case-for-the-bhutanese-conservation-actors-in-between/">
                Published in Consilience, the Journal of Sustainable Development (2018).</a><br/>
            	• "Mobility as Multi-Dimensional: Forest Governance at Wangchuck Centennial National Park and Beyond", final directed research project from semester-long field research program in Bhutan, presented to government officials and scientists (2017).<br/>
            	• "Economic Empowerment or Environmental Impoverishment? Perspectives on the ‘War on Coal’: A Study on the Black Mesa mines of the Navajo and Hopi Nations". Analyzed relationship between energy industry and poverty levels on Native American reservations during semester-long project (2016). <br/>
            	• "Qualifying and Quantifying Media Bias: An Investigation into the Differences in Western Media Reportage of Officially-Claimed ISIL Terrorist Attacks From 2014-2016". Developed 'bias measures’ in reporting in major news outlets for semester long project (2016).
            	• Investigated effects of mining on land and water bodies for "Expulsions" book by Sociologist Saskia Sassen (2016).
            	• Tracked business growth and gentrification trends of Harlem using public records/Google Maps data (2015).

            </h1>
        </div>);
    }
}

export default Academics;
