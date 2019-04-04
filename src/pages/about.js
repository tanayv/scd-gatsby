import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import ImageBanner from "./../components/banner/image-banner/image-banner";
import ColorBanner from "./../components/banner/color/color";
import GridBox from "./../components/grids/grid-box/grid-box";
import { GridBoxData } from "./../content/about";

const imageGalleryDefinition = [
    {
        "title": "Web Developer",
        "image": "gt-web-developer"
    },
    {
        "title": "Communication Partner",
        "image": "gt-communication-partner"
    },
    {
        "title": "Development Intern",
        "image": "gt-dev-intern"
    },
    {
        "title": "Design Intern",
        "image": "gt-design-intern"
    }
]

const AboutPage = () => (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>SCD / About</title>
    </Helmet>
    <Layout>
        <ImageBanner page="about" title="all about SCD"/>
        <div className="scd-cw-75">
          <h2 className="serif">What is SCD?</h2>
          <hr className="teal-separator"/>
          <p className="serif">Our mission at the Siebel Center for Design is to foster multidisciplinary collaborations across campus, using design thinking as an approach to promote human-centered design and mandated quick iterations. (SPACE) At SCD, we have a hard-working, collaborative team of individuals that help guide our mission. Though we are waiting for our BRAND NEW building to be build, we are piloting many initiatives in order to bring awareness to what SCD does to campus. </p>
        </div>
        <ColorBanner text="At SCD, we have a hard-working, collaborative team of individuals that help guide our mission. " theme="teal"/>
        <div className="scd-cw-75">
          <h2 className="serif">Who is SCD?</h2>
        </div>
        <GridBox theme={GridBoxData.theme} data={GridBoxData.slides}/>
        <div className="scd-cw-75">
          <h2 className="serif">Where is SCD?</h2>
          <hr className="teal-separator"/>
          <p className="serif">Nestled between the Business Instructional Facility, Ikenberry Commons, and the Art + Design building, the Siebel Center for Design building will literally be at a disciplinary crossroads on campus. This 60,000 square foot facility will provide program space and serve as the Design Thinking headquarters that brings together individuals from all disciplines, cultures, and realities. The building is estimated to be completed in Spring 2020.</p>
        </div>
        </Layout>
    </>
)

export default AboutPage
