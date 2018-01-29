import React, {Component} from 'react';
import {Link} from 'react-router';
import './Contact.css';

class Contact extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        console.log('inside Contact component');
        return (
            <div className="Contact">
                <u><h2 className="Contact-text">
                    I love to learn, meet new people, and am always looking to improve my skills.
                    <br/><br/>
                    Feel free to get in touch at <a href="mailto:aleesteele@gmail.com" className="Contact-email">aleesteele@gmail.com</a>.
                </h2></u>
            </div>
        );
    }
}

export default Contact;
