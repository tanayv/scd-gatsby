import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SocialLinks from "./../social-links/social-links";
import Menu from "./../menu/menu";
import "./header.css"

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
    <main>
      {this.spawnMenu()}
      <header className="flex">
        <div className="scd-cw-90 scd-fill-height">
          <SocialLinks theme="blue"/>
          <div className="titlespace">
            <Link to="/">
              <h1>SCD</h1>
            </Link>
          </div>
          <div className="menu-icon-space">
            <div className="soft-button" onClick={this.toggleMenu}>Menu <div className="long-menu-icon"></div></div>
          </div>
        </div>
        <div className="floating-block-i"></div>
      </header>
    </main>
  )

}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
