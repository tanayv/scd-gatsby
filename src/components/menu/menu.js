import React from "react";
import { Link } from "gatsby";
import "./menu.css";

class Menu extends React.Component {


    render = () => (
        <div className="menu-overlay">
            <div className="menu">
                <div className="menu-content-container">
                    <h1>Siebel Center for Design</h1>
                    <hr/>
                    <Link to="/"><div className="menu-option">Connect</div></Link>
                    <Link to="/"><div className="menu-option">Stories</div></Link>
                    <Link to="/"><div className="menu-option">Courses</div></Link>
                    <Link to="/resources"><div className="menu-option">Resources</div></Link>
                    <Link to="/"><div className="menu-option">Newsletter</div></Link>
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