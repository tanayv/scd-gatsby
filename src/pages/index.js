import React from "react"

import Layout from "../components/layout"
import Carousel from "../components/carousel/carousel";
import Hello from "../components/banner/hello/hello";

const IndexPage = () => (
  <Layout>
    <Carousel title="Welcome to the Siebel Center for Design"/>
    <Hello/>
    <h2 className="serif">We're glad you're here</h2>
  </Layout>
)

export default IndexPage
