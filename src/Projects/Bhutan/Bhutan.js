import React, {Component} from 'react';
import {Link} from 'react-router';
import './Bhutan.css';

class Bhutan extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        console.log('inside Bhutan component');
        return (
          <div>
            <div className="Bhutan">
                {/* <img src="/projects/bhutan1.jpg" className="Bhutan-photo" alt="Bhutan"/><br/> */}
                <img src="/projects/bhutan2.jpg" className="Bhutan-photo hover" alt="Bhutan"/><br/>
                <p className="Bhutan-text">
                    I spent my last undergraduate semester in Bhutan, which is widely known for its policy of "Gross National Happiness" as a measure for development and conservation with a group of student researchers. We were incredibly fortunate to be able to spend time in the last Himalayan Kingdom, still considered one of the most-closed countries on the planet.
                    <br/><br/>
                    We were based at a government research organization, the Ugygen Wangchuck Institute for Conservation and Environmental Research (UWICER). Being there lent us unique insight into the country's approach to environmental policy. After a semester spent honing research methods, we ventured into the field in Bhutan's largest national park, Wangchuck Centennial National Park, near the border of Tibet.
                    <br/><br/>
                    My project focused on learning more about those in the middle (the foresters and civil servants) that were often unknowing mediators between the international organizations who largely dictated policy and the local villagers who the amongst the primary affected.
                </p>
            </div>
            <div className="Bhutan">
              <img src="/projects/climbing.jpg" className="Other-photo hover" alt="NMA-Mountaineering"/><br/>
              <p>
                  Climbing in the Himalayas with the Nepal Mountaineering Association.<br/>
              </p>
            </div>
          </div>
        );
    }
}

export default Bhutan;
