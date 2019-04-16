import React from "react"
import PropTypes from "prop-types"
import ShallowHeader from "./shallow-header/shallow-header";
import Footer from "./footer/footer";
import "./layout.css"

const Layout = ({ children }) => (
    <>
      <ShallowHeader siteTitle="Siebel Center for Design"/>
        <main>{children}</main>
      <Footer/>
    </>
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
