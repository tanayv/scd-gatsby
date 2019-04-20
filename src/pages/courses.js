import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import ImageBanner from "../components/banner/image-banner/image-banner";
import GridList from "../components/grids/grid-list/grid-list";
import ImageBlob from "../components/image-blob/image-blob";
import { gridListSlides } from "./../content/courses";

import TextSplit from "./../components/grids/text-split";

const CoursesPage = () => (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>SCD / Courses</title>
    </Helmet>
    <Layout>
        <ImageBanner page="courses" title="courses for students"/>
        <div className="scd-cw-75">
          <TextSplit
            left={<h1 className="serif">We Are Integrating Design Thinking into Courses!</h1>}
            right={<p className="serif">At SCD, we have the opportunity to incorporate design thinking and human-centered design into courses throughout the University. In our first year, we have been prototyping many courses with colleges across campus, which has given us the chance to experiment and explore different ways to engage students (and faculty!) in the design thinking process. Below are some examples of the depth and breadth of our course pilots:</p>
            }
          />
        
        <h1 className="serif">View some of our Course Prototypes!</h1>
        </div>
        <GridList theme="teal" data={gridListSlides}/>
        <div class="standalone-image">
            <ImageBlob name="courses8"/>
        </div>
    </Layout>
    </>
)
  

export default CoursesPage
