import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import ImageBanner from "./../components/banner/image-banner/image-banner";
import TwoColumnGrid from "../components/grids/two-column/two-column";
import ImageGallery from "../components/grids/image-gallery/image-gallery";

const leftColumnDefinition = <><p class="serif">Ut wisi enim ad minim veniam, quis nostrud exerci 
    tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p></>;

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

const ConnectPage = () => (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>SCD / Connect</title>
    </Helmet>
    <Layout>
        <ImageBanner page="connect" title="connect with us!"/>
        <TwoColumnGrid title="Join the SCD Squad!" left={leftColumnDefinition} right={leftColumnDefinition}></TwoColumnGrid>
        <ImageGallery data={imageGalleryDefinition}></ImageGallery>
    </Layout>
    </>
)

export default ConnectPage
