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
    <Carousel data={carouselData}/>
    <Hello/>
    <TwoColumnGrid title="We're glad you're here" left={leftColumnDefinition} right={rightColumnDefinition}></TwoColumnGrid>
    <h2 className="serif">What's going on with us</h2>
    <GridBox tabs={[`Stories`, `Events`]}/>
    <h2 className="serif">Something to know about SCD.</h2>
    <GridBox theme="teal" data={gridBoxSlides}>
    </GridBox>
  </Layout>
  </>
)

const gridBoxSlides = [{
  "tabTitle": "Where",
  "textTitle": "HQ Coming Soon",
  "paragraphs": [`Wait a second…what building?? 
  That’s right! Our building is currently under construction!`, `Nestled between the Business Instructional Facility, Ikenberry Commons, and the Art + Design building, the Siebel Center for Design building will literally be at a disciplinary crossroads on campus. This 60,000 square foot facility will provide program space and serve as the Design Thinking headquarters that brings together individuals from all disciplines, cultures, and realities. The building is estimated to be completed in Spring 2020.`],
  "links": [],
  "image": "hq_coming_soon"
}, 
{
  "tabTitle": "What",
  "textTitle": "HQ Coming Soon",
  "paragraphs": [`Wait a second…what building?? 
  That’s right! Our building is currently under construction!`, `Nestled between the Business Instructional Facility, Ikenberry Commons, and the Art + Design building, the Siebel Center for Design building will literally be at a disciplinary crossroads on campus. This 60,000 square foot facility will provide program space and serve as the Design Thinking headquarters that brings together individuals from all disciplines, cultures, and realities. The building is estimated to be completed in Spring 2020.`],
  "links": [],
  "image": "hq_coming_soon"
}, 
]

const carouselData = [
  {
    "image": "siebel_carousel",
    "title": "Meet the Guiding force behind the Siebel Center for Design",
    "link": ""
  },
  {
    "image": "welcome_carousel",
    "title": "Welcome to the Siebel Center for Design",
    "link": ""
  },
  {
    "image": "contact_carousel",
    "title": "We can’t wait to hear from you!",
    "link": ""
  },
]

export default IndexPage
