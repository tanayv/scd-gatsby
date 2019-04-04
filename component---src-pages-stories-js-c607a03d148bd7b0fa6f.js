(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(A,e,a){"use strict";a.r(e);var t=a(0),s=a.n(t),n=a(154),i=a(153),c=a(146),r=(a(163),a(7)),o=a.n(r),d=a(51),l=a.n(d),g=a(159),E=(a(185),function(A){function e(e){var a;return(a=A.call(this,e)||this).generateGridElement=function(A,e){var t;return e===A.titleIndex?(console.log("Title Tile"),t=s.a.createElement("div",{className:"grid-element"},s.a.createElement(g.a,{name:A.images[e],grayscale:"true"}),s.a.createElement("div",{className:"element-contents"},s.a.createElement("div",{className:"title-slide"},s.a.createElement("div",{className:"close-button",onClick:function(A){return a.restoreGrid(A)}},"✕"),s.a.createElement("h1",null,A.title))))):e===A.descriptionIndex?(console.log("Description Tile"),t=s.a.createElement("div",{className:"grid-element"},s.a.createElement("div",{className:"element-contents"},s.a.createElement("p",null,A.description)))):(console.log("Image Tile"),t=s.a.createElement("div",{className:"grid-element"},s.a.createElement(g.a,{name:A.images[e]}))),t},a.transformGrid=function(A,e){A.preventDefault(),console.log("Grid being transformed...");var t=l()(l()(a)),n=s.a.createElement(s.a.Fragment,null," ",a.props.data.map(function(A,a){return t.generateGridElement(e,a)})," ");console.log(n),a.setState({gridContents:n})},a.generateDefaultGrid=function(A){l()(l()(a));return A.map(function(A,e){return s.a.createElement("div",{className:"grid-element default",key:e,onClick:function(e){return a.transformGrid(e,A)}},s.a.createElement("div",{class:"element-contents"},s.a.createElement("h1",null,A.title)),s.a.createElement("div",{className:"overlay"}),s.a.createElement(g.a,{name:A.mainImage}))})},a.restoreGrid=function(A){A.preventDefault(),a.setState({gridContents:a.generateDefaultGrid(a.props.data)})},a.render=function(){return s.a.createElement("div",{className:"storybook-grid"},a.state.gridContents)},a.state={gridContents:a.generateDefaultGrid(e.data)},a}return o()(e,A),e}(s.a.Component)),h=(a(144),[{title:"QUAD DAY PAR-TAY!",mainImage:"stories1b",description:"Our first interaction with our campus took place on Quad Day!!\n\n        We wanted to do something different to really grab students’ attention, so instead of a typical Quad Day booth we decided to ditch the standard folding table and opt for a hot pink couch in its place. \n        \n        We also started our Slash Student conversation by asking students to tell us what their majors and side-gigs were. Oh, and we had a (root beer) keg. \n        \n        This first interactive experience with students allowed us to start explaining the process of design thinking and what SCD is all about. It was a blast!",titleIndex:0,descriptionIndex:5,images:["stories1a","stories1b","stories1c","stories1d","stories1e","stories1e"]},{title:"DORM ROOM IN AN OFFICE",mainImage:"stories2a",description:"As a double alum of the University of Illinois, Rachel Switzky, Director of SCD, wanted to be reminded of what it was like being a freshman on campus. \n\n        In order to gain empathy for our first-year students, Rachel decided to build a dorm in her office! \n        \n        If you haven’t yet read her article about the experience, check it out.",titleIndex:1,descriptionIndex:2,images:["stories2a","stories2b","stories2b","stories2b","stories2e","stories2e"]},{title:"POP-UPS",mainImage:"stories3c",description:"During fall semester of 2018 we held three different “Pop-Up Workshops,” which were opportunities for us to teach the design thinking process to students unable to enroll in one of our courses. \n\n        Our first Pop-Up took place one rainy Saturday morning at the Urbana Market at the Square. Though conditions weren’t ideal, all attendees eagerly participated and went home with many new insights. \n        \n        Our second Pop-Up involved interviewing cat owners for an upcoming Cat Hackathon with the College of Veterinary Medicine. Our final Pop-Up was with the Technology Entrepreneur Center (TEC) and was focused on students’ eating habits on campus. We have many more Pop-Up Workshops coming up, so check out our calendar so you don’t miss any!",titleIndex:2,descriptionIndex:3,images:["stories3a","stories3b","stories3c","stories3c","stories3e","stories3f"]},{title:"CAT HACKATHON",mainImage:"stories4c",description:"In October, SCD got to be a part of a really cool experience with the College of Veterinary Medicine and the company VetMed2.0. \n\n        This “Cat Hackathon” that Vet Med hosted focused on finding solutions for cats that do their business outside of their litter boxes, an issue which leads to many cats being relinquished to shelters. SCD hosted Pop-Up Workshop sessions where students were able to conduct design research with cat owners. \n        \n        The insights gained from these sessions were then presented at the Hackathon for participants to use. \n        \n        It was a cat-tastic time!",titleIndex:3,descriptionIndex:0,images:["stories4b","stories4b","stories4c","stories4d","stories4e","stories4f"]},{title:"HALLOWEEN HOUSE OF HORROR-IBLE FUN!",mainImage:"stories2a",description:"",titleIndex:"",descriptionIndex:"",images:["","","","",""]},{title:"!! LOVEAPALOOZA !!",mainImage:"stories2a",description:"",titleIndex:"",descriptionIndex:"",images:["","","","",""]}]);s.a.createElement("p",{className:"serif"},"At SCD, we believe it is important to foster multidisciplinary collaborations. We also understand that our students themselves are multidisciplinary, and are often involved in many things outside of their studies. We wanted to showcase our students in a way that hasn’t been done before; thus, the Slash Student project was born! Slash Student gives us a place to highlight all the things that make students unique and allow them to excel in many ways. Check out our Slash Student album here, and the article written about the project by Darrien Rose on our Medium page. If you or someone you know would like to be highlighted as a Slash Student, please email us and let us know."),s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:"serif"},"One of our main initiatives at SCD is to broaden the definition of innovation to include innovations within the social sphere. There are so many inspiring individuals and groups affiliated with our university that are creating change with their innovative ideas. We thought highlighting some of these people would be a great way to inspire others to dive deeper into social innovation, so we created the Social Innovation Spotlight. We share a different individual or group’s story each week on our social media pages as well as on our ",s.a.createElement("a",{href:"/stories"},"Social Innovation Spotlight page"),". Make sure you check it out!"),s.a.createElement("p",{className:"serif"},"If you or someone you know is working on a socially innovative project that you think should be spotlighted, please email us.")),s.a.createElement("p",{className:"serif"},'AMA= "Ask Me Anything," and that\'s what Rachel, Director of the Siebel Center for Design, wants you to do! Are you still unsure what the Siebel Center for Design does? Do you want to learn more about Design Thinking? Do you think Rachel is an AWESOME Boss Lady and want to have coffee with her? Come out to one of her AMA Coffee Hours! These coffee hours happen every month, so check out our calendar to see when the next one is.'),e.default=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(n.Helmet,null,s.a.createElement("meta",{charSet:"utf-8"}),s.a.createElement("title",null,"SCD story time!")),s.a.createElement(i.a,null,s.a.createElement(c.a,{page:"stories",title:"stories past, present, and future!"}),s.a.createElement("div",{className:"scd-cw-75"},s.a.createElement("h2",{className:"serif"},"As designers, we are storytellers."),s.a.createElement("h3",{className:"serif"},"Here at SCD, we have a LOT going on! From courses to coffee hours and everything in between, we have many stories to share about our experiences on campus. We thought that, rather than keep our adventures to ourselves, we should have a space where we can share them. Feel free to look around and explore our past, present, and future!\n            "),s.a.createElement(E,{data:h}))))}},146:function(A,e,a){"use strict";var t=a(147),s=a(0),n=a.n(s),i=a(144);a(148);e.a=function(A){return n.a.createElement(i.StaticQuery,{query:"1138115207",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"image-banner",style:{backgroundImage:"url("+e[A.page].childImageSharp.fluid.src+")"}},n.a.createElement("div",{className:"text-line"},A.title)))},data:t})}},147:function(A){A.exports={data:{resources:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAMCBP/aAAwDAQACEAMQAAABjYA05oSP/8QAGBABAAMBAAAAAAAAAAAAAAAAAgADEQH/2gAIAQEAAQUCFWRELiqe/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8BjX//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8Bta//xAAYEAACAwAAAAAAAAAAAAAAAAAAIQEQMf/aAAgBAQAGPwJqKw//xAAbEAABBAMAAAAAAAAAAAAAAAABABFBUSExsf/aAAgBAQABPyEVtFhNUFjGEPv6v//aAAwDAQACAAMAAAAQCA//xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8QOgx//8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/EENj/8QAGhABAAMAAwAAAAAAAAAAAAAAAQARITFRcf/aAAgBAQABPxBES1VVr1ZxGhgKdsqabcspMek//9k=",aspectRatio:2.406015037593985,src:"/scd-gatsby/static/ec7c5ff22886a04380ba2a1cc417cc10/29ac9/resources.jpg",srcSet:"/scd-gatsby/static/ec7c5ff22886a04380ba2a1cc417cc10/91d28/resources.jpg 722w,\n/scd-gatsby/static/ec7c5ff22886a04380ba2a1cc417cc10/c4350/resources.jpg 1444w,\n/scd-gatsby/static/ec7c5ff22886a04380ba2a1cc417cc10/29ac9/resources.jpg 1920w",sizes:"(max-width: 1920px) 100vw, 1920px"}}},connect:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADUUlEQVQ4yyWSXVMadxTG+UTtJJPJKL6kWqkabXRs1IC87S67vO2ygizLi4uAgiCIOGCsmBhtEs20megkM0l7lat+gn6gX/9pL87FORe/c57nPK4fHBXp0GQyK7F0FGO5kcDbSHIvo+DOfet15F4WX2uTaUNivpAgeZTlyU4Ujykzm9HwpFUeajKjEQVXqJnl7LZPuG8zVlD4aTdJcE/HV4yjCZh9soV6YvF4O0G0qfPzQZTVmkrxwsbfSvLYjjGd0hiJCmBAwpVxUlT6VUrnFfSGhVoySIvZ60Obr/0tOtUY128bbLctrEOHwmWT0qCM3UkTzmqMKzJTpspEVGHUL4D9+Bpn/TJ6wWL0aZAVsSVfMHnZzvK2liIih+idNqh0C8yZaSbKHXbOB/RetbBtcfmGxEhQwi1JjAdlXL3YKr/3ypSKOYpFm+ujKt39Ep28ztTTAPNrG+i6Qd7J8mPS4Pu4xRNjk912nX/eD3ByYuYLMSbA46tBXM/1NYpZm8HwN24H+9wND7ltldnPWywGNFQh6cApUM1nmIwZfKekkJMJchWHm2OH5608I0Kq+1n4v3L1tmSc7pDG5SeqpW0GeyWszBbLPpmaU+SZEuNlZ5emgEa2i4zH09gJjdMXQ7a7fVYyOR6ForjXgv8Da3kTo94nXu3Qvbzly7sLFn0SRjTO3eUJ/lSOYXefzzdXfBh2uO5U+djf4/XlCz7c3hEVPj7wyrjXhexvXzaTKma1S7JyQKxY46rf4s3VBR9v3vD10x1/f77jz6sef/R3eHXc5PSwzl/nVW56Jd61csQ1hZlQBE8yylwmiUsLesmIa+z2KYrlcNqu8Gu7RmNvh6M9i3bZFJWguxMRfmV4f+bQrCdYi6lMClvcXgVl02CplmGilMC1Hg5jRWSKdXFl/Zhoegt/ROX+LyHcKwFGFnzcm99gwR9FTpn4M2mmIwlmVJ0xzcAT0oinYsznTGYKOq4Jb4RNTWM3Z+Mx8jwIJ7gv6YwoOu5AjLFVmbCi4tmQebgeZsSnMBtPCWCC2WAEU5LxBsMspg0CuxauRUnBJ8pRJfyKxpyIylJI5dGGKgIbY2JdZmY1LDImMRnUmBYyF5Im85E4HvHVWZHVGbFwWTx3Kp/kX/x8WE/cYIt6AAAAAElFTkSuQmCC",aspectRatio:1.4998441882206295,src:"/scd-gatsby/static/5af82c8816a79674040c5a55e31ffdfb/0670c/connect.png",srcSet:"/scd-gatsby/static/5af82c8816a79674040c5a55e31ffdfb/36882/connect.png 450w,\n/scd-gatsby/static/5af82c8816a79674040c5a55e31ffdfb/66981/connect.png 900w,\n/scd-gatsby/static/5af82c8816a79674040c5a55e31ffdfb/0670c/connect.png 1800w,\n/scd-gatsby/static/5af82c8816a79674040c5a55e31ffdfb/e59af/connect.png 2700w,\n/scd-gatsby/static/5af82c8816a79674040c5a55e31ffdfb/8af71/connect.png 3600w,\n/scd-gatsby/static/5af82c8816a79674040c5a55e31ffdfb/df14b/connect.png 4813w",sizes:"(max-width: 1800px) 100vw, 1800px"}}},stories:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABtY0pyYdP/8QAGhABAAIDAQAAAAAAAAAAAAAAAQACAxESMf/aAAgBAQABBQJFa1N8kr421LZeX//EABcRAQEBAQAAAAAAAAAAAAAAAAEAAgP/2gAIAQMBAT8BCOW7/8QAFhEBAQEAAAAAAAAAAAAAAAAAABJh/9oACAECAQE/AcS//8QAGhAAAgIDAAAAAAAAAAAAAAAAAAEQMSFBYf/aAAgBAQAGPwLRm4Q+Io//xAAbEAEAAgIDAAAAAAAAAAAAAAABABEhMUFxof/aAAgBAQABPyFVR2ZqJlZUeQ9iTNcQoDbKwzsHc//aAAwDAQACAAMAAAAQB9//xAAYEQEAAwEAAAAAAAAAAAAAAAABABEhcf/aAAgBAwEBPxBFpNYksM7P/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAgEBPxBJ0b2H/8QAHBAAAgIDAQEAAAAAAAAAAAAAAREAITFRYXGB/9oACAEBAAE/ED8aybL1qU7IgNgU+QpMY0QhYZrv7FtBFWTDkOCMjyf/2Q==",aspectRatio:1.50486740516952,src:"/scd-gatsby/static/089d7d025773ed8aa7f5f04cc2de22dd/56c2d/banner.jpg",srcSet:"/scd-gatsby/static/089d7d025773ed8aa7f5f04cc2de22dd/54248/banner.jpg 451w,\n/scd-gatsby/static/089d7d025773ed8aa7f5f04cc2de22dd/cb03a/banner.jpg 903w,\n/scd-gatsby/static/089d7d025773ed8aa7f5f04cc2de22dd/56c2d/banner.jpg 1806w,\n/scd-gatsby/static/089d7d025773ed8aa7f5f04cc2de22dd/b0901/banner.jpg 2709w,\n/scd-gatsby/static/089d7d025773ed8aa7f5f04cc2de22dd/3b7ba/banner.jpg 3612w,\n/scd-gatsby/static/089d7d025773ed8aa7f5f04cc2de22dd/17f63/banner.jpg 4483w",sizes:"(max-width: 1806px) 100vw, 1806px"}}},courses:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEEAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB0pVEVwhCf//EABkQAQACAwAAAAAAAAAAAAAAAAIBIgMRIf/aAAgBAQABBQLCbd04viWiulzf/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/ARF//8QAGBEAAgMAAAAAAAAAAAAAAAAAAQIQESH/2gAIAQIBAT8BIasj/8QAHBABAAIBBQAAAAAAAAAAAAAAAQACcRARMTJy/9oACAEBAAY/AthuYZ2X0R41tmf/xAAaEAEAAgMBAAAAAAAAAAAAAAABABEhMUFh/9oACAEBAAE/IVaE6wqzH1QRgXR4RhrrFd5mNJ//2gAMAwEAAgADAAAAEBPv/8QAFxEBAAMAAAAAAAAAAAAAAAAAARARIf/aAAgBAwEBPxCh0j//xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAECAQE/EGYXZv/EABwQAQEAAQUBAAAAAAAAAAAAAAERACExUWGRsf/aAAgBAQABPxA8Yiqw402xGIjTG/DOsGiobR5jVERTGY6THmXXb7n/2Q==",aspectRatio:1.5485003190810467,src:"/scd-gatsby/static/8c0db3fe1e64b845d22c7af3d6ad286c/614db/banner.jpg",srcSet:"/scd-gatsby/static/8c0db3fe1e64b845d22c7af3d6ad286c/eda09/banner.jpg 465w,\n/scd-gatsby/static/8c0db3fe1e64b845d22c7af3d6ad286c/1fd9a/banner.jpg 929w,\n/scd-gatsby/static/8c0db3fe1e64b845d22c7af3d6ad286c/614db/banner.jpg 1858w,\n/scd-gatsby/static/8c0db3fe1e64b845d22c7af3d6ad286c/18639/banner.jpg 2787w,\n/scd-gatsby/static/8c0db3fe1e64b845d22c7af3d6ad286c/c131f/banner.jpg 3716w,\n/scd-gatsby/static/8c0db3fe1e64b845d22c7af3d6ad286c/80017/banner.jpg 4853w",sizes:"(max-width: 1858px) 100vw, 1858px"}}}}}},148:function(A,e,a){},150:function(A,e,a){},152:function(A){A.exports={data:{ideo:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAYABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBAL/xAAXAQADAQAAAAAAAAAAAAAAAAABAgMF/9oADAMBAAIQAxAAAAHfGdk03OUWrDC4Kf/EABsQAAMBAQADAAAAAAAAAAAAAAECAxIREyEj/9oACAEBAAEFAnpgmh6rBlsfoe6nnxtLTmXtVCr/AP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABoRAQABBQAAAAAAAAAAAAAAAAEAAhAREjH/2gAIAQIBAT8BKDBHs2bf/8QAHxAAAgIBBAMAAAAAAAAAAAAAAREAEgIhIjFBMmGB/9oACAEBAAY/AhsJcVMiU4CODEzpr1Nt7V3JTGvitJZr5GMyD37gA4E//8QAHRABAAICAgMAAAAAAAAAAAAAAQARITEQcaGx8P/aAAgBAQABPyFgUkAibgqyAgTEROwsl4r44pPMv3aD4b64CDS1IGj7iZPFICATwUT/2gAMAwEAAgADAAAAEOQgQP/EABcRAQEBAQAAAAAAAAAAAAAAAAEAEBH/2gAIAQMBAT8QWLhn/8QAHBEBAAIBBQAAAAAAAAAAAAAAAQARIUFRYYHw/9oACAECAQE/ELAmnPXt6hBBMYXG1tn/xAAcEAEAAwEAAwEAAAAAAAAAAAABESExAEFRYXH/2gAIAQEAAT8QggQkJYWz46xELUKkbbTnRBASIrrZUIENw+bn5zmIgjKFpbWnnrsFtj7940sKR6mMMbyYS+cMYSB+nRFABM13/9k=",aspectRatio:.8185792349726776,src:"/scd-gatsby/static/e1e43779c4e91d3596e57f11575b0e1a/3496c/ideo.jpg",srcSet:"/scd-gatsby/static/e1e43779c4e91d3596e57f11575b0e1a/703dd/ideo.jpg 246w,\n/scd-gatsby/static/e1e43779c4e91d3596e57f11575b0e1a/5d25b/ideo.jpg 491w,\n/scd-gatsby/static/e1e43779c4e91d3596e57f11575b0e1a/3496c/ideo.jpg 749w",sizes:"(max-width: 749px) 100vw, 749px"}}},hq_coming_soon:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//aAAwDAQACEAMQAAABbVNIdmmiv//EABsQAAIDAAMAAAAAAAAAAAAAAAACAQMSERMi/9oACAEBAAEFAq7EU7UYslofB71wf//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPwHBn//EABgRAQADAQAAAAAAAAAAAAAAAAEAAiEi/9oACAECAQE/AXrBhapk/8QAGxAAAgIDAQAAAAAAAAAAAAAAAAERIQIQMeH/2gAIAQEABj8CtSQulLTxPT//xAAbEAACAwEBAQAAAAAAAAAAAAABEQAhMXFBYf/aAAgBAQABPyFSQsVyGnriHgolAK8ofY2tVjyOcYj/2gAMAwEAAgADAAAAEGw//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAxEf/aAAgBAwEBPxDYRwMv/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/EMFgIJNL/8QAHRABAAICAgMAAAAAAAAAAAAAAREhADFBkVGBwf/aAAgBAQABPxBFoqJY88nOMpUakHSbwYUdVODgla0dvQZMku05UJITDdCVCn45/9k=",aspectRatio:1.293854748603352,src:"/scd-gatsby/static/7ae0bce2afd8c63dc2162327d61f3693/f45e8/hq_coming_soon.jpg",srcSet:"/scd-gatsby/static/7ae0bce2afd8c63dc2162327d61f3693/4d127/hq_coming_soon.jpg 388w,\n/scd-gatsby/static/7ae0bce2afd8c63dc2162327d61f3693/26ce3/hq_coming_soon.jpg 776w,\n/scd-gatsby/static/7ae0bce2afd8c63dc2162327d61f3693/f45e8/hq_coming_soon.jpg 1158w",sizes:"(max-width: 1158px) 100vw, 1158px"}}},slash_student:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBQL/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAwEC/9oADAMBAAIQAxAAAAGuYqnTSZbHMHUqgf/EABoQAQEAAwEBAAAAAAAAAAAAAAECAAMREhP/2gAIAQEAAQUCnYMAMzsrzQ5r619M1PNtPLVX/8QAGREAAQUAAAAAAAAAAAAAAAAAAAECEBEh/9oACAEDAQE/AcQts//EABYRAAMAAAAAAAAAAAAAAAAAAAAQIf/aAAgBAgEBPwEr/8QAHRAAAgIBBQAAAAAAAAAAAAAAAAERIQIQIjFhYv/aAAgBAQAGPwJwei8r0hbmcIwfY4qyXbP/xAAcEAEBAQADAAMAAAAAAAAAAAABEQAhMUFRcYH/2gAIAQEAAT8hgez5N3APp7iAf8aCUGcF5uUYocBl3gs4ncZl9Sk8zJadu//aAAwDAQACAAMAAAAQ1Nj8/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQEfD/2gAIAQMBAT8QRMWd4X//xAAaEQACAgMAAAAAAAAAAAAAAAAAAREhEEHw/9oACAECAQE/ELapEdk1j//EAB0QAQACAgMBAQAAAAAAAAAAAAEAESExQVFxobH/2gAIAQEAAT8QUVYo7HUN6TI5g8nYiqaHkxiwU/AS1EVCtcXBIEGqbX9lOCGz7Mg3KU24itUWm2f/2Q==",aspectRatio:1,src:"/scd-gatsby/static/9c082a2363bfef5d21ab42f3c9edacd4/063af/slash_student.jpeg",srcSet:"/scd-gatsby/static/9c082a2363bfef5d21ab42f3c9edacd4/0fed0/slash_student.jpeg 300w,\n/scd-gatsby/static/9c082a2363bfef5d21ab42f3c9edacd4/8d62f/slash_student.jpeg 600w,\n/scd-gatsby/static/9c082a2363bfef5d21ab42f3c9edacd4/063af/slash_student.jpeg 960w",sizes:"(max-width: 960px) 100vw, 960px"}}},coffee_hours:{childImageSharp:{fluid:{base64:"data:image/png;base64,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",aspectRatio:.8185792349726776,src:"/scd-gatsby/static/b65ab6adfdbeafe80e18388c315975aa/85868/coffee_hours.png",srcSet:"/scd-gatsby/static/b65ab6adfdbeafe80e18388c315975aa/03a27/coffee_hours.png 246w,\n/scd-gatsby/static/b65ab6adfdbeafe80e18388c315975aa/2046f/coffee_hours.png 491w,\n/scd-gatsby/static/b65ab6adfdbeafe80e18388c315975aa/85868/coffee_hours.png 749w",sizes:"(max-width: 749px) 100vw, 749px"}}}}}},163:function(A,e,a){"use strict";var t=a(7),s=a.n(t),n=a(0),i=a.n(n),c=(a(150),a(151),a(152)),r=a(144),o=function(A){return i.a.createElement(r.StaticQuery,{query:"1370686295",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"image-blob",style:{backgroundImage:"url("+e[A.name].childImageSharp.fluid.src+")"}}))},data:c})},d=function(A){function e(){for(var e,a=arguments.length,t=new Array(a),s=0;s<a;s++)t[s]=arguments[s];return(e=A.call.apply(A,[this].concat(t))||this).render=function(){return i.a.createElement("div",{className:"grid-box-default-slide"},i.a.createElement("div",{className:"image-tile resources"},i.a.createElement(o,{name:e.props.image})),i.a.createElement("div",{className:"text-container"},i.a.createElement("h1",null,e.props.textTitle),i.a.createElement("hr",null),e.props.paragraphs))},e}return s()(e,A),e}(i.a.Component),l=a(4),g=a.n(l),E=function(A){function e(e){var a;return(a=A.call(this,e)||this).render=function(){var A=a.props.data?a.props.data.map(function(A,e){return a.state.activeTab===e?i.a.createElement("div",{className:"tab selected",key:e,onClick:function(){a.setState({activeTab:e})}},A.tabTitle):i.a.createElement("div",{className:"tab",key:e,onClick:function(){a.setState({activeTab:e})}},A.tabTitle)}):null,e=a.props.data?i.a.createElement(d,{tabTitle:a.props.data[a.state.activeTab].tabTitle,textTitle:a.props.data[a.state.activeTab].textTitle,paragraphs:a.props.data[a.state.activeTab].paragraphs,image:a.props.data[a.state.activeTab].image}):null,t="grid-box grid-box-theme-"+a.props.theme;return i.a.createElement("div",{className:t},i.a.createElement("div",{className:"scd-cw-75"},i.a.createElement("div",{className:"navigation"},A),e))},a.state={activeTab:0},a}return s()(e,A),e}(i.a.Component);E.propTypes={data:g.a.array};e.a=E},185:function(A,e,a){}}]);
//# sourceMappingURL=component---src-pages-stories-js-c607a03d148bd7b0fa6f.js.map