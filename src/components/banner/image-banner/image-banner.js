import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./image-banner.css"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const ImageBanner = (props) => (
  <StaticQuery
    query={graphql`
      query {
        resources: file(relativePath: { eq: "resources.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        connect: file(relativePath: { eq: "connect/banner.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories: file(relativePath: { eq: "stories/banner.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        courses: file(relativePath: { eq: "courses/banner.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about: file(relativePath: { eq: "about/banner.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        jobs: file(relativePath: { eq: "jobs/banner.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data =>
    <>
    <div className="image-banner" style={
      {
        backgroundImage: `url(${data[props.page].childImageSharp.fluid.src})`
      }
    }>
    </div>
    </>
}
  />
)
export default ImageBanner
