import React from "react"
import Layout from "../components/layout"
import Carousel from "../components/carousel/carousel";
import Hello from "../components/banner/hello/hello";
import TwoColumnGrid from "../components/grids/two-column/two-column";
import GridBox from "../components/grids/grid-box/grid-box";

const paragraphs = [`We are the Siebel Center for Design—SCD for short. 
We believe in using Human-Centered Design (HCD) as an approach to… `, 
`We want to show you how design thinking is a process that can be applied to all disciplines. Have a look around and see what’s happening!`];


const IndexPage = () => (
  <Layout>
    <Carousel title="Welcome to the Siebel Center for Design"/>
    <Hello/>
    <h2 className="serif">We're glad you're here</h2>
    <TwoColumnGrid paragraphs={paragraphs}></TwoColumnGrid>
    <h2 className="serif">What's going on with us</h2>
    <GridBox/>
  </Layout>
)

export default IndexPage
