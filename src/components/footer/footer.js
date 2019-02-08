import { Link } from "gatsby"
import React from "react"
import SocialLinks from "./../social-links/social-links";
import "./footer.css";

const Footer = ({}) => (
    <footer>
        <div className="row">
            <div className="cell wide">
                <h1>Siebel Center for Design</h1>
                <h2>University of Illinois at Urbana-Champaign</h2>
                <h2>designcenter@illinois.edu</h2>
                <h2>217–300–9100</h2>
            </div>
            <div className="cell">
                <Link to="/events"><h1>Events</h1></Link>
                <p>Upcoming</p>
                <p>Archives</p>
            </div>
            <div className="cell">
                <Link to="/events"><h1>Stories</h1></Link>
                <Link to="/social-innovation-spotlight"><p>Social Innovation Spotlight</p></Link>
                <Link to="/collaborators"><p>Collaborators</p></Link>
                <Link to="/archives"><p>Archives</p></Link>
            </div>
        </div>
        <div className="row">
            <div className="cell wide">
            </div>
            <div className="cell">
                <Link to="/resources"><h1>Resources</h1></Link>
                <Link to="/readings"><p>Readings</p></Link>
                <Link to="/articles"><p>Articles</p></Link>
                <Link to="/videos"><p>Videos</p></Link>
                <Link to="/websites"><p>Websites</p></Link>
                <Link to="/companies"><p>Companies</p></Link>
            </div>
            <div className="cell">
                <Link to="/news"><h1>News</h1></Link>
                <Link to="/news/subscribe"><p>Newsletter Signup</p></Link>
                <Link to="/news/past-editions"><p>Archives</p></Link>
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
    </footer>
)

export default Footer