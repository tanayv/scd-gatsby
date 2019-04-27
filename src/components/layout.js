import React from "react"
import PropTypes from "prop-types"
import ShallowHeader from "./shallow-header/shallow-header";
import Header from "./header/header";
import Footer from "./footer/footer";
import "./layout.css"
window.onload = function() {
  console.log("ADDING ACNHORS");
  console.log(document.querySelectorAll('a'));
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    
    anchor.addEventListener('click', function (e) {
        console.log("ANCHOR ADDED");
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
}


const Layout = ({ children }) => (
    <>
      <ShallowHeader siteTitle="Siebel Center for Design"/>
      <Header siteTitle="Siebel Center for Design"></Header>
        <main>{children}</main>
      <Footer/>
    </>
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
