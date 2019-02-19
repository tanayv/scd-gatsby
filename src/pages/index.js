import React from "react"
import Layout from "../components/layout"
import Carousel from "../components/carousel/carousel";
import Hello from "../components/banner/hello/hello";
import TwoColumnGrid from "../components/grids/two-column/two-column";
import GridBox from "../components/grids/grid-box/grid-box";
import { Helmet } from "react-helmet";

const leftColumnDefinition = {
  paragraphs: [`We are the Siebel Center for Design—SCD for short. 
  We believe in using Human-Centered Design (HCD) as an approach to… `, 
  `We want to show you how design thinking is a process that can be applied to all disciplines. Have a look around and see what’s happening!`]
};

const rightColumnDefinition = {
  options: ["For Students", "For Faculty & Staff", "Industry Opportunities", "Giving", "Join"]
};

const IndexPage = () => (
  <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>SCD / Home</title>
  </Helmet>
  <Layout>
    <Carousel title="Welcome to the Siebel Center for Design"/>
    <Hello/>
    <TwoColumnGrid title="We're glad you're here" left={leftColumnDefinition} right={rightColumnDefinition}></TwoColumnGrid>
    <h2 className="serif">What's going on with us</h2>
    <GridBox tabs={[`Stories`, `Events`]}/>
  </Layout>
  </>
)

export default IndexPage
