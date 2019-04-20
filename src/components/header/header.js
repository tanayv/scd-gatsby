import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./../menu/menu";
import "./header.css"
import ImageBlob from "./../image-blob/image-blob";

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
    this.toggleMenu.bind(this);
  }

  toggleMenu = (e) => {
    e.preventDefault();
    let currentMenuState = this.state.showMenu;
    this.setState({ showMenu: !currentMenuState });
  }

  spawnMenu = () => {
    if (this.state.showMenu)
      return <Menu onCloseButtonPress={this.toggleMenu}/>;
    else
      return "";
  }

  render = () => (
    <>
      {this.spawnMenu()}
      <header className="mobile">
        <div className="scd-cw-90 scd-fill-height">
          <div className="titlespace">
          <Link to="/">
              <h1>SCD</h1>
            </Link>
          </div>
          <div className="menu-icon-space">
            <div className="soft-button" onClick={this.toggleMenu}>Menu <div className="long-menu-icon"></div></div>
          </div>
        </div>
        <a className="floating-i" target="_blank" href="https://illinois.edu" rel="noopener noreferrer">
          <div className="floating-block-i">
            <ImageBlob name="topFloatingI"/>
          </div>
        </a>  
      </header>
      <div className="spacer mobile"></div>
    </>
  )

}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
