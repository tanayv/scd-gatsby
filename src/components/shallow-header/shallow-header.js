import { Link } from "gatsby"
import React from "react"
import "./shallow-header.css"
import ImageBlob from "./../image-blob/image-blob";

class ShallowHeader extends React.Component {

    render = () => (
        <main>
          <header className="shallow">
            <div className="scd-cw-90 scd-fill-height">
              <div className="titlespace">
              <Link to="/">
                <h1>Siebel Center for Design</h1>
              </Link>
              <div className="center-links">
                <Link className="option" to="/about">
                  <div>about</div>
                </Link>
                <Link className="option" to="/connect">
                  <div>connect</div>
                </Link>
                <Link className="option" to="/stories">
                  <div>stories</div>
                </Link>
                <Link className="option" to="/courses">
                  <div>courses</div>
                </Link>
                <Link className="option" to="/jobs">
                  <div>jobs</div>
                </Link>
              </div>
              </div>
            </div>
            <a className="floating-i" target="_blank" href="https://illinois.edu" rel="noopener noreferrer">
              <div className="floating-block-i">
                <ImageBlob name="topFloatingI"/>
              </div>
            </a>  
          </header>
        </main>
    )

}

export default ShallowHeader