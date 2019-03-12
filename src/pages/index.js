import React from "react"
import Layout from "../components/layout"
import Carousel from "../components/carousel/carousel";
import Hello from "../components/banner/hello/hello";
import TwoColumnGrid from "../components/grids/two-column/two-column";
import GridBox from "../components/grids/grid-box/grid-box";
import LinkDrawer from "../components/link-drawer/link-drawer";
import { Helmet } from "react-helmet";
import {Link} from "gatsby"

const leftColumn = <><p className="serif">We are the Siebel Center for Design—SCD for short. 
  We believe in using Human-Centered Design (HCD) as an approach to… </p><p className="serif"> 
  We want to show you how design thinking is a process that can be applied to all disciplines. Have a look around and see what’s happening!</p></>;


const IndexPage = () => (
  <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>SCD / Home</title>
  </Helmet>
  <Layout>
    <Carousel data={carouselData}/>
    <Hello/>
    <TwoColumnGrid title="We're glad you're here" left={leftColumn} right={<LinkDrawer options={linkDrawerOptions}/>}></TwoColumnGrid>
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
  "paragraphs": <><p className="serif">Wait a second…what building?? 
  That’s right! Our building is currently under construction!</p>, <p className="serif">Nestled between the Business Instructional Facility, Ikenberry Commons, and the Art + Design building, the Siebel Center for Design building will literally be at a disciplinary crossroads on campus. This 60,000 square foot facility will provide program space and serve as the Design Thinking headquarters that brings together individuals from all disciplines, cultures, and realities. The building is estimated to be completed in Spring 2020.</p></>,
  "links": [],
  "image": "hq_coming_soon"
}, 
{
  "tabTitle": "What",
  "textTitle": "What",
  "paragraphs": <><p className="serif">Wait a second…what building?? 
  That’s right! Our building is currently under construction!</p><p className="serif">Nestled between the Business Instructional Facility, Ikenberry Commons, and the Art + Design building, the Siebel Center for Design building will literally be at a disciplinary crossroads on campus. This 60,000 square foot facility will provide program space and serve as the Design Thinking headquarters that brings together individuals from all disciplines, cultures, and realities. The building is estimated to be completed in Spring 2020.</p></>,
  "links": [],
  "image": "hq_coming_soon"
}, 
{
  "tabTitle": "Who",
  "textTitle": "Who",
  "paragraphs": <><p className="serif">Wait a second…what building?? 
  That’s right! Our building is currently under construction!</p><p className="serif">Nestled between the Business Instructional Facility, Ikenberry Commons, and the Art + Design building, the Siebel Center for Design building will literally be at a disciplinary crossroads on campus. This 60,000 square foot facility will provide program space and serve as the Design Thinking headquarters that brings together individuals from all disciplines, cultures, and realities. The building is estimated to be completed in Spring 2020.</p></>,
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

const linkDrawerOptions = [
  {"title": "For Students", "content": (
    <ul>
      <li>Courses <br/> Interested in taking a class about design thinking? Want to know what classes SCD is already working with? Check out our <Link to="courses">course list!</Link></li>
      <li>Workshops & Events <br/> Unable to take one of our courses due to a packed schedule but still want to learn about design thinking and what SCD has to offer? We hear ya– there are plenty of other opportunities for you to get involved with us! Check out all our upcoming events and workshops <Link to="stories">here!</Link></li>
      <li>Internships <br/> Do you LOVE SCD and want to be an important part of our staff? See our internship opportunities <Link to="connect">here!</Link></li>
    </ul>  
    )},
  {"title": "For Faculty & Staff", "content": (
    <ul>
      <li>Pilot a Course with SCD <br/> Are you a professor on campus? Do feel that design thinking would be a great addition to your course? Let us know! We’re looking to work with as many courses as we can. </li>
      <li>Collaborators Wanted! <br/> We’re looking to engage with all parts of campus! If you have an idea for how we can help you, please contact us!</li>
      <li>Events <br/> Want to get a taste of SCD? Join us at one of our events! All are welcome to attend!</li>
    </ul>  )},
  {"title": "Join the team", "content": (
    <ul>
      <li>Available Openings <br/> SCD is expanding, and we are looking to hire the most creative and collaborative individuals we can find! If you have a passion for design thinking and human-centered design, be sure to check out our openings and see if you meet our application qualifications! </li>
      
    </ul>  )}
]

export default IndexPage
