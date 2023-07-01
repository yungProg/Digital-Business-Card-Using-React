// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { ReactDOM } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/*import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedIn } from '@fortawesome/free-brands-svg-icons';*/
const Navbar = () => {
    return (
        <nav>
            <img src="../images/Rectangle 90.png" alt="profile photo" className="profile-image" />
            <h1 className="profile-name">Gideon Boakye</h1>
            <p className="job-title">Frontend Developer</p>
            <p className="website"><a href="brown.website" target="_blank" rel="noreferrer">brown.website</a></p>
            <div className="social-buttons">
                <button className="email-btn"><FontAwesomeIcon icon="fa-solid fa-envelope" className="email-icon" />Email</button>
                <button className="linkedin-btn"><FontAwesomeIcon icon="fa-brands fa-linkedin" className="linkedin-icon"/>Linkedin</button>
            </div>
        </nav>
    )
}

export default Navbar