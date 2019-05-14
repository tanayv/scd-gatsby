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
        topFloatingI: file(relativePath: { eq: "white-block-I.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        index1: file(relativePath: { eq: "index/three-element-grid-1.jpg" }) {
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
        stories1a: file(relativePath: { eq: "stories/quad-day-party/stories1a.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories1b: file(relativePath: { eq: "stories/quad-day-party/stories1b.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories1c: file(relativePath: { eq: "stories/quad-day-party/stories1c.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories1d: file(relativePath: { eq: "stories/quad-day-party/stories1d.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories1e: file(relativePath: { eq: "stories/quad-day-party/stories1e.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories1f: file(relativePath: { eq: "stories/quad-day-party/stories1f.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories2a: file(relativePath: { eq: "stories/dorm-room-in-an-office/stories2a.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories2b: file(relativePath: { eq: "stories/dorm-room-in-an-office/stories2b.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories2c: file(relativePath: { eq: "stories/dorm-room-in-an-office/stories2c.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories2d: file(relativePath: { eq: "stories/dorm-room-in-an-office/stories2d.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories2e: file(relativePath: { eq: "stories/dorm-room-in-an-office/stories2e.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories3a: file(relativePath: { eq: "stories/pop-ups/stories3a.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories3b: file(relativePath: { eq: "stories/pop-ups/stories3b.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories3c: file(relativePath: { eq: "stories/pop-ups/stories3c.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories3d: file(relativePath: { eq: "stories/pop-ups/1.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories3e: file(relativePath: { eq: "stories/pop-ups/stories3e.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories3f: file(relativePath: { eq: "stories/pop-ups/stories3f.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories4b: file(relativePath: { eq: "stories/cat-hackathon/stories4b.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories4c: file(relativePath: { eq: "stories/cat-hackathon/stories4c.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories4d: file(relativePath: { eq: "stories/cat-hackathon/stories4d.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories4e: file(relativePath: { eq: "stories/cat-hackathon/stories4e.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories4f: file(relativePath: { eq: "stories/cat-hackathon/stories4f.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories5a: file(relativePath: { eq: "stories/halloween/1.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories5b: file(relativePath: { eq: "stories/halloween/2.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories5c: file(relativePath: { eq: "stories/halloween/3.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories5d: file(relativePath: { eq: "stories/halloween/4.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories5e: file(relativePath: { eq: "stories/halloween/5.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories6a: file(relativePath: { eq: "stories/loveapalooza/1.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories6b: file(relativePath: { eq: "stories/loveapalooza/4.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories6c: file(relativePath: { eq: "stories/loveapalooza/3.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories6d: file(relativePath: { eq: "stories/loveapalooza/2.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories6e: file(relativePath: { eq: "stories/loveapalooza/5.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        jobs1: file(relativePath: { eq: "jobs/jobs1.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        jobs2: file(relativePath: { eq: "jobs/jobs2.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        jobs3: file(relativePath: { eq: "jobs/jobs3.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sticker1: file(relativePath: { eq: "about/sticker1.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sticker2: file(relativePath: { eq: "about/sticker2.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sticker3: file(relativePath: { eq: "about/sticker3.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sticker4: file(relativePath: { eq: "about/sticker4.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sticker5: file(relativePath: { eq: "about/sticker5.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sticker6: file(relativePath: { eq: "about/sticker6.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sticker7: file(relativePath: { eq: "about/sticker7.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sticker8: file(relativePath: { eq: "about/sticker8.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sticker9: file(relativePath: { eq: "about/sticker9.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sticker10: file(relativePath: { eq: "about/sticker10.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sticker11: file(relativePath: { eq: "about/sticker11.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sticker12: file(relativePath: { eq: "about/sticker12.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sticker13: file(relativePath: { eq: "about/sticker13.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sticker14: file(relativePath: { eq: "about/sticker14.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sticker15: file(relativePath: { eq: "about/sticker15.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sticker16: file(relativePath: { eq: "about/sticker16.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sticker17: file(relativePath: { eq: "about/sticker17.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about13: file(relativePath: { eq: "about/thomas_siebel.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about14: file(relativePath: { eq: "about/building1.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about15: file(relativePath: { eq: "about/building2.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about16: file(relativePath: { eq: "about/building3.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about17: file(relativePath: { eq: "about/building4.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about18: file(relativePath: { eq: "about/building5.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        connect1: file(relativePath: { eq: "connect/image.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        courses1: file(relativePath: { eq: "courses/courses1.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        courses2: file(relativePath: { eq: "courses/courses2.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        courses3: file(relativePath: { eq: "courses/courses3.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        courses4: file(relativePath: { eq: "courses/courses4.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        courses5: file(relativePath: { eq: "courses/courses5.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        courses6: file(relativePath: { eq: "courses/courses6.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        og_happenings_1: file(relativePath: { eq: "index/rachel_coffee_hour.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        og_happenings_2: file(relativePath: { eq: "index/slashstudent.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        og_happenings_3: file(relativePath: { eq: "index/social_spotlight.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        rachel_switzky: file(relativePath: { eq: "about/rachel_switzky.jpg" }) {
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
