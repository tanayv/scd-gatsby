import React from "react";
import { Link } from "gatsby";
import "./menu.css";

class Menu extends React.Component {


    render = () => (
        <div className="menu-overlay" onClick={(e) => {
            this.props.onCloseButtonPress(e);
        }}>
            <div className="menu">
                <div className="menu-content-container">
                    <Link to="/"><h1>Siebel Center for Design</h1></Link>
                    <hr/>
                    <Link to="/about" activeClassName="active"><div className="menu-option">About</div></Link>
                    <Link to="/connect" activeClassName="active"><div className="menu-option">Connect</div></Link>
                    <Link to="/stories" activeClassName="active"><div className="menu-option">Stories</div></Link>
                    <Link to="/courses" activeClassName="active"><div className="menu-option">Courses</div></Link>
                    <Link to="/jobs" activeClassName="active"><div className="menu-option">Jobs</div></Link>
                </div>
                <div className="menu-close-button">
                    <div className="button" onClick={(e) => {
                        this.props.onCloseButtonPress(e);
                    }}>✕</div>
                </div>
            </div>
            
        </div>
    )

}

export default Menu