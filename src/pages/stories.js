import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import ImageBanner from "../components/banner/image-banner/image-banner";
import GridBox from "../components/grids/grid-box/grid-box";



const StoriesPage = () => (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>SCD / Stories</title>
    </Helmet>
    <Layout>
        <ImageBanner page="stories" title="stories past, present, and future!"/>
        <div className="scd-cw-75">
            <h2 className="serif">As designers, we are storytellers.</h2>
            <h3 className="serif">{`Here at SCD, we have a LOT going on! From courses to coffee hours and everything in between, we have many stories to share about our experiences on campus. We thought that, rather than keep our adventures to ourselves, we should have a space where we can share them. Feel free to look around and explore our past, present, and future!
            `}</h3>
        </div>
        <GridBox theme="red" data={gridBoxSlides}>
        </GridBox>
    </Layout>
    </>
)


const gridBoxSlides = [
  {
    "tabTitle": "#SlashStudent",
    "textTitle": "#SlashStudent",
    "paragraphs": <p className="serif">At SCD, we believe it is important to foster multidisciplinary collaborations. We also understand that our students themselves are multidisciplinary, and are often involved in many things outside of their studies. We wanted to showcase our students in a way that hasn’t been done before; thus, the Slash Student project was born! Slash Student gives us a place to highlight all the things that make students unique and allow them to excel in many ways. Check out our Slash Student album here, and the article written about the project by Darrien Rose on our Medium page. If you or someone you know would like to be highlighted as a Slash Student, please email us and let us know.
    </p>,
    "links": [],
    "image": "slash_student"
  }, 
  {
    "tabTitle": "Social Innovation Spotlight",
    "textTitle": "Social Innovation Spotlight",
    "paragraphs": <><p className="serif">One of our main initiatives at SCD is to broaden the definition of innovation to include innovations within the social sphere. There are so many inspiring individuals and groups affiliated with our university that are creating change with their innovative ideas. We thought highlighting some of these people would be a great way to inspire others to dive deeper into social innovation, so we created the Social Innovation Spotlight. We share a different individual or group’s story each week on our social media pages as well as on our <a href="">Social Innovation Spotlight page</a>. Make sure you check it out!</p><p className="serif">If you or someone you know is working on a socially innovative project that you think should be spotlighted, please email us.</p></>,
    "links": [],
    "image": "hq_coming_soon"
  },
  {
    "tabTitle": "Coffee Hours!",
    "textTitle": "Coffee Hours!",
    "paragraphs": <p className="serif">AMA= "Ask Me Anything," and that's what Rachel, Director of the Siebel Center for Design, wants you to do! Are you still unsure what the Siebel Center for Design does? Do you want to learn more about Design Thinking? Do you think Rachel is an AWESOME Boss Lady and want to have coffee with her? Come out to one of her AMA Coffee Hours! These coffee hours happen every month, so check out our calendar to see when the next one is.</p>,
    "links": [],
    "image": "coffee_hours"
  },
  ]
  

export default StoriesPage
