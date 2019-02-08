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
        carousel3: file(relativePath: { eq: "carousel3.jpg" }) {
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
        backgroundImage: `url(${data[props.slideNumber].childImageSharp.fluid.src})`
      }
    }>
      {props.children}
    </div>
    </>
}
  />
)
export default CarouselSlide
