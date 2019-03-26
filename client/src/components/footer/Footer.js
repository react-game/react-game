import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <footer>
                <h2>CONTACT US: </h2>
                <h2 className="links"> <a href="https://www.linkedin.com/in/amy-knudson/" target="_blank" rel="noopener noreferrer"> AMY KNUDSON </a></h2>
                <h2 className="links"> <a href="https://www.linkedin.com/in/the-real-jessie-jones/" target="_blank" rel="noopener noreferrer"> JESSIE JONES </a></h2>
                <h2 className="links"> <a href="https://www.linkedin.com/in/lara-potjewyd/" target="_blank" rel="noopener noreferrer"> LARA POTJEWYD </a> </h2>
            </footer>
        );
    }
}

export default Footer;