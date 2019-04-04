import React from "react"
import Layout from "../components/layout"
import Carousel from "../components/carousel/carousel";
import Hello from "../components/banner/hello/hello";
import TwoColumnGrid from "../components/grids/two-column/two-column";
import GridBox from "../components/grids/grid-box/grid-box";
import GridList from "../components/grids/grid-list/grid-list";
import LinkDrawer from "../components/link-drawer/link-drawer";
import { Helmet } from "react-helmet";
import ColorBanner from "./../components/banner/color/color";
import ThreeElementGrid from "./../components/grids/three-element-grid/three-element-grid";


/** Import Content */
import { carouselData, threeElementGrid1, threeElementGrid2, linkDrawerOptions, stackedSlides } from "../content/index";

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
    <ColorBanner text="We have lots of cool stuff happening, so have a look around and see what’s up!" theme="teal"/>
    <h2 className="serif">Cool stuff we've done!</h2>
    <ThreeElementGrid data={threeElementGrid1}/>
    
    <h2 className="serif">Ongoing Happenings!</h2>
    <GridList theme={stackedSlides.theme} data={stackedSlides.slides}/>
    <h2 className="serif">Cool stuff coming up...</h2>
    <ThreeElementGrid data={threeElementGrid2}/>
  </Layout>
  </>
)





export default IndexPage
