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
                <h2 className="Contact-text">
                    I'm a recent graduate who loves to learn, meet new people, and is always looking to improve her skills.
                    <br/><br/>
                    Feel free to get in touch at <a href="mailto:aleesteele@gmail.com" className="Contact-email link anim-middleout">aleesteele@gmail.com</a>.
                </h2>
            </div>
        );
    }
}

export default Contact;
