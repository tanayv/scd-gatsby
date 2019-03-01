import React from "react"
import { StaticQuery, graphql } from "gatsby"

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

const CarouselSlide = (props) => (
  <StaticQuery
    query={graphql`
      query {
        siebel_carousel: file(relativePath: { eq: "siebel_carousel.png" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        welcome_carousel: file(relativePath: { eq: "welcome_carousel.png" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        contact_carousel: file(relativePath: { eq: "contact_carousel.png" }) {
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
    <div className="overlay" style={
      {
        backgroundImage: `url(${data[props.image].childImageSharp.fluid.src})`
      }
    }>
      {props.children}
    </div>
    </>
}
  />
)
export default CarouselSlide
