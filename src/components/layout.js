import React from "react"
import PropTypes from "prop-types"

import Header from "./header/header"
import Footer from "./footer/footer";
import "./layout.css"

const Layout = ({ children }) => (
    <>
      <Header siteTitle="Siebel Center for Design" />
      <div class="scd-ptop-100">
        <main>{children}</main>
      <Footer/>
      </div>
    </>
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
