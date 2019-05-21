import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

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
        siebel_carousel: file(relativePath: { eq: "index/banner_siebel.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        welcome_carousel: file(relativePath: { eq: "index/banner_welcome.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        resources_carousel: file(relativePath: { eq: "index/banner_resources.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        newsletter_carousel: file(relativePath: { eq: "index/banner_newsletter.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        courses_carousel: file(relativePath: { eq: "index/banner_courses.jpg" }) {
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
      <div className="carousel-container">
        {props.children}
      </div>
      
      <Link to={props.link}>
        <div className="underlay" style={
          {
            backgroundImage: `url(${data[props.image].childImageSharp.fluid.src})`
          }
        }>
        </div>
      </Link>
    </>
}
  />
)
export default CarouselSlide
