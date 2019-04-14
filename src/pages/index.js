import React from "react"
import Layout from "../components/layout"
import Carousel from "../components/carousel/carousel";
import Hello from "../components/banner/hello/hello";
import TwoColumnGrid from "../components/grids/two-column/two-column";
import GridList from "../components/grids/grid-list/grid-list";
import LinkDrawer from "../components/link-drawer/link-drawer";
import { Helmet } from "react-helmet";
import ColorBanner from "./../components/banner/color/color";
import ThreeElementGrid from "./../components/grids/three-element-grid/three-element-grid";


/** Import Content */
import { carouselData, threeElementGrid1, linkDrawerOptions, stackedSlides } from "../content/index";

const rightColumn = 
  <>
    <p className="serif">We are the Siebel Center for Design– SCD for short. We believe in using Design Thinking as an approach to promote Human-Centered Design (HCD) and mandated quick iterations. We also aim to foster multidisciplinary collaborations across campus. Learn more about who we are <a href="/about">here!</a></p>
    <p className="serif"> 
    We want to show you that design is EVERYWHERE– not just in products or art. Design thinking and Human-Centered Design allow you, the designer, to better understand who it is you are designing for, regardless of what it is you may be designing.</p>
  </>;


const IndexPage = () => (
  <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>SCD / Home</title>
  </Helmet>
  <Layout>
    <Carousel data={carouselData}/>
    <Hello/>
    <TwoColumnGrid title="We're glad you're here" left={<LinkDrawer options={linkDrawerOptions}/>} right={rightColumn}></TwoColumnGrid>
    <ColorBanner text="We have lots of cool stuff happening, so have a look around and see what’s up!" theme="teal"/>
    <ThreeElementGrid title={`Cool stuff we've done!`} data={threeElementGrid1}/>
    <GridList title={`Ongoing Happenings!`} theme={stackedSlides.theme} data={stackedSlides.slides}/>
  </Layout>
  </>
)





export default IndexPage
