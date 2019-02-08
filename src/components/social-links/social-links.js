import PropTypes from "prop-types"
import React from "react"
import "./social-links.css";

const SocialLinks = ({ theme }) => (
    <div className={"social-link-row " + theme}>
        <a href="https://www.linkedin.com/showcase/siebel-center-for-design/" rel="noopener noreferrer" target="_blank">
          <div className="social-link">
            <i className="fab fa-linkedin"></i>
          </div>
        </a>
        <a href="https://twitter.com/scdillinois" rel="noopener noreferrer" target="_blank">
          <div className="social-link">
            <i className="fab fa-twitter"></i>
          </div>
        </a>
        <a href="https://www.facebook.com/SCDillinois/" rel="noopener noreferrer" target="_blank">
          <div className="social-link">
            <i className="fab fa-facebook"></i>
          </div>
        </a>
        <a href="https://twitter.com/scdillinois" rel="noopener noreferrer" target="_blank">
          <div className="social-link">
            <i className="fab fa-instagram"></i>
          </div>
        </a>
        <a href="https://medium.com/siebel-center-for-design" rel="noopener noreferrer" target="_blank">
          <div className="social-link">
            <i className="fab fa-medium-m"></i>
          </div>
        </a>
    </div>
)


SocialLinks.propTypes = {
    theme: PropTypes.string,
}

export default SocialLinks