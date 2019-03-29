import React from "react";
import {Link} from "gatsby"

const carouselData = {};


const threeElementGrid1 = {
    "theme": "teal", 
    "intro": <p>We have been hosting a bunch of different programs and events around campus! Check out a few of our favorites below and read about other stuff we’ve done <a href="/stories">here</a>.</p>,
    "elements": [
        {
            "image": "index1",
            "link": "quad-day-party",
            "title": "QUAD-DAY PARTAY!",
            "timeline": "August 2018"
        },
        {
            "image": "index2",
            "link": "the-dorm-room-project",
            "title": "THE DORM ROOM PROJECT",
            "timeline": "September 2018"
        },
        {
            "image": "index3",
            "link": "loveapoaolooza",
            "title": "LOVEAPAOLOOZA",
            "timeline": "Feb 12, 2019"
        }
    ]
}

const stackedSlides = {
  theme: "teal",
  slides: [
    {
      "tabTitle": "#SlashStudent",
      "textTitle": "#SlashStudent",
      "paragraphs": <p className="serif">At SCD, we believe it is important to foster multidisciplinary collaborations. We also understand that our students themselves are multidisciplinary, and are often involved in many things outside of their studies. We wanted to showcase our students in a way that hasn’t been done before; thus, the Slash Student project was born! Slash Student gives us a place to highlight all the things that make students unique and allow them to excel in many ways. Check out our Slash Student album here, and the article written about the project by Darrien Rose on our Medium page. If you or someone you know would like to be highlighted as a Slash Student, please email us and let us know.
      </p>,
      "links": [],
      "image": "slash_student"
    }, 
    {
      "tabTitle": "Social Innovation Spotlight",
      "textTitle": "Social Innovation Spotlight",
      "paragraphs": <><p className="serif">One of our main initiatives at SCD is to broaden the definition of innovation to include innovations within the social sphere. There are so many inspiring individuals and groups affiliated with our university that are creating change with their innovative ideas. We thought highlighting some of these people would be a great way to inspire others to dive deeper into social innovation, so we created the Social Innovation Spotlight. We share a different individual or group’s story each week on our social media pages as well as on our <a href="">Social Innovation Spotlight page</a>. Make sure you check it out!</p><p className="serif">If you or someone you know is working on a socially innovative project that you think should be spotlighted, please email us.</p></>,
      "links": [],
      "image": "hq_coming_soon"
    },
    {
      "tabTitle": "Coffee Hours!",
      "textTitle": "Coffee Hours!",
      "paragraphs": <p className="serif">AMA= "Ask Me Anything," and that's what Rachel, Director of the Siebel Center for Design, wants you to do! Are you still unsure what the Siebel Center for Design does? Do you want to learn more about Design Thinking? Do you think Rachel is an AWESOME Boss Lady and want to have coffee with her? Come out to one of her AMA Coffee Hours! These coffee hours happen every month, so check out our calendar to see when the next one is.</p>,
      "links": [],
      "image": "coffee_hours"
    },
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
    {"title": "For Students", "content": (
      <ul>
        <li><h1>Courses</h1> Interested in taking a class about design thinking? Want to know what classes SCD is already working with? Check out our <Link to="courses">course list!</Link></li>
        <li><h1>Workshops & Events</h1> Unable to take one of our courses due to a packed schedule but still want to learn about design thinking and what SCD has to offer? We hear ya– there are plenty of other opportunities for you to get involved with us! Check out all our upcoming events and workshops <Link to="stories">here!</Link></li>
        <li><h1>Internships</h1> Do you LOVE SCD and want to be an important part of our staff? See our internship opportunities <Link to="connect">here!</Link></li>
      </ul>  
      )},
    {"title": "For Faculty & Staff", "content": (
      <ul>
        <li><h1>Pilot a Course with SCD</h1> Are you a professor on campus? Do feel that design thinking would be a great addition to your course? Let us know! We’re looking to work with as many courses as we can. </li>
        <li><h1>Collaborators Wanted</h1> We’re looking to engage with all parts of campus! If you have an idea for how we can help you, please contact us!</li>
        <li><h1>Events</h1> Want to get a taste of SCD? Join us at one of our events! All are welcome to attend!</li>
      </ul>  )},
    {"title": "For External Partners", "content": (
      <ul>
        <li><h1>Pilot a Course with SCD</h1> Are you a professor on campus? Do feel that design thinking would be a great addition to your course? Let us know! We’re looking to work with as many courses as we can. </li>
        <li><h1>Collaborators Wanted! </h1> We’re looking to engage with all parts of campus! If you have an idea for how we can help you, please contact us!</li>
        <li><h1>Events</h1>Want to get a taste of SCD? Join us at one of our events! All are welcome to attend!</li>
      </ul>  )},
    {"title": "For Everyone Else!", "content": (
      <ul>
        <li><h1>Available Openings</h1> SCD is expanding, and we are looking to hire the most creative and collaborative individuals we can find! If you have a passion for design thinking and human-centered design, be sure to check out our openings and see if you meet our application qualifications! </li>
        
      </ul>  )}
  ]

export {
    carouselData,
    threeElementGrid1,
    stackedSlides,
    threeElementGrid2,
    linkDrawerOptions
}