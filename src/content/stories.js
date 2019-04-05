import React from "react";

const storybookGridData = [
    {
        "title": "QUAD DAY PAR-TAY!",
        "mainImage": "stories1b",
        "description": `Our first interaction with our campus took place on Quad Day!!

        We wanted to do something different to really grab students’ attention, so instead of a typical Quad Day booth we decided to ditch the standard folding table and opt for a hot pink couch in its place. 
        
        We also started our Slash Student conversation by asking students to tell us what their majors and side-gigs were. Oh, and we had a (root beer) keg. 
        
        This first interactive experience with students allowed us to start explaining the process of design thinking and what SCD is all about. It was a blast!`,
        "titleIndex": 0,
        "descriptionIndex": 5,
        "images": [
            "stories1a",
            "stories1b",
            "stories1c",
            "stories1d",
            "stories1e",
            "stories1e",
        ]
    },
    {
        "title": "DORM ROOM IN AN OFFICE",
        "mainImage": "stories2a",
        "description": `As a double alum of the University of Illinois, Rachel Switzky, Director of SCD, wanted to be reminded of what it was like being a freshman on campus. 

        In order to gain empathy for our first-year students, Rachel decided to build a dorm in her office! 
        
        If you haven’t yet read her article about the experience, check it out.`,
        "titleIndex": 1,
        "descriptionIndex": 2,
        "images": [
            "stories2a",
            "stories2b",
            "stories2b",
            "stories2b",
            "stories2e",
            "stories2e",
        ]
    },
    {
        "title": "POP-UPS",
        "mainImage": "stories3c",
        "description": `During fall semester of 2018 we held three different “Pop-Up Workshops,” which were opportunities for us to teach the design thinking process to students unable to enroll in one of our courses. 

        Our first Pop-Up took place one rainy Saturday morning at the Urbana Market at the Square. Though conditions weren’t ideal, all attendees eagerly participated and went home with many new insights. 
        
        Our second Pop-Up involved interviewing cat owners for an upcoming Cat Hackathon with the College of Veterinary Medicine. Our final Pop-Up was with the Technology Entrepreneur Center (TEC) and was focused on students’ eating habits on campus. We have many more Pop-Up Workshops coming up, so check out our calendar so you don’t miss any!`,
        "titleIndex": 2,
        "descriptionIndex": 3,
        "images": [
            "stories3a",
            "stories3b",
            "stories3c",
            "stories3c",
            "stories3e",
            "stories3f",
        ]
    },
    {
        "title": "CAT HACKATHON",
        "mainImage": "stories4c",
        "description": `In October, SCD got to be a part of a really cool experience with the College of Veterinary Medicine and the company VetMed2.0. 

        This “Cat Hackathon” that Vet Med hosted focused on finding solutions for cats that do their business outside of their litter boxes, an issue which leads to many cats being relinquished to shelters. SCD hosted Pop-Up Workshop sessions where students were able to conduct design research with cat owners. 
        
        The insights gained from these sessions were then presented at the Hackathon for participants to use. 
        
        It was a cat-tastic time!`,
        "titleIndex": 3,
        "descriptionIndex": 0,
        "images": [
            "stories4b",
            "stories4b",
            "stories4c",
            "stories4d",
            "stories4e",
            "stories4f",
        ]
    },
    {
        "title": "HALLOWEEN HOUSE OF HORROR-IBLE FUN!",
        "mainImage": "stories2a",
        "description": "",
        "titleIndex": "",
        "descriptionIndex": "",
        "images": [
            "",
            "",
            "",
            "",
            "",
        ]
    },
    {
        "title": "!! LOVEAPALOOZA !!",
        "mainImage": "stories2a",
        "description": "",
        "titleIndex": "",
        "descriptionIndex": "",
        "images": [
            "",
            "",
            "",
            "",
            "",
        ]
    }
];


const storySnapshotData = [
    {
        heading: "",
        title: "QUAD DAY PAR-TAY!",
        body: <>
                <p className="serif">
                Our first interaction with our campus took place on Quad Day!!
                </p>
                <p className="serif">
                We wanted to do something different to really grab students’ attention, so instead of a typical Quad Day booth we decided to ditch the standard folding table and opt for a hot pink couch in its place.
                </p>
                <p className="serif">
                We also started our Slash Student conversation by asking students to tell us what their majors and side-gigs were. Oh, and we had a (root beer) keg. 
                </p>
                <p className="serif">
                This first interactive experience with students allowed us to start explaining the process of design thinking and what SCD is all about. It was a blast!
                </p>
            </>,
        mainImage: "stories1b",
        images: [
            "stories1b",
            "stories1a",
            "stories1c",
            "stories1d",
            "stories1e",
        ]
  },
  {
        heading: "",
        title: "DORM ROOM IN AN OFFICE",
        body: <>
                <p className="serif">
                As a double alum of the University of Illinois, Rachel Switzky, Director of SCD, wanted to be reminded of what it was like being a freshman on campus. 
                </p>
                <p className="serif">
                In order to gain empathy for our first-year students, Rachel decided to build a dorm in her office! 
                </p>
                <p className="serif">
                In order to gain empathy for our first-year students, Rachel decided to build a dorm in her office! 
                </p>
                <p className="serif">
                If you haven’t yet read her article about the experience, check it out.
                </p>
            </>,
        mainImage: "stories2a",
        images: [
            "stories2a",
            "stories2b",
            "stories2e",
        ]
  },
  {
    heading: "",
    title: "POP-UPS",
    body: <>
            <p className="serif">
            During fall semester of 2018 we held three different “Pop-Up Workshops,” which were opportunities for us to teach the design thinking process to students unable to enroll in one of our courses. 
            </p>
            <p className="serif">
            Our first Pop-Up took place one rainy Saturday morning at the Urbana Market at the Square. Though conditions weren’t ideal, all attendees eagerly participated and went home with many new insights. 
            </p>
            <p className="serif">
            Our second Pop-Up involved interviewing cat owners for an upcoming Cat Hackathon with the College of Veterinary Medicine. Our final Pop-Up was with the Technology Entrepreneur Center (TEC) and was focused on students’ eating habits on campus. We have many more Pop-Up Workshops coming up, so check out our calendar so you don’t miss any!
            </p>
        </>,
    mainImage: "stories3a",
    images: [
        "stories3a",
        "stories3b",
        "stories3c",
        "stories3e",
        "stories3f",
    ]
},
]
  

export {
    storybookGridData,
    storySnapshotData
}