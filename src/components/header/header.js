import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <main>
    <header>
      <div class="social-link-row">
        <Link to="">
          <div class="social-link">
            <i class="fab fa-linkedin"></i>
          </div>
        </Link>
        <Link to="">
          <div class="social-link">
            <i class="fab fa-twitter"></i>
          </div>
        </Link>
        <Link to="">
          <div class="social-link">
            <i class="fab fa-facebook"></i>
          </div>
        </Link>
        <Link to="">
          <div class="social-link">
            <i class="fab fa-instagram"></i>
          </div>
        </Link>
        <Link to="">
          <div class="social-link">
            <i class="fab fa-medium-m"></i>
          </div>
        </Link>
      </div>
      <div class="titlespace">
        <h1>SCD</h1>
      </div>
      <div class="menu-icon-space">
        Menu <i class="fas fa-bars"></i>
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
