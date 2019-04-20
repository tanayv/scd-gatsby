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
  title: "Our Amazing Building",
  body: <>
          <p className="serif">
          Nestled between the Business Instructional Facility, Ikenberry Commons, and the Art + Design building, the Siebel Center for Design building will literally be at a disciplinary crossroads on campus. 
          </p>
          <p className="serif">
          This 60,000 square foot facility will provide program space and serve as the Design Thinking headquarters that brings together individuals from all disciplines, cultures, and realities. The building is estimated to be completed in Spring 2020.
          </p>
          <p className="serif">
          Check out the <a href="https://app.oxblue.com/open/clayco/univofillinois">Live Camera</a> on the construction site.
          </p>
        </>,
  mainImage: "about14",
  images: ["about14", "about15", "about16", "about17", "about18"]
}

const faqConfiguration = [
  {"title": "What does SCD stand for?", "content": (
    <p class="serif">
    SCD stands for the Siebel Center for Design!
    </p> 
    )},
  {"title": "Is the Siebel Center for Design in the College of Engineering?", "content": (
    <p class="serif">
      Nope! We love our Engineering collaborators, but we are not affiliated with any specific college on campus. This allows us to be completely multidisciplinary and work with everyone!
    </p> 
    )},
  {"title": "Is the Siebel Center for Design the same as the Siebel Center for Computer Science?", "content": (
    <p class="serif">
      Nope! Same name, different groups. The Siebel Center for Computer Science is a building located on the North (Engineering) Quad. The Siebel Center for Design building is being built in the space between Fourth and Sixth street and Huff Hall and the Art + Design Building. The Siebel Center for Computer Science IS affiliated with the College of Engineering while SCD is not. :)
    </p> 
    )},
  {"title": "Who is SCD for? Just Art, Business, or Engineering students?", "content": (
    <p class="serif">
      SCD is for EVERYONE! Regardless of your major or interests, we would love to work with everyone that wants to work with us!
    </p> 
    )},
]

const peopleGridData = [
  {
    image: "sticker1", 
    name: "Rachel Switzky",
    role: "Director"
  },
  {
    image: "sticker2", 
    name: "Ava Bilimoria",
    role: "Design Strategist"
  },
  {
    image: "sticker3", 
    name: "Lucas O'Bryan",
    role: "Design Strategist"
  },
  {
    image: "sticker4", 
    name: "Jake Fava",
    role: "Design Strategist"
  },
  {
    image: "sticker5", 
    name: "Rebecca Sweeney",
    role: "Marketing Strategist"
  },
  {
    image: "sticker6", 
    name: "Amanda Henderson",
    role: "Lecturer and Senior Design Strategist"
  },
  {
    image: "sticker7", 
    name: "Rachael Dietkus",
    role: "Senior Design Strategist, Social Impact"
  },
  {
    image: "sticker8", 
    name: "Dr. William Patterson",
    role: "Senior Design Strategist, Social Impact"
  },
  {
    image: "sticker9", 
    name: "Alex Pagano",
    role: "Senior Design Strategist"
  },
  {
    image: "sticker10", 
    name: "Megan McCausland",
    role: "Graphic Designer"
  },
  {
    image: "sticker11", 
    name: "Tanay Vardhan",
    role: "Web Developer"
  },
  {
    image: "sticker12", 
    name: "Robin Woodall",
    role: "Office Administrator"
  },
]


export {
    GridBoxData,
    SiebelSnapshotData,
    BuildingSnapshotData,
    faqConfiguration,
    peopleGridData
}