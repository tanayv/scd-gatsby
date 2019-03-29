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

const ImageBlob = (props) => (
  <StaticQuery
    query={graphql`
      query {
        index1: file(relativePath: { eq: "index/three-element-grid-1.png" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        index2: file(relativePath: { eq: "index/three-element-grid-2.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        index3: file(relativePath: { eq: "index/three-element-grid-3.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        index4: file(relativePath: { eq: "index/three-element-grid-4.png" }) {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        index5: file(relativePath: { eq: "index/three-element-grid-5.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        index6: file(relativePath: { eq: "index/three-element-grid-6.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        topFloatingI: file(relativePath: { eq: "white-block-I.png" }) {
          childImageSharp {
            fluid {
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
