import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./grid-box.css"

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

const ImageBlob = (props) => (
  <StaticQuery
    query={graphql`
      query {
        ideo: file(relativePath: { eq: "ideo.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        hq_coming_soon: file(relativePath: { eq: "hq_coming_soon.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        slash_student: file(relativePath: { eq: "slash_student.jpeg" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        coffee_hours: file(relativePath: { eq: "coffee_hours.png" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        about_rachel: file(relativePath: { eq: "about/rachel_swtizky.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        about_siebel: file(relativePath: { eq: "about/thomas_siebel.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        core_team: file(relativePath: { eq: "about/core_team.jpg" }) {
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
    <div className="image-blob" style={
      {
        backgroundImage: `url(${data[props.name].childImageSharp.fluid.src})`
      }
    }>
    </div>
    </>
}
  />
)
export default ImageBlob
