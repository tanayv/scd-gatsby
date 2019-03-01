import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import ImageBanner from "./../components/banner/image-banner/image-banner";
import TwoColumnGrid from "../components/grids/two-column/two-column";

const leftColumnDefinition = {
    paragraphs: [`Ut wisi enim ad minim veniam, quis nostrud exerci 
    tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. `]
};

const gridBoxSlideDefinition = {
    "tabTitle": "IDEO",
    "textTitle": "IDEO",
    "paragraphs": [`Lorem ipsum dolor sit amet, consectetuer adipiscing 
    elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate.`, `Ut wisi enim ad minim veniam, quis nostrud exerci 
    tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.`],
    "links": [{display: "Check them out at https://www.ideo.com.", url: "https://www.ideo.com"}],
    "image": "ideo"
}


const ConnectPage = () => (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>SCD / Connect</title>
    </Helmet>
    <Layout>
        <ImageBanner page="connect" title="connect with us!"/>
        <TwoColumnGrid title="Join the SCD Squad!" left={leftColumnDefinition} right={leftColumnDefinition}></TwoColumnGrid>
    </Layout>
    </>
)

export default ConnectPage