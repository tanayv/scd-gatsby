import React from "react";
import {Link} from "gatsby" 

const GridBoxData = {
    theme: "teal",
    slides: [
      {
        "tabTitle": "INAUGURAL DIRECTOR",
        "textTitle": "Our Inaugural Director",
        "paragraphs": <><p className="serif">Rachel Switzky is the inaugural director of the Siebel Center for Design. Prior to her current appointment, she has been a global design leader with strong operational skills in working with Fortune 100 companies over the past 20 years. 
        </p><p className="serif">As an Executive Director at IDEO, the company who pioneered the concept of design thinking, she helped teams imagine futures and then put them into action, focusing on digital design, emergent technologies and impact at-scale.
        </p></>,
        "links": [],
        "image": "about_rachel"
      }, 
      {
        "tabTitle": "GUIDING FORCE",
        "textTitle": "Guiding Force: Thomas M. Siebel",
        "paragraphs": <><p className="serif">Tom Siebel is the chairman and CEO of C3 IoT, an enterprise PaaS and SaaS software company that enables companies to design, develop, deploy, provision, and operate large-scale IoT applications. C3 IoT applies the power of big data, advanced analytics, social networking, machine learning, and cloud computing to enable the rapid development of IoT SaaS systems.</p><p className="serif">Siebel was the founder, chairman, and CEO of Siebel Systems, one of the world’s leading software companies, that merged with Oracle Corporation in January 2006. Founded in 1993, Siebel Systems rapidly became a leader in application software with more than 8,000 employees in 32 countries, over 4,500 corporate customers, and annual revenue in excess of $2 billion.</p></>,
        "links": [],
        "image": "about_siebel"
      },
      {
        "tabTitle": "Core Team",
        "textTitle": "Our 2018–2019 Core Team",
        "paragraphs": "",
        "links": [],
        "image": "core_team"
      },
    ]
  }

const SiebelSnapshotData = {
  heading: "Guiding Force",
  title: "Thomas M. Siebel",
  body: <>
          <p className="serif">
          Tom Siebel is the chairman and CEO of C3 IoT, an enterprise PaaS and SaaS software company that enables companies to design, develop, deploy, provision, and operate large-scale IoT applications. C3 IoT applies the power of big data, advanced analytics, social networking, machine learning, and cloud computing to enable the rapid development of IoT SaaS systems.
          </p>
          <p className="serif">
          Siebel was the founder, chairman, and CEO of Siebel Systems, one of the world’s leading software companies, that merged with Oracle Corporation in January 2006. Founded in 1993, Siebel Systems rapidly became a leader in application software with more than 8,000 employees in 32 countries, over 4,500 corporate customers, and annual revenue in excess of $2 billion.
          </p>
          <p className="serif">
          Siebel serves on the College of Engineering boards at the University of Illinois and UC Berkeley. He is a director of the Hoover Institution at Stanford University and is a member of the American Academy of Arts and Sciences. Siebel is a graduate of the University of Illinois at Urbana-Champaign, where he received a Bachelor of Arts in History, an M.B.A., and a Master of Science in Computer Science.
          </p>
        </>,
  mainImage: "about13",
  images: []
}

const BuildingSnapshotData = {
  heading: "Where is SCD?",
  title: "Building coming soon!",
  body: <>
          <p className="serif">
          Nestled between the Business Instructional Facility, Ikenberry Commons, and the Art + Design building, the Siebel Center for Design building will literally be at a disciplinary crossroads on campus. 
          </p>
          <p className="serif">
          This 60,000 square foot facility will provide program space and serve as the Design Thinking headquarters that brings together individuals from all disciplines, cultures, and realities. The building is estimated to be completed in Spring 2020.
          </p>
          <p className="serif">
          Check out the <a href="/">Live Camera</a> on the construction site.
          </p>
          <p className="serif">
          <a href="/">View & Download</a> Building Renderings and Blueprints.
          </p>
        </>,
  mainImage: "about14",
  images: ["about14", "about15"]
}

const faqConfiguration = [
  {"title": "What does SCD stand for?", "content": (
    <ul>
      <li><h1>Courses</h1> Interested in taking a class about design thinking? Want to know what classes SCD is already working with? Check out our <Link to="courses">course list!</Link></li>
      <li><h1>Workshops & Events</h1> Unable to take one of our courses due to a packed schedule but still want to learn about design thinking and what SCD has to offer? We hear ya– there are plenty of other opportunities for you to get involved with us! Check out all our upcoming events and workshops <Link to="stories">here!</Link></li>
      <li><h1>Internships</h1> Do you LOVE SCD and want to be an important part of our staff? See our internship opportunities <Link to="connect">here!</Link></li>
    </ul>  
    )},
  {"title": "Is the Siebel Center for Design in the College of Engineering?", "content": (
    <ul>
      <li><h1>Pilot a Course with SCD</h1> Are you a professor on campus? Do feel that design thinking would be a great addition to your course? Let us know! We’re looking to work with as many courses as we can. </li>
      <li><h1>Collaborators Wanted</h1> We’re looking to engage with all parts of campus! If you have an idea for how we can help you, please contact us!</li>
      <li><h1>Events</h1> Want to get a taste of SCD? Join us at one of our events! All are welcome to attend!</li>
    </ul>  )},
  {"title": "Is the Siebel Center for Design the same as the Siebel Center for Computer Science?", "content": (
    <ul>
      <li><h1>Pilot a Course with SCD</h1> Are you a professor on campus? Do feel that design thinking would be a great addition to your course? Let us know! We’re looking to work with as many courses as we can. </li>
      <li><h1>Collaborators Wanted! </h1> We’re looking to engage with all parts of campus! If you have an idea for how we can help you, please contact us!</li>
      <li><h1>Events</h1>Want to get a taste of SCD? Join us at one of our events! All are welcome to attend!</li>
    </ul>  )},
  {"title": "Who is SCD for? Just Art, Business, or Engineering students?", "content": (
    <ul>
      <li><h1>Available Openings</h1> SCD is expanding, and we are looking to hire the most creative and collaborative individuals we can find! If you have a passion for design thinking and human-centered design, be sure to check out our openings and see if you meet our application qualifications! </li>
      
    </ul>  )}
]

const peopleGridData = [
  {
    image: "about1", 
    name: "Ava Bilimoria",
    role: "design associate"
  },
  {
    image: "about1", 
    name: "Rachel Dietkus",
    role: "smart gal"
  },
  {
    image: "about1", 
    name: "Jake Fava",
    role: "design associate"
  },
  {
    image: "about1", 
    name: "Ava Bilimoria",
    role: "design associate"
  },
  {
    image: "about1", 
    name: "Rachel Dietkus",
    role: "smart gal"
  },
  {
    image: "about1", 
    name: "Jake Fava",
    role: "design associate"
  },
  {
    image: "about1", 
    name: "Ava Bilimoria",
    role: "design associate"
  },
  {
    image: "about1", 
    name: "Rachel Dietkus",
    role: "smart gal"
  },
  {
    image: "about1", 
    name: "Jake Fava",
    role: "design associate"
  }
]


export {
    GridBoxData,
    SiebelSnapshotData,
    BuildingSnapshotData,
    faqConfiguration,
    peopleGridData
}