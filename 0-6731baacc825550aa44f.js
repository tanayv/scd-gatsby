(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return d}),t.d(a,"StaticQueryContext",function(){return u}),t.d(a,"StaticQuery",function(){return E});var n=t(0),A=t.n(n),r=t(4),c=t.n(r),l=t(142),i=t.n(l);t.d(a,"Link",function(){return i.a}),t.d(a,"withPrefix",function(){return l.withPrefix}),t.d(a,"navigate",function(){return l.navigate}),t.d(a,"push",function(){return l.push}),t.d(a,"replace",function(){return l.replace}),t.d(a,"navigateTo",function(){return l.navigateTo});var s=t(144),o=t.n(s);t.d(a,"PageRenderer",function(){return o.a});var m=t(32);t.d(a,"parsePath",function(){return m.a});var u=A.a.createContext({}),E=function(e){return A.a.createElement(u.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):A.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}E.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},144:function(e,a,t){var n;e.exports=(n=t(148))&&n.default||n},145:function(e,a,t){"use strict";var n=t(0),A=t.n(n),r=t(4),c=t.n(r),l=t(7),i=t.n(l),s=t(51),o=t.n(s),m=t(143),u=(t(149),function(e){var a=e.theme;return A.a.createElement("div",{className:"social-link-row "+a},A.a.createElement("a",{href:"https://www.linkedin.com/showcase/siebel-center-for-design/",rel:"noopener noreferrer",target:"_blank"},A.a.createElement("div",{className:"social-link"},A.a.createElement("i",{className:"fab fa-linkedin"}))),A.a.createElement("a",{href:"https://twitter.com/scdillinois",rel:"noopener noreferrer",target:"_blank"},A.a.createElement("div",{className:"social-link"},A.a.createElement("i",{className:"fab fa-twitter"}))),A.a.createElement("a",{href:"https://www.facebook.com/SCDillinois/",rel:"noopener noreferrer",target:"_blank"},A.a.createElement("div",{className:"social-link"},A.a.createElement("i",{className:"fab fa-facebook-f"}))),A.a.createElement("a",{href:"https://www.instagram.com/scdillinois/",rel:"noopener noreferrer",target:"_blank"},A.a.createElement("div",{className:"social-link"},A.a.createElement("i",{className:"fab fa-instagram"}))),A.a.createElement("a",{href:"https://medium.com/siebel-center-for-design",rel:"noopener noreferrer",target:"_blank"},A.a.createElement("div",{className:"social-link"},A.a.createElement("i",{className:"fab fa-medium-m"}))))});u.propTypes={theme:c.a.string};var E=u,d=(t(150),function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).render=function(){return A.a.createElement("div",{className:"menu-overlay"},A.a.createElement("div",{className:"menu"},A.a.createElement("div",{className:"menu-content-container"},A.a.createElement(m.Link,{to:"/"},A.a.createElement("h1",null,"Siebel Center for Design")),A.a.createElement("hr",null),A.a.createElement(m.Link,{to:"/connect",activeClassName:"active"},A.a.createElement("div",{className:"menu-option"},"Connect")),A.a.createElement(m.Link,{to:"/stories",activeClassName:"active"},A.a.createElement("div",{className:"menu-option"},"Stories")),A.a.createElement(m.Link,{to:"/courses",activeClassName:"active"},A.a.createElement("div",{className:"menu-option"},"Courses")),A.a.createElement(m.Link,{to:"/resources",activeClassName:"active"},A.a.createElement("div",{className:"menu-option"},"Resources")),A.a.createElement(m.Link,{to:"/newsletter",activeClassName:"active"},A.a.createElement("div",{className:"menu-option"},"Newsletter"))),A.a.createElement("div",{className:"menu-close-button"},A.a.createElement("div",{className:"button",onClick:function(e){a.props.onCloseButtonPress(e)}},"✕"))))},a}return i()(a,e),a}(A.a.Component)),p=(t(151),function(e){function a(a){var t;return(t=e.call(this,a)||this).toggleMenu=function(e){e.preventDefault();var a=t.state.showMenu;t.setState({showMenu:!a})},t.spawnMenu=function(){return t.state.showMenu?A.a.createElement(d,{onCloseButtonPress:t.toggleMenu}):""},t.render=function(){return A.a.createElement("main",null,t.spawnMenu(),A.a.createElement("header",{className:"flex"},A.a.createElement("div",{className:"scd-cw-90 scd-fill-height"},A.a.createElement(E,{theme:"blue"}),A.a.createElement("div",{className:"titlespace"},A.a.createElement(m.Link,{to:"/"},A.a.createElement("h1",null,"SCD"))),A.a.createElement("div",{className:"menu-icon-space"},A.a.createElement("div",{className:"soft-button",onClick:t.toggleMenu},"Menu ",A.a.createElement("div",{class:"long-menu-icon"}))))))},t.state={showMenu:!1},t.toggleMenu.bind(o()(o()(t))),t}return i()(a,e),a}(A.a.Component));p.propTypes={siteTitle:c.a.string},p.defaultProps={siteTitle:""};var g=p,f=(t(152),function(){return A.a.createElement("footer",null,A.a.createElement("div",{className:"scd-cw-90"},A.a.createElement("div",{className:"row"},A.a.createElement("div",{className:"cell wide"},A.a.createElement("h1",null,"Siebel Center for Design"),A.a.createElement("h2",null,"University of Illinois at Urbana-Champaign"),A.a.createElement("h2",null,"designcenter@illinois.edu"),A.a.createElement("h2",null,"217–300–9100")),A.a.createElement("div",{className:"cell"},A.a.createElement(m.Link,{to:"/events"},A.a.createElement("h1",null,"Events")),A.a.createElement("p",null,"Upcoming"),A.a.createElement("p",null,"Archives")),A.a.createElement("div",{className:"cell"},A.a.createElement(m.Link,{to:"/events"},A.a.createElement("h1",null,"Stories")),A.a.createElement(m.Link,{to:"/social-innovation-spotlight"},A.a.createElement("p",null,"Social Innovation Spotlight")),A.a.createElement(m.Link,{to:"/collaborators"},A.a.createElement("p",null,"Collaborators")),A.a.createElement(m.Link,{to:"/archives"},A.a.createElement("p",null,"Archives")))),A.a.createElement("div",{className:"row"},A.a.createElement("div",{className:"cell wide"}),A.a.createElement("div",{className:"cell"},A.a.createElement(m.Link,{to:"/resources"},A.a.createElement("h1",null,"Resources")),A.a.createElement(m.Link,{to:"/readings"},A.a.createElement("p",null,"Readings")),A.a.createElement(m.Link,{to:"/articles"},A.a.createElement("p",null,"Articles")),A.a.createElement(m.Link,{to:"/videos"},A.a.createElement("p",null,"Videos")),A.a.createElement(m.Link,{to:"/websites"},A.a.createElement("p",null,"Websites")),A.a.createElement(m.Link,{to:"/companies"},A.a.createElement("p",null,"Companies"))),A.a.createElement("div",{className:"cell"},A.a.createElement(m.Link,{to:"/news"},A.a.createElement("h1",null,"News")),A.a.createElement(m.Link,{to:"/news/subscribe"},A.a.createElement("p",null,"Newsletter Signup")),A.a.createElement(m.Link,{to:"/news/past-editions"},A.a.createElement("p",null,"Archives")))),A.a.createElement("div",{className:"row"},A.a.createElement("div",{className:"cell wide"},A.a.createElement("p",null,"Copyright 2019"),A.a.createElement("p",null,"The Board of Trustees at the University of Illinois"),A.a.createElement("p",null,"Privacy Statement | Engineering Cookie Policy | Cookie Settings")),A.a.createElement("div",{className:"cell wide anchor-right-bottom"},A.a.createElement(E,{theme:"black"})))))}),h=(t(153),function(e){var a=e.children;return A.a.createElement(A.a.Fragment,null,A.a.createElement(g,{siteTitle:"Siebel Center for Design"}),A.a.createElement("div",{class:"scd-ptop-100"},A.a.createElement("main",null,a),A.a.createElement(f,null)))});h.propTypes={children:c.a.node.isRequired};a.a=h},148:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),A=t.n(n),r=t(4),c=t.n(r),l=t(53),i=t(2),s=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return A.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=s},149:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){},152:function(e,a,t){},153:function(e,a,t){},154:function(e,a,t){},155:function(e,a,t){"use strict";var n=t(7),A=t.n(n),r=t(0),c=t.n(r),l=(t(163),function(e){function a(){for(var a,t=arguments.length,n=new Array(t),A=0;A<t;A++)n[A]=arguments[A];return(a=e.call.apply(e,[this].concat(n))||this).generateColumn=function(e){var a;return e.paragraphs?a=e.paragraphs.map(function(e,a){return c.a.createElement("p",{className:"serif",key:a},e)}):e.options&&(a=c.a.createElement("div",{className:"grid-menu"},e.options.map(function(e,a){return c.a.createElement("div",{className:"option",key:a},">",e)}))),a},a.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{class:"scd-cw-75"},c.a.createElement("h2",{className:"serif"},a.props.title),c.a.createElement("div",{className:"two-column-grid"},c.a.createElement("div",{className:"grid-column"},a.generateColumn(a.props.left)),c.a.createElement("div",{className:"grid-column"},a.generateColumn(a.props.right)))))},a}return A()(a,e),a}(c.a.Component));a.a=l},156:function(e,a,t){"use strict";var n=t(7),A=t.n(n),r=t(0),c=t.n(r),l=(t(154),function(e){function a(){for(var a,t=arguments.length,n=new Array(t),A=0;A<t;A++)n[A]=arguments[A];return(a=e.call.apply(e,[this].concat(n))||this).render=function(){return c.a.createElement("div",{className:"grid-box"},c.a.createElement("div",{className:"scd-cw-75"},c.a.createElement("div",{className:"navigation"},a.props.tabs.map(function(e,a){return c.a.createElement("div",{className:"tab",key:a},e)})),a.props.children))},a}return A()(a,e),a}(c.a.Component));a.a=l},159:function(e,a,t){"use strict";var n=t(7),A=t.n(n),r=t(0),c=t.n(r),l=(t(154),t(164),t(165)),i=t(143),s=function(e){return c.a.createElement(i.StaticQuery,{query:"2475229962",render:function(a){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"image-blob",style:{backgroundImage:"url("+a[e.name].childImageSharp.fluid.src+")"}}))},data:l})},o=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),A=0;A<t;A++)n[A]=arguments[A];return(a=e.call.apply(e,[this].concat(n))||this).render=function(){return c.a.createElement("div",{className:"grid-box-default-slide"},c.a.createElement("div",{className:"image-tile resources"},c.a.createElement(s,{name:a.props.image})),c.a.createElement("div",{className:"text-container"},c.a.createElement("h1",null,a.props.textTitle),a.props.paragraphs.map(function(e,a){return c.a.createElement("p",{className:"serif",key:a},e)}),a.props.links.map(function(e,a){return c.a.createElement("a",{href:e.url,key:a},e.display)})))},a}return A()(a,e),a}(c.a.Component);a.a=o},163:function(e,a,t){},165:function(e){e.exports={data:{ideo:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAYABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBAL/xAAXAQADAQAAAAAAAAAAAAAAAAABAgMF/9oADAMBAAIQAxAAAAHfGdk03OUWrDC4Kf/EABsQAAMBAQADAAAAAAAAAAAAAAECAxIREyEj/9oACAEBAAEFAnpgmh6rBlsfoe6nnxtLTmXtVCr/AP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABoRAQABBQAAAAAAAAAAAAAAAAEAAhAREjH/2gAIAQIBAT8BKDBHs2bf/8QAHxAAAgIBBAMAAAAAAAAAAAAAAREAEgIhIjFBMmGB/9oACAEBAAY/AhsJcVMiU4CODEzpr1Nt7V3JTGvitJZr5GMyD37gA4E//8QAHRABAAICAgMAAAAAAAAAAAAAAQARITEQcaGx8P/aAAgBAQABPyFgUkAibgqyAgTEROwsl4r44pPMv3aD4b64CDS1IGj7iZPFICATwUT/2gAMAwEAAgADAAAAEOQgQP/EABcRAQEBAQAAAAAAAAAAAAAAAAEAEBH/2gAIAQMBAT8QWLhn/8QAHBEBAAIBBQAAAAAAAAAAAAAAAQARIUFRYYHw/9oACAECAQE/ELAmnPXt6hBBMYXG1tn/xAAcEAEAAwEAAwEAAAAAAAAAAAABESExAEFRYXH/2gAIAQEAAT8QggQkJYWz46xELUKkbbTnRBASIrrZUIENw+bn5zmIgjKFpbWnnrsFtj7940sKR6mMMbyYS+cMYSB+nRFABM13/9k=",aspectRatio:.8185792349726776,src:"/scd-gatsby/static/e1e43779c4e91d3596e57f11575b0e1a/3496c/ideo.jpg",srcSet:"/scd-gatsby/static/e1e43779c4e91d3596e57f11575b0e1a/703dd/ideo.jpg 246w,\n/scd-gatsby/static/e1e43779c4e91d3596e57f11575b0e1a/5d25b/ideo.jpg 491w,\n/scd-gatsby/static/e1e43779c4e91d3596e57f11575b0e1a/3496c/ideo.jpg 749w",sizes:"(max-width: 749px) 100vw, 749px"}}},hq_coming_soon:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//aAAwDAQACEAMQAAABbVNIdmmiv//EABsQAAIDAAMAAAAAAAAAAAAAAAACAQMSERMi/9oACAEBAAEFAq7EU7UYslofB71wf//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPwHBn//EABgRAQADAQAAAAAAAAAAAAAAAAEAAiEi/9oACAECAQE/AXrBhapk/8QAGxAAAgIDAQAAAAAAAAAAAAAAAAERIQIQMeH/2gAIAQEABj8CtSQulLTxPT//xAAbEAACAwEBAQAAAAAAAAAAAAABEQAhMXFBYf/aAAgBAQABPyFSQsVyGnriHgolAK8ofY2tVjyOcYj/2gAMAwEAAgADAAAAEGw//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAxEf/aAAgBAwEBPxDYRwMv/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/EMFgIJNL/8QAHRABAAICAgMAAAAAAAAAAAAAAREhADFBkVGBwf/aAAgBAQABPxBFoqJY88nOMpUakHSbwYUdVODgla0dvQZMku05UJITDdCVCn45/9k=",aspectRatio:1.293854748603352,src:"/scd-gatsby/static/7ae0bce2afd8c63dc2162327d61f3693/f45e8/hq_coming_soon.jpg",srcSet:"/scd-gatsby/static/7ae0bce2afd8c63dc2162327d61f3693/4d127/hq_coming_soon.jpg 388w,\n/scd-gatsby/static/7ae0bce2afd8c63dc2162327d61f3693/26ce3/hq_coming_soon.jpg 776w,\n/scd-gatsby/static/7ae0bce2afd8c63dc2162327d61f3693/f45e8/hq_coming_soon.jpg 1158w",sizes:"(max-width: 1158px) 100vw, 1158px"}}}}}}}]);
//# sourceMappingURL=0-6731baacc825550aa44f.js.map