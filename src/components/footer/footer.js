import { Link } from "gatsby"
import React from "react"
import SocialLinks from "./../social-links/social-links";
import "./footer.css";

const Footer = () => (
    <footer>
        <div className="scd-cw-75">
            <div className="row">
                <div className="cell wide">
                    <h1>Siebel Center for Design</h1>
                    <h2>University of Illinois at Urbana-Champaign</h2>
                    <h2>designcenter@illinois.edu</h2>
                    <h2>217–300–9100</h2>
                </div>
            </div>
            <div className="row">
            <div className="cell">
                    <Link to="/about"><h1>About</h1></Link>
                    <p>Director</p>
                    <p>Tom Siebel</p>
                    <p>Core Team</p>
                    <p>Building</p>
                </div>
                <div className="cell">
                    <Link to="/connect"><h1>Connect</h1></Link>
                    <p>Contact Info</p>
                    <p>Newsletter</p>
                    <p>Donate</p>
                    <p>FAQ</p>
                </div>
                <div className="cell">
                    <Link to="/stories"><h1>Stories</h1></Link>
                    <Link to="/stories"><p>Past Events</p></Link>
                </div>
                <div className="cell">
                    <Link to="/courses"><h1>Courses</h1></Link>
                    <Link to="/courses"><p>Prototyping</p></Link>
                    <Link to="/courses"><p>SCD Courses</p></Link>
                </div>
                <div className="cell">
                    <Link to="/resources"><h1>Resources</h1></Link>
                    <Link to="/resources"><p>Coming Soon!</p></Link>
                </div>
                <div className="cell">
                    <Link to="/jobs"><h1>Jobs</h1></Link>
                    <Link to="/jobs"><p>Openings</p></Link>
                </div>
            </div>
            <div className="row">
                <div className="cell wide">
                    <p>Copyright 2019</p>
                    <p>The Board of Trustees at the University of Illinois</p>
                    <p>Privacy Statement | Engineering Cookie Policy | Cookie Settings</p>
                </div>
                <div className="cell wide anchor-right-bottom">
                    <SocialLinks theme="black"/>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer