import React from "react";
import {Link} from "gatsby"

const carouselData = [
  {
    "image": "resources_carousel",
    "title": "We love sharing our inspo... our favorite resources coming soon!",
    "link": "",
    "transparent": "false"
  },
  {
    "image": "newsletter_carousel",
    "title": "Join our Newsletter and get the latest on SCD activities!",
    "link": "",
    "transparent": "false"
  },
  {
    "image": "welcome_carousel",
    "title": "Welcome to the Siebel Center for Design",
    "link": "",
    "transparent": "false"
  },
  {
    "image": "siebel_carousel",
    "title": "Tom Siebel and the Siebel Center for Design",
    "link": "",
    "transparent": "true"
  },
  {
    "image": "courses_carousel",
    "title": "See how we're integrating Design Thinking into courses",
    "link": "",
    "transparent": "false"
  },
]

const threeElementGrid1 = {
    "theme": "teal", 
    "intro": <p className="serif">We have been hosting a bunch of different programs and events around campus! Check out a few of our favorites below and read about other stuff we’ve done <a href="/stories">here</a>.</p>,
    "elements": [
        {
            "image": "index1",
            "link": "quad-day-par-tay",
            "title": "QUAD-DAY PARTAY!",
            "timeline": "August 2018"
        },
        {
            "image": "index2",
            "link": "a-dorm-in-an-office",
            "title": "THE DORM ROOM PROJECT",
            "timeline": "September 2018"
        },
        {
            "image": "index3",
            "link": "loveapalooza",
            "title": "LOVEAPAOLOOZA",
            "timeline": "Feb 12, 2019"
        }
    ]
}

const stackedSlides = {
  theme: "teal",
  intro: <p className="serif">We have some cool ongoing stuff happening too! Check it out below:</p>,
  slides: [
    {
      "textTitle": "Meet Rachel for Coffee!",
      "paragraphs": <><p className="serif">AMA= "Ask Me Anything," and that's what Rachel, Director of the Siebel Center for Design, wants you to do!</p> <p className="serif">Are you still unsure what the Siebel Center for Design does? Do you want to learn more about Design Thinking? Do you think Rachel is an AWESOME Boss Lady and want to have coffee with her?</p> <p className="serif">Come out to one of her AMA Coffee Hours! These coffee hours happen every month, so check out our <a href="https://www.facebook.com/pg/SCDillinois">Facebook page</a> to see when the next one is.</p></>,
      "links": [],
      "image": "og_happenings_1"
    },
    {
      "textTitle": "SCD ❤️ Slash Students!",
      "paragraphs": <><p className="serif">At SCD, we believe it is important to foster multidisciplinary collaborations. We also understand that our students themselves are multidisciplinary, and are often involved in many things outside of their studies.</p> <p className="serif">We wanted to showcase our students in a way that hasn’t been done before; thus, the Slash Student project was born! Slash Student gives us a place to highlight all the things that make students unique and allow them to excel in many ways. Check out our <a href="https://www.facebook.com/pg/SCDillinois/photos/?tab=album&album_id=289840421515103">Slash Student album</a>, and the article written about the project by Darrien Rose on our <a href="https://medium.com/siebel-center-for-design/i-am-a-slash-student-17cbfa4fc1e8">Medium page</a>.</p></>,
      "links": [],
      "image": "og_happenings_2"
    }, 
    {
      "textTitle": "We ❤️ Social Innovators!",
      "paragraphs": <><p className="serif">One of our main initiatives at SCD is to broaden the definition of innovation to include innovations within the social sphere. There are so many inspiring individuals and groups affiliated with our university that are creating change with their innovative ideas, and we wanted to highlight some of them.</p><p className="serif">We created the Social Innovation Spotlight to share a different individual or group’s story each week on our social media pages as well as on our <a href="https://spark.adobe.com/page/xLOTpCHHjIqex/">Social Innovation Spotlight page</a>. Make sure you check it out!</p>
      <p className="serif">If you or someone you know is working on a socially innovative project that you think should be spotlighted, <a href="mailto:designcenter@illinois.edu">please email us</a>.</p></>,
      "links": [],
      "image": "og_happenings_3"
    }
  ]
}

const threeElementGrid2 = {
    "theme": "teal", 
    "intro": <p>We have more fun things coming up! You can find a list of our upcoming events right here.</p>,
    "elements": [
        {
            "image": "index4",
            "link": "what-the-pug",
            "title": "WHAT THE PUG...",
            "timeline": "April 2019"
        },
        {
            "image": "index5",
            "link": "ride-champaign",
            "title": "RIDE CHAMPAIGN",
            "timeline": "Summer 2019"
        },
        {
            "image": "index6",
            "link": "sweet-pop-ups",
            "title": "SWEET POP-UPS",
            "timeline": "September 2019"
        }
    ]
}


const linkDrawerOptions = [
    {"title": "FOR STUDENTS", "content": (
      <ul>
        <li><h1>Courses</h1> Interested in taking a class about design thinking? Want to know what classes SCD is already working with? Check out our <Link to="courses">course list!</Link></li>
        <li><h1>Workshops & Events</h1> Unable to take one of our courses due to a packed schedule but still want to learn about design thinking and what SCD has to offer? We hear ya– there are plenty of other opportunities for you to get involved with us! Read about some of our past events <Link to="stories">here</Link>, and be sure to check out our <a href="https://www.facebook.com/pg/SCDillinois/events/">Facebook page</a> for a list of our upcoming events!</li>
        <li><h1>Internships</h1> Do you LOVE SCD and want to be an important part of our staff? Check out our <Link to="jobs">Jobs</Link> page for internship listings! Our team is growing so if you don't see any opportunities right now, keep checking back!</li>
      </ul>  
      )},
    {"title": "FOR FACULTY & STAFF", "content": (
      <ul>
        <li><h1>Pilot a Course with SCD</h1> Are you a professor on campus? Do feel that design thinking would be a great addition to your course? <a href="mailto:designcenter@illinois.edu">Let us know!</a> We’re looking to work with as many courses as we can. </li>
        <li><h1>Collaborators Wanted</h1> We’re looking to engage with all parts of campus! If you have an idea for how we can help you, please <Link to="connect">contact us!</Link></li>
        <li><h1>Events</h1>Want to get a taste of SCD? Join us at one of our events! Check out our <a href="https://www.facebook.com/pg/SCDillinois/events/">Facebook page</a> to see what we have coming up.</li>
      </ul>  )},
    {
      "title": "FOR EVERYONE ELSE!", "content": (
      <ul>
        <li>We are continually looking for new ways to engage with real-world contexts. if you are interested in sponsoring or being involved with a project, send us an email at <a href="mailto: designcenter@illinois.edu">designcenter@illinois.edu</a>.</li>
        <li>If you would like to connect with Director Rachel Switzky, please email her at <a href="mailto: rswitzky@illinois.edu">rswitzky@illinois.edu</a>.</li>       
        <li>
        For all other requests, questions, comments, concerns, please feel free to be in touch.</li> 
      </ul>  
    )}
  ]

export {
    carouselData,
    threeElementGrid1,
    stackedSlides,
    threeElementGrid2,
    linkDrawerOptions
}