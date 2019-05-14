import React from "react"
import PropTypes from "prop-types"
import ShallowHeader from "./shallow-header/shallow-header";
import Header from "./header/header";
import Footer from "./footer/footer";
import "./layout.css"

const Layout = (props) => (
    <>
      <ShallowHeader siteTitle="Siebel Center for Design" activePage={props.activePage}/>
      <Header siteTitle="Siebel Center for Design" activePage={props.activePage}></Header>
        <main>{props.children}</main>
      <Footer/>
    </>
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
