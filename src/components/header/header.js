import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SocialLinks from "./../social-links/social-links";
import "./header.css"

const Header = ({ siteTitle }) => (
  <main>
    <header>
      <SocialLinks theme="blue"/>
      <div className="titlespace">
        <Link to="/">
          <h1>SCD</h1>
        </Link>
      </div>
      <div className="menu-icon-space">
        Menu <i className="fas fa-bars"></i>
      </div>
    </header>
  </main>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
