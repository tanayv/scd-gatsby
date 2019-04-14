import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import ImageBanner from "../components/banner/image-banner/image-banner";
import GridList from "../components/grids/grid-list/grid-list";

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
            left={<h1 className="serif">Check out some of the classes we’ve been running!</h1>}
            right={<p className="serif">At SCD, we have been piloting several courses that incorporate design thinking and human-centered design into the curriculum. These courses are being prototyped in many different colleges across the campus as we strive to 
            be multidisciplinary and interact with as many departments as possible. Our overall goal is to integrate design thinking throughout the university, from students entering their first year to those in capstone courses during 
            their final semesters.</p>
            }
          />
        
        <h1 className="serif">View some of our Course Prototypes!</h1>
        </div>
        <GridList theme="teal" data={gridListSlides}/>
    </Layout>
    </>
)
  

export default CoursesPage
