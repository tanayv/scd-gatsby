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
                    <Link to="/about#siebel"><p>Tom Siebel</p></Link>
                    <Link to="/about#team"><p>Core Team</p></Link>
                    <Link to="/about#building"><p>Building</p></Link>
                </div>
                <div className="cell">
                    <Link to="/connect"><h1>Connect</h1></Link>
                    <Link to="/connect/#contact"><p>Contact Info</p></Link>
                    <Link to="/connect/#newsletter"><p>Newsletter</p></Link>
                    <Link to="/connect/#donate"><p>Donate</p></Link>
                    <Link to="/about/#faq"><p>FAQ</p></Link>
                </div>
                <div className="cell">
                    <Link to="/stories"><h1>Stories</h1></Link>
                    <Link to="/stories"><p>Past Events</p></Link>
                </div>
                <div className="cell">
                    <Link to="/courses"><h1>Courses</h1></Link>
                    <Link to="/courses"><p>SCD Courses</p></Link>
                </div>
                <div className="cell">
                    <h1>Resources</h1>
                    <p>Coming Soon!</p>
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
                    <p><a href="https://www.vpaa.uillinois.edu/resources/web_privacy" target="_blank" rel="noopener noreferrer">Privacy Statement</a> | <a href="https://engineering.illinois.edu/cookie-policy.html" target="_blank" rel="noopener noreferrer">Engineering Cookie Policy</a></p>
                </div>
                <div className="cell wide anchor-right-bottom">
                    <SocialLinks theme="black"/>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer