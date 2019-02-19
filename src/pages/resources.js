import React from "react"
import Layout from "../components/layout"
import ImageBanner from "./../components/banner/image-banner/image-banner";
import TwoColumnGrid from "../components/grids/two-column/two-column";
import GridBox from "../components/grids/grid-box/grid-box";
import GridBoxDefaultSlide from "../components/grids/grid-box/default-slide";

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


const ResourcePage = () => (
    <Layout>
        <ImageBanner page="resources" title="design resources we’re wild about!"/>
        <TwoColumnGrid title="We like sharing what we love." left={leftColumnDefinition} right={leftColumnDefinition}></TwoColumnGrid>
        <GridBox tabs={[`IDEO`, `AIGA`, `HOW`]}>
            <GridBoxDefaultSlide 
                textTitle={gridBoxSlideDefinition.textTitle}
                paragraphs={gridBoxSlideDefinition.paragraphs}
                links={gridBoxSlideDefinition.links}
                image={gridBoxSlideDefinition.image}
            />
        </GridBox>
    </Layout>
)

export default ResourcePage